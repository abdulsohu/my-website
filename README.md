# my-website

A minimal Astro writing site that deploys to GitHub Pages from GitHub Actions.

## Local development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## Deploy

Push to `main`.

The workflow in `.github/workflows/deploy.yml` installs dependencies, builds the Astro site, and deploys the `dist/` output to GitHub Pages.

For this to stay simple, GitHub Pages should use `GitHub Actions` as its source, not `Deploy from a branch`.

## Content structure

- `src/pages/index.astro` is the homepage.
- `src/pages/writing.astro` is the writing index.
- `src/pages/posts/[slug].astro` renders each post.
- `src/content/posts/` holds `.md` and `.mdx` posts.
- `src/layouts/` holds the site layouts.
- `src/styles/global.css` holds the global styles.
- `public/figures/` is for static figures.
- `public/CNAME` is copied into the final build for the custom domain.

## Add a post

1. Create a new `.md` or `.mdx` file in `src/content/posts/`.
2. Add `title`, `description`, and `pubDate` frontmatter.
3. Commit and push to `main`.

GitHub Actions handles the build and deployment post-push.
