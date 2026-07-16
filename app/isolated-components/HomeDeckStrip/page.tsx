import { HomeDeckStrip } from '@/components/HomeDeckStrip';
import { CAROT_CARDS, type Card } from '@/data/cards';

const scenarios: Record<string, Card[]> = {
  // The desktop home illustration: a full-bleed drifting row of face-up cards.
  Default: CAROT_CARDS.slice(0, 8),
  // Boundary: a three-card deck still fills the row, because the list is
  // doubled for the seamless marquee loop.
  ShortDeck: CAROT_CARDS.slice(0, 3),
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ s?: string }>;
}) {
  const { s = 'Default' } = await searchParams;
  const cards = scenarios[s];
  if (!cards) {
    return <div>Unknown scenario: {s}</div>;
  }
  // Full-bleed on the real Home, so the strip fills the Desktop viewport width.
  return (
    <div id="codeyam-capture" style={{ background: 'var(--carot-screen)', padding: '40px 26px' }}>
      <HomeDeckStrip cards={cards} />
    </div>
  );
}
