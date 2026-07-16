# src/ — Application Source

## Context

Source-specific context for the Next.js App Router application. This directory
contains all application code: pages, components, hooks, utilities, and
global styles.

**Parent context:** [AGENTS.md](../AGENTS.md)
**Child contexts:** [components/AGENTS.md](./components/AGENTS.md)

---

## Module Layout

```
src/
├── app/                  # App Router pages & layout
│   ├── globals.css       # Design system (CSS custom properties, themes, reset)
│   ├── layout.tsx        # Root layout — fonts, providers, chrome components
│   ├── template.tsx      # Page transition template
│   ├── loading.tsx       # Loading state (Suspense fallback)
│   ├── not-found.tsx     # 404 page
│   ├── page.tsx          # Home route (/)
│   ├── about/page.tsx    # About page (/about)
│   ├── contact/page.tsx  # Contact page (/contact)
│   └── lab/page.tsx      # Blog index (/lab)
├── components/           # Component library (see child AGENTS.md)
├── hooks/                # Custom React hooks
│   ├── useMagnetic.ts    # Magnetic mouse-follow effect
│   └── useTilt.ts        # 3D tilt effect on hover
└── lib/
    └── blogData.ts       # Blog post data store (typed, static)
```

---

## Routing

All routes are directory-based under `app/`. The **TabNavigation** component in
the chrome layer handles client-side navigation between the four top-level
tabs: PROJECTS (/), ABOUT (/about), LAB (/lab), CONTACT (/contact).

---

## Data Layer

- **Blog posts** — all content lives in `src/lib/blogData.ts` as a typed array
  of `BlogPost` objects. Each post has `slug`, `title`, `excerpt`, `date`,
  `tags`, `content` (markdown string), and `readingTime`. The `Lab` page reads
  this at build time (server component) and renders via `BlogCard`.
- **Projects** — hardcoded inline in `src/app/page.tsx`. Each project has
  `name`, `description`, and `link`. They render through `FolderCard`.

---

## Patterns

1. **Page-level metadata** — each route directory's `page.tsx` exports a
   `metadata` object for `<head>`.
2. **CSS Modules** — co-located `.module.css` files for component styles.
   Page-specific overrides use `<style jsx>` blocks.
3. **Hook usage** — Framer Motion hooks (`useMotionValue`, `useSpring`) are
   extracted into `src/hooks/` for reuse.
4. **Client boundary** — `'use client'` directive only where interactivity is
   needed (event handlers, state, context, useEffect).

## Ownership

| Area              | Responsible Profile |
| ----------------- | ------------------- |
| Pages & Layout    | Full-stack / Next.js |
| Components        | UI / React          |
| Hooks             | Creative Dev / Framer Motion |
| Data & Content    | Content / Typed data |
| Design System     | Design / CSS        |
