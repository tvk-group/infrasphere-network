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

## Contact form (email)

The contact form sends inquiries via [Resend](https://resend.com). Copy `.env.example` to `.env.local` and set:

| Variable | Description |
|----------|-------------|
| `RESEND_API_KEY` | API key from Resend dashboard |
| `CONTACT_TO_EMAIL` | Inbox that receives form submissions |
| `CONTACT_FROM_EMAIL` | Verified sender (use `onboarding@resend.dev` for testing) |

```bash
cp .env.example .env.local
```

For production, verify your domain in Resend and set `CONTACT_FROM_EMAIL` to e.g. `InfraSphere Network <noreply@infrasphere.network>`.

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
