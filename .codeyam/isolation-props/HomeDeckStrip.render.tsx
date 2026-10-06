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
import { HomeDeckStrip } from '@/components/HomeDeckStrip';
import { CAROT_CARDS, type Card } from '@/data/cards';

export default async function Page({ scenario: isolationScenario, searchParams = Promise.resolve({} as never) }: Partial<{
  searchParams: Promise<{ s?: string }>;
}> & { scenario: Card[] }) {
  const { s = 'Default' } = await searchParams;
  const cards = isolationScenario;
  if (!cards) {
    return <div>Unknown scenario: {s}</div>;
  }
  // Full-bleed on the real Home, so the strip fills the Desktop viewport width.
  // flexShrink: 0 stops the isolation layout's 480px desktop column (globals.css
  // `.carot-scroll > :not([data-fullbleed])`) from squeezing it to two cards.
  return (
    <div id="codeyam-capture" style={{ width: '100vw', flexShrink: 0, boxSizing: 'border-box', background: 'var(--carot-screen)', padding: '40px 26px' }}>
      <HomeDeckStrip cards={cards} />
    </div>
  );
}
