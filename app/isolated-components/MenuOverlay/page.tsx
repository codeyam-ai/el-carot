'use client';
import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { MenuOverlay } from '@/components/MenuOverlay';
import { MenuProvider } from '@/lib/menu';

function Frame() {
  // `?s=Open` gives the overlay a full phone-height frame so the opened menu is
  // visible; the default keeps the short frame that shows only the star.
  const open = useSearchParams().get('s') === 'Open';
  // Own MenuProvider so tapping this star doesn't also open the root layout's menu.
  return (<div id="codeyam-capture" style={{ position: 'relative', background: 'var(--carot-screen)', width: 390, height: open ? 720 : 160, overflow: 'hidden' }}>
    <MenuProvider>
      <MenuOverlay />
    </MenuProvider>
  </div>);
}

export default function Page() {
  return (
    <Suspense>
      <Frame />
    </Suspense>
  );
}
