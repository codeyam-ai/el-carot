'use client';
// Hand-authored renderer for ReadingOutlineButton's isolation route: the share
// button, and the download button dimmed while the image is being saved.
import { ReadingOutlineButton } from '@/components/ReadingOutlineButton';
import { ShareIcon } from '@/components/ShareIcon';
import { DownloadIcon } from '@/components/DownloadIcon';
import { ES, frame, noop } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Share' | 'Saving' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  return (
    <div id="codeyam-capture" style={frame(200, 16)}>
      {scenario === 'Saving' ? (
        <ReadingOutlineButton icon={<DownloadIcon />} label={ES.downloadShort} onClick={noop} disabled />
      ) : (
        <ReadingOutlineButton icon={<ShareIcon />} label={ES.share} onClick={noop} />
      )}
    </div>
  );
}
