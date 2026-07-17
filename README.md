# InfraSphere Network

**Infrastructure Intelligence for the Physical World**

Official website for [InfraSphere Network](https://infrasphere.network) — the infrastructure, energy systems, AI infrastructure and industrial technology platform of the TVK ecosystem.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home |
| `/about` | About |
| `/infrastructure` | Infrastructure |
| `/energy-systems` | Energy Systems |
| `/ai-infrastructure` | AI Infrastructure |
| `/industrial-technology` | Industrial Technology |
| `/modular-systems` | Modular Systems |
| `/projects` | Projects |
| `/strategic-partnerships` | Strategic Partnerships |
| `/insights` | Insights |
| `/contact` | Contact |

## Positioning

InfraSphere Network is the physical infrastructure layer of the TVK ecosystem:

- **TVK Group** — Holding Layer — [tvk.group](https://www.tvk.group)
- **TVK Labs** — Innovation Layer — [tvklabs.com](https://www.tvklabs.com)
- **TVK Infrastructure** — Infrastructure Operations — [tvkinfrastructure.com](https://www.tvkinfrastructure.com)
- **TVK Energy** — Energy Layer — [tvkenergy.com](https://www.tvkenergy.com)
- **SOVRA** — Intelligence Layer — [sovra.network](https://www.sovra.network)
- **EnteleKRON** — Trust Layer — [entelekron.org](https://www.entelekron.org)
- **InfraSphere** — Infrastructure Layer — [infrasphere.network](https://www.infrasphere.network)

Currently in research, development, concept formation and pilot preparation stage.

## Internationalization (25 languages)

All pages are available in 25 locales with manual translations (no machine translation):

`en` `tr` `de` `fr` `es` `it` `pt` `nl` `ar` `ru` `zh-cn` `zh-tw` `ja` `ko` `hi` `ur` `pl` `ro` `el` `sv` `no` `da` `fi` `he` `id`

URLs use locale prefixes: `/en`, `/tr/about`, `/de/contact`, etc. Root `/` redirects to `/en`.

Translation files: `src/i18n/messages/{locale}.ts`

## Enterprise SEO

- **Per-page metadata**: unique title, description, canonical URL, Open Graph, Twitter cards
- **hreflang**: all 25 locales + `x-default` on every page
- **JSON-LD**: Organization, WebSite, BreadcrumbList, Article (insights), FAQPage (home)
- **Sitemaps**: `/sitemap-index.xml` → `/sitemaps/{locale}.xml` with hreflang annotations
- **robots.txt**: Google, Bing, Yandex, Baidu rules via `src/app/robots.ts`
- **Internal linking**: automatic related-page links on every route
- **Legal disclaimer**: localized footer disclaimer on all locales

SEO utilities: `src/lib/seo/`

## Contact form & Partner Portal email

Apply (`/en/app/apply`), Contact (`/en/app/contact`), and the marketing contact page use **Supabase** (store submissions) and **Brevo** (send notification emails).

### 1. Supabase table

Run the migration in your Supabase SQL editor:

`supabase/migrations/001_contact_inquiries.sql`

### 2. Environment variables

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `SUPABASE_URL` | Yes | Project URL from Supabase → Settings → API |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Service role key (server-side only — never expose to client) |
| `BREVO_API_KEY` | Yes | API key from [Brevo → SMTP & API](https://app.brevo.com/settings/keys/api) |
| `CONTACT_TO_EMAIL` | Yes | Inbox that receives form notifications |
| `CONTACT_FROM_EMAIL` | Yes* | Verified sender, e.g. `InfraSphere Network <noreply@infrasphere.network>` |
| `BREVO_SENDER_NAME` | Alt | Sender name if not using `CONTACT_FROM_EMAIL` |
| `BREVO_SENDER_EMAIL` | Alt | Sender email if not using `CONTACT_FROM_EMAIL` |

\* Use a sender address verified in your Brevo account.

Without these variables, forms return: *"Email service is not configured. Please try again later."*

### 3. Production (Vercel)

In Vercel → **Project → Settings → Environment Variables**, add all variables above, then **redeploy**.

## Partner Portal (PWA)

The Partner Portal at `/{locale}/app` is installable as a Progressive Web App:

- **Install page**: `/{locale}/app/install` — platform-specific instructions plus one-click install on supported browsers
- **Manifest**: locale-aware at `/{locale}/manifest.webmanifest`
- **Service worker**: registered on all portal pages for offline-capable caching

Install from Chrome/Edge (desktop), Chrome (Android), or Safari (iOS → Add to Home Screen).

## Deployment (Vercel)

This project must deploy as **Next.js**, not as a static site.

If you see `404: NOT_FOUND` while static files like `/logo-mark.svg` load, the Vercel project is misconfigured — usually **Framework Preset = Other** with **Output Directory = `public`**.

`vercel.json` in the repo forces `"framework": "nextjs"`. After merging, redeploy with **Clear build cache** enabled.

In Vercel → Project Settings → Build & Deployment:

| Setting | Value |
|---------|-------|
| Framework Preset | Next.js |
| Build Command | `npm run build` (or leave default) |
| Output Directory | *(empty — do not set `public`)* |
| Root Directory | *(empty)* |

## Brand assets

Official logos live in `public/brand/`:

| File | Use |
|------|-----|
| `logo-1-full-light.png` | Website header (light background) |
| `logo-2-mark-dark.png` | Favicon, PWA icons, compact mark |
| `logo-3-full-dark.png` | Footer & Partner Portal header (dark background) |
| `favicon-32.png` / `favicon-192.png` / `favicon-512.png` | Browser & PWA icons |
| `apple-touch-icon.png` | iOS home screen |

Replace these PNGs with your official exports (same filenames). See `public/brand/README.md`.

Legacy SVG placeholders remain in `public/logo.svg` and `public/logo-mark.svg` for reference.
