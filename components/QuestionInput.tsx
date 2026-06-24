'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { useCarot } from '@/lib/i18n';
import { CAROT_CARDS } from '@/data/cards';
import { useIsDesktop } from '@/lib/useIsDesktop';
import { BackHeader } from '@/components/BackHeader';
import { DesktopNav } from '@/components/DesktopNav';

/**
 * "Tengo una pregunta específica" — the visitor writes their question, then
 * draws a card. The reading interprets that card in light of the question.
 */
export function QuestionInput() {
  const { t } = useCarot();
  const router = useRouter();
  const isDesktop = useIsDesktop();
  const cream = 'var(--carot-cream-text)';
  const [q, setQ] = React.useState('');
  const ready = q.trim().length > 0;

  const ask = () => {
    if (!ready) return;
    const n = Math.floor(Math.random() * CAROT_CARDS.length);
    router.push(`/reading?n=${n}&origin=question&q=${encodeURIComponent(q.trim())}`);
  };

  const fieldBorder = '1px solid rgba(175,188,167,.35)';

  if (isDesktop) {
    return (
      <div data-fullbleed style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', background: 'var(--carot-screen)' }}>
        <DesktopNav title={t.questionTitle} />
        <div style={{ maxWidth: 1040, margin: '0 auto', width: '100%', padding: '0 40px', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h1 style={{ margin: '64px 0 0', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 56, lineHeight: 1.05, color: cream }}>
            {t.questionHeading}
          </h1>
          <p style={{ margin: '18px 0 0', maxWidth: 700, textAlign: 'center', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 17, lineHeight: 1.5, color: cream }}>
            {t.questionSub}
          </p>
          <textarea
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder={t.questionPlaceholder}
            style={{
              width: '100%',
              maxWidth: 960,
              height: 220,
              boxSizing: 'border-box',
              resize: 'none',
              marginTop: 36,
              background: 'transparent',
              border: fieldBorder,
              borderRadius: 16,
              padding: '22px 24px',
              outline: 'none',
              fontFamily: 'var(--font-body)',
              fontWeight: 300,
              fontSize: 18,
              lineHeight: 1.5,
              color: cream,
            }}
          />
          <button
            onClick={ask}
            disabled={!ready}
            style={{
              marginTop: 30,
              border: 'none',
              cursor: ready ? 'pointer' : 'default',
              background: 'var(--carot-sage-light)',
              color: '#2b2922',
              opacity: ready ? 1 : 0.5,
              fontFamily: 'var(--font-display)',
              fontWeight: 400,
              fontSize: 22,
              padding: '18px 48px',
              borderRadius: 14,
              transition: 'opacity .2s ease',
            }}
          >
            {t.drawCard}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column', background: 'var(--carot-screen)', boxSizing: 'border-box' }}>
      <div style={{ padding: '0 24px', flex: 'none' }}>
        <BackHeader title={t.questionTitle} />
      </div>

      <h1 style={{ margin: '24px 24px 0', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 36, lineHeight: 1.05, color: cream }}>
        {t.questionHeading}
      </h1>
      <p style={{ margin: '14px 30px 0', textAlign: 'center', fontFamily: 'var(--font-body)', fontWeight: 300, fontSize: 16, lineHeight: 1.5, color: cream }}>
        {t.questionSub}
      </p>

      <div style={{ flex: 1, padding: '22px 24px 0', display: 'flex', minHeight: 0 }}>
        <textarea
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder={t.questionPlaceholder}
          style={{
            flex: 1,
            width: '100%',
            boxSizing: 'border-box',
            resize: 'none',
            background: 'transparent',
            border: fieldBorder,
            borderRadius: 16,
            padding: '20px 22px',
            outline: 'none',
            fontFamily: 'var(--font-body)',
            fontWeight: 300,
            fontSize: 18,
            lineHeight: 1.5,
            color: cream,
          }}
        />
      </div>

      <div style={{ padding: '18px 24px 26px', flex: 'none' }}>
        <button
          onClick={ask}
          disabled={!ready}
          style={{
            width: '100%',
            border: 'none',
            cursor: ready ? 'pointer' : 'default',
            background: 'var(--carot-sage-light)',
            color: '#2b2922',
            opacity: ready ? 1 : 0.5,
            fontFamily: 'var(--font-display)',
            fontWeight: 400,
            fontSize: 22,
            padding: '20px 22px',
            borderRadius: 14,
            transition: 'opacity .2s ease',
          }}
        >
          {t.drawCard}
        </button>
      </div>
    </div>
  );
}

export default QuestionInput;
