# Creative Director Portfolio Framework

A production-ready, content-independent portfolio framework for a creative director, built as a
static React + Vite single-page application.

This is a **framework**, not a finished portfolio: every project, bio detail, and contact address
in the site is fictional placeholder content. The goal is a system that can absorb real project
data later by editing files in `src/data/` — no component changes required.

## Stack

- **React 19** + **TypeScript**
- **Vite** for build/dev tooling
- **React Router** for client-side routing
- Hand-written modern CSS (custom properties as design tokens, no CSS framework)
- **Netlify Forms** for the contact form (no server functions, no backend)

There is no SSR, no server functions, and no database — the site is a fully static build deployed
to Netlify's CDN.

## Getting started

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  data/         # Content layer — projects, categories, nav, site config. Edit these to add real content.
  components/   # Reusable, data-driven UI building blocks (ProjectCard, CaseStudy blocks, Navbar, etc.)
  pages/        # Route-level views that compose components with data
  styles/       # Design tokens and global CSS
public/
  placeholders/ # Neutral placeholder SVG imagery used by placeholder projects
  __forms.html  # Static skeleton so Netlify's build bot can detect the contact form
```

## Adding a real project

Add an object to the `projects` array in `src/data/projects.ts` matching the `Project` type in
`src/data/types.ts`. Every field beyond `id`, `title`, `categories`, `disciplines`,
`shortDescription`, and `thumbnail` is optional — the case study renderer only shows the blocks a
project actually provides.

## Routing on Netlify

`netlify.toml` publishes the Vite `dist` output and rewrites all paths to `index.html` with a
200 status, so client-side routes (including `/work/:projectId`) resolve correctly on direct
navigation and on page refresh.
