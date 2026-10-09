import React from 'react';

/** The brief confirmation pill after sharing or saving the image; renders nothing without a message. */
export function ReadingToast({ message }: { message: string | null }) {
  if (!message) return null;
  return (
    <div
      role="status"
      style={{
        position: 'fixed',
        left: '50%',
        bottom: 90,
        transform: 'translateX(-50%)',
        zIndex: 500,
        background: 'var(--carot-sage-light)',
        color: '#2b2922',
        fontFamily: 'var(--font-body)',
        fontWeight: 500,
        fontSize: 15,
        letterSpacing: '.01em',
        padding: '11px 20px',
        borderRadius: 999,
        boxShadow: '0 8px 24px rgba(0,0,0,.4)',
        pointerEvents: 'none',
      }}
    >
      {message}
    </div>
  );
}

export default ReadingToast;
