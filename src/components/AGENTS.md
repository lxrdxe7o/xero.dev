# src/components/ — Component Library

## Context

Component-specific context for the xero.dev UI component library. All
components follow a technical/archival aesthetic with brutalist grid layouts,
monospace typography, and subtle mouse-driven effects (magnetic, tilt).

**Parent context:** [AGENTS.md](../AGENTS.md)

---

## Component Inventory

### Chrome / Layout

| Component        | File                 | Purpose                                      |
| ---------------- | -------------------- | -------------------------------------------- |
| `Sidebar`        | `Sidebar.tsx`        | Navigation sidebar, branded header           |
| `TabNavigation`  | `TabNavigation.tsx`  | Top tab bar (01-04 tabs) + theme toggle      |
| `Header`         | `Header.tsx`         | Page-level header / breadcrumb               |
| `Footer`         | `Footer.tsx`         | Site footer                                  |

### Content Displays

| Component              | File                      | Purpose                            |
| ---------------------- | ------------------------- | ---------------------------------- |
| `BlogCard`             | `BlogCard.tsx`            | Blog post card (grid item)         |
| `FolderCard`           | `FolderCard.tsx`          | Project folder card (home page)   |
| `Folder`               | `Folder.tsx`              | Collapsible folder container       |
| `Stamp`                | `Stamp.tsx`               | Red stamp overlay (approved/etc.)  |
| `MarkdownRenderer`     | `MarkdownRenderer.tsx`    | MD → React with code highlighting  |
| `TechBadge`            | `TechBadge.tsx`           | Small tech stack label             |
| `HeroSection`          | `HeroSection.tsx`         | Hero section block                 |
| `Typewriter`           | `Typewriter.tsx`          | Typewriter animation text          |
| `NewsTicker`           | `NewsTicker.tsx`          | Scrolling news ticker bar          |

### Effects (src/components/effects/)

| Component          | File                       | Purpose                                  |
| ------------------ | -------------------------- | ---------------------------------------- |
| `CustomCursor`     | `effects/CustomCursor.tsx` | Animated cursor follower (rAF)           |
| `ScrollProgressBar`| `effects/ScrollProgressBar.tsx` | Top reading progress bar               |
| `InkBlot`          | `effects/InkBlot.tsx`      | Decorative ink splatter background       |
| `TextScramble`     | `effects/TextScramble.tsx` | Scramble-reveal text animation           |
| `StaggeredGrid`    | `effects/StaggeredGrid.tsx`| Staggered child reveal animation         |
| `SectionDivider`   | `effects/SectionDivider.tsx`| Section separator (stamp or line)       |
| `RedactedText`     | `effects/RedactedText.tsx` | Redacted / censored text effect          |

### Sections (src/components/sections/)

| Component      | File                     | Purpose                           |
| -------------- | ------------------------ | --------------------------------- |
| `DocumentReel` | `sections/DocumentReel.tsx`| Blog-post documentary reel       |

### Providers (src/components/providers/)

| Component           | File                           | Purpose                   |
| ------------------- | ------------------------------ | ------------------------- |
| `AnimationProvider` | `providers/AnimationProvider.tsx` | Framer Motion LazyMotion wrapper |

---

## Patterns

1. **CSS Module per component** — every component with visuals has a
   co-located `ComponentName.module.css`. Styles reference `var(--...)` CSS
   custom properties from `globals.css`.
2. **Framer Motion hooks** — `useMagnetic`/`useTilt` are extracted to
   `src/hooks/`. Components apply motion via spring-based `useSpring`.
3. **Ink / paper palette** — colors reference `--ink`, `--paper`, `--ink-dim`,
   `--paper-grain`, `--accent-red`, `--accent-blue`. Never hardcode hex.
4. **Component interface** — props are typed with inline `interface` or `type`,
   exported when shared. Use `React.FC<Props>` or direct function signature.
5. **No barrel exports** — each component is a default export from its own
   file. Import with `@/components/ComponentName`.

---

## Constraints

- All interactive components (event handlers, hooks, state) require
  `'use client'` directive. Pure presentational components can be server
  components.
- Custom cursor uses `requestAnimationFrame` (not Framer Motion) — the Framer
  Motion version was replaced in commit `11359cb`.
- `AnimationProvider` wraps `LazyMotion` with `domAnimation` — do not add
  `m`-prefixed variants without ensuring the feature bundle is loaded.
- `.module.css` files **must not** be imported in server components that pass
  class names to client children (class name mismatch on SSR). Apply via
  client component boundary or inline styles.
