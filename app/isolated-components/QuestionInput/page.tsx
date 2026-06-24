'use client';
import { QuestionInput } from '@/components/QuestionInput';
export default function Page() {
  return (<div id="codeyam-capture" style={{ background: 'var(--carot-screen)', width: 390, height: 800, overflow: 'hidden' }}>
    <QuestionInput />
  </div>);
}
