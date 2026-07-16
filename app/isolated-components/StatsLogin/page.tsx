import { StatsLogin } from '@/components/StatsLogin';

const scenarios: Record<string, { configured: boolean }> = {
  // The normal password gate an admin sees at /stats.
  Default: { configured: true },
  // STATS_PASSWORD is unset on the server — the gate says so instead of
  // silently rejecting every password.
  Unconfigured: { configured: false },
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ s?: string }>;
}) {
  const { s = 'Default' } = await searchParams;
  const props = scenarios[s];
  if (!props) {
    return <div>Unknown scenario: {s}</div>;
  }
  // StatsLogin owns its own full-screen background and centring.
  return (
    <div id="codeyam-capture">
      <StatsLogin {...props} />
    </div>
  );
}
