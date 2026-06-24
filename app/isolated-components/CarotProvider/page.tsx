import { CarotProvider, type Lang } from '@/lib/i18n';
import { LangToggle } from '@/components/LangToggle';

const scenarios: Record<string, Lang> = {
  // Provider supplying the Spanish context — the toggle reflects ES active.
  Spanish: 'es',
  // Provider supplying the English context — the toggle reflects EN active.
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
    <div id="codeyam-capture" style={{ background: 'var(--carot-screen)', padding: 40 }}>
      <CarotProvider initialLang={lang}>
        <LangToggle />
      </CarotProvider>
    </div>
  );
}
