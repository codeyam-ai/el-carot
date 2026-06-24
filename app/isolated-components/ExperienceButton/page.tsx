import ExperienceButton, { type ExperienceButtonVariant } from '@/components/ExperienceButton';

const scenarios: Record<string, { variant: ExperienceButtonVariant; label: string }> = {
  // Solid sage block — the primary experience buttons.
  Solid: { variant: 'solid', label: 'Quiero recibir un mensaje' },
  // Outline keyline variant — "Carta del Día".
  Outline: { variant: 'outline', label: 'Carta del Día' },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ s?: string }>;
}) {
  const { s = 'Solid' } = await searchParams;
  const sc = scenarios[s];
  if (!sc) {
    return <div>Unknown scenario: {s}</div>;
  }
  return (
    <div id="codeyam-capture" style={{ background: 'var(--carot-screen)', padding: 26 }}>
      <div style={{ width: 338 }}>
        <ExperienceButton variant={sc.variant}>{sc.label}</ExperienceButton>
      </div>
    </div>
  );
}
