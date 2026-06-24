import HomeActions from '@/components/HomeActions';
import { CarotProvider, type Lang } from '@/lib/i18n';

const scenarios: Record<string, Lang> = {
  // Spanish button labels.
  Spanish: 'es',
  // English button labels.
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
    <div
      id="codeyam-capture"
      style={{ width: 390, background: 'var(--carot-screen)', padding: 26, boxSizing: 'border-box' }}
    >
      <CarotProvider initialLang={lang}>
        <HomeActions />
      </CarotProvider>
    </div>
  );
}
