import Home from '@/components/Home';
import { pickFan } from '@/lib/pickFan';

// Re-pick the fanned trio on every visit (no static caching of the random pick).
export const dynamic = 'force-dynamic';

export default function Page() {
  return <Home fan={pickFan(3)} />;
}
