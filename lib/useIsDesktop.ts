'use client';

import React from 'react';

/**
 * True when the viewport is at least `minWidth` px wide. Starts `false` (mobile-
 * first, SSR-safe) and resolves on mount, so the desktop layout swaps in after
 * hydration without a hydration mismatch.
 */
export function useIsDesktop(minWidth = 820): boolean {
  const [isDesktop, setIsDesktop] = React.useState(false);
  React.useEffect(() => {
    const mq = window.matchMedia(`(min-width: ${minWidth}px)`);
    const update = () => setIsDesktop(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, [minWidth]);
  return isDesktop;
}
