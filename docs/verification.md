# Verification index

Current: [November 19 feature audit, UX rubric and actual checks](feature-verification-2026-11-19.md).
Machine-readable results: `current-audit-results.json`.

All older September browser/typecheck/lifecycle logs and contracts in this
folder are retained historical evidence. They do not validate the November
product snapshot. The native agent-spec lifecycle did not run the Node browser
suite; its skips must never be counted as passes.

Run `npm run verify`, then build with `SITE_URL` and run `tests/pages.test.mjs`
for the actual production or repository-prefix deployment path. Current source
claims also have `tests/content.test.mjs` consistency checks.
