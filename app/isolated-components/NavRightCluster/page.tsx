import { NavRightCluster } from '@/components/NavRightCluster';
import { CarotProvider, type Lang } from '@/lib/i18n';
import { MenuProvider } from '@/lib/menu';

const scenarios: Record<string, Lang> = {
  // Spanish cluster — language toggle (ES active), Instagram, star menu.
  Spanish: 'es',
  // English cluster — the toggle reflects EN active.
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
  // The cluster needs both contexts it consumes: language and the shared menu.
  return (
    <div id="codeyam-capture" style={{ background: 'var(--carot-screen)', padding: 40 }}>
      <CarotProvider initialLang={lang}>
        <MenuProvider>
          <NavRightCluster />
        </MenuProvider>
      </CarotProvider>
    </div>
  );
}
