import React from 'react';

/** "Carta del día" eyebrow over the date — left-aligned above the card on desktop, centred on mobile. */
export function DailyDateBadge({ label, date, mobile = false }: { label: string; date: string; mobile?: boolean }) {
  return (
    <div style={mobile ? { textAlign: 'center', marginTop: 6, marginBottom: 22 } : { marginBottom: 18 }}>
      <div style={{ fontFamily: 'var(--font-body)', fontWeight: 600, fontSize: 11, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--carot-sage-light)', marginBottom: 4 }}>
        {label}
      </div>
      <div style={{ fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: mobile ? 19 : 20, color: 'var(--carot-cream-text)' }}>{date}</div>
    </div>
  );
}

export default DailyDateBadge;
