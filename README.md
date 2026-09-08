# Aarush Arya - Retro Engineering Portfolio

A production-ready, single-page portfolio built with Next.js, React, Tailwind CSS,
and NES.css. The design follows a restrained 8-bit visual system with normal
vertical scrolling, responsive layouts, and no heavy animation or WebGL.

## Run locally

Requirements: Node.js 22.13 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Quality checks

```bash
npm run lint
npm run build
```

Portfolio content lives in `data/portfolio.ts`. Reusable sections and cards live
in `components/`, while the visual system is defined in `app/globals.css`.

## Project map

- `app/` — page structure, metadata, and global styling
- `components/` — reusable portfolio sections and cards
- `data/portfolio.ts` — experience, projects, education, skills, and links
- `public/` — avatars, project media, CV, dissertation, and social preview
- `worker/` and `vite.config.ts` — OpenAI Sites/Vinext compatibility

## Current public deployment

The GitHub Pages workflow in `.github/workflows/pages.yml` deploys the checked-in
`aarusharya-updated-site-20260908.zip`. The editable Next.js source is kept at
the repository root for future development. Editing source files alone will not
change the live site until a new static export replaces that deployment ZIP (or
the workflow is intentionally changed).

The canonical public URL is [aarusharya.fyi](https://aarusharya.fyi).
