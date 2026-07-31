# Security Policy

## Supported versions

El Carot is a continuously deployed web app — [elcarot.com](https://www.elcarot.com)
always runs the latest `main`. Fixes land on `main`; there are no maintained
release branches or backports.

## Reporting a vulnerability

**Please do not open a public issue for a security problem.**

Email **support@codeyam.com** with:

- what the issue is and roughly how severe you think it is,
- the steps to reproduce it,
- anything you know about impact (what data or accounts could be reached).

You should get an acknowledgement within a few business days. We'll confirm the
issue, agree a fix, and credit you in the release notes if you'd like — just say so.

Please give us a reasonable chance to ship a fix before disclosing publicly.

## Scope

Worth reporting:

- Anything exposing the `/stats` analytics page without `STATS_PASSWORD`.
- Anything leaking the server-side `GEMINI_API_KEY` to the client.
- Injection into the AI interpretation endpoint (`/api/interpret`) that reaches
  the database or the model in unintended ways.
- Anything that lets one visitor read or alter another's data.

Out of scope:

- Comments are intentionally **login-free** — anyone can post under any name.
  That's a product decision, not a vulnerability.
- Missing rate limiting on public endpoints — known, and tracked as a product
  concern rather than a security report.
- Reports from automated scanners with no demonstrated impact.

## A note on data

The app deliberately stores only **coarse** geo (country, region, timezone) taken
from Vercel's request headers — never an IP address or a precise location. See
`lib/geo.ts`. If you find somewhere that contract is broken, that is a valid
report and we want to hear about it.
