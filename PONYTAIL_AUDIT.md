# Ponytail Audit — xero.dev

`delete:` **8 unused component files** (Header, Footer, HeroSection, Typewriter, NewsTicker, ProjectCard, RedactedText, TechBadge). None imported by layout or any page. Replacement: `rm`. [src/components/Header.tsx, Footer.tsx, HeroSection.tsx, Typewriter.tsx, NewsTicker.tsx, ProjectCard.tsx, RedactedText.tsx, TechBadge.tsx + their .module.css files]

`delete:` **src/app/page.module.css (531 lines)**. Imported by zero pages. Home page uses inline `<style jsx>`. [src/app/page.module.css]

`delete:` **`.texture-overlay` in reduced-motion block**. Class removed in c891291; selector now targets nothing. [src/app/globals.css:170-172]

`delete:` **`container` class referenced but undefined**. About, lab, contact, and blog-slug pages use `className="container"` — no `.container` rule exists in globals.css. Either define it or drop it. [src/app/about/page.tsx:43, src/app/lab/page.tsx:16, src/app/contact/page.tsx:11, src/app/lab/[slug]/page.tsx:25]

`yagni:` **SectionDivider tape variant**. `TapeDivider` component defined, never invoked. Only `stamp` and `line` used. [src/components/effects/SectionDivider.tsx:60-74]

`yagni:` **BlogCard coverImage branch**. `BlogPost` type has no `coverImage` field. No post supplies one. The image-wrapper JSX (lines 36-46) is dead. [src/components/BlogCard.tsx:36-46]

`shrink:` **Folder.tsx + FolderCard.tsx duplicate folder CSS**. Both carry near-identical `<style jsx>` blocks (~100 shared lines: tab, body, content, dark-mode overrides, hardcoded hex colors). Extract to a shared CSS module or define as `--folder-*` vars. [src/components/Folder.tsx, src/components/FolderCard.tsx]

`shrink:` **GearSVG useEffects**. Computes gear tooth SVG paths client-side on every mount. Could be a single static `<path>` in a .module.css `::before` or computed once at module level. [src/components/BackgroundGears.tsx:98-149]

`shrink:` **AnimatedCounter for static value**. Animates the number 9 for "PROJECTS: 9". A static `<span>9</span>` suffices — no counter animation needed for a constant. [src/components/Sidebar.tsx:6-24,70]

`stdlib:` **BlogCard uses material-icons arrow_forward**. No material-icons font loaded; renders empty. Replace with `→` or inline SVG. [src/components/BlogCard.tsx:65]

`native:` **TabNavigation `hide-mobile` class**. References a class not defined in globals.css. TabNavigation.module.css has no `.hide-mobile` rule. Either define it or drop. [src/components/TabNavigation.tsx:66]

`stdlib:` **Pseudo-random in FolderCard**. Custom `Math.sin`-based PRNG for stamp placement. `index % 2` or a deterministic toggle is simpler and sufficient. [src/components/FolderCard.tsx:19-24]

`yagni:` **AnimationProvider React context**. Only consumer is `StaggeredGrid` checking `reducedMotion`. A `useReducedMotion()` hook with the exact same 6-line media-query listener replaces the entire provider + context. Lenis init can move into its own client component. [src/components/providers/AnimationProvider.tsx]

`shrink:` **Duplicate theme-toggle logic**. `TabNavigation.tsx` and unused `Header.tsx` implement identical localStorage theme toggle. When Header is deleted, this becomes moot — but worth noting. [src/components/TabNavigation.tsx:50-63, src/components/Header.tsx:17-30]

`yagni:` **Typewriter `trigger='inView'` support in TextScramble**. TextScramble has `inView` and `hover` triggers, but all callers use `trigger="mount"`. The `hover` trigger in Footer is unreachable (Footer unused). [src/components/effects/TextScramble.tsx:80-85]

`shrink:` **Stamp.tsx inline data-URI noise mask**. The SVG noise mask data URI in `<style jsx global>` is ~400 chars of Base64-encoded SVG injected into every page that renders a Stamp. Move to a CSS module or remove if the visual impact is negligible. [src/components/Stamp.tsx:126-127]

**net: ~1,200 lines deletable, 10 component files removable, 0 deps removable (all unused components share deps with active ones).**
