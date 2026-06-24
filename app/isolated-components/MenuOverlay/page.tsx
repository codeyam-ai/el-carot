'use client';
import { MenuOverlay } from '@/components/MenuOverlay';
export default function Page() {
  return (<div id="codeyam-capture" style={{ position: 'relative', background: 'var(--carot-screen)', width: 390, height: 160 }}>
    <MenuOverlay />
  </div>);
}
