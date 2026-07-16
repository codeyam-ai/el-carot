# El Carot

[![CI](https://github.com/codeyam-ai/el-carot/actions/workflows/ci.yml/badge.svg)](https://github.com/codeyam-ai/el-carot/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)

**Tarot readings from a deck where every arcanum is someone you already love.**

Charly García is El Loco. Cleopatra is La Sacerdotisa. Celia Cruz is El Sol. Pick a
theme or ask a question, choose your card, and get a thoughtful reading back — in
Spanish or English. No account, no sign-up, no strings.

Live at **[elcarot.com](https://www.elcarot.com)**. Built with [CodeYam](https://codeyam.com).

<p align="center">
  <img src=".codeyam/scenarios/screenshots/landing-spanish--mobile.png" alt="El Carot — the landing screen, with the EL CAROT wordmark, the Carlomagno / El Emperador card, and the three ways in" width="330">
</p>

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

| Variable            | Required | Description                                                      |
| ------------------- | -------- | ---------------------------------------------------------------- |
| `DATABASE_URL`      | Yes      | PostgreSQL connection string. Production uses Neon.              |
| `ANTHROPIC_API_KEY` | Optional | Enables AI card interpretations. Falls back to written meanings. |
| `STATS_PASSWORD`    | Optional | Password gate for the `/stats` analytics page.                   |
| `CRON_SECRET`       | Optional | Auth for the daily "card of the day" cron job.                   |

See [`.env.example`](./.env.example) for the annotated template, and
[DATABASE.md](./DATABASE.md) for the schema workflow.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run test` — run tests (Vitest)
- `npm run db:push` / `npm run db:seed` — sync and seed the database

## Contributing

Issues and pull requests are welcome — see **[CONTRIBUTING.md](./CONTRIBUTING.md)**
for setup, the four checks CI runs, and how scenarios work. By participating you
agree to the [Code of Conduct](./CODE_OF_CONDUCT.md). For security issues, please
read [SECURITY.md](./SECURITY.md) rather than opening a public issue.

## License

[MIT](./LICENSE) © 2026 CodeYam

<!-- codeyam:run-and-edit:start -->
## Develop this project with codeyam-editor

This project is built with [codeyam-editor](https://codeyam.com) — code and runnable data scenarios are authored side by side against a live preview.

```bash
# Clone the repo
git clone https://github.com/codeyam-ai/el-carot && cd el-carot

# Install codeyam-editor
npm install -g @codeyam-editor/codeyam-editor@latest

# Launch the editor (split-screen terminal + live preview)
codeyam-editor editor
```
<!-- codeyam:run-and-edit:end -->

<!-- codeyam:scenario-gallery:start -->
## Scenario gallery

States captured as runnable scenarios with codeyam-editor:

### About - Default

<img src=".codeyam/scenarios/screenshots/about-default--mobile.png" alt="About - Default" width="280">

### Gallery - Default

<img src=".codeyam/scenarios/screenshots/gallery-default--mobile.png" alt="Gallery - Default" width="280">

### Landing - English

<img src=".codeyam/scenarios/screenshots/landing-english--mobile.png" alt="Landing - English" width="280">

### Landing - Spanish

<img src=".codeyam/scenarios/screenshots/landing-spanish--mobile.png" alt="Landing - Spanish" width="280">

### Message - Default

<img src=".codeyam/scenarios/screenshots/message-default--mobile.png" alt="Message - Default" width="280">

### Question - Empty

<img src=".codeyam/scenarios/screenshots/question-empty--mobile.png" alt="Question - Empty" width="280">

### Reading - Default

<img src=".codeyam/scenarios/screenshots/reading-default--mobile.png" alt="Reading - Default" width="280">

### Stats - Password Gate

<img src=".codeyam/scenarios/screenshots/stats-password-gate--desktop.png" alt="Stats - Password Gate" width="280">
<!-- codeyam:scenario-gallery:end -->
