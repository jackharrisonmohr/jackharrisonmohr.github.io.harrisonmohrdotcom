# harrisonmohr.com

Personal site built with [Astro](https://astro.build), Tailwind CSS, and MDX.

## Local Development

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Site runs at `http://localhost:4321`.

Other commands:

```bash
npm run build     # Build static site to dist/
npm run preview   # Preview the build locally
```

## Adding Content

### Blog posts

Create a `.mdx` file in `src/content/blog/`:

```mdx
---
title: "Post Title"
description: "Short description for cards and meta tags."
date: 2026-03-01
---

Post content here. MDX lets you import Astro components:

import Callout from "../../components/mdx/Callout.astro";

<Callout type="tip">
  This is a tip callout.
</Callout>
```

### Projects

Create a `.md` file in `src/content/projects/`:

```md
---
title: "Project Name"
description: "One-line description for cards."
role: "Your Role"
org: "Organization"
dates: "2024–2025"
tech: ["Python", "AWS", "Docker"]
featured: true
order: 1
---

Project narrative goes here (300-500 words).
```

Set `featured: true` to show on the homepage. `order` controls sort order (lower = first).

## Deployment

The site deploys to GitHub Pages automatically on push to `main` via `.github/workflows/deploy.yml`.

### First-time setup

1. Go to the repo settings: **Settings > Pages**
2. Under **Build and deployment > Source**, select **GitHub Actions**
3. Push to `main` — the workflow builds the site and deploys it

The `public/CNAME` file points the custom domain to `harrisonmohr.com`. DNS must have a CNAME record pointing to `jackharrisonmohr.github.io`.

### Manual deploy

You can also trigger a deploy manually from the **Actions** tab > **Deploy to GitHub Pages** > **Run workflow**.

## Project Structure

```
src/
├── components/        # Reusable Astro components
│   └── mdx/           # Components importable in MDX posts
├── content/
│   ├── blog/          # Blog posts (.mdx)
│   └── projects/      # Project entries (.md)
├── layouts/           # Page layouts (Base → Page → Post)
├── pages/             # File-based routing
│   └── writing/       # Blog listing + dynamic [slug] route
└── styles/            # Global CSS
```
