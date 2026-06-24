import { CAROT_CARDS, type Card } from '@/data/cards';

/**
 * Pick `count` distinct cards at random for the Home fan illustration.
 *
 * A Fisher–Yates shuffle over the deck indices, then take the first `count`.
 * `count` is clamped to `[0, deck.length]`. The RNG is injectable so the
 * selection is deterministic in tests; production uses Math.random.
 */
export function pickFan(
  count: number,
  deck: Card[] = CAROT_CARDS,
  rng: () => number = Math.random,
): Card[] {
  const n = Math.max(0, Math.min(Math.floor(count), deck.length));
  const idx = deck.map((_, i) => i);
  for (let i = idx.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx.slice(0, n).map((i) => deck[i]);
}
