import { describe, it, expect } from 'vitest';
import { geoFromHeaders, utcDateKey } from './geo';

describe('geoFromHeaders', () => {
  // the three coarse Vercel geo headers are read straight through
  it('reads country, region, and timezone from the Vercel headers', () => {
    const h = new Headers({
      'x-vercel-ip-country': 'AR',
      'x-vercel-ip-country-region': 'C',
      'x-vercel-ip-timezone': 'America/Argentina/Buenos_Aires',
    });
    expect(geoFromHeaders(h)).toEqual({
      country: 'AR',
      region: 'C',
      timezone: 'America/Argentina/Buenos_Aires',
    });
  });

  // off-Vercel (local dev) no geo headers exist — every field must be null, never undefined
  it('returns nulls when the headers are absent', () => {
    expect(geoFromHeaders(new Headers())).toEqual({
      country: null,
      region: null,
      timezone: null,
    });
  });

  // an empty header value must not leak through as an empty string; the privacy
  // contract is "country, region, timezone or null" with no third state
  it('normalises empty header values to null', () => {
    const h = new Headers({ 'x-vercel-ip-country': '', 'x-vercel-ip-timezone': 'UTC' });
    expect(geoFromHeaders(h)).toEqual({ country: null, region: null, timezone: 'UTC' });
  });
});

describe('utcDateKey', () => {
  // the key is the UTC calendar day, which is the identity of "the card of the day"
  it('formats a date as a YYYY-MM-DD UTC key', () => {
    expect(utcDateKey(new Date('2026-07-16T18:22:52Z'))).toBe('2026-07-16');
  });

  // the key must come from UTC, not local time — a late-evening UTC instant still
  // belongs to that UTC day, otherwise two visitors could see different daily cards
  it('uses UTC rather than local time at day boundaries', () => {
    expect(utcDateKey(new Date('2026-07-16T23:59:59Z'))).toBe('2026-07-16');
    expect(utcDateKey(new Date('2026-07-17T00:00:00Z'))).toBe('2026-07-17');
  });

  // every instant within one UTC day collapses to the same key, so the day's card is stable
  it('maps every instant in a UTC day to the same key', () => {
    expect(utcDateKey(new Date('2026-07-16T00:00:00Z'))).toBe(
      utcDateKey(new Date('2026-07-16T12:34:56Z')),
    );
  });
});
