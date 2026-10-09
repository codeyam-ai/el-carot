'use client';
// Hand-authored renderer for ReadingActionsMobile's isolation route.
import { ReadingActionsMobile } from '@/components/ReadingActionsMobile';
import { ES, frame, noop } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Default' | 'Saving' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  return (
    <div id="codeyam-capture" style={frame(390, '24px 26px')}>
      <ReadingActionsMobile t={ES} savingImage={scenario === 'Saving'} onBack={noop} onShare={noop} onDownload={noop} />
    </div>
  );
}
