# Knod Brand Guidelines

Source of truth for Knod's visual identity, voice, and naming. This is a first draft, **reverse-engineered from what's actually implemented** in this repo (`src/index.css`, `src/components/*`, `src/pages/*`) as of 2026-07-09 — not a pre-existing brand doc. Treat it as a snapshot to correct/ratify, not a final spec handed down from a design team.

## 1. Naming — needs a decision

The codebase currently uses three different forms inconsistently:

| Form | Where used | Count |
|---|---|---|
| **Knod** | Navbar wordmark, Footer wordmark, all page headings/CTAs, most body copy | Dominant — treat as primary |
| **Knod.ai** | `LaunchPartnerPage.tsx:132`, `PricingPage.tsx:234` (both "featured on Knod.ai") | 2 occurrences |
| **Knod AI** | `BlogDetailPage.tsx:32`, `BlogPage.tsx:13,22`, `HowItWorksPage.tsx:183` (mascot alt text) | 4 occurrences |

**Recommendation:** standardize on **"Knod"** as the product/brand name everywhere in UI copy and headings. Reserve **"Knod.ai"** only for the literal domain/URL context (e.g., "visit Knod.ai", social handles). Retire **"Knod AI"** — it reads like a separate AI-product sub-brand and isn't used anywhere near the actual navbar/footer identity. This was flagged as a deferred cleanup in the 2026-07-08 audit and is still unresolved.

## 2. Voice & Tone

Derived from the highest-visibility copy (Hero, Mission, Footer):

- **Short, declarative fragments over long sentences.** *"Turn rooms into connections."* / *"A future client. A mentor. A cofounder. A new hire. An investor."*
- **Bold, slightly aphoristic claims for section headers.** *"Human connection is infrastructure."* / *"Because the most important connection in the room shouldn't be accidental."*
- **Warm but not casual** — no slang, no exclamation points, no emoji in copy. Confident register ("Knod helps people find the conversations that move them forward"), not hype-y startup-speak.
- **Concrete over abstract in supporting copy.** CTAs and feature descriptions favor plain mechanics ("They scan a QR code. No download. No app.") over marketing fluff.
- **Sentence-case, not Title Case**, for headings in the copy itself (e.g., "Seamless integration. Real impact.") — note the 2026-07-08 audit flagged some Title Case drift elsewhere; sentence-case is the target.
- **Curly quotes** in prose (`'they're here'` renders via `'` in JSX) — the 2026-07-08 audit flagged stray straight quotes as a lingering inconsistency to clean up.

### Recurring CTA vocabulary
"Book a Demo" · "See How It Works" · "Request Early Access" · "Get Started" · "Start creating" · "Learn what launch partners get"

## 3. Color

Defined in `src/index.css` under `@theme`:

| Token | Value | Use |
|---|---|---|
| `--color-brand-black` | `#111112` | Primary text, dark surfaces |
| `--color-brand-blue` | `#0071e3` | Primary action color ("Premium Apple design system blue" per code comment) |
| `--color-brand-accent-blue` | `#38b6ff` | Secondary/gradient accent ("Original Knod blue" per code comment) |
| `--color-brand-white` | `#ffffff` | — |
| Page background | `#f5f5f7` (hardcoded, not tokenized) | Body background |

**Not currently tokenized** — used as raw hex directly in component `className`s, no semantic names:
- Card accent palette: `#FF4D00` (orange), `#0033FF` (blue), `#FD3482` (pink), `#FF0055`, `#ffaa00`, `#004A22`, `#ff5500`
- Dark UI surfaces: `#0a0a0a`, `#18181b`, `#27272a`, `#0a0f16`
- Neutral surfaces: `#eaeaea`, `#f4f4f5`

**Open note:** the two "brand blue" tokens (`brand-blue` vs `brand-accent-blue`) coexist without a documented rule for when to use which — in practice `brand-blue` is the workhorse (buttons, links, focus rings) and `brand-accent-blue` shows up mainly in the hero's gradient card. The card-accent palette above (orange/pink/hot-blue) is vivid and off-brand relative to the blue/black/white system used everywhere else — worth a deliberate decision on whether it's an intentional "bento card" sub-palette or drift.

## 4. Typography

- **Single typeface: Inter**, loaded via Google Fonts `@import`, used for all three theme roles (`--font-sans`, `--font-serif`, `--font-serif` and `--font-mono` all resolve to Inter with different fallback stacks). There is no true serif or monospace in use — this is a simplification worth being explicit about rather than implicit.
- **Fluid type scale via `clamp()`** — `--text-base` through `--text-7xl` all scale with viewport width, avoiding hard breakpoint jumps for font size.
- **Weight/style as the differentiator**, not font family: headlines pair `font-medium` body weight with an `italic font-light text-brand-blue` accent word (e.g., "Turn rooms into *connections.*") — this italic-accent-word pattern repeats across nearly every section headline and is a signature move, not incidental.

## 5. Shape & Effects

- **Radius:** `rounded-[2rem]` (32px) is the default for cards/panels; `rounded-full` for buttons, pills, and avatars. Very little use of small/sharp radii — rounded-everything is the house style.
- **"Liquid glass" motif:** `backdrop-blur-*` + semi-transparent white borders + soft inset highlights, used in the hero visual card and the demo modal. This is a distinct, named pattern in the code (`hero-glass-canvas-card`, `demo-modal-dialog` ids) worth preserving as a recognizable Knod UI signature rather than one-off styling.
- **Motion:** spring-physics card decks (`HorizontalScrollSection`), linear-looping marquees (partners, testimonials, tag pills, event photos). Only the Trusted Partners marquee currently respects `prefers-reduced-motion` (`motion-reduce:animate-none`) — the rest do not, which is an accessibility gap, not a style choice.

## 6. Logo & Mascot

- **Wordmark:** a solid `brand-blue` circle + "Knod" in `font-bold tracking-tighter` — no standalone logo file, it's composed live in `Navbar.tsx`/`Footer.tsx`. There is no exported/standalone logo asset (SVG/PNG) in `public/` — only favicons and the mascot.
- **Mascot:** `public/knod_mascot.png`, used in the footer and on `HowItWorksPage`. Alt text is inconsistently "Knod Mascot" vs "Knod AI Mascot" (see naming section above).

## 7. Known gaps (not yet covered by this doc)

- No formal messaging framework / positioning statement beyond what's inferable from hero + mission copy.
- No documented rule for the card-accent color palette (section 3).
- No logo usage rules, clear-space, or minimum-size guidance — there's no standalone logo asset to govern yet.
- No dark-mode variant exists site-wide (the pricing/footer/modal dark surfaces are component-local, not a theme mode).
