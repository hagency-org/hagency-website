# Current source snapshot

Reviewed November 19, 2026 (America/Los_Angeles).

- desktop: [71d6e9adba17b15dcb33c15732320c4286c45735](https://github.com/hagency-org/hagency-desktop/tree/71d6e9adba17b15dcb33c15732320c4286c45735)
- server: [9a9cbad5195f72d583b760f627d9eba608b9067f](https://github.com/hagency-org/hagency-server/tree/9a9cbad5195f72d583b760f627d9eba608b9067f)
- buzz: [69ea27343c9b60eeeb1f6e903529cd8b789e910e](https://github.com/block/buzz/tree/69ea27343c9b60eeeb1f6e903529cd8b789e910e)
- buzzApp: [c3d2b046a8773824244735750c8d87a23da36218](https://github.com/block/buzz-app/tree/c3d2b046a8773824244735750c8d87a23da36218)

Desktop rc.13's published build manifest identifies source
`5d9933a9d04577d0637723e35f369abe5f1c6e61` and Makepad
`8f788cbb788f287f4e684de913e83fbbb70df701`. Reviewed main is later and prepares
rc.14. The release JSON lists actual assets, not an inferred support matrix.
Standalone Palpo v0.6.0 is distinct from Server's pinned Palpo source.

The full 35-feature record is `docs/feature-audit-record.json`, with immutable
Desktop, Server and Buzz-app source links on every row. Buzz core and desktop
are separate repositories. The follow-up implementation review supersedes documentation-based competitor
claims. Buzz relay gift-wrap support is distinct from the native DM send path;
no native NIP-17 DM promise appears in the public comparison. See
[buzz-implementation-2026-11-19.md](buzz-implementation-2026-11-19.md).

Current main documentation contains historical sections. Server OPERATIONS.md
starts with the schema-24 direct pool-Agent flow; later schema-22/23 project
reservation descriptions are historical. Its old CRYPTO_CAPABILITY_GAPS note is
not current authority for rejecting all encrypted work. Desktop's older account
switch descriptions do not establish behavior of later account-aware daemon
hosting. The audit records these boundaries instead of copying obsolete claims.

See [verification and UX](feature-verification-2026-11-19.md). Old September logs
and contracts remain historical; none are counted as November passes.
