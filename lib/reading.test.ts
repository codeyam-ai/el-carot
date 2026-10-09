import { describe, it, expect } from 'vitest';
import { arcanumLine, navTitleFor, originRoute, readingBody } from './reading';
import { STRINGS } from './i18n';
import { CAROT_CARDS, cardText } from '@/data/cards';

const hermit = CAROT_CARDS[9]; // Confucio — El Ermitaño, rom IX

describe('originRoute', () => {
  // each known origin goes back to the screen the reading was opened from
  it('maps every known origin to its screen', () => {
    expect(originRoute('message')).toBe('/message');
    expect(originRoute('question')).toBe('/question');
    expect(originRoute('gallery')).toBe('/gallery');
    expect(originRoute('home')).toBe('/');
  });

  // an unknown origin from a hand-edited URL falls back to home
  it('falls back to home for an unknown origin', () => {
    expect(originRoute('somewhere')).toBe('/');
  });

  // an empty origin also falls back to home
  it('falls back to home for an empty origin', () => {
    expect(originRoute('')).toBe('/');
  });
});

describe('navTitleFor', () => {
  // the message flow shows its own title
  it('titles the message flow', () => {
    expect(navTitleFor('message', STRINGS.es)).toBe(STRINGS.es.messageTitle);
  });

  // the question flow and the gallery each show their own title
  it('titles the question flow and the gallery', () => {
    expect(navTitleFor('question', STRINGS.en)).toBe(STRINGS.en.questionTitle);
    expect(navTitleFor('gallery', STRINGS.en)).toBe(STRINGS.en.galleryTitle);
  });

  // home and unknown origins read as the card of the day
  it('uses the daily label for home and unknown origins', () => {
    expect(navTitleFor('home', STRINGS.es)).toBe(STRINGS.es.dailyLabel);
    expect(navTitleFor('nope', STRINGS.es)).toBe(STRINGS.es.dailyLabel);
  });
});

describe('arcanumLine', () => {
  // Spanish uses the word Arcano before the roman numeral and the arcana name
  it('builds the Spanish eyebrow', () => {
    expect(arcanumLine(hermit, STRINGS.es)).toBe(`Arcano IX · ${hermit.arcana}`);
  });

  // English uses the word Arcanum
  it('builds the English eyebrow', () => {
    expect(arcanumLine(hermit, STRINGS.en)).toBe(`Arcanum IX · ${hermit.arcana}`);
  });

  // the fool carries its own numeral from the deck data
  it('uses the numeral stored on the card', () => {
    const fool = CAROT_CARDS[0];
    expect(arcanumLine(fool, STRINGS.es)).toBe(`Arcano ${fool.rom} · ${fool.arcana}`);
  });
});

describe('readingBody', () => {
  const base = { card: hermit, lang: 'es' as const, t: STRINGS.es };

  // with no question the body is the written meaning, never pending
  it('shows the written meaning without a question', () => {
    expect(readingBody({ ...base, question: null, interpreting: false, interpretation: null })).toEqual({
      text: cardText(hermit, 'meaning', 'es'),
      pending: false,
    });
  });

  // while the AI reading is in flight the body is the pending message
  it('shows the pending message while interpreting', () => {
    expect(readingBody({ ...base, question: 'Q', interpreting: true, interpretation: null })).toEqual({
      text: STRINGS.es.interpreting,
      pending: true,
    });
  });

  // once it arrives the AI interpretation replaces the meaning
  it('shows the interpretation once it arrives', () => {
    expect(readingBody({ ...base, question: 'Q', interpreting: false, interpretation: 'Respuesta' })).toEqual({
      text: 'Respuesta',
      pending: false,
    });
  });

  // a finished request without an interpretation falls back to the meaning
  it('falls back to the meaning when no interpretation came back', () => {
    expect(readingBody({ ...base, question: 'Q', interpreting: false, interpretation: null }).text).toBe(
      cardText(hermit, 'meaning', 'es'),
    );
  });

  // the fallback meaning follows the reading language
  it('uses the English meaning in English', () => {
    expect(readingBody({ card: hermit, lang: 'en', t: STRINGS.en, question: null, interpreting: false, interpretation: null }).text).toBe(
      cardText(hermit, 'meaning', 'en'),
    );
  });
});
