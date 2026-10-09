import React from 'react';

/** A mobile reading action: hairline-bordered button with a sage icon and label; dims while `disabled`. */
export function ReadingOutlineButton({
  icon,
  label,
  onClick,
  disabled = false,
}: {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 9,
        width: '100%',
        boxSizing: 'border-box',
        background: 'transparent',
        border: '1px solid rgba(175,188,167,.35)',
        borderRadius: 14,
        padding: '15px 10px',
        cursor: 'pointer',
        fontFamily: 'var(--font-body)',
        fontWeight: 400,
        fontSize: 17,
        letterSpacing: '.01em',
        color: 'var(--carot-sage-light)',
        whiteSpace: 'nowrap',
        opacity: disabled ? 0.55 : 1,
      }}
    >
      <span aria-hidden="true" style={{ display: 'inline-flex' }}>
        {icon}
      </span>
      {label}
    </button>
  );
}

export default ReadingOutlineButton;
