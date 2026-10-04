# Kishan Nigam | DevOps Engineer Portfolio

This portfolio is built from the verified resume content provided for Kishan Nigam and is designed to feel like a premium DevOps / cloud infrastructure dashboard rather than a generic resume site.

## Features

- React + TypeScript + Vite app
- Tailwind CSS styling
- Framer Motion animations
- Lucide icon set
- Dark DevOps dashboard theme
- Downloadable resume section
- Configurable LinkedIn and GitHub profile links
- Standalone HTML, CSS, and JavaScript version in `plain-html/`

## Run locally

```bash
npm ci
npm run dev
```

## Build for production

```bash
npm run build
```

## Resume file

The resume PDF is available in the public folder:

```text
/public/Kishan Nigam Resume Devops Profile.pdf
```

## Configure profile URLs

The exact LinkedIn and GitHub URLs were not included in the provided source material, so they are intentionally left configurable in `src/data/profile.ts` instead of being invented.

```ts
linkedinUrl: '',
githubUrl: '',
```

Fill them in with the actual public profile links before deployment.

## Deployment

The workflow in `.github/workflows/deploy.yml` builds the site and deploys it to GitHub Pages whenever a commit is pushed to `main`.

In the GitHub repository, open **Settings → Pages** and set **Build and deployment → Source** to **GitHub Actions**. After the workflow succeeds, the site will be available at:

```text
https://KishanNigam.github.io/Portfolio_kishan/
```

The Vite base path is configured for the `Portfolio_kishan` repository. The resume PDF is stored in `public/` and included in the production build.

## Standalone HTML version

Open `plain-html/index.html` directly in a browser. Its page content is in `plain-html/data.js`.
