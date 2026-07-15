# Knod

Marketing site for **Knod** — connection infrastructure for physical spaces. Knod helps event hosts, campuses, and communities turn a room full of strangers into the conversations worth having, through a simple event link or QR code. No app download.

Production: [knod.ai](https://knod.ai)

## Stack

| | |
|---|---|
| Framework | React 19 + TypeScript |
| Build | Vite 6 |
| Styling | Tailwind CSS 4 (via `@tailwindcss/vite`) |
| Routing | React Router 7 |
| Animation | Motion |
| Icons | Lucide |
| Hosting | Vercel |

Static site — no backend, no database.

## Run locally

**Prerequisite:** Node.js 18+

```bash
npm install
npm run dev
```

Runs at [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Dev server with HMR on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Typecheck (`tsc --noEmit`) |
| `npm run clean` | Remove `dist/` |

## Layout

```
src/
├── pages/        One component per route (see App.tsx)
├── components/   Shared UI + homepage sections
├── contexts/     DemoModalContext — the global "Book a Demo" modal
├── hooks/        useSEO — per-page title, description, canonical, OG tags
├── lib/          SEO constants
└── assets/       Images
```

**Routes** are declared in [`src/App.tsx`](src/App.tsx). Adding a page means creating it in `src/pages/`, registering a `<Route>`, and calling `useSEO` inside it.

**Book a Demo** is a single shared modal. Don't mount your own — pull it from the context:

```tsx
import { useDemoModal } from "../contexts/DemoModalContext";

const { openDemo } = useDemoModal();
<button onClick={openDemo}>Book a Demo</button>
```

## Conventions

- Brand tokens (`brand-black`, `brand-blue`, `brand-accent-blue`) live in `src/index.css` under `@theme`.
- Headline signature: `font-medium` heading with an `italic font-light text-brand-blue` accent word.
- Cards/panels use `rounded-[2rem]`; buttons and pills use `rounded-full`.
- See [`docs/brand-guidelines.md`](docs/brand-guidelines.md) for voice, color, and typography.

## Deploying

Pushes to `main` deploy automatically via Vercel.
