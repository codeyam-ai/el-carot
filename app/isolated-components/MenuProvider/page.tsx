import { MenuProvider } from '@/lib/menu';
import { NavRightCluster } from '@/components/NavRightCluster';
import { CarotProvider, type Lang } from '@/lib/i18n';

const scenarios: Record<string, Lang> = {
  // The provider supplying the shared menu context to a real consumer: the
  // nav cluster's star button reads `toggle` from it.
  Default: 'es',
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ s?: string }>;
}) {
  const { s = 'Default' } = await searchParams;
  const lang = scenarios[s];
  if (!lang) {
    return <div>Unknown scenario: {s}</div>;
  }
  // MenuProvider renders no surface of its own — it is shown through the
  // consumer it feeds, matching how CarotProvider is captured.
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
