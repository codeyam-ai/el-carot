'use client';
// Hand-authored renderer for ReadingTextColumn's isolation route: the desktop
// reading column without and with a question.
import { ReadingTextColumn } from '@/components/ReadingTextColumn';
import { ES, HERMIT, INTERPRETATION, MEANING, QUESTION, frame, noop } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Default' | 'Pregunta' }) {
  if (!scenario) return <div>Unknown scenario</div>;
  const asked = scenario === 'Pregunta';
  return (
    <div id="codeyam-capture" style={frame(680, 40)}>
      <ReadingTextColumn
        card={HERMIT}
        lang="es"
        t={ES}
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
