'use client';
import { BackHeader } from '@/components/BackHeader';
export default function Page() {
  return (<div id="codeyam-capture" style={{ background: 'var(--carot-screen)', padding: '0 24px 20px', width: 390, boxSizing: 'border-box' }}>
    <BackHeader title="Quiero recibir un mensaje" />
  </div>);
}
