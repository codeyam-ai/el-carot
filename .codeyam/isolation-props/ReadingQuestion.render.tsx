'use client';
// Hand-authored renderer for ReadingQuestion's isolation route.
import { ReadingQuestion } from '@/components/ReadingQuestion';
import { QUESTION, frame } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Desktop' | 'Mobile' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  const mobile = scenario === 'Mobile';
  return (
    <div id="codeyam-capture" style={{ ...frame(mobile ? 390 : 600, mobile ? '24px 26px' : 24), textAlign: mobile ? 'center' : undefined }}>
      <ReadingQuestion text={QUESTION} mobile={mobile} />
    </div>
  );
}
