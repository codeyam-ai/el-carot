'use client';
// Hand-authored renderer for ReadingActionLink's isolation route: the share
// link, and the download link dimmed while the image is being saved.
import { ReadingActionLink } from '@/components/ReadingActionLink';
import { ShareIcon } from '@/components/ShareIcon';
import { DownloadIcon } from '@/components/DownloadIcon';
import { ES, frame, noop } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Share' | 'Saving' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  return (
    <div id="codeyam-capture" style={frame('auto', 24)}>
      {scenario === 'Saving' ? (
        <ReadingActionLink icon={<DownloadIcon />} label={ES.download} onClick={noop} disabled />
      ) : (
        <ReadingActionLink icon={<ShareIcon />} label={ES.share} onClick={noop} />
      )}
    </div>
  );
}
