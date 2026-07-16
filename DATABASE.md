# Database

This project uses **Prisma 7 on PostgreSQL**, connected through the
[`@prisma/adapter-pg`](https://www.prisma.io/docs/orm/overview/databases/postgresql)
driver adapter. Production runs on [Neon](https://neon.tech); any PostgreSQL host works.

All application code imports from `@/app/lib/prisma` — that singleton is the only
file that knows which database backs the app.

## Setup

You need a PostgreSQL database reachable over the network (a free Neon or Supabase
project is enough) — there is no local file-based fallback.

```bash
# 1. Point the app at your database.
echo 'DATABASE_URL=postgresql://user:password@host:5432/dbname' > .env

# 2. Create the tables and generate the client.
npm run db:push

# 3. Install deps, push the schema, and seed — all in one.
npm run setup
```

`DATABASE_URL` is read by `prisma.config.ts` (for the Prisma CLI) and by
`app/lib/prisma.ts` (at runtime). `.env` is gitignored — never commit it.

## Quick reference

```bash
# Edit your schema
vim prisma/schema.prisma

# Push schema changes AND regenerate the Prisma client
npm run db:push

# Seed data
npm run db:seed

# Browse data visually
npx prisma studio
```

> **`prisma db push` does not generate the client.** `npm run db:push` chains both
> (`prisma db push && prisma generate`). If you ever run the bare Prisma command,
> follow it with `npx prisma generate` — otherwise TypeScript reports
> `Module '"@prisma/client"' has no exported member 'PrismaClient'` and every
> Prisma query type resolves to `any`.

## Models

| Model | Purpose |
|---|---|
| `Comment` | Login-free comments left under a reading. |
| `DailyCard` | The card of the day — one row per UTC calendar day, shared by everyone. |
| `Question` | Every question asked in the AI flow, with the drawn card and coarse geo. |
| `Visit` | One row per browser session, with coarse geo and time. |

Production starts empty; codeyam scenarios carry their own seed rows.

The geo columns (`country`, `region`, `timezone`) are deliberately coarse — see
`lib/geo.ts`. No IP address or precise location is ever read or stored.

## Using the database

```typescript
import { prisma } from '@/app/lib/prisma';

// In API routes or server components:
const visits = await prisma.visit.findMany({ orderBy: { createdAt: 'desc' } });
```

## Adding columns to existing tables

Adding a **required** column to a table that already has rows makes `db push` fail,
because those rows have no value for it.

- Give it a `@default(...)` so Prisma can backfill existing rows.
- Optional columns (`String?`) need no default — existing rows get `null`.
- **Never use `--force-reset`** — it drops every table and deletes all data.

## Do not change these settings

- **Generator must be `prisma-client-js`** (not `prisma-client`). The `prisma-client`
  generator needs a custom output path, which breaks Turbopack import resolution
  and the seed script's imports.
- **Do not add an `output` field** to the generator.
- **Do not add `url` to the `datasource` block** in `schema.prisma`. Prisma 7 moved
  the URL to `prisma.config.ts`.
- **Keep `serverExternalPackages: ['pg']`** in `next.config.ts` — `pg` is a
  server-side driver and must not be bundled.
- **Keep `turbopack: { root: '.' }`** in `next.config.ts`.

## Writing seed scripts

Seed scripts run outside Next.js, so they construct their own `PrismaClient` with
the adapter rather than importing `@/app/lib/prisma`. See `prisma/seed.ts` for the
pattern — and note that Prisma 7 requires the adapter, so `new PrismaClient()`
without one will fail.
