# Verification — September 8, 2026

Tested from the actual edited tree:
`/Users/yuechen/home/hagency/projects/hagency-website`.

## Interactive architecture — current verification

Added `/en/architecture/` and `/zh-cn/architecture/` with a real React Flow
island and four views: whole system, Appservice registration, message delivery,
and coding-agent runtimes. API tables, seven registration stages, five adapter
cards, credential directions, storage, federation and connection references are
rendered as static bilingual content. Research and provenance: `architecture.md`.

- Typecheck: **0 errors, 0 warnings, 0 hints** (40 files).
- Static build: **passed**, 62 localized content routes (31 per language), plus
  the root redirect, 404 and feeds.
- Full Node/Playwright browser suite: **17 passed, 0 failed, 0 skipped**,
  65.7 seconds, after the final diagram routing changes.
- All four views switch correctly in both languages. Node and edge keyboard
  inspection includes the custom outer terminal path, native Codex approval,
  ACP, Matrix delivery and registration connections.
- Zoom, pan, node dragging, reset, fit, locale/anchor preservation and theme
  synchronization pass at 320px and 1440px. The existing mobile suite covers all
  18 main pages per locale at 320/390/768px without page overflow.
- Static architecture content works with JavaScript disabled and with the
  actual React island request blocked. Diagram interaction issues no live
  service requests or grants.
- Automated axe checks pass with architecture included in both languages and
  themes. Screenshot galleries and all previous site interactions still pass.
- Dependency audit: **0 vulnerabilities**. The Sharp update was also checked
  against the six original capture dimensions and an in-memory hero export.

Visual review covered all four desktop diagrams, Chinese light-theme
registration, and Chinese mobile controls and inspector. Outer links fit inside
the canvas; dedicated ports separate unrelated connections. Review captures
are under `test-results/architecture-*.png`. At mobile width, the full map starts
at overview scale; zoom controls and the component selector expose its details.

Initial checks found an inline link distinguished only by color; it now has an
underline. The keyboard test now waits for React Flow's measured nodes to become
visible before focusing a newly selected view, and reads the untranslated-by-CSS
text node instead of asserting against uppercase visual styling. These initial
results are retained separately from the passing final run.

Active contract: `specs/task-interactive-architecture.spec.md`. Native agent-spec
1.4.0 reports **1 boundary pass, 0 failures, 7 skips**, quality 83%. Its overall
result remains **non-passing** because it does not execute these Node selectors.
Those native skips remain skips. Independent browser results are in
`architecture-tests.txt`; native output is `lifecycle-architecture-result.json`.
Typecheck, build, contract parse/lint and dependency audit logs use the
`architecture-` prefix in this directory. Automated browser evidence covers
Chromium, not a complete manual accessibility or cross-browser certification.

The local static preview serves both architecture routes on port 4328. No
application source, account, live service or server configuration was changed.
No public deployment, commit or push was performed for this addition.

## Project screenshots — prior verification

Added six genuine development integration captures: two HAFleet console views,
two Robrix2 native desktop views, and two Palpo companion admin views. The
homepage uses one real preview per project; each project page has a gallery.
Both languages have captions, alternative text, UI-language labels, and
development availability context. PNG originals are preserved byte for byte,
verified against source SHA-256 hashes by the responsive export script.

- Typecheck: **0 errors, 0 warnings, 0 hints** (36 files).
- Static build: **passed**, still 60 localized content routes.
- Full browser suite: **13 passed, 0 failed, 0 skipped**, 52.2 seconds.
- Screenshot checks cover all six originals in both languages at 320px and
  1440px: previews decode, originals load at their recorded dimensions,
  localized captions match, actual-size scrolling works, Escape/close restores
  focus, and the viewer stays within the viewport.
- Direct image navigation works with JavaScript disabled for all projects.
- Simulated failed PNG requests show a localized error and original-image link.
- Existing 60-route link/anchor checks, 320/390/768px mobile checks, and
  accessibility checks continue to pass. Enlarged dialogs receive additional
  WCAG A/AA axe checks for each project in both languages.

Visual inspection covered the Chinese homepage, Robrix2's gallery and desktop/
mobile viewer, the English Palpo gallery and long image, and Chinese HAFleet's
light-theme mobile gallery. The Palpo catalog thumbnail was subsequently
repositioned with CSS to show the catalog section; original pixels remain
unchanged. The three focused screenshot tests were rerun after this framing
adjustment. Review images live under `test-results/screenshots-*.png`.

Active contract: `specs/task-project-screenshots.spec.md`. Native agent-spec
1.4.0 reports **1 boundary pass, 0 failures, 5 skips**, quality 92%. Its overall
result is **non-passing**, because it does not execute the Node browser tests.
These five skips remain skips. Independent browser execution is recorded in
`screenshots-tests.txt` and `screenshots-focused-tests.txt`; native output is
`lifecycle-screenshots-result.json`. Build and typecheck output are retained in
`screenshots-build.txt` and `screenshots-typecheck.txt`.

No source application, live service, account, or server configuration changed.
The existing local static preview serves the updated website on port 4328.

## Matrix expansion — prior verification

The site now has **60 localized content pages**: 30 per language, including a
new Matrix introduction. The homepage, primary navigation, footer, ecosystem
link, search, sitemap, and existing Matrix article expose the new content.

- Typecheck: **0 errors, 0 warnings, 0 hints** (31 files).
- Static build: **passed**, 60 content pages plus redirect, 404, and feeds.
- Full browser suite: **10 passed, 0 failed, 0 skipped**, 33.9 seconds.
- Six linked Matrix primary-source pages: **all HTTP 200**.
- New comparisons tested in both languages; role changes also exercised at
  390px. The full mobile test covers all 17 main pages at 320/390/768px.
- Matrix joins the existing accessibility coverage in both locales and themes.
  A light-theme table heading was darkened after the first axe run identified
  a 4.3:1 contrast ratio. The complete final suite passes.

The network controls change between independent federated homeservers and a
single centralized service. The illustrative role control grants the same
capabilities to the human and agent cards and reverses correctly. Tests confirm
that these interactions issue no requests to live services or real grants.
Language switching preserves the Matrix page and its section anchor.

The Matrix contract is `specs/task-matrix-positioning.spec.md`. Native
agent-spec 1.4.0 reports **1 boundary pass, 0 failures, 4 skips**, quality 92%.
Its overall result remains non-passing because it does not execute Node tests.
The four native skips are not reclassified; the browser results above provide
independent evidence. See `lifecycle-matrix-result.json`, `matrix-tests.txt`, and
`matrix-external-links.txt` for retained results.

Current screenshots under `test-results/` include English dark, Chinese light,
Chinese mobile, the federation diagram, equal moderator permissions, and the
English mobile comparison. Both Matrix preview URLs return HTTP 200.

## Original site build and browser results

- `npm run check`: **0 errors, 0 warnings, 0 hints**.
- `npm run build`: **passed**, 58 localized content pages plus root redirect,
  404, two RSS feeds, sitemap, robots, and static assets.
- `npm test`: **8 passed, 0 failed, 0 skipped** in 27.5 seconds.
- Public source/documentation links: **16 checked, all HTTP 200**.
- Release manifest: three latest GitHub releases, **11 downloadable packages**.
  Asset metadata was verified through the GitHub release API; full binary
  contents were not downloaded or independently signature-verified.

The six exact Task Contract selectors all passed in the Node browser suite:

1. `all localized routes render and internal links resolve`
2. `language preserves route and theme persists across pages`
3. `walkthrough progresses and replays without live requests`
4. `localized search finds guides and handles no matches`
5. `download platform filter selects available assets`
6. `mobile navigation and layouts have no horizontal overflow`

Two additional checks cover representative automated accessibility rules in
English/Chinese and dark/light themes, plus clipboard, release filters, RSS,
sitemap, preview crawl policy, and the missing-page experience.

Browser: Playwright Chromium 153.0.8010.12. Mobile layout coverage: 320, 390,
and 768 CSS pixels across all 16 main pages in each locale. Desktop visual
review: 1440×1000. Home, documentation, demo, and downloads passed axe WCAG
2 A/AA and 2.1 AA rule checks in both languages and themes. Automated checks
are not a complete manual accessibility certification or a Safari/Firefox test.

Initial browser checks exposed intrinsic grid sizing in the HAFleet installation
section and the native search input consuming Escape before dialog dismissal.
The grid sizing and explicit dialog Escape handling were corrected. Search was
expanded to include guide/article text with title/description ranking. The
complete final suite passed after these changes.

Raw results are retained as `browser-tests.txt`, `typecheck.txt`, and
`external-links.txt` in this directory. Local review screenshots are under
`test-results/`, including both home themes, Chinese mobile, documentation,
demo, and downloads. Screenshot files are intentionally excluded from Git.

## Native agent-spec lifecycle limitation

Installed executable: agent-spec **1.4.0**. Active contract:
`specs/task-bilingual-site.spec.md`. Lint quality score: **0.9167**, with no
blocking lint errors. The final explicit boundary check **passed**.

The native lifecycle reports **1 pass (boundaries), 0 failures, 6 skips** and
returns nonzero. It did not execute the Node browser selectors. Those six
native skips remain skips; the lifecycle as a whole is **not passing**. Node
test results above are independent execution evidence, not a reinterpretation
of the native result. Full structured output is `lifecycle-result.json`.

The first boundary run rejected the `.gitignore` entry because the parser did
not recognize that bare dotfile spelling as a path. The existing intended
boundary was expressed as `./.gitignore`; no additional change scope was added.

## Preview and scope

Local static preview: http://127.0.0.1:4328/en/ and
http://127.0.0.1:4328/zh-cn/. It is managed by this project's Astro preview
process. No domain, hosting account, live application, Matrix service,
credential, or production deployment was changed.

Local metadata is intentionally unindexed until a real HTTPS `SITE_URL` is
selected. The website displays the September 8 reviewed content snapshot;
future release changes require an explicit content refresh in both languages.

## 2026-09-09 — Product brand rename

Renamed current website labels/routes to Hagency while retaining generic fleet
terms and the existing architecture implementation. Historical captures retain
their original pixels and are labeled as pre-rename captures. Removed invented
renamed release asset URLs and linked to the source guide while a Hagency package
is unpublished.

Astro check/build passed. All 17 browser tests passed after the download filter
assertions were updated to the actual nine published assets and two releases.
Agent-spec boundary validation passed; native Node scenarios remain skipped, not
passing. Evidence and the complete pre-rename snapshot are under
`~/Library/Caches/hagency-rename/2026-09-09/`.

## 2026-09-09 — GitHub Pages publication

Authorized destination: `hagency-org/hagency-website`, at
https://hagency-org.github.io/hagency-website/. The Pages build includes the
completed bilingual architecture and Hagency product rename. Navigation, assets,
feeds, sitemap, canonical metadata and locale entrypoints honor the repository
base path. Local root-path previews remain supported.

Astro check/build and all 17 existing browser tests passed. A production build
passed both new Pages browser tests, covering all 62 localized content routes,
asset paths, locale switching, search, screenshot loading and interactive
architecture. Native agent-spec Node scenarios remain skipped (non-passing);
actual browser execution is recorded separately. Evidence is in
`~/Library/Caches/hagency-website-publish/2026-09-09/`. GitHub Actions repeats both
builds and all browser tests before deploying the tested Pages artifact.
