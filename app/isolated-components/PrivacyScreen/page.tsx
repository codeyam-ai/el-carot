'use client';
import { PrivacyScreen } from '@/components/PrivacyScreen';
export default function Page() {
  return (<div id="codeyam-capture" style={{ background: 'var(--carot-screen)', width: 390, height: 800, overflow: 'hidden' }}>
    <PrivacyScreen />
  </div>);
}
