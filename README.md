# Hagency website

Bilingual Astro website for **Hagency Desktop**, **Hagency Server** and the
**Palpo** Matrix foundation. Content audited November 19, 2026.

## Develop and verify

Requires Node 22.12+; this review used Node 24.21 and existing headless Chromium.

```sh
npm ci
npm run dev
npm run verify
SITE_URL=https://hagency.org/ npm run build
SITE_URL=https://hagency.org/ node --test tests/pages.test.mjs
```

The site has **34 routes per language**: 20 core/project pages, 11 guides and
3 articles. The two languages have matching routes. Language switching preserves
anchors; theme, search, mobile navigation, keyboard controls and no-JS references
are tested. Examples make no live Agent requests or permission grants.

## Current product and evidence

- Desktop is the native client and local owner engine. Published Desktop
  **rc.14** has macOS ARM64 and Windows x86-64 installers; the release uses the recorded
  Desktop source revision.
- Server embeds Palpo, Pasion and management in one Rust process. Retired Fleet,
  Engagement and separate Node companion setup is not the current path.
- The [engineering audit and UX record](docs/feature-verification-2026-11-19.md)
  distinguishes source contracts, release assets, current checks and historical
  real-stack JIT evidence. Buzz strengths and unmatched acceptance remain visible.
- `/capabilities/` and `/compare/` have bilingual search and category filters,
  immutable source links and complete no-JS content.
- Older URL names such as `/projects/robrix2/`, `/docs/install-robrix2/` and
  `/docs/connect-fleet/` remain valid bookmarks. Their content describes the
  current product, not the retired setup.

Primary data: `src/data/site.ts`, `content.ts`, `capabilities.json`,
`architecture.ts`, `workflow.ts`, `releases.json` and `screenshots.ts`.
Both locales are required together. Product names and protocol tokens stay
unchanged. [Source notes](docs/sources.md) record exact revisions.

## Releases and captures

Normal builds are offline and use a checked-in release snapshot. Refresh it
explicitly, then review version labels, prerelease status, architecture, download
filenames, checksums and guides together:

```sh
node scripts/update-releases.mjs
node scripts/optimize-screenshots.mjs
```

The updater includes Desktop prereleases and preserves source-only Server release
records. It does not infer native installers from platform source support.

The Desktop gallery uses a clean product-workspace capture. Earlier engineering
captures are kept under `docs/assets/screenshots/`, outside the published site. Original hashes are checked before generating WebP previews.
See [capture provenance](docs/screenshots.md).

Hero artwork and local Geist fonts retain their original provenance and SIL
license; see [artwork](docs/artwork.md). No image-generation key is required.

## Publishing

PRs run validation without deploying. Merging to main runs the same checks,
production metadata/path checks, then publishes through GitHub Pages to
https://hagency.org/. Local builds and PRs do not update the public site.
`SITE_URL` controls origin and base path; production and repository-prefix paths
are checked by `tests/pages.test.mjs`. Local previews disable indexing.

The active editorial contract is [formal product copy](specs/task-public-product-copy.spec.md).
Earlier contracts and September logs are historical records, not current passes.
Astro 7 manages preview processes: `npx astro preview status` / `stop`.

Independent public-copy review: [92/100, accepted](docs/reviews/public-copy-2026-11-19.md).
The public catalog and comparison use implementation-backed product descriptions;
internal tests, reviews and earlier audits are not rendered into the site.
