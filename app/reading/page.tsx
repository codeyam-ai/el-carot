import { headers } from 'next/headers';
import { CardReading } from '@/components/CardReading';
import { Comments, type CommentItem } from '@/components/Comments';
import { Footer } from '@/components/Footer';
import { CAROT_CARDS, type Card, type Lang } from '@/data/cards';
import { formatDailyDate } from '@/lib/daily';
import { getDailyCardN } from '@/lib/dailyCard';
import { prisma } from '@/app/lib/prisma';

export const dynamic = 'force-dynamic';

export default async function ReadingPage({
  searchParams,
}: {
  searchParams: Promise<{ daily?: string; n?: string; origin?: string; q?: string; instant?: string }>;
}) {
  const sp = await searchParams;
  const headerLang = (await headers()).get('x-carot-lang');
  const lang: Lang = headerLang === 'en' ? 'en' : 'es';

  let card: Card;
  let dailyDate: string | null = null;

  if (sp.daily === '1') {
    const now = new Date();
    card = CAROT_CARDS[await getDailyCardN(now)];
    dailyDate = formatDailyDate(now, lang);
  } else {
    const n = Number(sp.n);
    card = Number.isInteger(n) && n >= 0 && n < CAROT_CARDS.length ? CAROT_CARDS[n] : CAROT_CARDS[0];
  }

  const origin = sp.origin ?? 'home';
  const question = typeof sp.q === 'string' && sp.q.trim() ? sp.q : null;

  const rows = await prisma.comment.findMany({ orderBy: { createdAt: 'desc' } });
  const comments: CommentItem[] = rows.map((r) => ({
    id: r.id,
    name: r.name,
    text: r.text,
    createdAt: r.createdAt.toISOString(),
  }));

  return (
    <div data-fullbleed>
      <CardReading card={card} origin={origin} question={question} dailyDate={dailyDate} instant={sp.instant === '1'} />
      <Comments initial={comments} />
      <Footer />
    </div>
  );
}
