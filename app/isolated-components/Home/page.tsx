import Home from '@/components/Home';
import { CarotProvider, type Lang } from '@/lib/i18n';
import { CAROT_CARDS } from '@/data/cards';

// A fixed trio so the isolated capture is deterministic (the real page randomizes).
const FAN = [CAROT_CARDS[0], CAROT_CARDS[2], CAROT_CARDS[19]];

const scenarios: Record<string, Lang> = {
  // Full Home screen in Spanish.
  Spanish: 'es',
  // Full Home screen in English.
  English: 'en',
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ s?: string }>;
}) {
  const { s = 'Spanish' } = await searchParams;
  const lang = scenarios[s];
  if (!lang) {
    return <div>Unknown scenario: {s}</div>;
  }
  return (
    <div id="codeyam-capture" style={{ width: 390, height: 844, background: 'var(--carot-screen)' }}>
      <CarotProvider initialLang={lang}>
        <Home fan={FAN} />
      </CarotProvider>
    </div>
  );
}
