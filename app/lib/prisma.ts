// Database connection singleton — Prisma 7 on PostgreSQL via the pg driver adapter.
// This is the ONLY file that knows which database backs the app.
// All application code imports from here — API routes, server components, etc.
//
// Usage:
//   import { prisma } from "@/app/lib/prisma";
//   const items = await prisma.yourModel.findMany();
//
// See DATABASE.md for setup and the schema workflow.

import { PrismaClient } from '@prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

export default prisma;
