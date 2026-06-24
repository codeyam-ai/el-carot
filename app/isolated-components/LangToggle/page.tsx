import LangToggle from '@/components/LangToggle';
import { CarotProvider, type Lang } from '@/lib/i18n';

const scenarios: Record<string, Lang> = {
  // ES active.
  Spanish: 'es',
  // EN active.
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
    <div id="codeyam-capture" style={{ background: 'var(--carot-screen)', padding: 26 }}>
      <CarotProvider initialLang={lang}>
        <LangToggle />
      </CarotProvider>
    </div>
  );
}
