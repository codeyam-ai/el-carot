'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

/**
 * Fires a single /api/track POST per browser session (guarded by sessionStorage)
 * so entries are logged once with their coarse geo + time — not on every
 * navigation. Renders nothing.
 */
export function VisitTracker() {
  const pathname = usePathname();
  React.useEffect(() => {
    if (pathname?.startsWith('/stats')) return; // don't log the admin page
    try {
      if (sessionStorage.getItem('carot_tracked')) return;
      sessionStorage.setItem('carot_tracked', '1');
    } catch {
      /* storage unavailable — skip (avoids double-logging loops) */
      return;
    }
    fetch('/api/track', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ path: pathname }),
      keepalive: true,
    }).catch(() => {});
  }, [pathname]);
  return null;
}

export default VisitTracker;
