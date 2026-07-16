import { describe, it, expect } from 'vitest';
import { CAROT_CARDS, cardText, type Card } from './cards';

const cleo = CAROT_CARDS[2]; // Cleopatra — La Sacerdotisa, n:2

describe('cardText', () => {
  // ES is the source language, so it reads the base field verbatim
  it('returns the Spanish meaning and quote in ES', () => {
    expect(cardText(cleo, 'meaning', 'es')).toBe(cleo.meaning);
    expect(cardText(cleo, 'quote', 'es')).toBe(cleo.quote);
  });

  // EN reads the _en variant, which is what makes the language toggle work
  it('returns the English variant in EN', () => {
    expect(cardText(cleo, 'meaning', 'en')).toBe(cleo.meaning_en);
    expect(cardText(cleo, 'quote', 'en')).toBe(cleo.quote_en);
  });

  // a card missing its English translation must fall back to Spanish rather than
  // render an empty reading — the screen always shows text
  it('falls back to the Spanish text when the English variant is missing', () => {
    const partial = { ...cleo, quote_en: '' } as Card;
    expect(cardText(partial, 'quote', 'en')).toBe(cleo.quote);
  });

  // the reading page indexes cards by number, so a bad index must not throw
  it('returns an empty string for a missing card', () => {
    expect(cardText(undefined as unknown as Card, 'meaning', 'es')).toBe('');
  });

  // every one of the 22 arcana must have text in both languages, or some card
  // would render blank in one language
  it('resolves non-empty text for all 22 arcana in both languages', () => {
    expect(CAROT_CARDS).toHaveLength(22);
    for (const c of CAROT_CARDS) {
      for (const lang of ['es', 'en'] as const) {
        expect(cardText(c, 'meaning', lang).length).toBeGreaterThan(0);
        expect(cardText(c, 'quote', lang).length).toBeGreaterThan(0);
      }
    }
  });
});
