# Northern Lights Dental

A modern rebrand of Northern Lights Dental in Fargo, ND. Built with Next.js App Router, TypeScript, Tailwind CSS v4, Radix primitives, Motion, and React Hook Form + Zod.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Scripts

```bash
npm run dev        # development server
npm run build      # production build
npm run start      # serve the production build
npm run typecheck  # TypeScript, strict mode
npm run lint       # ESLint
npx playwright test
```

## Routes

- `/` — home
- `/about` — practice, team, and office
- `/about/dr-chris-schmaltz`, `/about/dr-neha-patel`, `/about/dr-courtney-gieseke` — doctor profiles
- `/services` — filterable service index
- `/services/[slug]` — general exams, sealants and fillings, dentures, crowns/bridges/veneers, implants/root canals, gum disease, whitening, kid-friendly dentistry
- `/new-patients` — first-visit information
- `/patient-forms` — downloadable patient forms
- `/smile-gallery` — before-and-after cases
- `/virtual-tour` — guided photo tour of the office
- `/blog` and `/blog/[slug]` — patient journal
- `/faq` — common questions
- `/contact` — validated appointment request form and map
- `/pay-online` — online payment portal link
- `/api/contact` — form submission handler

## Content

All business details, service descriptions, doctor bios, patient forms, smile cases, and journal articles are adapted from the original Northern Lights Dental website. Images are stored locally in `public/images` and served through `next/image`.

## Structure

- `app/` — routes, metadata, sitemap, robots, manifest
- `components/site/` — layout and page-level components
- `components/ui/` — reusable UI primitives
- `lib/site.ts` — central source for practice information and page content
- `tests/smoke.spec.ts` — Playwright route and interaction coverage
