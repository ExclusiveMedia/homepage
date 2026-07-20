# Exclusive Media Website

Production-minded Next.js implementation for Exclusive Media, a Digital Growth Architecture firm.

## Run locally

```bash
npm install
npm run dev
```


## Static HTML fallback

This repo includes static-hosting compatible HTML pages at the root (`index.html`, `scorecard/index.html`, `audit/index.html`, etc.) so traditional hosts that only serve uploaded files do not 404 on CTAs. The production Next.js homepage remains `src/app/page.tsx`. Regenerate the static fallback with `node scripts/generate-static-site.mjs`.


## Traditional hosting upload checklist

For cPanel/FTP/static hosts, upload the generated HTML folders (`index.html`, `scorecard/`, `audit/`, `services/`, `industries/`, `case-studies/`, `about/`, `faq/`, `contact/`, `privacy/`, `terms/`, `launch-checklist/`), `static/styles.css`, `404.html`, and `.htaccess`. If the live site still shows “Static fallback preview,” the server is serving an older upload or cache.

## Verify

```bash
npm run lint
npm run typecheck
npm run build
```

## Launch notes

Claims, case studies, TCPA/SMS language, 10DLC status, regulated-industry automation boundaries, privacy policy, and terms require approval before public launch.
