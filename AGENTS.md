# xero.dev — ARCHIVAL TECHNICAL BRUTALIST

## Context

Project-wide context for the xero.dev personal blog and portfolio. This is a
Next.js 16 application with a self-described "archival technical brutalist"
design theme — warm archival tones, grid-like layout, monospace body copy,
custom cursor, and subtle glitch/ink effects. Content is a mix of blog posts,
project index, and about/contact pages.

**Parent context:** (root)
**Child contexts:** [src/AGENTS.md](./src/AGENTS.md)

---

## Tech Stack

| Layer          | Choice            | Notes                                |
| -------------- | ----------------- | ------------------------------------ |
| Framework      | Next.js 16        | App Router (`src/app/`)              |
| Language       | TypeScript 5.9    | Strict mode, `@/*` → `./src/*`       |
| UI Runtime     | React 19          | Server & client components           |
| Animation      | Framer Motion 12  | Hooks (useMotionValue, useSpring)    |
| Smooth Scroll  | Lenis 1.3         | Scrolling library                    |
| Content        | Markdown (blog)   | MD via react-markdown + rehype/remark|
| Analytics      | Vercel Analytics + Speed Insights  |                  |
| Styling        | CSS Modules + JSX `style` | `globals.css` design tokens via CSS vars |
| Linting        | ESLint 9          | eslint-config-next                   |

---

## Key Paths

| Path                     | Purpose                                    |
| ------------------------ | ------------------------------------------ |
| `src/app/layout.tsx`     | Root layout — fonts, providers, sidebar, nav, analytics |
| `src/app/page.tsx`       | Home — project grid (FolderCard)           |
| `src/app/globals.css`    | Design system — CSS vars, reset, themes (light/dark) |
| `src/app/about/`         | About page — timeline, skills, socials     |
| `src/app/contact/`       | Contact page                               |
| `src/app/lab/`           | Blog index — tag filter, BlogCard grid     |
| `src/lib/blogData.ts`    | All blog post data (frontmatter fields + markdown) |
| `src/components/`        | Component library (see child AGENTS.md)    |
| `src/hooks/`             | Custom React hooks (useMagnetic, useTilt)  |
| `content/posts/`         | Raw markdown files for blog posts          |
| `public/images/cats/`    | Pixel cat avatar images                    |

---

## Conventions

- **Client components** — any component with interactivity (hooks, event handlers, state) MUST have `'use client'` at the top. Layout and pages without interactivity remain server components.
- **CSS Modules** — files named `ComponentName.module.css` alongside the component. Inline `<style jsx>` blocks used in page components for page-specific styles.
- **CSS Variables** — all colors, spacing, fonts, and layout constants are defined as `--var-name` in `globals.css` `:root` / `[data-theme="dark"]`. **Do not hardcode** values; reference the variables.
- **Dark theme** — toggled via `data-theme="dark"` on `<html>`, persisted in `localStorage('theme')`. Toggle is in `TabNavigation`.
- **Path alias** — `@/` maps to `./src/`. All imports use this (no relative `../../../`).
- **Fonts** — Space Mono (mono), Courier Prime (body), Old Standard TT (headers) — loaded via `next/font/google` in `layout.tsx`.
- **No page suffix** — use `.tsx` extension, directory-based routes (`app/about/page.tsx`).

---

## Ownership

- **Chrome / layout** (sidebar, nav, footer, cursor, scrollbar, theme) — Layout layer in `src/app/layout.tsx` + components it imports.
- **Content** (blog data, page content) — `src/lib/blogData.ts` and `content/posts/`.
- **Effects** (cursor, ink blot, scroll progress, text scramble, stagger, section dividers) — `src/components/effects/`.
- **Design system** — `src/app/globals.css` is the single source of truth for visual tokens.

---

## Constraints

- `next.config.mjs` is minimal (only `devIndicators: false`). Do not add heavy build plugins without review.
- CSS Modules co-exist with `<style jsx>` — but never mix both in the same component for the same selector.
- Custom cursor (`cursor: none`) is desktop-only via `@media (pointer: fine)`. Must not interfere with mobile touch.
- `prefers-reduced-motion` media query is respected in `globals.css`.
- Vercel deployment — no edge functions, standard Node.js runtime.
