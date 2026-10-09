import { cardText, type Card, type Lang } from '@/data/cards';

/**
 * Asks `/api/interpret` to read `card` for `question`. Never rejects: a failed
 * request or a malformed reply falls back to the card's written meaning.
 */
export async function fetchInterpretation(
  card: Card,
  question: string,
  lang: Lang,
  fetchImpl: typeof fetch = fetch,
): Promise<string> {
  try {
    const r = await fetchImpl('/api/interpret', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ cardN: card.n, question, lang }),
    });
    const data = await r.json();
    return typeof data?.interpretation === 'string' ? data.interpretation : cardText(card, 'meaning', lang);
  } catch {
    return cardText(card, 'meaning', lang);
  }
}
