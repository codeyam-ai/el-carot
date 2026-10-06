---
title: "Tirada de tres cartas"
mode: ui
createdAt: "2026-10-06T18:44:57Z"
source: manual
---

## Summary

Add a new experience: **Tirada de tres cartas** (three-card spread, Pasado · Presente · Futuro). From Home the visitor opens the spread, optionally writes a question, picks three face-down cards from the deck one after another, and lands on a spread reading that flips the three cards in sequence, labels each with its position, and shows one AI interpretation that ties the three cards together (in light of the question when there is one). Today every flow (message, question, daily, gallery) draws exactly one card and `/reading` only knows about a single `n`.

## Key Decisions

- **Positions are fixed: Pasado · Presente · Futuro** (EN: Past · Present · Future) — the classic spread, chosen by the user. Position order = pick order.
- **One combined AI reading, question optional** — the user chose an AI interpretation that joins the three cards. The question field is optional; the prompt adapts ("general reading" vs. "answer this question"). When Gemini is unavailable or fails, fall back to the three written meanings shown per position (same fallback philosophy as the single-card `/api/interpret`).
- **Separate route, not a branch inside `/reading`** — `app/reading/page.tsx` and `CardReading` are built around one `card`; bolting three cards on would tangle the flip/interpret/share/wallpaper state. A new `/spread` (pick) + `/spread/reading?cards=3,12,7&q=…` (reading) keeps the existing reading untouched. Comments + Footer are reused under the spread reading like on `/reading`.
- **Distinct cards** — the three cards are drawn without repetition by reusing `pickFan(3)` (already a tested Fisher–Yates with injectable RNG). The visual pick (tapping cards in the carousel/arc) is a ritual; like `MessageIntro.draw`, the actual card is random.
- **Extend `/api/interpret` rather than a new endpoint** — accept `cardNs: number[]` (exactly 3, distinct, in range) alongside the existing `cardN` contract, which stays backward compatible. Logging: no Prisma schema change; log the question (if any) with the Presente card as `cardN` and `source` prefixed `spread-` so stats can tell them apart.
- **Share yes, wallpaper no** — sharing builds a `/spread/reading?cards=…` link (no `q`, same privacy stance as `buildReadingUrl`); "Descargar imagen" is single-card only and is omitted from the spread reading.

## Implementation

### 1. Pure spread helpers + tests

**New file**: `lib/spread.ts`

- `SPREAD_POSITIONS = ['past', 'present', 'future']`.
- `drawSpread(rng?)` → 3 distinct cards via `pickFan(3, CAROT_CARDS, rng)`.
- `parseSpreadParam(raw?: string)` → `Card[] | null`: accepts exactly three comma-separated, in-range, distinct integers; anything else → `null` (page then redirects/falls back to drawing a fresh spread).
- `buildSpreadUrl(cards, baseUrl, question?)` used both for navigation (with `q`) and share (without).

**New file**: `lib/spread.test.ts` — parse happy path, wrong count, duplicates, out-of-range, non-numeric; `drawSpread` determinism with a seeded RNG and distinctness; URL round-trip.

### 2. Spread prompt + API support

**File**: `lib/interpret-prompts.ts` — add `buildSpreadPrompt(cards, question | null, lang)` keeping the existing voice (voseo ES / warm EN, no headings/lists, never mention AI), naming each card with its position and base meaning, asking for one short reading (4–6 sentences) that reads Pasado → Presente → Futuro. Add cases to `lib/interpret-prompts.test.ts` (both languages, with and without question, all three card names present).

**File**: `app/api/interpret/route.ts` — when the body has `cardNs`, validate (3 distinct valid indices; question optional), call Gemini with `buildSpreadPrompt`, return `{ interpretation, source }`; on no key / failure return `{ interpretation: null, source: 'fallback' }` so the client renders per-position meanings. Existing `cardN` path unchanged.

### 3. Entry point + pick screen

**File**: `components/HomeActions.tsx` — add a fourth `ExperienceButton` "Tirada de tres cartas" → `/spread` (placed before "Carta del Día"; check the mobile column still fits next to `CardFan` in `components/Home.tsx`).

**New file**: `app/spread/page.tsx` + **new file**: `components/SpreadIntro.tsx` — header (`BackHeader` / `DesktopNav`), heading + optional question input, and the face-down deck (reuse `DeckCarousel` from `components/MessageIntro.tsx` on mobile, `DeckArc` on desktop) with a 3-slot tray "Pasado / Presente / Futuro" that fills as the visitor taps cards. After the third pick, short pause, then `router.push(buildSpreadUrl(drawSpread(), …, q))`. A "Volver a elegir" reset is available while picking.

**File**: `lib/i18n.tsx` — new ES/EN strings: `homeSpread`, `spreadTitle`, `spreadHeading`, `spreadLines`, `spreadQuestionPlaceholder` (optional), `spreadPast/Present/Future`, `spreadInterpreting` ("Interpretando tu tirada…"), `spreadAgain` ("Hacer otra tirada").

### 4. Spread reading

**New file**: `app/spread/reading/page.tsx` — server page mirroring `app/reading/page.tsx` (lang header, comments, `Footer`, `force-dynamic`), parses `cards` with `parseSpreadParam`, renders `SpreadReading`.

**New file**: `components/SpreadReading.tsx` — three `TarotCard`s that flip in sequence (staggered ~250ms, `instant` prop for scenarios like `CardReading`), each labeled with its position and card name/arcana. Mobile: cards in a row (≈100px wide) above the text, or stacked if that reads better — tactical call at build. Desktop: three cards across, reading below/right. Below: the question (if any), then the AI interpretation (loading state "Interpretando tu tirada…"); on fallback, three blocks "Pasado — <name>: <meaning>". Actions: Compartir (spread URL via a `shareSpread` alongside `shareReading` in `lib/share.ts`) and "Hacer otra tirada" → `/spread`.

### 5. Scenarios / glossary

Register `SpreadIntro` and `SpreadReading` as isolated components with scenarios (see below), and glossary entries for the new `lib/spread.ts` functions.

## Reused existing code

- `pickFan` from `lib/pickFan.ts` (glossary entry: `pickFan`) — distinct random draw.
- `CAROT_CARDS`, `cardText` from `data/cards.ts` (glossary entry: `cardText`).
- `TarotCard` from `components/TarotCard.tsx` (glossary entry: `TarotCard`) — flip animation.
- `DeckCarousel` from `components/MessageIntro.tsx` (glossary entry: `DeckCarousel`) and `DeckArc` from `components/DeckArc.tsx` (glossary entry: `DeckArc`) — face-down pick UI.
- `CardReading` from `components/CardReading.tsx` (glossary entry: `CardReading`) — pattern for flip timing, interpret fetch with cancel + render-time reset, toast, desktop/mobile split.
- `buildInterpretPrompt` from `lib/interpret-prompts.ts` — voice/constraints to mirror.
- `shareReading` / `buildReadingUrl` from `lib/share.ts` (glossary entries: `shareReading`, `buildReadingUrl`) — share-sheet/clipboard fallback.
- `ExperienceButton` from `components/ExperienceButton.tsx`, `BackHeader`, `DesktopNav`, `StarDivider`, `Comments`, `Footer`.
- `ReadingPage` in `app/reading/page.tsx` (glossary entry: `ReadingPage`) — server page shape to mirror.

## Scenarios to Demonstrate

- Home (mobile + desktop) with the new "Tirada de tres cartas" button.
- SpreadIntro: empty tray; 1 of 3 picked; 3 of 3 picked (transition state); with a question typed.
- SpreadReading with question + AI interpretation (e.g. El Loco / El Mago / La Estrella, "¿Me cambio de trabajo?").
- SpreadReading without question (general AI reading).
- SpreadReading fallback (no AI): three per-position written meanings.
- SpreadReading loading ("Interpretando tu tirada…").
- English language variant.
- Invalid `cards` param (duplicates / 2 cards) → falls back to a fresh valid spread, no crash.