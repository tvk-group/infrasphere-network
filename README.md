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

- **TVK Group** — Holding Layer
- **SOVRA** — Intelligence Layer
- **EnteleKRON** — Trust Layer
- **InfraSphere** — Infrastructure Layer

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

Apply (`/en/app/apply`), Contact (`/en/app/contact`), and the marketing contact page all send email through [Resend](https://resend.com).

### Local development

```bash
cp .env.example .env.local
```

| Variable | Required | Description |
|----------|----------|-------------|
| `RESEND_API_KEY` | Yes | API key from [Resend → API Keys](https://resend.com/api-keys) |
| `CONTACT_TO_EMAIL` | Yes | Inbox that receives submissions (e.g. `partnerships@infrasphere.network`) |
| `CONTACT_FROM_EMAIL` | No | Verified sender address. Defaults to `InfraSphere Network <onboarding@resend.dev>` for testing |

Without these variables, forms return: *"Email service is not configured. Please try again later."*

### Production (Vercel)

1. Create a [Resend](https://resend.com) account and add/verify the `infrasphere.network` domain.
2. In Vercel → **Project → Settings → Environment Variables**, add:
   - `RESEND_API_KEY` = your Resend API key
   - `CONTACT_TO_EMAIL` = destination inbox for form submissions
   - `CONTACT_FROM_EMAIL` = `InfraSphere Network <noreply@infrasphere.network>` (must use a verified domain)
3. **Redeploy** the project so the new variables take effect.

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

| File | Use |
|------|-----|
| `public/logo-mark.svg` | Header/footer icon mark |
| `public/logo.svg` | Full horizontal logo |
| `src/app/icon.svg` | Browser favicon |
| `src/app/apple-icon.svg` | Apple touch icon |
| `public/og-image.svg` | Open Graph social preview |
