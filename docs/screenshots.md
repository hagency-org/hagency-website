# Product capture provenance

The public screenshot `desktop-agent-manager` is an unedited 1280×900 GPU
capture of the real Desktop Agent-manager workspace from the November 19
headless JIT run against current Server. It shows no model output, credentials,
room content, account identifier or test marker. Public copy describes the
visible workspace; source version and test procedure remain in engineering notes.

Original SHA-256, dimensions and source timestamp are recorded in
`src/data/screenshot-assets.json`. `scripts/optimize-screenshots.mjs` verifies
the PNG before generating responsive WebP previews.

Earlier September and November test captures were moved from `public/` to
`docs/assets/screenshots/`. Their original manifest is
`docs/screenshot-assets-20261119.json`. They remain engineering records and
are excluded from the published static site.
