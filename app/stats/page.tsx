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
// Timestamps are shown anchored to Argentina time (America/Argentina/Buenos_Aires)
// regardless of the server's timezone, formatted as YYYY-MM-DD HH:mm ART.
function fmt(d: Date): string {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'America/Argentina/Buenos_Aires',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).formatToParts(d);
  const p: Record<string, string> = {};
  for (const { type, value } of parts) p[type] = value;
  return `${p.year}-${p.month}-${p.day} ${p.hour}:${p.minute} ART`;
}
function place(country: string | null, region: string | null, tz: string | null): string {
  return [country, region].filter(Boolean).join(' / ') + (tz ? ` · ${tz}` : '') || '—';
}

const th: React.CSSProperties = { textAlign: 'left', padding: '6px 12px', color: muted, fontWeight: 400, borderBottom: '1px solid rgba(175,188,167,.16)' };
const td: React.CSSProperties = { padding: '6px 12px', color: cream, borderBottom: '1px solid rgba(175,188,167,.08)', verticalAlign: 'top' };

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
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
    <div data-fullbleed style={{ minHeight: '100dvh', background: '#202020', color: cream, padding: '40px 26px 80px', boxSizing: 'border-box' }}>
      <div style={{ maxWidth: 1600, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 34, color: sage, margin: 0 }}>El Carot · Stats</h1>
        <p style={{ fontFamily: mono, fontSize: 13, color: muted, marginTop: 8 }}>
          {totalVisits} visits · {totalQuestions} questions · times in Argentina time (ART) · coarse geo (country / region / timezone), no IP or precise location
        </p>

        <Section title="Card of the day">
          <thead><tr><th style={th}>Date</th><th style={th}>Card</th></tr></thead>
          <tbody>
            {dailyCards.length === 0 && <tr><td style={td} colSpan={2}>No records yet.</td></tr>}
            {dailyCards.map((d) => (
              <tr key={d.id}><td style={td}>{d.date}</td><td style={td}>{cardLabel(d.cardN)}</td></tr>
            ))}
          </tbody>
        </Section>

        <Section title="Visits by country">
          <thead><tr><th style={th}>Country</th><th style={th}>Visits</th></tr></thead>
          <tbody>
            {byCountry.length === 0 && <tr><td style={td} colSpan={2}>No records yet.</td></tr>}
            {byCountry.map((r) => (
              <tr key={r.country ?? 'unknown'}><td style={td}>{r.country ?? '—'}</td><td style={td}>{r._count._all}</td></tr>
            ))}
          </tbody>
        </Section>

        <Section title={`Questions (${questions.length})`}>
          <thead><tr><th style={th}>When</th><th style={th}>Question</th><th style={th}>Card</th><th style={th}>Language</th><th style={th}>Source</th><th style={th}>Location</th></tr></thead>
          <tbody>
            {questions.length === 0 && <tr><td style={td} colSpan={6}>No records yet.</td></tr>}
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

        <Section title="Recent visits">
          <thead><tr><th style={th}>When</th><th style={th}>Page</th><th style={th}>Location</th></tr></thead>
          <tbody>
            {visits.length === 0 && <tr><td style={td} colSpan={3}>No records yet.</td></tr>}
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
