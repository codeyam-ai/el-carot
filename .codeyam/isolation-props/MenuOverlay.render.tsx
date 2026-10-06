// Renderer for this component's isolation route, moved here from the route.
//
// The route owned something its generated replacement has no slot for — state
// seeded from the scenario, state a callback produces, or per-capture setup — so
// the route's module moved here whole, and only its scenario map moved to the
// props module beside this file.
//
// Contract: the default export receives `{ scenario }`, the value the props
// module holds for the scenario being captured (each entry there is
// `{ scenario: <value> }`). The route's one scenario lookup was replaced with
// that prop and everything else moved VERBATIM — so read it: code that still
// reads the URL (`useSearchParams`, `searchParams`) no longer selects anything.
//
// This file is HAND-AUTHORED and is never overwritten. The route that imports
// it is generated and gitignored, so this is where rendering that must survive
// `codeyam-editor editor isolate --all` belongs.
//
// It carries no "use client" directive because the route it came from had
// none: it runs on the server once per capture, so it may be async and await
// its own setup.
import { MenuOverlay } from '@/components/MenuOverlay';
import { MenuProvider } from '@/lib/menu';

export default async function Page({ scenario: isolationScenario, searchParams = Promise.resolve({} as never) }: Partial<{
  searchParams: Promise<{ s?: string }>;
}> & { scenario: number }) {
  const { s = 'Default' } = await searchParams;
  const height = isolationScenario;
  if (!height) {
    return <div>Unknown scenario: {s}</div>;
  }
  // Own MenuProvider so tapping this star doesn't also open the root layout's menu.
  return (
    <div id="codeyam-capture" style={{ position: 'relative', background: 'var(--carot-screen)', width: 390, height, overflow: 'hidden' }}>
      <MenuProvider>
        <MenuOverlay />
      </MenuProvider>
    </div>
  );
}
