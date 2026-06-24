'use client';
import { MessageIntro } from '@/components/MessageIntro';
export default function Page() {
  return (<div id="codeyam-capture" style={{ background: 'var(--carot-screen)', width: 390, height: 800, overflow: 'hidden' }}>
    <MessageIntro />
  </div>);
}
