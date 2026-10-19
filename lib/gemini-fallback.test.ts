import { describe, it, expect, vi } from 'vitest';
import { generateWithFallback, isOverloaded } from './gemini-fallback';

const overloaded = () =>
  new Error('{"error":{"code":503,"message":"This model is currently experiencing high demand.","status":"UNAVAILABLE"}}');
const noSleep = () => Promise.resolve();
const quiet = () => {};

describe('isOverloaded', () => {
  // the SDK's ApiError carries the HTTP status, which is the most reliable signal
  it('recognises an error with status 503', () => {
    expect(isOverloaded(Object.assign(new Error('x'), { status: 503 }))).toBe(true);
  });

  // the exact message Gemini returned in production must count as overload
  it('recognises the 503 JSON body in the message', () => {
    expect(isOverloaded(overloaded())).toBe(true);
  });

  // a bad key or bad request is not worth retrying on the same model
  it('does not treat a 400 as overload', () => {
    expect(isOverloaded(new Error('{"error":{"code":400,"message":"Invalid argument"}}'))).toBe(false);
  });
});

describe('generateWithFallback', () => {
  // the happy path makes exactly one call to the cheapest model
  it('returns the first model text when it succeeds', async () => {
    const generate = vi.fn(async () => 'una lectura');
    const result = await generateWithFallback(['a', 'b'], generate, { sleep: noSleep, log: quiet });
    expect(result).toEqual({ text: 'una lectura', model: 'a' });
    expect(generate).toHaveBeenCalledTimes(1);
  });

  // a brief overload spike is absorbed by one retry on the same model
  it('retries an overloaded model once before moving on', async () => {
    const generate = vi.fn().mockRejectedValueOnce(overloaded()).mockResolvedValueOnce('ok');
    const result = await generateWithFallback(['a', 'b'], generate, { sleep: noSleep, log: quiet });
    expect(result).toEqual({ text: 'ok', model: 'a' });
    expect(generate.mock.calls.map((c) => c[0])).toEqual(['a', 'a']);
  });

  // the production failure: the primary stays saturated, so the backup model answers
  it('falls back to the next model when the first stays overloaded', async () => {
    const generate = vi.fn(async (model: string) => {
      if (model === 'a') throw overloaded();
      return 'respaldo';
    });
    const result = await generateWithFallback(['a', 'b'], generate, { sleep: noSleep, log: quiet });
    expect(result).toEqual({ text: 'respaldo', model: 'b' });
    expect(generate.mock.calls.map((c) => c[0])).toEqual(['a', 'a', 'b']);
  });

  // a non-overload error skips the retry and goes straight to the next model
  it('does not retry a non-overload error', async () => {
    const generate = vi.fn(async (model: string) => {
      if (model === 'a') throw new Error('{"error":{"code":400}}');
      return 'ok';
    });
    await generateWithFallback(['a', 'b'], generate, { sleep: noSleep, log: quiet });
    expect(generate.mock.calls.map((c) => c[0])).toEqual(['a', 'b']);
  });

  // an empty reply is useless to the user, so the next model gets a turn
  it('treats an empty reply as a failure', async () => {
    const generate = vi.fn(async (model: string) => (model === 'a' ? '   ' : 'ok'));
    const result = await generateWithFallback(['a', 'b'], generate, { sleep: noSleep, log: quiet });
    expect(result).toEqual({ text: 'ok', model: 'b' });
  });

  // when everything fails the caller gets null and every failure is logged
  it('returns null and logs each failure when all models fail', async () => {
    const log = vi.fn();
    const generate = vi.fn(async () => {
      throw overloaded();
    });
    const result = await generateWithFallback(['a', 'b'], generate, { sleep: noSleep, log });
    expect(result).toBeNull();
    expect(log).toHaveBeenCalledTimes(4);
  });
});
