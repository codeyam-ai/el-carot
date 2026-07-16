# Contributing to El Carot

Thanks for taking an interest. This is a small project — issues and pull requests
are both welcome.

## Getting set up

You need **Node 22+** and a **PostgreSQL** database. There is no local file-based
fallback: the app talks to Postgres through Prisma's `@prisma/adapter-pg`. A free
[Neon](https://neon.tech) or [Supabase](https://supabase.com) project works, and so
does a throwaway container:

```bash
docker run -d --name el-carot-pg \
  -e POSTGRES_PASSWORD=carot -e POSTGRES_DB=elcarot \
  -p 5432:5432 postgres:16
```

Then:

```bash
git clone https://github.com/codeyam-ai/el-carot && cd el-carot
cp .env.example .env          # fill in DATABASE_URL
npm run setup                 # install + db:push + db:seed
npm run dev                   # http://127.0.0.1:3000
```

> **If TypeScript reports `Module '"@prisma/client"' has no exported member
> 'PrismaClient'`, the Prisma client hasn't been generated.** `npm install` alone
> does not generate it, and neither does the bare `prisma db push`. Run
> `npm run db:push` (which chains `prisma generate`) or `npx prisma generate`.
> This is the single most common first-run confusion.

Only `DATABASE_URL` is required. Everything else in `.env.example` is optional:
without `ANTHROPIC_API_KEY` the app falls back to each card's written meaning,
which is a fully supported path — you do not need a key to develop.

## The checks

These four run on every pull request ([CI](.github/workflows/ci.yml)). Run them
locally before pushing; a green CI is the merge bar.

```bash
npx tsc --noEmit    # types — zero errors
npm run lint        # eslint — zero errors
npm test            # vitest — 37 tests, no database needed
npm run build       # production build
```

None of them need a database. Unit tests cover pure logic only (card text
resolution, geo header parsing, share links, the daily-card index, wallpaper
composition); anything touching Postgres is exercised through scenarios instead.

## Tests

Tests live next to the code they cover (`lib/geo.ts` → `lib/geo.test.ts`) and run
on [Vitest](https://vitest.dev/).

**Every `it()` gets a `//` comment directly above it** explaining what the test
verifies and why it matters — not restating the title. This is a hard convention
here; the comment is what a future reader (or an AI agent) reads first:

```ts
// the key must come from UTC, not local time — a late-evening UTC instant still
// belongs to that UTC day, otherwise two visitors could see different daily cards
it('uses UTC rather than local time at day boundaries', () => {
  expect(utcDateKey(new Date('2026-07-16T23:59:59Z'))).toBe('2026-07-16');
});
```

## Scenarios

This project is built with [codeyam-editor](https://codeyam.com): UI states are
captured as runnable **scenarios** under `.codeyam/scenarios/`, and the README
gallery is generated from them.

If your change alters a component's appearance, its screenshots go stale. Refresh
them rather than editing anything under `.codeyam/scenarios/screenshots/` by hand:

```bash
codeyam-editor editor recapture-stale
```

Two things worth knowing:

- **Screenshot resolution comes from `.codeyam/preview-env.json`**, which is
  gitignored and written by the editor UI from your browser. The committed
  screenshots are 2×. If yours come out half-size, create it with
  `{"deviceScaleFactor": 2}` before recapturing, or you'll rewrite the whole
  gallery at 1×.
- **Adding a component?** It needs a glossary entry with either a `testFile` or a
  captured scenario. `codeyam-editor editor audit` tells you exactly what's owed.

## Pull requests

- Branch off `main`; keep the change focused.
- Make sure the four checks above pass.
- Describe **what changed and why**. If it's visual, include a before/after.
- Don't commit `.env`, or anything under `.codeyam/` that the `.gitignore`
  already excludes (caches, locks, runtime state).

## Code of Conduct

By participating you agree to the [Code of Conduct](./CODE_OF_CONDUCT.md).
