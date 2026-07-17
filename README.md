# Portfolio — Dawen Wang

Personal portfolio site: hero, education, skills, projects, and an EmailJS-backed contact form.

Live: https://dcdgrg.github.io/wen/

## Stack

Create React App (react-scripts 5) · React 18 · plain CSS per component · EmailJS · deployed to GitHub Pages via `gh-pages`.

## Scripts

| Command | What it does |
| --- | --- |
| `npm start` | Dev server on http://localhost:3000 |
| `npm test` | Jest + React Testing Library, watch mode |
| `npm run build` | Production bundle into `build/` |
| `npm run deploy` | Builds, then publishes `build/` to the `gh-pages` branch |

## Layout

```
public/          # index.html shell, favicon, manifest — copied verbatim
src/
  App.js         # section order lives here
  index.css      # design tokens (:root custom properties) + global resets
  assets/        # images imported by components (webpack hashes these)
  components/    # one .js + one .css per section
```

## Images

Images that components render live in `src/assets/` and are **imported**, not
referenced by URL:

```js
import xduLogo from '../assets/xdu-logo.png';
<img src={xduLogo} alt="XiDian University" />
```

This matters because `homepage` is `"."`, so the site is served from a subpath
(`/wen/`) on GitHub Pages. An absolute `src="/foo.png"` resolves against the
domain root and 404s in production while working fine on the dev server.
Importing lets webpack rewrite the path correctly and hash it for cache busting.

Only `public/favicon.ico` and `public/manifest.json` are referenced by path,
via `%PUBLIC_URL%`.

## Contact form

`src/components/contact.js` posts to EmailJS. The service, template, and public
key are embedded in the bundle — that is how EmailJS is designed to work, the
public key is not a secret. There is no bot protection on the form.
