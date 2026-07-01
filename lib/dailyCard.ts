import { prisma } from '@/app/lib/prisma';
import { CAROT_CARDS } from '@/data/cards';
import { dailyCardIndex } from '@/lib/daily';
import { utcDateKey } from '@/lib/geo';

/**
 * The card of the day: one card per UTC calendar day, the SAME for everyone.
 * The first draw of the day picks it (deterministically) and persists it in
 * `DailyCard`; every later draw reads that stored row. Falls back to the
 * deterministic pick if the database is unavailable, so the page never breaks.
 */
export async function getDailyCardN(now: Date): Promise<number> {
  const date = utcDateKey(now);
  const deterministic = dailyCardIndex(now, CAROT_CARDS.length);
  try {
    const existing = await prisma.dailyCard.findUnique({ where: { date } });
    if (existing) return existing.cardN;
    try {
      await prisma.dailyCard.create({ data: { date, cardN: deterministic } });
    } catch {
      // Lost a race with a concurrent first-draw — read back the winner's row.
      const row = await prisma.dailyCard.findUnique({ where: { date } });
      if (row) return row.cardN;
    }
    return deterministic;
  } catch {
    return deterministic;
  }
}
