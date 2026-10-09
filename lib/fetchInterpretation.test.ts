import { describe, it, expect, vi } from 'vitest';
import { fetchInterpretation } from './fetchInterpretation';
import { CAROT_CARDS, cardText } from '@/data/cards';

const hermit = CAROT_CARDS[9];
const reply = (body: unknown) => vi.fn(async () => ({ json: async () => body }) as Response);

describe('fetchInterpretation', () => {
  // the AI interpretation is returned as-is
  it('returns the interpretation from the API', async () => {
    const f = reply({ interpretation: 'Esperá.' });
    expect(await fetchInterpretation(hermit, '¿Salto?', 'es', f)).toBe('Esperá.');
  });

  // the request carries the card number, the question and the language
  it('posts the card number, question and language', async () => {
    const f = reply({ interpretation: 'x' });
    await fetchInterpretation(hermit, '¿Salto?', 'en', f);
    const [url, init] = f.mock.calls[0] as unknown as [string, RequestInit];
    expect(url).toBe('/api/interpret');
    expect(init.method).toBe('POST');
    expect(JSON.parse(String(init.body))).toEqual({ cardN: 9, question: '¿Salto?', lang: 'en' });
  });

  // a reply without a string interpretation falls back to the meaning
  it('falls back to the meaning on a malformed reply', async () => {
    expect(await fetchInterpretation(hermit, 'Q', 'es', reply({ error: 'nope' }))).toBe(cardText(hermit, 'meaning', 'es'));
  });

  // an empty reply body also falls back to the meaning
  it('falls back to the meaning on a null reply', async () => {
    expect(await fetchInterpretation(hermit, 'Q', 'en', reply(null))).toBe(cardText(hermit, 'meaning', 'en'));
  });

  // a network failure never rejects and falls back to the meaning
  it('falls back to the meaning when the request fails', async () => {
    const f = vi.fn(async () => {
      throw new Error('offline');
    });
    expect(await fetchInterpretation(hermit, 'Q', 'es', f as unknown as typeof fetch)).toBe(cardText(hermit, 'meaning', 'es'));
  });
});
