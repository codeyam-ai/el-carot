import HomeHeader from '@/components/HomeHeader';
import { CarotProvider, type Lang } from '@/lib/i18n';

const scenarios: Record<string, Lang> = {
  // Spanish welcome eyebrow ("¡Bienvenida!").
  Spanish: 'es',
  // English welcome eyebrow ("Welcome!").
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
      style={{ width: 390, background: 'var(--carot-screen)', padding: '0 26px 20px', boxSizing: 'border-box' }}
    >
      <CarotProvider initialLang={lang}>
        <HomeHeader />
      </CarotProvider>
    </div>
  );
}
