# Hagency website

A complete English and Simplified Chinese promotional website for Hagency,
Robrix2, and Palpo. Built with Astro and TypeScript, with original generated
hero artwork inspired by the selected Adora visual direction.

This directory is an independent new Git repository, owned here under
`projects/hagency-website/`. It is not a symlink. Source: https://github.com/hagency-org/hagency-website.

## Run locally

Requires Node.js 22.12+ (developed with Node.js 24.10).

```sh
npm ci
npm run dev
```

- English: http://127.0.0.1:4328/en/
- 简体中文: http://127.0.0.1:4328/zh-cn/

To serve the static build:

```sh
npm run build
npm run preview
```

Astro 7 manages its preview server as a background process. Use
`npx astro preview status`, `npx astro preview logs`, and
`npx astro preview stop` to manage this website's preview.

## Included

31 pages per language: 18 main pages, 10 practical guides, and 3 introductory
articles. Main pages cover the ecosystem, all three projects, an eight-step
interactive walkthrough, use cases, getting started, downloads, documentation,
trust and control, updates, roadmap, community, about, and brand/media.

The Matrix introduction explains the protocol, federation, and Hagency's
open-source, agent-native alternative-to-WeChat positioning. It includes an
interactive network comparison and an illustrative role selector showing equal
room permissions for a person and an agent. Both examples are local and issue
no real server requests or authorization grants.

The architecture page uses React Flow for four interactive views: the whole
system, Appservice registration, message delivery, and coding-agent runtimes.
Nodes and connections expose detailed bilingual explanations; pan/zoom/reset,
keyboard inspection, a minimap and theme switching are supported. Static API
tables, registration steps, runtime differences and connection references remain
readable without JavaScript. See [implementation sources](docs/architecture.md).

Language switching preserves the route and section anchor. Theme preference
persists across navigation. Search indexes the current language's pages and
guide/article text, with title and description ranking. Download filters use
a checked-in GitHub release manifest. The walkthrough is explicitly illustrative
and makes no requests to live agents or Matrix services.

The site includes responsive navigation, keyboard search, accessible native
dialogs, reduced-motion support, copy buttons, release filters, local fonts,
localized titles/descriptions, canonical/hreflang metadata, RSS, sitemap, and 404.

Six real development integration screenshots appear on the homepage and in
the three project galleries. Each has bilingual captions, UI-language labels,
and an enlarged view with actual-size scrolling and original-image links.
Palpo's gallery explicitly identifies its separate companion administration app.

## Content and i18n

- `src/data/site.ts`: shared UI strings, project capabilities, home content.
- `src/data/content.ts`: localized page metadata, guides, articles, trust copy.
- `src/data/workflow.ts`: all eight bilingual walkthrough steps.
- `src/data/matrix.ts`: Matrix, federation, comparison, and agent identity copy.
- `src/data/screenshots.ts`: real project screenshots and bilingual captions.
- `src/data/architecture.ts`: React Flow components, connections and four views.
- `src/data/architecture-content.ts`: detailed architecture and source notes.
- `src/data/releases.json`: verified upstream release assets and source URLs.
- `src/components/StandardPage.astro`: secondary pages and their localized copy.
- `src/pages/[lang]/[...slug].astro`: all localized content routes.
- `src/styles/global.css`: typography, dark/light tokens, responsive layouts.

`b(english, chinese)` produces a required value for each locale. Add both
translations together. Product names, commands, protocol identifiers, and asset
filenames stay unchanged. Source installation snippets are explanations linked
to upstream instructions, not a one-command deployment of the full integration.

The content snapshot was reviewed on **September 8, 2026**. Published releases
and local development integration capabilities are deliberately identified.
See [source notes](docs/sources.md) for revisions and availability boundaries.

To refresh upstream release metadata explicitly:

```sh
node scripts/update-releases.mjs
```

Review the resulting manifest and update the corresponding version labels,
dates, guides, platform descriptions, and roadmap in both languages together.
The normal build makes no GitHub API requests and uses the reviewed snapshot.

## Artwork

Both theme backgrounds are original native image-generation outputs. Their
geometry matches; headings and controls are accessible HTML. Original PNGs,
optimized WebPs, and downloadable brand assets are in `public/`.

Read [the exact prompts and provenance](docs/artwork.md). Recreate the WebP
exports after replacing the original PNGs with:

```sh
node scripts/optimize-images.mjs
```

Real interface captures have separate [provenance notes](docs/screenshots.md).
To verify their original hashes and recreate responsive previews:

```sh
node scripts/optimize-screenshots.mjs
```

The Adora reference used `gen-hero.cjs` and `gen-hero-light.cjs` with Google
GenAI. Those scripts were inspected, but their provider dependency and key
configuration were not copied. This website has no image-generation API key
or runtime image-generation dependency.

Geist and Geist Mono are distributed with their original SIL Open Font License
at `public/fonts/OFL.txt`. Project descriptions do not transfer ownership of
upstream names or licenses.

## Verify

```sh
npx playwright install chromium
npm run verify
```

The Node browser suite starts an isolated local static server and checks every
localized route, internal destinations and anchors, locale/theme persistence,
the complete walkthrough, search and empty results, download filtering, mobile
layouts at 320/390/768px, representative WCAG A/AA automated rules in both themes,
clipboard behavior, feeds, release filtering, and the missing-page experience.

The active Task Contract is `specs/task-interactive-architecture.spec.md`; earlier
site, Matrix and screenshot contracts remain in `specs/`. Their exact
test selectors are bound to the Node suite. The installed agent-spec 1.4.0
native lifecycle does not execute this Node suite; its scenario skips are
recorded separately and must not be reported as passes. See
[verification notes](docs/verification.md), `docs/lifecycle-architecture-result.json`,
`docs/lifecycle-screenshots-result.json`,
`docs/lifecycle-matrix-result.json`,
and the earlier `docs/lifecycle-result.json`.

## Public website

- English: https://hagency-org.github.io/hagency-website/en/
- 简体中文: https://hagency-org.github.io/hagency-website/zh-cn/

Pushes to `main` run typecheck, the complete local browser suite, a production
build and subdirectory browser checks, then publish the tested `dist/` artifact
through GitHub Pages. Pull requests run the same checks without deploying.

```sh
SITE_URL=https://hagency-org.github.io/hagency-website/ npm run build
node --test tests/pages.test.mjs
```

`SITE_URL` determines the origin and repository path for navigation, images,
canonical URLs, language alternates, feeds and sitemap. Unset it for local
previews at the root path with indexing disabled. Native agent-spec does not
execute these Node browser tests; its skips are reported separately.
