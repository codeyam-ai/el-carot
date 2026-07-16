import { HomeTitle } from '@/components/HomeTitle';
import { CarotProvider, type Lang } from '@/lib/i18n';

// NOTE: only one scenario. HomeTitle's sole language-dependent element is the
// welcome eyebrow, which is desktop-only behind `useIsDesktop()` — a hook that
// starts false and resolves in a post-hydration effect. The capture frame is
// taken before that effect lands, so ES and EN render byte-identical wordmarks
// in isolation. A separate 'English' scenario proved nothing and collided; the
// language surface is covered for real by the CarotProvider + LangToggle
// scenarios instead.
const scenarios: Record<string, Lang> = {
  // The home title block: the EL CAROT wordmark on the app's screen background.
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
  return (
    <div id="codeyam-capture" style={{ background: 'var(--carot-screen)', padding: 40 }}>
      <CarotProvider initialLang={lang}>
        <HomeTitle />
      </CarotProvider>
    </div>
  );
}
