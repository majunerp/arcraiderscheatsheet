# Repository Guidelines

## Project Structure & Module Organization
- `app/` — Next.js App Router pages and layouts (e.g., `app/page.tsx`, `app/guides/page.tsx`, `app/layout.tsx`).
- `components/` — Reusable React components (PascalCase, e.g., `ItemImage.tsx`, `Header.tsx`).
- `lib/` — Utilities and data (`items-data.ts`, `seo.ts`). Prefer `@/*` path alias imports.
- `public/` — Static assets (`robots.txt`, `sitemap.xml`, SVGs). Served at site root.
- `ref/` — External reference HTML/assets; do not ship or import in runtime code.
- Root utility scripts — Data/image helpers (`extract_items*.py`, `download_images*.py|js`). Run ad‑hoc only.

## Build, Test, and Development Commands
- `npm run dev` — Start local dev server on `http://localhost:3000`.
- `npm run build` — Production compile via Next.js 16.
- `npm start` — Serve the production build.
- `npm run lint` — ESLint (Next.js + TypeScript rules). Fix issues before PRs.
- Scripts: `python download_images_final.py`, `node download_images_node.js` (optional data tasks).

## Coding Style & Naming Conventions
- TypeScript (strict). React functional components with explicit `Props` types.
- Filenames: components `PascalCase.tsx`; utilities `camelCase.ts`; route entries `page.tsx`, `layout.tsx`.
- Imports: use `@/*` alias where possible. Keep module boundaries: UI in `components/`, pure logic in `lib/`.
- Styling: Tailwind CSS v4. Prefer utility classes; limit global styles to `app/globals.css`.
- Linting: follow ESLint (`eslint.config.mjs`). Run `npm run lint` locally.

## Testing Guidelines
- No test runner is configured yet. If adding tests, prefer React Testing Library or Playwright.
- Place tests alongside sources as `*.test.ts(x)` or under `__tests__/` near the file.
- Aim for critical-path coverage (SEO metadata, page rendering, item listing filters).

## Commit & Pull Request Guidelines
- Commits: concise, imperative subject. Recommended Conventional Commits (`feat:`, `fix:`, `docs:`, `chore:`, `refactor:`).
- PRs: clear description, linked issue, screenshots for UI changes, and notes on SEO impacts.
- Before opening PR: `npm run lint` passes and `npm run build` succeeds.

## Security & Configuration Tips
- No secrets required for local dev. If env vars are added, use `process.env` and document in `README.md`.
- Keep large/raw reference files in `ref/`. Only ship necessary assets in `public/`.
