# Portfolio — Guanjie

A single-page portfolio in a **brutalist editorial** style — black and white only, oversized type,
no accent colour. Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS v4**, covering
all three parts: **Design → Coding → Deploy**.

| | |
| --- | --- |
| Live site | [portfolio-mxan.vercel.app](https://portfolio-mxan.vercel.app) |
| Design (Figma) | [Portfolio — Design System & Screens](https://www.figma.com/design/txEBfMOIt0Ra4lt6PKcFjK) |
| Design notes | [DESIGN.md](DESIGN.md) |
| All site content | [`src/content/profile.ts`](src/content/profile.ts) |

---

## 1. Design

The Figma file has two pages:

- **01 · Foundations** — colour tokens for both themes (wired up as real Figma Variables, not
  hardcoded fills) plus the type scale
- **02 · Screens** — the full landing page at Desktop 1440px and Mobile 390px

The whole site runs on four colour tokens per theme (`paper` / `ink` / `muted` / `line`). The values
in Figma and the CSS custom properties in [`src/app/globals.css`](src/app/globals.css) are the same
set — to change the theme, edit `globals.css` and update the matching Figma variables.

> **Notes:** Figma's Starter plan allows only one mode per collection, so the tokens are split into
> two collections (`Mono · Light (default)` and `Mono · Dark`) rather than one collection with a
> theme mode. Inter Tight is also not available in that file, so the mockups use Inter Bold with
> -4.5% tracking, which is very close.

Design rationale, type scale, motion and the accessibility checklist all live in [DESIGN.md](DESIGN.md).

## 2. Coding

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run lint
```

### Structure

```
src/
├─ app/
│  ├─ layout.tsx            # fonts, metadata, no-flash theme script
│  ├─ page.tsx              # composes every section + JSON-LD (schema.org Person)
│  ├─ globals.css           # design tokens, utilities, scroll reveal
│  ├─ icon.tsx              # favicon generated from the name
│  ├─ opengraph-image.tsx   # 1200x630 share card, generated
│  ├─ sitemap.ts / robots.ts
├─ components/              # Nav, Hero, IndexList, Statement, Marquee, Work,
│                           # About, Capabilities, Experience, Contact, Footer
└─ content/profile.ts       # ✏️ every piece of copy lives in this one file
```

Section order on the home page:
Hero → Index → Statement → Marquee → Work → About → Capabilities → Experience → Contact → Footer

**Server components by default** — only four files are client components: `Nav.tsx` (mobile menu),
`ThemeToggle.tsx`, `ScrollReveal.tsx` and `Work.tsx` (the cursor-following preview card). That keeps
the JavaScript shipped to the browser at roughly **103 kB** First Load JS.

### Editing the content

Open [`src/content/profile.ts`](src/content/profile.ts) and edit it in one place — name, tagline,
about, skills, projects, experience and social links. Every section reads from that file.

Drop a `resume.pdf` into `public/` and the Resume link works immediately.

The name on the home page always spans the full width via
[`FitText.tsx`](src/components/FitText.tsx) (SVG + `textLength`), so you can make `displayName`
longer or shorter without touching any font-size values.

### Adding another language

The site is English-only and ships just Inter Tight and Inter. If you add copy in a script those
fonts do not cover — Thai, for example — add the matching font in `layout.tsx`:

```ts
const thai = Noto_Sans_Thai({ subsets: ["thai"], variable: "--font-thai", display: "swap" });
```

then append `var(--font-thai)` to the `--font-sans` and `--font-display` stacks in `globals.css`
and add the variable to the `<body>` class list.

### ⚠️ browserslist — do not remove

`package.json` declares `browserslist` deliberately:

```json
"browserslist": ["chrome 111", "edge 111", "firefox 111", "opera 97", "safari 16.4"]
```

browserslist **walks up the directory tree** looking for config, so a stray `package.json` in any
ancestor directory silently decides what this project compiles to. On the machine this was built on
there is a leftover `~/package.json` carrying `"> 1%", "not ie <= 9"`; without a local declaration
those values win, Next compiles down to ES5, and the bundle grows from **103 kB to 339 kB**.

Verified by building both ways. Declaring it locally makes the target explicit and immune to whatever
sits above the project, so keep the line even though a clean checkout on CI would not need it.

## 3. Deploy

### Vercel (recommended)

1. Push the code to GitHub/GitLab
2. Vercel → **Add New… → Project** → pick this repo
3. The framework preset detects **Next.js** automatically — no need to change the build command or
   the root directory
4. Set the environment variable:

   | Key | Value |
   | --- | --- |
   | `NEXT_PUBLIC_SITE_URL` | `https://<your-domain>` |

   **Only needed for a custom domain.** `resolveSiteUrl()` in `src/content/profile.ts` already reads
   Vercel's own `VERCEL_PROJECT_PRODUCTION_URL`, so a plain Vercel deployment resolves its real URL
   with nothing configured. Setting the variable to an empty value is safe — blank and unparseable
   candidates are skipped rather than crashing the build.
5. Deploy — from then on every push to the production branch deploys automatically, and every PR gets
   a preview URL

### Check before deploying

```bash
npm run lint && npm run build
```

`npm run build` should report First Load JS around **103 kB**. If you see numbers in the 300 kB
range, the `browserslist` entry in `package.json` has gone missing (see above).

### Alternatives

- **Static export** — the site is fully static, so adding `output: "export"` to `next.config.ts`
  lets you drop `out/` on GitHub Pages or S3. Note that `icon.tsx` and `opengraph-image.tsx` would
  need to become real image files, since a static export cannot generate them at runtime.

## SEO / metadata included

- Metadata API: title template, description, Open Graph, Twitter card
- `opengraph-image.tsx` generates a 1200×630 share card from the data in `profile.ts`
- `sitemap.xml` and `robots.txt` generated from code
- JSON-LD `schema.org/Person` embedded on the home page
- Security headers (`X-Content-Type-Options`, `X-Frame-Options`, `Referrer-Policy`,
  `Permissions-Policy`) set in `next.config.ts`
