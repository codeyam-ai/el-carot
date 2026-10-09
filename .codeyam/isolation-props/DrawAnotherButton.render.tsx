'use client';
// Hand-authored renderer for DrawAnotherButton's isolation route.
import { DrawAnotherButton } from '@/components/DrawAnotherButton';
import { ES, frame, noop } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Inline' | 'FullWidth' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  const fullWidth = scenario === 'FullWidth';
  return (
    <div id="codeyam-capture" style={frame(fullWidth ? 390 : 'auto', fullWidth ? '24px 26px' : 24)}>
      <DrawAnotherButton label={ES.drawAnother} onClick={noop} fullWidth={fullWidth} />
    </div>
  );
}
