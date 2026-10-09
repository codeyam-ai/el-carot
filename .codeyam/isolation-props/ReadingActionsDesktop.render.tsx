'use client';
// Hand-authored renderer for ReadingActionsDesktop's isolation route.
import { ReadingActionsDesktop } from '@/components/ReadingActionsDesktop';
import { EN, ES, frame, noop } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Default' | 'English' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  return (
    <div id="codeyam-capture" style={frame(680, '0 24px 34px')}>
      <ReadingActionsDesktop t={scenario === 'English' ? EN : ES} savingImage={false} onBack={noop} onShare={noop} onDownload={noop} />
    </div>
  );
}
