import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';
import { geoFromHeaders } from '@/lib/geo';

export const dynamic = 'force-dynamic';

/**
 * Log a visit: POST { path } → records the path plus coarse Vercel geo
 * (country / region / timezone) and the time. Called once per session by
 * VisitTracker. Best-effort — a logging failure never surfaces to the visitor.
 */
export async function POST(request: Request) {
  let path = '/';
  try {
    const body = await request.json();
    if (typeof body?.path === 'string' && body.path) path = body.path.slice(0, 200);
  } catch {
    /* keep default path */
  }

  try {
    await prisma.visit.create({ data: { path, ...geoFromHeaders(request.headers) } });
  } catch {
    /* logging is non-critical */
  }
  return NextResponse.json({ ok: true });
}
