# SyncNode — Product Website

**Self-Learning, Privacy-Preserving Browser Agent**

Frontend-only demo website for the SyncNode concept. Next.js 15 (App Router) · TypeScript · React 19 · Tailwind CSS v4.

- `npm run dev` — local dev server
- `npm run build && npm start` — production build & serve

Everything on the site is mocked frontend state: no backend, no database, no API calls, no authentication, no external AI services.

## Demo video

Drop a `demo.mp4` into `/public` and the homepage player picks it up automatically. Until then, the player shows a mission-control style fallback placeholder.

## Deploy (Vercel)

The repo is deploy-ready out of the box — no environment variables or configuration needed:

1. Push this repository to GitHub.
2. In Vercel: **Add New → Project** and import the repo.
3. Vercel auto-detects Next.js. Default build settings work (`next build`, output handled by Vercel).
4. Deploy. Every push to `main` redeploys; PRs get preview deployments.

Minimum Node.js version: **18.18+** (Next.js 15 requirement).

## Content disclaimer

Synthetic demonstration environment. Research demonstrator inspired by publicly documented scientific and mission-support workflow classes. Not affiliated with, endorsed by, or connected to any space agency.
