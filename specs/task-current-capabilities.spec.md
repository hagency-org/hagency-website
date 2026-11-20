---
spec: task
name: "Current Hagency capabilities and core Agent UX"
inherits: project
tags: [website, feature-audit, ux, i18n, jit]
---

## Intent

Verify the website against current Desktop and Server, correct obsolete claims,
and evaluate the website plus Desktop's core Agent collaboration journeys.
The requested target is at least 90/100 and a better result than Buzz. A target
is not a result: source review cannot establish task success or a comparative win.

## Required result

- Bilingual feature-by-feature record with immutable source links, explicit
  limits, published release boundaries and evidence categories.
- Current personal-Agent, Octos profile, resource-pool and deployment guides.
  Preserve existing bookmarks without preserving retired setup instructions.
- Actual release assets; never infer a platform installer from build support.
- Dated screenshots. Retired Fleet/companion screens appear only as archives.
- Accessible, searchable comparison, readable without JavaScript.
- Headless website checks, visual inspection, measured local performance, and
  existing current-main Desktop core widget tests under JIT.
- Test the current Server using its exact CI image in disposable state. Reuse
  existing Desktop JIT dependencies/helpers. Preserve user processes; no native
  development build, installed hosting changes, paid inference or real capacity
  publication as a testing shortcut.
- Separate website review, component tests, live product journeys and competitor
  evidence. Record uncompleted acceptance as open, never as a fabricated pass.

## Acceptance links

`tests/site.test.mjs` covers localized routes, links, search, filters, keyboard,
themes, mobile overflow, screenshot provenance, no-JS content and WCAG scans.
`tests/pages.test.mjs` checks deployment paths and production metadata.
`tests/content.test.mjs` checks release/identity/source evidence consistency.
`docs/feature-verification-2026-11-19.md` records source pins, product checks,
the UX rubric, comparative limits and remaining acceptance work.

## Publication

Prepare a branch and PR. The existing main workflow deploys GitHub Pages after
merge; a preview or passing build does not mean the public website is updated.
