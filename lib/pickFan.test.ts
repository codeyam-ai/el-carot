import { describe, it, expect } from 'vitest';
import { pickFan } from './pickFan';
import { CAROT_CARDS, type Card } from '@/data/cards';

// A tiny stand-in deck so tests don't depend on the real 22-card data.
const deck: Card[] = Array.from({ length: 6 }, (_, i) => ({
  n: i,
  rom: String(i),
  name: `Card ${i}`,
  arcana: `Arcana ${i}`,
  img: `${i}.png`,
  meaning: 'm',
  meaning_en: 'm',
  quote: 'q',
  quote_en: 'q',
}));

describe('pickFan', () => {
  // returns exactly the requested number of cards for a typical count
  it('returns the requested number of cards', () => {
    expect(pickFan(3, deck)).toHaveLength(3);
  });

  // every card returned is distinct (Fisher–Yates never repeats an index)
  it('returns distinct cards with no duplicates', () => {
    const picked = pickFan(6, deck);
    const ids = new Set(picked.map((c) => c.n));
    expect(ids.size).toBe(picked.length);
  });

  // every returned card actually comes from the supplied deck
  it('only returns cards from the deck', () => {
    const picked = pickFan(4, deck);
    for (const c of picked) expect(deck).toContain(c);
  });

  // a count larger than the deck is clamped to the deck size
  it('clamps a count larger than the deck to the deck length', () => {
    expect(pickFan(100, deck)).toHaveLength(deck.length);
  });

  // a count of zero yields an empty fan
  it('returns an empty array for count 0', () => {
    expect(pickFan(0, deck)).toEqual([]);
  });

  // a negative count is treated as zero, not as a wrap-around slice
  it('returns an empty array for a negative count', () => {
    expect(pickFan(-3, deck)).toEqual([]);
  });

  // with a deterministic RNG the selection is reproducible
  it('is deterministic given a fixed RNG', () => {
    const rng = () => 0; // every swap targets index 0
    expect(pickFan(3, deck, rng)).toEqual(pickFan(3, deck, rng));
  });

  // defaults to the real El Carot deck of 22 major arcana
  it('defaults to the full CAROT_CARDS deck', () => {
    expect(pickFan(22)).toHaveLength(22);
    expect(pickFan(3).every((c) => CAROT_CARDS.includes(c))).toBe(true);
  });
});
