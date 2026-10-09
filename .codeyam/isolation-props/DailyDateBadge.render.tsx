'use client';
// Hand-authored renderer for DailyDateBadge's isolation route.
import { DailyDateBadge } from '@/components/DailyDateBadge';
import { DAILY_DATE, ES, frame } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Desktop' | 'Mobile' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  const mobile = scenario === 'Mobile';
  return (
    <div id="codeyam-capture" style={frame(mobile ? 390 : 340, 24)}>
      <DailyDateBadge label={ES.dailyLabel} date={DAILY_DATE} mobile={mobile} />
    </div>
  );
}
