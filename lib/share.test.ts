import { describe, it, expect } from 'vitest';
import { buildReadingUrl, buildShareText } from './share';
import { CAROT_CARDS } from '@/data/cards';

const cleo = CAROT_CARDS[2]; // Cleopatra — La Sacerdotisa, n:2

describe('buildReadingUrl', () => {
  // the link points at /reading with the card's number, no origin query
  it('builds a direct reading link for the card number', () => {
    expect(buildReadingUrl(cleo, 'https://elcarot.app')).toBe('https://elcarot.app/reading?n=2');
  });

  // a shared link never carries the back-navigation origin
  it('omits the origin query so recipients land clean', () => {
    const url = buildReadingUrl(CAROT_CARDS[0], 'https://elcarot.app');
    expect(url).toBe('https://elcarot.app/reading?n=0');
    expect(url).not.toContain('origin');
  });

  // the base URL host/port is preserved (works on localhost too)
  it('respects the provided base origin', () => {
    expect(buildReadingUrl(cleo, 'http://localhost:3000')).toBe('http://localhost:3000/reading?n=2');
  });
});

describe('buildShareText', () => {
  // ES share text carries the character, arcana, and Spanish quote
  it('includes the character, arcana, and quote in ES', () => {
    const text = buildShareText(cleo, 'es');
    expect(text).toContain('Cleopatra');
    expect(text).toContain('La Sacerdotisa');
    expect(text).toContain(cleo.quote);
  });

  // EN switches to the English quote
  it('uses the English quote in EN', () => {
    const text = buildShareText(cleo, 'en');
    expect(text).toContain(cleo.quote_en);
  });
});
