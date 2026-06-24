'use client';
import { MenuToggle } from '@/components/MenuToggle';
export default function Page() {
  return (<div id="codeyam-capture" style={{ position: 'relative', background: 'var(--carot-screen)', width: 200, height: 120 }}>
    <MenuToggle open={false} onToggle={() => {}} label="Menú" />
  </div>);
}
