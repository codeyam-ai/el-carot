'use client';

import React from 'react';

/** Password gate for /stats. Stores the entered key in a cookie the server
 *  compares against STATS_PASSWORD, then reloads. */
export function StatsLogin({ configured = true }: { configured?: boolean }) {
  const [pw, setPw] = React.useState('');
  // Focus on mount instead of `autoFocus`: browsers block (and log) the attribute
  // inside cross-origin frames, which is how the scenario captures render it.
  const input = React.useRef<HTMLInputElement>(null);
  React.useEffect(() => input.current?.focus(), []);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    document.cookie = `carot_stats=${pw};path=/;max-age=${60 * 60 * 24 * 30}`;
    window.location.reload();
  };
  return (
    <div style={{ minHeight: '100dvh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--surface-page)', padding: 24 }}>
      <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 12, width: '100%', maxWidth: 300, textAlign: 'center' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, color: 'var(--text-heading)', marginBottom: 6 }}>El Carot · Stats</div>
        {!configured && (
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: '#e88' }}>STATS_PASSWORD is not configured.</div>
        )}
        <input
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
          placeholder="Password"
          ref={input}
          style={{ padding: '11px 13px', borderRadius: 10, border: '1px solid var(--carot-taupe-deep)', background: 'var(--carot-cream)', color: 'var(--carot-ink)', fontFamily: 'var(--font-body)', fontSize: 15 }}
        />
        <button type="submit" style={{ padding: '11px 18px', borderRadius: 10, border: 'none', cursor: 'pointer', background: 'var(--accent-fill)', color: 'var(--text-on-sage)', fontFamily: 'var(--font-body)', fontWeight: 500, fontSize: 15 }}>
          Enter
        </button>
      </form>
    </div>
  );
}

export default StatsLogin;
