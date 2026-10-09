'use client';
// Hand-authored renderer for ReadingMobile's isolation route: the full mobile
// reading column — plain, after a question, and as the card of the day.
import { ReadingMobile } from '@/components/ReadingMobile';
import { DAILY_DATE, ES, HERMIT, INTERPRETATION, MEANING, QUESTION, frame, noop } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Default' | 'Pregunta' | 'Diaria' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  const asked = scenario === 'Pregunta';
  return (
    <div id="codeyam-capture" style={frame(390)}>
      <ReadingMobile
        card={HERMIT}
        lang="es"
        t={ES}
        dailyDate={scenario === 'Diaria' ? DAILY_DATE : null}
        flipped
        question={asked ? QUESTION : null}
        body={{ text: asked ? INTERPRETATION : MEANING, pending: false }}
        savingImage={false}
        onBack={noop}
        onShare={noop}
        onDownload={noop}
      />
    </div>
  );
}
