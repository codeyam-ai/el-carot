'use client';
// Hand-authored renderer for CardQuote's isolation route.
import { CardQuote } from '@/components/CardQuote';
import { QUOTE, frame } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Desktop' | 'Mobile' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  const mobile = scenario === 'Mobile';
  return (
    <div id="codeyam-capture" style={frame(mobile ? 390 : 600, mobile ? '24px 26px' : 24)}>
      <CardQuote text={QUOTE} mobile={mobile} />
    </div>
  );
}
