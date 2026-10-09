'use client';
// Hand-authored renderer for CardIdentity's isolation route.
import { CardIdentity } from '@/components/CardIdentity';
import { EN, ES, HERMIT, frame } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Desktop' | 'Mobile' | 'English' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  const mobile = scenario === 'Mobile';
  return (
    <div id="codeyam-capture" style={{ ...frame(mobile ? 390 : 600, 24), textAlign: mobile ? 'center' : undefined }}>
      <CardIdentity card={HERMIT} t={scenario === 'English' ? EN : ES} mobile={mobile} />
    </div>
  );
}
