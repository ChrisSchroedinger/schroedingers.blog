# schroedingers.blog

Personal site and blog. Minimal by design: no webfonts, no tracking,
and the only JavaScript is the theme toggle — one column of text,
dark by default with an opt-in light mode.

Live at **https://chrisschroedinger.github.io/schroedingers.blog/**
(interim URL — moves to **https://schroedingers.blog** once the domain
is registered; see the note in `astro.config.mjs`)

## Publishing a blog post

1. Create a markdown file in `src/content/blog/`, e.g. `my-post.md`:

   ```markdown
   ---
   title: "My post title"
   date: 2026-07-15
   description: "Optional one-liner shown in lists and RSS."
   ---

   Body in plain markdown.
   ```

2. Commit and push to `main`. GitHub Actions builds and deploys —
   live in about a minute.

Add `draft: true` to the frontmatter to keep a post out of the build.

## Editing the rest

- About text + project list: `src/pages/index.astro`
- Layout, header, footer: `src/layouts/Base.astro`
- All styling: `src/styles/global.css`

## Local preview (optional — CI builds on push either way)

```bash
npm install
npm run dev      # live-reload preview at localhost:4321
```

## Stack

[Astro](https://astro.build) static build, content collections for the
blog, RSS at `/rss.xml`, deployed to GitHub Pages by
`.github/workflows/deploy.yml`.
