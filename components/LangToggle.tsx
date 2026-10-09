'use client';

import React from 'react';
import { useCarot } from '@/lib/i18n';

/** ES / EN minimal segmented switch. */
export function LangToggle() {
  const { lang, setLang } = useCarot();
  const seg: React.CSSProperties = {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    letterSpacing: '.08em',
    lineHeight: 1,
  };
  const on: React.CSSProperties = { ...seg, color: 'var(--text-heading)', fontWeight: 500 };
  const off: React.CSSProperties = { ...seg, color: 'var(--text-dim)', fontWeight: 400 };
  return (
    <div role="group" aria-label="Language" style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
      <button style={lang === 'es' ? on : off} aria-pressed={lang === 'es'} onClick={() => setLang('es')}>
        ES
      </button>
      <span aria-hidden="true" style={{ color: 'var(--text-dimmer)', fontSize: 11 }}>
        /
      </span>
      <button style={lang === 'en' ? on : off} aria-pressed={lang === 'en'} onClick={() => setLang('en')}>
        EN
      </button>
    </div>
  );
}

export default LangToggle;
