import CardFan from '@/components/CardFan';
import { CAROT_CARDS, type Card } from '@/data/cards';

const scenarios: Record<string, Card[]> = {
  // The default Home illustration: three fronts fanned and overlapping.
  ThreeCards: [CAROT_CARDS[0], CAROT_CARDS[2], CAROT_CARDS[19]],
  // Boundary: a single card (no fan spread, centred).
  SingleCard: [CAROT_CARDS[13]],
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ s?: string }>;
}) {
  const { s = 'ThreeCards' } = await searchParams;
  const cards = scenarios[s];
  if (!cards) {
    return <div>Unknown scenario: {s}</div>;
  }
  return (
    <div id="codeyam-capture" style={{ background: 'var(--carot-screen)' }}>
      <div
        style={{
          width: 390,
          height: 520,
          display: 'flex',
          flexDirection: 'column',
          padding: '0 26px',
          boxSizing: 'border-box',
        }}
      >
        <CardFan cards={cards} />
      </div>
    </div>
  );
}
