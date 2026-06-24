import { NextResponse } from 'next/server';
import { prisma } from '@/app/lib/prisma';

export const dynamic = 'force-dynamic';

/** List comments, newest first. */
export async function GET() {
  const comments = await prisma.comment.findMany({ orderBy: { createdAt: 'desc' } });
  return NextResponse.json(comments);
}

/** Create a login-free comment from { name, text }. */
export async function POST(request: Request) {
  let body: { name?: unknown; text?: unknown };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid JSON' }, { status: 400 });
  }
  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const text = typeof body.text === 'string' ? body.text.trim() : '';
  if (!name || !text) {
    return NextResponse.json({ error: 'name and text are required' }, { status: 400 });
  }
  const comment = await prisma.comment.create({ data: { name, text } });
  return NextResponse.json(comment, { status: 201 });
}
