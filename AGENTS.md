# AGENTS.md

## What this is

A static, client-side-only portfolio framework for a creative director. Deliberately excludes
SSR, server functions, a database, and authentication — the brief calls for the simplest reliable
architecture, not the most capable one.

## Architecture

- **Vite + React + TypeScript**, built to static assets in `dist/`.
- **React Router (`BrowserRouter`)** handles all routing. `netlify.toml` contains a catch-all SPA
  redirect (`/* -> /index.html`, status 200) so nested routes work on direct load and refresh.
- **Content lives in `src/data/`, never in components.** `src/data/types.ts` defines the `Project`
  and `CaseStudyBlock` shapes; `src/data/projects.ts` holds the placeholder project objects.
  Components (`ProjectCard`, `ProjectGrid`, `CaseStudy`, etc.) only ever consume this data — they
  never hardcode project content.
- **Case studies are block-based.** A project's `sections` array is an ordered list of typed
  blocks (`intro`, `text`, `image`, `imageGrid`, `gallery`, `video`, `videoGrid`, `quote`, `stats`,
  `challenge`/`approach`/`execution`/`outcome`, `credits`). `src/components/CaseStudy.tsx` maps
  each block type to a renderer. Every block renderer returns `null` when its required data is
  missing, so partial or uneven project data never produces empty headings or broken containers.
- **Two independent classification systems**: `industries` and `disciplines` in
  `src/data/categories.ts`. These are structural lists; the actual filter chips on `/work` are
  derived from whichever categories/disciplines are present in `projects`, so the filter UI never
  offers a filter with zero possible results.

## Key directories

- `src/data/` — the entire content layer (config, nav, projects, categories, expertise, approach,
  still-building copy). Edit these files to change content; nothing else should need to change.
- `src/components/` — reusable, composable UI primitives. Anything rendering project or case
  study content should live here, not inline in a page.
- `src/pages/` — one file per route. Pages compose data + components; they hold layout and page
  copy, not reusable logic.
- `src/styles/tokens.css` — the single source for color, type scale, spacing, radii, and motion
  timing. New components should consume these variables rather than introducing new literals.
- `public/placeholders/` — generated neutral SVG placeholder imagery (varied aspect ratios) used
  by placeholder projects. Replace with real media by pointing `Project.thumbnail`/`heroMedia`/
  `gallery`/`videos` entries at new files in `public/`.

## Conventions

- Every media-rendering component (`MediaBlock`, `Gallery`, `VideoBlock`) omits itself (`return
  null`) when its data is absent, rather than rendering an empty box — preserve this when adding
  new block types.
- Motion is CSS-only (`Reveal` component + `IntersectionObserver`) and respects
  `prefers-reduced-motion` via the token overrides in `tokens.css`. Avoid animation libraries.
- The contact form uses **Netlify Forms**, not a server function. `public/__forms.html` is a
  hidden static skeleton that lets Netlify's build bot detect the form fields at build time — its
  field names must stay in sync with `src/pages/Contact.tsx`. If new fields are added to the form,
  add them to both places.

## Non-obvious decisions

- `vite.config.ts` resolves `__dirname` via `fileURLToPath(import.meta.url)` because the project
  is ESM (`"type": "module"` in `package.json`), where `__dirname` isn't otherwise available.
- `tsc --noEmit` runs before `vite build` in the `build` script as a type-check gate; it is not a
  project-references build (`tsc -b`), so there is a single flat `tsconfig.json`.
