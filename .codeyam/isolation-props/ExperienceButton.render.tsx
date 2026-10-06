// Renderer for this component's isolation route, moved here from the route by
// hand (the migrator could not parse this route's shape). The default export
// receives `{ scenario }`, the value the props module holds for the scenario
// being captured. This file is HAND-AUTHORED and is never overwritten.
import { ExperienceButton } from '@/components/ExperienceButton';
import type { ExperienceButtonVariant } from '@/components/ExperienceButton';

const LABELS: Record<ExperienceButtonVariant, string> = {
  solid: 'Quiero recibir un mensaje',
  outline: 'Carta del Día',
};

export default async function Page({ scenario: variant }: { scenario: ExperienceButtonVariant }) {
  return (
    <div style={{ background: 'var(--carot-screen)', padding: 26 }}>
      <div style={{ width: 338 }}>
        <ExperienceButton variant={variant}>{LABELS[variant]}</ExperienceButton>
      </div>
    </div>
  );
}
