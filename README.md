# nakka.dev

Personal site for Indra Dev Nakka. Static HTML/CSS, no build step.

## Deploy

Hosted free on **Cloudflare Pages** (project `nakka-dev-website`), connected to
this GitHub repo. Every push to `main` deploys automatically; pull requests get
preview URLs.

- Framework preset: none · build command: none · output dir: `/`
- Custom domain `nakka.dev` → CNAME (proxied) to `nakka-dev-website.pages.dev`,
  managed in the Cloudflare Pages dashboard.
- `_headers` sets CSP and cache-control; `_redirects` is unused so far.

Manual deploy (rarely needed): `npx wrangler pages deploy . --project-name=nakka-dev-website`
