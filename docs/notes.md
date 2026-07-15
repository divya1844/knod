# Engineering notes

Known issues and deferred work. Add to this rather than letting context die in a chat log.

---

## Prerendering / SEO — crawlers see an empty shell

**Status:** open. Reverted, not solved.

### What's wrong

The site is a client-side SPA. `index.html` ships as a ~2 KB shell with no content;
React Router renders everything in the browser. Crawlers that don't execute JavaScript
see nothing. `useSEO` sets title/description/canonical/OG tags at runtime, which has the
same problem — the tags aren't in the served HTML.

### What was tried

Commit `f5da699` ("Prerender routes at build time so crawlers see real content") added
`scripts/prerender.mjs`: it ran `vite preview`, drove **puppeteer** over every route in
`public/sitemap.xml`, and wrote each rendered DOM to `dist/<route>/index.html`.

It worked locally. It failed on every Vercel build:

```
Error: Failed to launch the browser process: Code: 127
/vercel/.cache/puppeteer/chrome/linux-150.0.7871.24/chrome-linux64/chrome:
  error while loading shared libraries: libnspr4.so
Error: Command "npm run build" exited with 1
```

Puppeteer downloads its own Chromium, but Vercel's build image (Amazon Linux) lacks that
binary's system libraries, and there's no way to `apt-get` them on the Hobby plan. Because
`build` was `vite build && node scripts/prerender.mjs`, a failed prerender failed the whole
build — production froze on an older deploy for ~13 hours until `6b9565b` reverted it.

**The approach was right; the Chromium was wrong.**

### Two paths that actually work

1. **`puppeteer-core` + `@sparticuz/chromium`** — a Chromium built for Amazon Linux, which
   is what Vercel runs. Closest to the reverted code; keeps the "snapshot the real DOM"
   approach, so framer-motion entrance animations still settle before capture.
   Cost: an extra heavy dependency, and it can only be proven by deploying.

2. **Browser-free render via `react-dom/server`** — `renderToString` each route at build
   time behind `StaticRouter`. No Chromium, so nothing to break in CI.
   Cost: a real refactor. Any code touching `window`/`document` during render must be
   guarded, and animated-in content needs its initial state to be visible rather than
   `opacity: 0`, or the snapshot bakes in hidden content.

### If you retry

- Keep the prerender step **non-fatal**, or keep it out of the default `build` script.
  A broken SEO nicety must never block deploys again.
- `vercel.json` rewrites run *after* the filesystem check, so prerendered
  `dist/about/index.html` will be served in preference to the SPA fallback automatically.
  Both can coexist — no config change needed when prerendering comes back.

---

## Soft 404s

**Status:** open, low priority. Consequence of the SPA fallback.

`vercel.json` rewrites unmatched paths to `/index.html`, so a bogus URL returns **HTTP 200**
and React Router client-renders `NotFoundPage`. Users see the right page; crawlers see a
"soft 404" — a 200 that should have been a 404. Prerendering (above) would fix this for
known routes. A true 404 status needs the host to know the route list.

---

## Smaller items

- `@types/express` is still in `devDependencies` — leftover from removing `express`.
- `/pledge` and `/style-guide` are routed but nothing links to them; reachable only by
  direct URL. `/style-guide` is probably intentional (dev page).
- Vercel Hobby blocks preview deploys from non-collaborators on private repos, so pushes
  from outside contributors show as **Blocked**. Production deploys are unaffected.
