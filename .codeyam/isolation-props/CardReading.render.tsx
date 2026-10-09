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
import { CardReading } from '@/components/CardReading';
import { CAROT_CARDS } from '@/data/cards';
import { StubInterpret } from '@/.codeyam/isolation-props/harness';

export default async function Page({ scenario: isolationScenario, searchParams = Promise.resolve({} as never) }: Partial<{
  searchParams: Promise<{ s?: string }>;
}> & { scenario: { cardN?: number; desktop?: boolean; question?: string; interpretation?: string } }) {
  const { s = 'Default' } = await searchParams;
  const scenario = isolationScenario;
  if (!scenario) {
    return <div>Unknown scenario: {s}</div>;
  }
  return (
    <div id="codeyam-capture" style={{ background: 'var(--carot-screen)', width: scenario.desktop ? '100vw' : 390, boxSizing: 'border-box' }}>
      <StubInterpret interpretation={scenario.interpretation ?? ''}>
        <CardReading
          card={CAROT_CARDS[scenario.cardN ?? 0]}
          origin={scenario.question ? 'question' : scenario.desktop ? 'message' : 'gallery'}
          question={scenario.question ?? null}
          instant
        />
      </StubInterpret>
    </div>
  );
}
