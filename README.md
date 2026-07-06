# El Carot

AI-powered tarot readings, delivered through a special, one-of-a-kind deck. Pick a
theme, choose your card, and get a thoughtful reading for reflection and a little fun.

Live at **[elcarot.com](https://www.elcarot.com)**. Built with [CodeYam](https://codeyam.com).

## Tech stack

- [Next.js](https://nextjs.org/) (App Router)
- [Prisma](https://www.prisma.io/) + [Neon](https://neon.tech/) Postgres
- Optional [Anthropic](https://www.anthropic.com/) API for AI card interpretations
- [Vitest](https://vitest.dev/) + [Playwright](https://playwright.dev/) for tests

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
# then fill in DATABASE_URL (Neon Postgres) and, optionally, ANTHROPIC_API_KEY

# 3. Set up the database and seed it
npm run setup        # install + db:push + db:seed

# 4. Run the dev server
npm run dev
```

The app runs at [http://127.0.0.1:3000](http://127.0.0.1:3000).

## Environment variables

| Variable                | Required | Description                                                      |
| ----------------------- | -------- | ---------------------------------------------------------------- |
| `DATABASE_URL`          | Yes      | Neon Postgres connection string (pooled).                        |
| `DATABASE_URL_UNPOOLED` | Optional | Direct/unpooled connection, preferred by Prisma CLI for DDL.     |
| `ANTHROPIC_API_KEY`     | Optional | Enables AI card interpretations. Falls back to written meanings. |
| `STATS_PASSWORD`        | Optional | Password gate for the `/stats` analytics page.                   |
| `CRON_SECRET`           | Optional | Auth for the daily "card of the day" cron job.                   |

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run test` — run tests (Vitest)
- `npm run db:push` / `npm run db:seed` — sync and seed the database

## License

[MIT](./LICENSE)
