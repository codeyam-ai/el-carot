import React from 'react';

/** The filled sage "Elegir otra carta" button — inline on desktop, full width on mobile. */
export function DrawAnotherButton({ label, onClick, fullWidth = false }: { label: string; onClick: () => void; fullWidth?: boolean }) {
  return (
    <button
      onClick={onClick}
      style={{
        border: 'none',
        cursor: 'pointer',
        background: 'var(--accent-fill)',
        color: 'var(--text-on-sage)',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        borderRadius: 14,
        ...(fullWidth ? { width: '100%', fontSize: 20, padding: '18px 22px' } : { fontSize: 18, padding: '15px 34px', whiteSpace: 'nowrap' as const }),
      }}
    >
      {label}
    </button>
  );
}

export default DrawAnotherButton;
