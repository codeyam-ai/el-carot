import React from 'react';
import { cookies } from 'next/headers';
import { prisma } from '@/app/lib/prisma';
import { CAROT_CARDS } from '@/data/cards';
import { StatsLogin } from '@/components/StatsLogin';

export const dynamic = 'force-dynamic';

const cream = 'var(--carot-cream-text)';
const sage = 'var(--carot-sage-light)';
const muted = 'rgba(175,188,167,.55)';
const mono = 'var(--font-mono)';

function cardLabel(n: number): string {
  const c = CAROT_CARDS[n];
  return c ? `${c.arcana} · ${c.name}` : `#${n}`;
}
function fmt(d: Date): string {
  return d.toISOString().replace('T', ' ').slice(0, 16) + ' UTC';
}
function place(country: string | null, region: string | null, tz: string | null): string {
  return [country, region].filter(Boolean).join(' / ') + (tz ? ` · ${tz}` : '') || '—';
}

const th: React.CSSProperties = { textAlign: 'left', padding: '6px 12px', color: muted, fontWeight: 400, borderBottom: '1px solid rgba(175,188,167,.16)' };
const td: React.CSSProperties = { padding: '6px 12px', color: cream, borderBottom: '1px solid rgba(175,188,167,.08)', verticalAlign: 'top' };

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginTop: 34 }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 20, color: sage, margin: '0 0 12px' }}>{title}</h2>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: mono, fontSize: 13 }}>{children}</table>
      </div>
    </section>
  );
}

export default async function StatsPage() {
  const configured = process.env.STATS_PASSWORD;
  const pw = (await cookies()).get('carot_stats')?.value;
  if (!configured || pw !== configured) {
    return <StatsLogin configured={!!configured} />;
  }

  const [dailyCards, questions, visits, byCountry, totalVisits, totalQuestions] = await Promise.all([
    prisma.dailyCard.findMany({ orderBy: { date: 'desc' } }),
    prisma.question.findMany({ orderBy: { createdAt: 'desc' } }),
    prisma.visit.findMany({ orderBy: { createdAt: 'desc' }, take: 200 }),
    prisma.visit.groupBy({ by: ['country'], _count: { _all: true }, orderBy: { _count: { country: 'desc' } } }),
    prisma.visit.count(),
    prisma.question.count(),
  ]);

  return (
    <div style={{ minHeight: '100dvh', background: '#202020', color: cream, padding: '40px 26px 80px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 34, color: sage, margin: 0 }}>El Carot · Stats</h1>
        <p style={{ fontFamily: mono, fontSize: 13, color: muted, marginTop: 8 }}>
          {totalVisits} visitas · {totalQuestions} preguntas · geo gruesa (país / región / timezone), sin IP ni ubicación precisa
        </p>

        <Section title="Carta del día">
          <thead><tr><th style={th}>Fecha (UTC)</th><th style={th}>Carta</th></tr></thead>
          <tbody>
            {dailyCards.length === 0 && <tr><td style={td} colSpan={2}>Todavía sin registros.</td></tr>}
            {dailyCards.map((d) => (
              <tr key={d.id}><td style={td}>{d.date}</td><td style={td}>{cardLabel(d.cardN)}</td></tr>
            ))}
          </tbody>
        </Section>

        <Section title="Visitas por país">
          <thead><tr><th style={th}>País</th><th style={th}>Visitas</th></tr></thead>
          <tbody>
            {byCountry.length === 0 && <tr><td style={td} colSpan={2}>Todavía sin registros.</td></tr>}
            {byCountry.map((r) => (
              <tr key={r.country ?? 'unknown'}><td style={td}>{r.country ?? '—'}</td><td style={td}>{r._count._all}</td></tr>
            ))}
          </tbody>
        </Section>

        <Section title={`Preguntas (${questions.length})`}>
          <thead><tr><th style={th}>Cuándo</th><th style={th}>Pregunta</th><th style={th}>Carta</th><th style={th}>Idioma</th><th style={th}>Fuente</th><th style={th}>Zona</th></tr></thead>
          <tbody>
            {questions.length === 0 && <tr><td style={td} colSpan={6}>Todavía sin registros.</td></tr>}
            {questions.map((q) => (
              <tr key={q.id}>
                <td style={td}>{fmt(q.createdAt)}</td>
                <td style={{ ...td, maxWidth: 320, whiteSpace: 'normal' }}>{q.text}</td>
                <td style={td}>{cardLabel(q.cardN)}</td>
                <td style={td}>{q.lang}</td>
                <td style={td}>{q.source}</td>
                <td style={td}>{place(q.country, q.region, q.timezone)}</td>
              </tr>
            ))}
          </tbody>
        </Section>

        <Section title="Visitas recientes">
          <thead><tr><th style={th}>Cuándo</th><th style={th}>Página</th><th style={th}>Zona</th></tr></thead>
          <tbody>
            {visits.length === 0 && <tr><td style={td} colSpan={3}>Todavía sin registros.</td></tr>}
            {visits.map((v) => (
              <tr key={v.id}>
                <td style={td}>{fmt(v.createdAt)}</td>
                <td style={td}>{v.path}</td>
                <td style={td}>{place(v.country, v.region, v.timezone)}</td>
              </tr>
            ))}
          </tbody>
        </Section>
      </div>
    </div>
  );
}
