// Renderer for this component's isolation route, moved here from the route by
// hand (the migrator could not parse this route's shape). The default export
// receives `{ scenario }`, the value the props module holds for the scenario
// being captured. This file is HAND-AUTHORED and is never overwritten.
import { Section } from '@/app/stats/page';
import { CAROT_CARDS } from '@/data/cards';

const td: React.CSSProperties = {
  padding: '6px 12px',
  color: 'var(--carot-cream-text)',
  borderBottom: '1px solid rgba(175,188,167,.08)',
  verticalAlign: 'top',
};
const th: React.CSSProperties = {
  textAlign: 'left',
  padding: '6px 12px',
  color: 'rgba(175,188,167,.55)',
  fontWeight: 400,
  borderBottom: '1px solid rgba(175,188,167,.16)',
};

const rows = [
  { date: '2026-07-16', cardN: 0 },
  { date: '2026-07-15', cardN: 2 },
  { date: '2026-07-14', cardN: 19 },
];

const SECTIONS: Record<'daily' | 'empty', { title: string; children: React.ReactNode }> = {
  // A populated section, as it appears on the real stats page: a titled table
  // of daily cards.
  daily: {
    title: 'Carta del día',
    children: (
      <>
        <thead>
          <tr>
            <th style={th}>Fecha (UTC)</th>
            <th style={th}>Carta</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.date}>
              <td style={td}>{r.date}</td>
              <td style={td}>{`${CAROT_CARDS[r.cardN].arcana} · ${CAROT_CARDS[r.cardN].name}`}</td>
            </tr>
          ))}
        </tbody>
      </>
    ),
  },
  // The empty state the page renders before anything has been logged.
  empty: {
    title: 'Visitas por país',
    children: (
      <>
        <thead>
          <tr>
            <th style={th}>País</th>
            <th style={th}>Visitas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={td} colSpan={2}>
              Todavía sin registros.
            </td>
          </tr>
        </tbody>
      </>
    ),
  },
};

export default async function Page({ scenario }: { scenario: 'daily' | 'empty' }) {
  const props = SECTIONS[scenario];
  // The stats page hosts Section on a dark screen inside a 1000px column.
  return (
    <div style={{ background: '#202020', padding: '10px 26px 40px' }}>
      <div style={{ width: '100%', maxWidth: 1000 }}>
        <Section {...props} />
      </div>
    </div>
  );
}
