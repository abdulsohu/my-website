# my-website

A minimal Astro writing site for GitHub Pages.

## Local development

```bash
pnpm install
pnpm dev
```

## Build

```bash
pnpm build
```

## How content is organized

- `src/pages/index.astro` is the homepage.
- `src/pages/writing.astro` is the full writing index.
- `src/pages/posts/[slug].astro` renders every post.
- `src/content/posts/` holds `.md` and `.mdx` articles.
- `src/assets/` is for imported images that Astro can optimize responsively.
- `public/figures/` is for static assets such as hand-written SVG figures.
- `public/CNAME` is the file GitHub Pages needs in the final build output.
- Astro 7 in this repo expects Node `>=22.12.0`.

## How to add a post

1. Create a new `.md` or `.mdx` file in `src/content/posts/`.
2. Add `title`, `description`, and `pubDate` frontmatter.
3. Use Markdown for normal writing.
4. Use MDX when you want Astro components such as responsive images.

The root `CNAME` is kept as an easy-to-see copy of the custom domain. The file that actually ships with the site is `public/CNAME`.
