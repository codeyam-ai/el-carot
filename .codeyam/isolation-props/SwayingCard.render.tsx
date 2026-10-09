'use client';
// Hand-authored renderer for SwayingCard's isolation route: El Ermitaño face-up.
import { SwayingCard } from '@/components/SwayingCard';
import { HERMIT, frame } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Desktop' | 'Mobile' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  const mobile = scenario === 'Mobile';
  return (
    <div id="codeyam-capture" style={frame(mobile ? 390 : 440, mobile ? '30px 88px 60px' : '30px 50px 70px')}>
      <SwayingCard card={HERMIT} flipped mobile={mobile} />
    </div>
  );
}
