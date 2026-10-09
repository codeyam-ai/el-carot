'use client';

import React from 'react';
import { useCarot } from '@/lib/i18n';
import { currentTheme, setTheme } from '@/lib/theme';
import { SunIcon } from '@/components/SunIcon';
import { MoonIcon } from '@/components/MoonIcon';

/**
 * Sun / moon switch. Which icon and label show is decided by CSS from
 * `<html data-theme>` (see `.carot-theme-*` in globals.css), so the server
 * render is right on first paint even when the theme came from the device
 * setting. `withLabel` adds the text, for the star menu.
 */
export function ThemeToggle({ withLabel = false, style }: { withLabel?: boolean; style?: React.CSSProperties }) {
  const { t } = useCarot();
  const toggle = () => setTheme(currentTheme() === 'light' ? 'dark' : 'light');
  return (
    <button
      data-testid="theme-toggle"
      onClick={toggle}
      style={{
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        display: 'inline-flex',
        alignItems: 'center',
        gap: 10,
        lineHeight: 1,
        color: 'var(--text-heading)',
        ...style,
      }}
    >
      {/* dark page → offer the sun */}
      <span className="carot-theme-dark-only" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        <SunIcon />
        {withLabel ? t.themeToLight : <span className="carot-sr-only">{t.themeToLight}</span>}
      </span>
      {/* light page → offer the moon */}
      <span className="carot-theme-light-only" style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
        <MoonIcon />
        {withLabel ? t.themeToDark : <span className="carot-sr-only">{t.themeToDark}</span>}
      </span>
    </button>
  );
}

export default ThemeToggle;
