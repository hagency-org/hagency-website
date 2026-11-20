# Current architecture

The interactive map has four views: the integrated system, identity/setup,
message → work → reply and native runtime paths. `src/data/architecture.ts` is
the shared source of nodes, connections and the static text references.

Desktop owns native interaction and the local owner engine. Server runs embedded
Palpo, Pasion and management in one Rust process with three PostgreSQL databases.
The local executor keeps runtime credentials, device crypto custody and a ledger.
Codex uses App Server, Claude its native CLI, and Octos OUP with actual installed
profiles. Model-provider traffic is separate from Matrix encryption.

The former outbound Fleet relay, per-Fleet registration, Node companion, ACP
Hermes/Codex alternate-path and tmux diagrams were replaced. Keeping those old
arrows with new names would still describe the wrong system.

Each graph is keyboard-inspectable and supports pan, zoom, reset and themes. The
complete connection descriptions and runtime boundaries remain without JavaScript
or if the island request fails. No map interaction calls a live service.

Exact [source pins](sources.md) and [acceptance report](feature-verification-2026-11-19.md).
