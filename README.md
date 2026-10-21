# LifeReplay Web

Official product website for the LifeReplay camera prototype. Built with Next.js App Router, TypeScript, Tailwind CSS, Motion and Lucide icons. The site is a static export; its Replay Demo runs entirely in the browser and does not connect to hardware.

## Requirements

- Node.js 20 or newer
- npm 10 or newer

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Checks and production build

```bash
npm run typecheck
npm run lint
npm run build
```

The production static site is written to `out/`. Serve that directory with any static HTTP server. For example: `npx serve out`.

## Deployment

Live site: https://lifereplay-product.vercel.app

The current Vercel deployment was uploaded from `out/`. It is not connected to GitHub, so new pushes do not deploy automatically. Rebuild and upload `out/` after source changes until a Git integration is connected.

Deploy `out/` to any static host. Before moving to a custom domain, update `site.url` in `content/site.ts` and rebuild so Open Graph, `sitemap.xml`, and `robots.txt` use the new origin. No backend, database, credentials or environment secrets are required for the current site.

## Content and status updates

- `content/site.ts`: navigation, external links, FAQ, roadmap and development statuses.
- `app/`: page content and metadata.
- `components/replay-demo.tsx`: browser-only Replay Demo; the displayed 8-second and 3-second interval is illustrative, not a device specification.

The camera pipeline, replay flow and Android companion are described as implemented work. INMP441 I²S microphone capture remains **In progress** until a real hardware capture and synchronized replay are verified. Update `content/site.ts` and the relevant page copy only after that check. The website does not take orders, collect email addresses or claim an announced release date.

The visual camera and Android UI on the site are labeled as conceptual illustrations, not product photography or a live device connection.
