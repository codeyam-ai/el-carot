'use client';
// Hand-authored renderer for ReadingBody's isolation route.
import { ReadingBody } from '@/components/ReadingBody';
import { ES, INTERPRETATION, MEANING, frame } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Desktop' | 'Pending' | 'Mobile' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  const mobile = scenario === 'Mobile';
  const pending = scenario === 'Pending';
  return (
    <div id="codeyam-capture" style={frame(mobile ? 390 : 600, mobile ? '24px 26px' : 24)}>
      <ReadingBody text={pending ? ES.interpreting : mobile ? INTERPRETATION : MEANING} pending={pending} mobile={mobile} />
    </div>
  );
}
