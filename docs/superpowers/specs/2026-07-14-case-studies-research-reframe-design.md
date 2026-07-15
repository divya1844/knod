# Case Studies & Research Reframe — Design Spec

**Date:** 2026-07-14
**Branch:** `claude/case-studies-research-reframe`
**Files touched:** `src/pages/CaseStudiesPage.tsx`, `src/components/TestimonialsAndResearchSection.tsx`, `public/images/case-studies/` (new)

---

## Goal

Turn the Case Studies page from a short, mixed list into a richer, photo-ready set of real
case studies — and separate the peer-reviewed UIC research (the "12x" paper) from the client
stories so each does its own job.

Two kinds of proof, told separately:
1. **Peer-reviewed research** — third-party academic validation (the 12x controlled study,
   now published by Springer). Promoted to a credibility band near the hero.
2. **Field case studies** — "we ran this in real rooms for real organizations": Chicago
   Innovation, UIC (classroom deployment), Google DeepMind hackathon.

Decision: **Option B** — the *paper* becomes the research band, AND UIC *also* remains a full
case study for Dr. Chin's real classroom deployment. UIC appears in both roles, telling two
different things (the controlled experiment vs. real ongoing usage).

## Confirmed facts (source of truth)

- **Springer paper URL:** https://link.springer.com/chapter/10.1007/978-3-032-30826-9_27
  - Title: "AI-Powered Connection: Solving the Handshake Problem to Increase Human Connection by 12x"
  - Published in HCI International 2026 Posters, Part IV (HCII 2026), pp. 265–274. First Online 09 July 2026.
- **"AI makes networking more meaningful" stat = 65.2%** (authoritative). The homepage's
  `63.6%` is WRONG and must be corrected to `65.2%`.
- **Photos:** 8 real event photos in `public/images/case-studies/`, optimized for web:
  - `chicago-innovation-hero.jpg` (panel on stage, ornate ballroom, Knod screen),
    `chicago-innovation-1.jpg` (Knod table-tent + QR on CI-branded cloth),
    `chicago-innovation-2.jpg` (balcony view of full room).
  - `uic-hero.jpg` (lecture hall, "IDS 200 UIC Course" screen, UIC podium),
    `uic-1.jpg` (students mingling in brutalist hall). `uic-2.jpg` MISSING (lost in
    optimization; user to re-drop) — that slot uses the branded fallback until then.
  - `deepmind-hero.jpg` (networking at Drive Capital), `deepmind-1.jpg` (Vibecoding
    Hackathon w/ Google's DeepMind event poster), `deepmind-2.jpg` (check-in line).
  - Build real photo slots; branded fallback for any missing/erroring image.
- **Quotes (all REAL, pulled from `TestimonialsAndResearchSection.tsx`):**
  - Chicago Innovation → **Paul Kitti**, VP Marketing & Events, Chicago Innovation (host voice);
    optional second attendee quote → **Rylee Johnson**, MainStreet Investment Advisors.
  - DeepMind hackathon → **Kaya Jones**, Event Organizer, Forever 22 (verified: Forever 22
    appears on the event poster).
  - UIC → **UIC Business Student** ("...despite being an introvert I do enjoy talking to people").
  - NO invented quotes anywhere.

## Architecture: index → detail (mirrors existing Blog pattern)

The app uses `<BrowserRouter>` + `<Routes>` in `App.tsx`; Blog already does index (`/blog`)
→ detail (`/blog/:post`) with a shared detail-page layout (back-link, hero image, body,
newsletter CTA). Case studies follow the same pattern:

- `/case-studies` — index. Keep the card style; cards become clickable `<Link>`s to detail
  pages. Add the peer-reviewed research band + the "by the numbers" section.
- `/case-studies/:slug` — NEW detail page (`CaseStudyDetailPage.tsx`), one per study
  (`chicago-innovation`, `uic`, `deepmind`). Reads `slug` via `useParams`; unknown slug →
  redirect to `/case-studies` or NotFound.
- Shared data module `src/lib/caseStudies.ts` — single source consumed by BOTH the index
  cards and the detail pages (title, client, type, slug, hero image, gallery, narrative
  sections, stats/timeline, quote(s), Springer reference for UIC).
- Routes added to `App.tsx` for each slug (mirroring the explicit Blog route style), OR a
  single `/case-studies/:slug` param route. Decision: single param route (cleaner, 3 studies).

---

## Current state

`CaseStudiesPage.tsx` renders:
- Hero ("Real results, real rooms.")
- Aggregate stats (`AGGREGATE`) + definitions (`DEFINITIONS`)
- `CASE_STUDIES` array of 3 studies rendered by one large `motion.article` map:
  - `01` UIC controlled study (holds the 12x `comparison`, `perception`, `encore`, `quote`, `reference`)
  - `02` Chicago Innovation (`events` timeline, `closer`)
  - `03` DeepMind hackathon (`stats`, `closer`)
- Methodology note + CTA (opens `BookDemoModal`)

`TestimonialsAndResearchSection.tsx` (homepage) has a "Validated by Research" 3-card block:
12x card, and a `63.6%` card labelled "(Published research, 2024)".

---

## Target structure — Case Studies page

1. **Hero** — unchanged copy.

2. **NEW: Peer-Reviewed Research band** (replaces UIC-as-case-study-01)
   - Distinct visual treatment (dark or brand-blue band) so it reads as academic validation, not a story.
   - Content: the **12x** figure, the two perception stats (**65.2%** more meaningful, **91.3%** open to AI-assisted connection), one-line framing of the controlled experiment (41 students, 3 min vs 3 min, 4.9% → 58.5%).
   - Primary action: **"Read the peer-reviewed paper on Springer →"** linking to the confirmed URL (opens new tab, `rel="noopener noreferrer"`).
   - This band OWNS the 12x + paper reference. The 12x is removed from the case-study cards.

3. **By the numbers** — keep `AGGREGATE` + `DEFINITIONS` unchanged.

4. **Three field case studies — as clickable cards linking to full detail pages.**
   Order: Chicago Innovation, UIC, DeepMind. On the index, each is a card (existing style)
   with a hero-image thumbnail, client, type, one-line hook, and a "Read the story →" link to
   `/case-studies/:slug`. The full narrative lives on the detail page, which carries:
   - **Hero image** (16:9) — real photo if present, else branded fallback block (client · venue ·
     date on a color panel). Never a broken image, never a fake stock photo.
   - **The Challenge** → **In the Room** → **What Knod Did** → **The Results** (stat grids/
     timelines) → **Quote(s)** → an in-page **photo gallery** (remaining slots, same fallback rule).
   - Longer narrative copy than today (competitor-level richness).
   - **UIC detail page** tells the *classroom deployment* story (Dr. Chin, 3 IDS sections,
     82 students, 245 nods, 145 mutual connections, ~59% match rate). The controlled 12x
     experiment is NOT repeated here — it lives in the research band. A short pointer links up
     to the research band / Springer paper.

5. **Methodology note** — keep; ensure it still reads correctly after the 12x moves to the band.

6. **CTA** — unchanged (`BookDemoModal`).

---

## Image handling

- New folder: `public/images/case-studies/`.
- Expected filenames (auto-wired; missing files fall back gracefully):
  - `chicago-innovation-hero.jpg`, `chicago-innovation-1.jpg`, `chicago-innovation-2.jpg`
  - `uic-hero.jpg`, `uic-1.jpg`, `uic-2.jpg`
  - `deepmind-hero.jpg`, `deepmind-1.jpg`, `deepmind-2.jpg`
- **Fallback component** (`CaseImage` or similar): renders the `<img>` when the file exists; on
  error (`onError`) OR when no src is configured, renders a branded placeholder panel (client +
  venue + date on a brand color) so the layout is never broken and nothing fake ships.
- Images: `loading="lazy"`, explicit `alt` text, `object-cover`, rounded to match cards.

## Data model changes (`CaseStudiesPage.tsx`)

- Extract the UIC 12x data (`comparison`, `perception`, `reference`) into a new `RESEARCH`
  constant that feeds the research band.
- Restructure `CASE_STUDIES` to the 3 field stories with expanded `sections` and new optional
  `heroImage` / `images[]` fields per study.
- Add a small `CaseImage` sub-component for the fallback behavior.
- Keep `StatCard`, `sectionLabel`, motion patterns, and existing stat/timeline rendering.

## Homepage fixes (`TestimonialsAndResearchSection.tsx`)

- Line ~188: `63.6` → `65.2`.
- Line ~197: `(Published research, 2024)` → `(Peer-reviewed, HCI International 2026)`.
- Add a subtle "Read the paper →" link to the Springer URL on the research card.

---

## Out of scope

- No changes to navigation, footer, other pages, or the `BookDemoModal`.
- No new dependencies.
- No real photos committed by this work (user supplies them); we only build the slots + fallback.
- No unrelated refactoring of `TestimonialsAndResearchSection` beyond the three fixes above.

## Success criteria

- Case Studies page shows a distinct peer-reviewed research band with a working Springer link.
- The 12x figure appears in the research band, NOT as a case study.
- Three field case studies render with photo slots; empty slots show branded fallbacks (verified
  by loading the page with no images present).
- UIC classroom-deployment story is present as case study #2 (per Option B).
- Homepage research stat reads **65.2%** and the date is corrected; Springer link works.
- `npm run lint` (tsc --noEmit) passes; page renders at `/case-studies` with HTTP 200 and no
  console errors; hard-refresh shows the new layout.
