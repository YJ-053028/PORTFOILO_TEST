# DOT — Next.js Portfolio

Next.js App Router portfolio for Vercel. Korean and English pages share a responsive design system; project metadata lives in `lib/projects.ts`.

## Run locally

Install Node.js LTS, then run `npm install` and `npm run dev` in this folder. Open `http://localhost:3000`. Build with `npm run build`.

## Deploy to Vercel

Import this folder's GitHub repository into Vercel, select Next.js as the framework, keep the project root at `./`, and deploy. Vercel detects the Next.js build automatically. Update the placeholder metadata URL and contact email before publishing.

## Add a project

Add project metadata in `lib/projects.ts`. The listing and localized project detail routes are generated from this collection. Replace the sample SVG studies in `components/art.tsx` with real project imagery when available.
