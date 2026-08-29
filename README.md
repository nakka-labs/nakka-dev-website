# nakka.dev

Personal site for Indra Dev Nakka. Static HTML/CSS, no build step.

## Deploy

Hosted free on **Cloudflare Pages** (project `nakka-dev-website`). The custom
domain `nakka.dev` is configured in the Cloudflare Pages dashboard, not via a
repo `CNAME` file.

```
npx wrangler pages deploy . --project-name=nakka-dev-website
```

Connecting the GitHub repo in the Cloudflare dashboard also enables automatic
deploys on push to `main`.
