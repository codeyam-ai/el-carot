'use client';
// Hand-authored renderer for DownloadIcon's isolation route: the glyph in sage on the screen background.
import { DownloadIcon } from '@/components/DownloadIcon';
import { frame } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Default' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  return (
    <div id="codeyam-capture" style={{ ...frame('auto', 32), color: 'var(--carot-sage-light)', display: 'inline-flex' }}>
      <DownloadIcon size={48} />
    </div>
  );
}
