'use client';
import { CarotMenu } from '@/components/CarotMenu';
export default function Page() {
  return (<div id="codeyam-capture" style={{ position: 'relative', background: 'var(--carot-screen)', width: 390, height: 720, overflow: 'hidden' }}>
    <CarotMenu onAbout={() => {}} onGallery={() => {}} />
  </div>);
}
