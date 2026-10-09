import React from 'react';

/** A desktop reading action: sage icon + label, styled as a quiet link. */
export function ReadingActionLink({
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
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        fontFamily: 'var(--font-body)',
        fontWeight: 400,
        fontSize: 17,
        color: 'var(--carot-sage-light)',
        whiteSpace: 'nowrap',
        opacity: disabled ? 0.55 : 1,
      }}
    >
      {icon}
      {label}
    </button>
  );
}

export default ReadingActionLink;
