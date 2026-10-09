'use client';
// Hand-authored renderer for ReadingToast's isolation route. The toast is
// position:fixed near the bottom, so the frame is a phone-sized screen.
import { ReadingToast } from '@/components/ReadingToast';
import { ES, frame } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Default' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  return (
    <div id="codeyam-capture" style={{ ...frame(390), height: 240 }}>
      <ReadingToast message={ES.copied} />
    </div>
  );
}
