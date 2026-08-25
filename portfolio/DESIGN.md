# Design System — Portfolio

Notes on the design decisions behind this site. Use it as the map when adding a new section or
changing an existing one.

## 1. Concept

> **"Brutalist editorial — the type is the image"**

Following the approach of sites like [paulkalkbrenner.net](https://www.paulkalkbrenner.net): throw
out everything that is not needed, leave **black, white and type**, then push *scale* as far as it
will go. The result is a page that reads as confident, is easy to remember, and loads fast because
there is barely anything to load beyond the fonts.

Four rules it sticks to:

1. **No accent colour at all** — hierarchy comes from type size and hairline rules, not hue
2. **Big means genuinely big** — the name on the home page spans the full viewport width, always
3. **Invert to change the rhythm** — key sections (statement, contact) flip to white-on-black
   instead of reaching for a tinted background
4. **Keep motion quiet** — content is revealed as you scroll to it, and nothing loops in your face

## 2. Colour tokens

Four tokens per theme, declared as CSS custom properties in
[`src/app/globals.css`](src/app/globals.css) and mapped into Tailwind through `@theme inline`, so
they are usable as ordinary classes.

| Token | Tailwind class | Light | Dark | Used for |
| --- | --- | --- | --- | --- |
| `--paper` | `bg-paper` | `#ffffff` | `#0a0a0a` | Backgrounds |
| `--ink` | `text-ink` / `bg-ink` | `#0a0a0a` | `#f4f4f4` | Primary text |
| `--muted` | `text-muted` | `#767676` | `#8c8c8c` | Descriptions, meta, labels |
| `--line` | `border-line` | `#e2e2e2` | `#242424` | Every divider |

### `.invert` — the flipped block

One class flips an entire block by **redeclaring the token set inside that subtree**:

```css
.invert { --paper: #0a0a0a; --ink: #f4f4f4; --muted: #8c8c8c; --line: #242424;
          background-color: var(--paper); color: var(--ink); }
[data-theme="dark"] .invert { --paper: #ffffff; --ink: #0a0a0a; /* ... */ }
```

The advantage is that every Tailwind class inside (`text-muted`, `border-line`, `bg-ink`) inverts by
itself — no `dark:` variants and no nested overrides anywhere. Used by the Statement and Contact
sections.

**Theme switching** is driven by `data-theme="light" | "dark"` on `<html>`. A small script in
`layout.tsx` reads `localStorage` (falling back to `prefers-color-scheme`) before first paint, so the
page never flashes the wrong colours.

> Want an accent colour back? Add a single `--accent` in `:root` and use it on links and labels —
> nothing else in the structure needs to change.

## 3. Typography

One typeface across the whole site. No mono, no serif — this design lets *weight and scale* carry the
hierarchy instead.

| Role | Font | Used for |
| --- | --- | --- |
| Display | **Inter Tight** Bold | The name, section headings, project titles |
| Body | **Inter** | Everything else |

Ready-made classes in `globals.css`:

```
.display       font-weight 700 · tracking -0.045em · leading 0.85
.display-hero  clamp(3.2rem, 13.2vw, 15rem)
.display-xl    clamp(2.6rem, 10.5vw, 12rem)    ← statement
.display-lg    clamp(2rem, 5.2vw, 4.5rem)      ← section headings / project titles
.label         11px · uppercase · tracking 0.2em
```

### Full-bleed name — `FitText`

Scaling `font-size` with `vw` only fits exactly at one width, so
[`FitText.tsx`](src/components/FitText.tsx) uses **SVG + `textLength`** instead:

```tsx
<svg viewBox={`0 0 ${width} 100`}>
  <text textLength={width} lengthAdjust="spacingAndGlyphs" fontSize="100">Guanjie</text>
</svg>
```

The `viewBox` is estimated from Inter Tight's average glyph width (~0.5em per character), and
`textLength` then forces an exact fit — so the estimate only affects the rendered aspect ratio. You
can change the name in the content file without touching a single number.

## 4. Layout & spacing

- `.shell` = `padding-inline` 1.25rem (mobile) → 2rem (desktop) — **no max-width**; the content runs
  the full width the way editorial sites do
- The main grid is 12 columns (`md:grid-cols-12`); the work rows and experience entries both sit on it
- Section rhythm: `pt-20` (mobile) → `pt-28` (desktop)
- **No rounded corners, no shadows** — every boundary is a 1px rule in a single colour

## 5. Motion

| Element | Behaviour |
| --- | --- |
| `.reveal` | Fade in and rise 14px on entering the viewport |
| `.reveal-mask` | Oversized lines rise from behind a mask (`overflow: hidden` + `translateY(105%)`) |
| `--reveal-delay` | 60–140ms steps so lines and rows arrive in sequence |
| `.marquee` | Ticker scrolling left over 38s, paused on hover |
| `.work-row:hover` | The whole row inverts to black and a preview card trails the cursor |

### Why not IntersectionObserver

It was the first approach, and it caused two problems:

1. **`clip-path` makes the observer deadlock on itself** — an element hidden with
   `clip-path: inset(0 0 100% 0)` has a zero-area intersection rect, so the observer can never report
   it as visible and the content stays hidden forever. (Fixed by switching to an `overflow: hidden`
   mask.)
2. **If the observer does not fire, the whole page disappears** — because the initial state is hidden.

[`ScrollReveal.tsx`](src/components/ScrollReveal.tsx) therefore measures `getBoundingClientRect()`
itself on scroll and resize (throttled with `requestAnimationFrame`), and if measuring ever fails it
**reveals everything immediately** — it always fails open.

Everything respects `prefers-reduced-motion: reduce`: content appears instantly and the marquee holds
still.

## 6. Accessibility checklist

- [x] Text contrast passes AA in both themes (pure black on white is 19:1; `muted` on white is 4.7:1)
- [x] Skip link to the main content, visible on focus
- [x] Landmark structure: `header` / `main` / `footer`, with headings in order
- [x] `:focus-visible` uses `currentColor`, so it stays visible on white and on black
- [x] The mobile menu sets `aria-expanded` / `aria-controls`
- [x] `FitText` is SVG, so it carries `role="img"` and an `aria-label` to stay readable to assistive tech
- [x] The cursor-following card is decorative: `aria-hidden` and hidden on touch devices
- [x] Content is still readable with JavaScript disabled (`<noscript>` forces the reveals visible)

## 7. Figma file

[Portfolio — Design System & Screens](https://www.figma.com/design/txEBfMOIt0Ra4lt6PKcFjK)

- **01 · Foundations** — colour tokens for both themes (real Figma Variables) plus the type scale
- **02 · Screens** — the full landing page at Desktop 1440px and Mobile 390px

> Inter Tight is not available in that file, so it uses Inter Bold with -4.5% tracking, which looks
> very close. The Starter plan also limits a collection to one mode, hence the split into
> `Mono · Light` and `Mono · Dark`.

## 8. Adding a new section

```tsx
// src/components/Writing.tsx
import SectionLabel from "./SectionLabel";

export default function Writing() {
  return (
    <section id="writing" className="scroll-mt-16 pt-20 md:pt-28">
      <div className="shell">
        <SectionLabel no="06" title="Writing" description="..." />
        {/* add .reveal to children and the animation works automatically */}
      </div>
    </section>
  );
}
```

Then add it to `src/app/page.tsx` and add a link to `navItems` in `src/content/profile.ts` — both the
top nav and the numbered index update themselves.
