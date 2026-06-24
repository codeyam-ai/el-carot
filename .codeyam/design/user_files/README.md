# Handoff: El Carot — Tarot Mobile App

## Overview
**El Carot** is a mobile-first tarot web app. A user draws a card from the 22 major arcana, watches it flip face-up, and reads its meaning. Each arcanum is embodied by a beloved character whose name starts with **C** (Charly García = The Fool, Cleopatra = The High Priestess, etc.) — hence *C-arot*. The app is fully **bilingual (Spanish / English)** with automatic language detection, and offers three ways in: a free "message," a specific question (answered by an LLM interpretation), and a deterministic "card of the day." There are no accounts and no backend — it's a calm, single-session ritual.

The aesthetic is a **warm, worn, antique tarot** feel on a dark charcoal screen: parchment-cream text, sage-green accents, a display serif (Maragsa) for titles paired with a light sans (Josefin Sans) for body.

## About the Design Files
The files in `source/` are **design references created in HTML/React-via-Babel** — prototypes that show the intended look and behavior. They are **not** production code to ship directly (they transpile JSX in the browser with Babel at runtime, which is fine for a prototype but not for production).

Your task is to **recreate these designs in a real codebase**. There is no existing app environment yet, so **choose an appropriate stack** — a recommended path is **Vite + React** (the prototype is already React, so component structure ports cleanly) with a proper build step, or **Next.js** if you want SSR/routing/SEO. Keep the visual design pixel-accurate; modernize only the plumbing (build, state, data, the LLM call).

## Fidelity
**High-fidelity.** Colors, typography, spacing, layout, animations, and copy are all final. Recreate the UI pixel-perfectly. Exact tokens are in `source/tokens/` and listed under **Design Tokens** below.

## Tech at a glance
- **React 18**, function components + hooks. No Redux/router — view state is a single string in the top component.
- **Inline styles** referencing CSS custom properties (design tokens). Tokens live in `source/styles.css` (which `@import`s `source/tokens/*.css`).
- **A small design-system component library** (`source/components/`): `Button`, `TarotCard`, `StarDivider`, `ArcanaLabel`, `Logo`, `Comment`. In the prototype these are compiled into `source/_ds_bundle.js` and read off `window.ElCarotDesignSystem_1067d9`. **In your codebase, re-implement these as normal imported components** — the `.jsx` source for each is in `source/components/<group>/<Name>.jsx`, with a `.d.ts` describing its props and a `.prompt.md` describing intent.
- **Card data** is in `source/assets/cards.js` (`window.CAROT_CARDS`) — 22 objects with bilingual meanings and quotes. Move this into a real data module / JSON.
- **i18n** is in `source/mobile/i18n.jsx` — all UI strings for `es`/`en`, language detection, a `useCarot()` hook, and the ES/EN toggle. Port to your i18n approach (the strings table is ready to use as-is).
- **LLM interpretation**: the "specific question" flow calls `window.claude.complete(prompt)`. **This is a prototype-only global.** In production, replace it with a call to your own backend endpoint that proxies an LLM (never expose an API key client-side). The exact prompts (ES voseo + EN) are in `source/mobile/MobileApp.jsx`, function `ask()` — preserve their tone.

## App structure & navigation
One top-level component (`MobileApp`) holds all state and swaps "views." There is no URL router in the prototype — **add real routes** (`/`, `/message`, `/question`, `/reading/:cardId`, `/gallery`, `/about`) in production.

State in `MobileApp`:
- `view` — `'home' | 'message' | 'draw' | 'question' | 'reading' | 'about' | 'gallery'`
- `card` — the drawn card object (from `CAROT_CARDS`)
- `menu` — boolean, star menu overlay open
- `question` — the user's typed question (or `null`)
- `interpretation` / `interpreting` — LLM result + loading flag
- `dailyDate` — formatted date string when the reading is a "card of the day"
- `origin` — which view to return to on "draw again"
- `lang` — `'es' | 'en'`, persisted to `localStorage['carot_lang']`

Device frame in the prototype: **390 × 844** (iPhone 13/14), dark background `#333333`, content vertically scrollable, scrollbars hidden.

## Screens / Views

### 1. Home (`Home.jsx`)
- **Purpose**: landing; pick how you want to engage.
- **Layout**: full-height flex column, horizontal padding 26px, bottom padding 30px.
  - **Header row** (padding-top 30px): left = `LangToggle` (ES / EN segmented), center = welcome eyebrow ("¡Bienvenida!" / "Welcome!") in display serif 17px, color `rgba(175,188,167,.65)`; right spacer to balance.
  - **Wordmark**: `EL CAROT`, display serif, 58px, weight 400, line-height 1, letter-spacing .03em, uppercase, color sage `#afbca7`, centered, margin-top 14px.
  - **Center illustration**: three *random* card fronts (re-picked on each mount) fanned in an overlapping row, full-bleed (negative 26px side margins), gently swaying (`carot-sway`, 6.5s ease-in-out infinite, staggered 1.3s). Center card width 190px, aspect-ratio 0.535, border `2px solid rgba(233,217,199,.5)`, radius 9px, heavy drop shadow. Cards animate open on mount (translate/scale/opacity over .6s).
  - **Three buttons** (flex column, gap 14px):
    1. "Quiero recibir un mensaje" / "I want to receive a message" — solid sage button.
    2. "Tengo una pregunta específica" / "I have a specific question" — solid sage button.
    3. "Carta del Día" / "Card of the Day" — outline (transparent bg, 1.5px sage border, sage text).
- **Button style**: width 100%, display serif, 21px, weight 400, padding 20px 18px, radius 14px, bg `--carot-sage-light` `#afbca7`, text `#2b2922`. Press = translateY(1px).

### 2. Message / Draw intro (`MessageIntro.jsx`)
- **Purpose**: a calming pre-draw screen for the "message" and plain "draw" intents.
- **Content**: a title, a heading question ("¿Sobre qué quisieras recibir un mensaje?"), a short list of breathing/intention lines ("Conectá con ese tema." / "Respirá hondo." / "Elegí tu carta."), and a fanned deck the user taps to draw. Back arrow + star menu in header.
- On draw → picks a random card → goes to **Reading** (origin = `message`).

### 3. Question input (`QuestionInput.jsx`)
- **Purpose**: collect a specific question to feed the LLM.
- **Content**: heading "Dejá tu pregunta" / "Ask your question", subtitle about specificity, a textarea (placeholder "Dejá tu pregunta aquí"), and a "Sacar una carta" / "Draw a card" button.
- On submit → draws a random card, navigates to **Reading** immediately with `interpreting = true`, then fills in the LLM interpretation when it resolves (falls back to the card's base meaning on error).

### 4. Reading (`CardReading.jsx`) — the core screen
- **Purpose**: show the drawn card and its reading.
- **Layout**: centered flex column, side padding 26px, dark bg.
  - **Header**: back arrow (sage), returns to `origin`.
  - **Daily badge** (only for card-of-the-day): small uppercase label "CARTA DEL DÍA" (11px, letter-spacing .22em, sage) over the formatted date in display serif 19px.
  - **TarotCard**: 214px wide; mounts face-down then **flips face-up 250ms after mount** (`flipped` state, keyed on `card.n`). `back` = `card-back.jpg`, `face` = `cards/<img>`.
  - **Divider + body**, two modes:
    - *No question* (message / daily / gallery): a `StarDivider` (3 stars), the card's **pull-quote** in italic sage 21px between two dividers, then the card's **meaning** paragraph (cream, 18px, line-height 1.7, centered).
    - *With question*: a 3-star sage divider, an uppercase "TU PREGUNTA" label, the question in italic cream 20px, then either "Interpretando tu carta…" (loading) or the LLM **interpretation** paragraph.
  - **Action buttons** (flex column, gap 14, full width), after a wide star divider:
    1. "Descargar Imagen" / "Download Image" — outline button with download icon.
    2. "Compartir" / "Share" — outline button with share icon.
    3. "Elegir otra carta" / "Draw another card" — **solid sage** button (primary), returns to `origin`.
  - **Outline action style**: transparent bg, `1px solid rgba(175,188,167,.35)`, radius 14px, padding 17px 22px, gap 12px, body font 19px, sage text.
  - Below: `<Comments />`, then `<Footer />`.
- *Note: Download / Share are currently visual only — implement real share (Web Share API) and image export (render card + meaning to canvas/PNG) in production.*

### 5. Comments (`Comments.jsx`)
- **Purpose**: lightweight public reactions under a reading.
- **Content**: "Comentarios" title, a "Comentar" CTA that opens a name + comment form (Publicar / Cancelar), an empty state ("Todavía no hay comentarios. Sé el primero…"), and seeded example comments. A "Ver todos / Ver menos" toggle. *Prototype has no persistence — wire to a real backend/store in production.*

### 6. Gallery (`Gallery.jsx`)
- **Purpose**: browse all 22 arcana.
- **Content**: "Todas las cartas" title, "Los 22 arcanos" heading, "Tocá la que te llame" subtitle, and a grid/list of all card fronts. Tapping a card opens its **Reading** (origin = `gallery`, no question).

### 7. About (`About.jsx`)
- **Purpose**: explain the concept.
- **Content**: "¿Qué es esto?" heading and three paragraphs (the C-arot concept, the Rider–Waite collage art style, the no-accounts ritual), a tagline ("Tirá con confianza. El Carot te ama ♥"), and a "Seguir en Instagram" link. Copy (with `<strong>`/`<em>` markup) is in `i18n.jsx` under `aboutP1html`, `aboutP2`, `aboutP3`, `aboutTagline`.

### Star menu overlay (`MobileApp.jsx` → `CarotMenu` + `MenuToggle`)
- A single **star ↔ X** button is fixed top-right (top 22, right 18, 44×44, z-index 600). It rotates and crossfades between an 8-point star (menu closed) and an X (menu open) **without moving** — both SVGs occupy the same spot; transition `transform .4s cubic-bezier(.34,.12,.2,1), opacity .28s`.
- Opening it overlays a full-screen panel (`rgba(28,28,28,.97)`, z-index 500) with centered nav: **Sobre El Carot**, **Ver todas las cartas**, **Comprar Mazo** (→ Instagram), **Open Source**, **Instagram**. Items: body font, weight 300, 17px, cream text, gap 34px.
- Footer of the menu: a monospace (IBM Plex Mono) "El Carot te ama" line flanked by ♥ glyphs, color `rgba(255,255,255,.42)`.

## Interactions & Behavior
- **Card flip**: on Reading mount, card shows back, then flips face-up after 250ms (re-fires whenever `card.n` changes).
- **Home fan**: cards open from a slightly collapsed/scaled state over .6s `cubic-bezier(.2,.7,.16,1)`; then sway forever via `carot-sway` (`@keyframes` rotate -1.1deg ↔ 1.1deg, 6.5s, staggered).
- **Star → X toggle**: described above; pure CSS transform/opacity.
- **Nudge hints** (`carot-nudge-left/right` keyframes): subtle opacity/translate pulses used on fan affordances.
- **Daily card determinism**: the card of the day is a hash of `YYYY M D` (local) modulo 22 — same card all day. Date string is localized (ES "12 de marzo de 2026" / EN "March 12, 2026").
- **LLM call**: question flow calls `window.claude.complete(prompt)`; on error falls back to the card's base meaning. Replace with your backend proxy.
- **Language**: detected on first load (saved override → browser locale → timezone heuristic for LATAM/Spain → default EN); user can override with the ES/EN toggle; choice persisted to `localStorage`.
- **Scroll reset**: navigating to a new view scrolls the scroller to top.
- **Reduced motion**: prototype does not gate animations on `prefers-reduced-motion` — **add that** in production (the sway/flip should respect it).

## State Management
Single source of truth in `MobileApp` (lift into a small store/context or route state in production):
- `view`, `card`, `menu`, `question`, `interpretation`, `interpreting`, `dailyDate`, `origin`, `lang`.
- `lang` ↔ `localStorage['carot_lang']`.
- Data fetching: only the LLM interpretation is async. Comments are unpersisted in the prototype — add a store if you want them real.

## Design Tokens
Full source: `source/tokens/colors.css`, `typography.css`, `spacing.css`, `fonts.css`.

### Colors
| Token | Hex | Use |
|---|---|---|
| `--carot-screen` / `--carot-charcoal` | `#333333` | every app screen background |
| `--carot-cream` | `#eedbc4` | card faces, inner panels |
| `--carot-cream-soft` | `#f2e7d3` | card title plates |
| `--carot-cream-text` | `#e9d9c7` | primary text on dark |
| `--carot-taupe` | `#d5c3b2` | warm paper bg (light surfaces) |
| `--carot-taupe-deep` | `#c7b39f` | hairline dividers on taupe |
| `--carot-ink` | `#353029` | text on parchment artwork |
| `--carot-ink-soft` | `#5b5247` | muted ink |
| `--carot-sage` | `#9aa693` | primary solid buttons |
| `--carot-sage-light` | `#afbca7` | card backs, headings on dark, accents |
| `--carot-sage-deep` | `#7e8c77` | sage hover / pressed |
| `--carot-sage-divider` | `#5b6256` | star dividers, muted text on dark |
| `--carot-red` | `#b2402e` | artwork accent (use sparingly) |
| `--carot-ochre` | `#d4a23a` | artwork accent (use sparingly) |
| button text on sage | `#2b2922` | ink on sage buttons |

### Typography
- **Display**: `'Maragsa Display'` (local OTF, `source/assets/fonts/Maragsa-Display.otf`), fallback Georgia/Times serif. Logo, arcana titles, names, headings, pull-quotes.
- **Body**: `'Josefin Sans'` (Google Fonts, weights 300/400/500/600/700 + italics), fallback system sans. Body copy, UI, labels. **Default body weight is light (300).**
- **Mono** (small accents only): `'IBM Plex Mono'`.
- **Scale (16px base)**: xs 12 / sm 14 / base 16 / md 18 / lg 22 / xl 28 / 2xl 36 / 3xl 48 / 4xl 64 px.
- **Line heights**: tight 1.1 / snug 1.25 / normal 1.5 / relaxed 1.7.
- **Letter spacing**: tight -.01em / wide .08em / wider .18em (small-caps labels like "TU PREGUNTA").

### Spacing / radius / shadow
- See `source/tokens/spacing.css`. Buttons use **radius 14px**. Card art uses radius 9px with a `2px` cream border. Common shadows: `0 18px 44px rgba(0,0,0,.6)` (raised card), `0 12px 30px rgba(0,0,0,.5)` (fanned card), `0 30px 80px rgba(0,0,0,.45)` (device).

## Design-system components (`source/components/`)
Re-implement these as normal components (source `.jsx` provided):
- **`forms/Button`** — sage solid + outline variants used across screens.
- **`brand/TarotCard`** — front/back flip card. Props: `back`, `face`, `flipped`, `width`, `alt`.
- **`brand/StarDivider`** — a row of N small stars. Props: `count`, `size`, `color`, `style`.
- **`brand/ArcanaLabel`** — small-caps arcana name label.
- **`brand/Logo`** — the EL CAROT wordmark.
- **`feedback/Comment`** — a single comment row (name, date, text).

Each component folder also has a `.d.ts` (prop types) and `.prompt.md` (intent/usage).

## Assets
- **Card fronts**: `source/assets/cards/00-el-loco.png` … `21-el-mundo.png` (22 PNGs). Mapped per card via the `img` field in `cards.js`. Aspect ratio ≈ 0.535 (portrait tarot). *These are the brand's real artwork — keep them.*
- **Card back**: `source/assets/card-back.jpg`.
- **Display font**: `source/assets/fonts/Maragsa-Display.otf` (licensed local font — confirm license before shipping publicly).
- **Card data** (meanings, quotes, both languages): `source/assets/cards.js`.

## Files in this bundle
```
source/
  mobile/                 ← the implemented app (React via Babel prototype)
    index.html            ← entry; script load order; device frame
    MobileApp.jsx         ← shell: state, routing, draw/daily/ask logic, star menu
    Home.jsx              ← landing screen + card fan
    MessageIntro.jsx      ← message / draw pre-draw screen
    QuestionInput.jsx     ← specific-question textarea
    CardReading.jsx       ← the reading (card flip, meaning, actions)
    Comments.jsx          ← comments section
    Footer.jsx            ← reading footer links
    About.jsx             ← about screen
    Gallery.jsx           ← all-22 browser
    StarField.jsx         ← decorative starfield
    i18n.jsx              ← ES/EN strings, detection, useCarot(), LangToggle
  components/             ← design-system component sources (.jsx + .d.ts + .prompt.md)
  tokens/                 ← colors / typography / spacing / fonts CSS variables
  styles.css             ← imports tokens; global resets
  assets/
    cards/                ← 22 card-front PNGs
    cards.js              ← 22-card data with bilingual meanings + quotes
    card-back.jpg         ← card back
    fonts/Maragsa-Display.otf
  _ds_bundle.js           ← compiled DS bundle (prototype runtime; reference only)
  support.js              ← prototype runtime helper (reference only)
```
> `desktop/` was an earlier exploration; the **mobile** app is the canonical design.

## Recommended production steps
1. Scaffold **Vite + React + TypeScript**.
2. Port `tokens/*` to CSS variables (or a theme object) — keep names.
3. Re-implement `components/` as real imported components.
4. Build the screens from the `mobile/*.jsx` sources; convert inline-style objects as-is.
5. Move `cards.js` → a typed data module; load the 22 PNGs from `assets`.
6. Port `i18n.jsx` strings to your i18n lib (or keep the plain table + `useCarot`-style context).
7. Replace `window.claude.complete` with a backend endpoint that proxies your LLM (keep the ES voseo / EN prompts and the meaning fallback).
8. Implement real **Share** (Web Share API) and **Download Image** (render to canvas → PNG).
9. Decide whether **Comments** get a real backend or are removed.
10. Add `prefers-reduced-motion` handling; add real routes; self-host fonts; confirm Maragsa license.
