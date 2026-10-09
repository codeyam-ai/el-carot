'use client';
// Hand-authored renderer for ReadingDesktop's isolation route: the full desktop
// reading layout — plain, after a question, and as the card of the day.
import { ReadingDesktop } from '@/components/ReadingDesktop';
import { ReadingMobile } from '@/components/ReadingMobile';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { DAILY_DATE, ES, HERMIT, INTERPRETATION, MEANING, QUESTION, frame, noop } from '@/.codeyam/isolation-props/readingFixtures';

export default function Page({ scenario }: { scenario: 'Default' | 'Pregunta' | 'Diaria' }) {
  // Mirror CardReading: below the 820px breakpoint the app renders ReadingMobile,
  // so a phone-width preview shows the reading a phone actually gets instead of
  // the desktop layout squeezed or shrunk into it.
  const isDesktop = useIsDesktop();
  if (!scenario) return <div>Unknown scenario</div>;
  const asked = scenario === 'Pregunta';
  const daily = scenario === 'Diaria';
  const props = {
    card: HERMIT,
    lang: 'es' as const,
    t: ES,
    dailyDate: daily ? DAILY_DATE : null,
    flipped: true,
    question: asked ? QUESTION : null,
    body: { text: asked ? INTERPRETATION : MEANING, pending: false },
    savingImage: false,
    onBack: noop,
    onShare: noop,
    onDownload: noop,
  };
  return (
    <div id="codeyam-capture" style={frame(isDesktop ? '100vw' : 390)}>
      {isDesktop ? (
        <ReadingDesktop {...props} navTitle={asked ? ES.questionTitle : daily ? ES.dailyLabel : ES.messageTitle} />
      ) : (
        <ReadingMobile {...props} />
      )}
    </div>
  );
}
