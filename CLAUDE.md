# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page personal portfolio site (React 18 + Vite, no router, no TypeScript, no test framework). All content lives on one page composed of stacked sections.

## Commands

```
npm run dev       # start Vite dev server (host: true, so it's reachable on LAN)
npm run build     # production build to dist/
npm run preview   # preview the production build
```

There is no lint, test, or typecheck script configured — don't invent commands for these.

## Architecture

- **Composition**: `src/App.jsx` renders `Navbar`, then `<main>` with `Hero`, `About`, `Projects`, `Contact`, then `Footer`. Each is a top-level `<section id="...">` and the app is a single scrolling page — there is no routing.
- **Content vs. presentation split**: nearly all copy/data (profile info, social links, skills, education, certifications, projects) lives in `src/data/portfolioData.js` as exported plain arrays/objects, including `react-icons` component references and imported image assets. Components import from this file rather than hardcoding content. When asked to change site content (bio text aside), edit `portfolioData.js` first.
- **Styling**: one CSS file per component (`ComponentName.jsx` + `ComponentName.css`), imported directly in the component. Global tokens (colors, fonts, spacing, `.btn`/`.section-heading`/`.eyebrow` utility classes) live in `src/index.css` as CSS custom properties under `:root`. Reuse those variables/utility classes instead of hardcoding new colors or repeating heading styles.
- **Cross-component communication without state lifting**: `Navbar` and `About` are decoupled via a native `CustomEvent` (`about:set-tab`) on `window` rather than shared state/props — clicking a nav link like "Skills" or "Certifications" dispatches this event, and `About` listens for it to switch its internal tab. Follow this pattern if adding more nav-to-section interactions rather than introducing a state management library.
- **Assets**: images imported from `src/assets/` (bundled by Vite); static files like `resume.pdf` served from `public/` (referenced by absolute path, e.g. `profile.resumeUrl = '/resume.pdf'`).
- **`sources/`**: reference design mockups/screenshots (not part of the build).

## Notes

- `index.html`'s `<title>`/meta description still say "Alex Morgan | Frontend Developer" — this is stale placeholder copy left over from a template and doesn't match the actual profile data (Mohamed Mohsen) in `portfolioData.js`.
