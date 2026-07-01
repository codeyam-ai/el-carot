import { NextResponse } from 'next/server';
import { getDailyCardN } from '@/lib/dailyCard';

export const dynamic = 'force-dynamic';

/**
 * Daily cron (Vercel Cron → 00:00 UTC): ensures a DailyCard row exists for the
 * new UTC day, so the stats table has one row per day even if nobody draws the
 * card that day. Secured with CRON_SECRET (Vercel sends it as a Bearer token).
 */
export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get('authorization') !== `Bearer ${secret}`) {
    return new NextResponse('Unauthorized', { status: 401 });
  }
  const cardN = await getDailyCardN(new Date());
  return NextResponse.json({ ok: true, cardN });
}
