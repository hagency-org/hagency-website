# Content verification — September 8, 2026

The site uses primary project repositories, their latest published releases,
and existing dated integration reports in the operator's local working trees.
No live product instance was restarted or exercised for this editorial review.

| Project | Public source reviewed | Published release | Development evidence |
|---|---|---|---|
| HAFleet | [hagency-org/HAFleet](https://github.com/hagency-org/HAFleet), master `4fb9749` | [v1.2.0](https://github.com/hagency-org/HAFleet/releases/tag/v1.2.0), July 30 | Local `c380959`, September 8 integration reports |
| Robrix2 | [Project-Robius-China/robrix2](https://github.com/Project-Robius-China/robrix2), main `e28e118e` | [v1.1.0](https://github.com/Project-Robius-China/robrix2/releases/tag/v1.1.0), July 22 | Local `88ebf221`, September 8 macOS client verification |
| Palpo | [palpo-im/palpo](https://github.com/palpo-im/palpo), main `c96c8e33` | [v0.4.0](https://github.com/palpo-im/palpo/releases/tag/v0.4.0), July 7 | Separate local companion-admin worktree `c8748200` |

Public and local branches diverge. The local changes must not be presented as
included in those public release packages. `src/data/releases.json` contains
the exact GitHub release asset URLs, byte sizes, architectures, publication
timestamps, signatures when supplied, and the API verification timestamp.

## HAFleet

Node.js local coding-agent operations, documented macOS/Linux setup, resource
configuration and named agent definitions. The newer integration includes
manual contributor allocation, observed admission, task threads, visible
activity, scoped owner approvals, and file delivery. Those capabilities have
explicit runtime and version limits. No centralized marketplace, commercial
billing, universal hard token-cap enforcement, or universal offline model
execution is claimed.

## Robrix2

Native Rust/Makepad Matrix client. Native Sliding Sync is a prerequisite.
The verified release has macOS ARM64/x86-64, Linux ARM64/x86-64, Windows x86-64,
and Android ARM64 assets. iOS requires a source build; OpenHarmony is
experimental. Recent approval-card and encrypted-attachment changes were
verified on a selected macOS development build, not every published platform.
The upstream community link was obtained from the repository documentation.

## Palpo

Rust/Salvo Matrix homeserver using PostgreSQL. The inspected source README
specifies Rust 1.94+ and PostgreSQL 16+. See [Palpo documentation](https://palpo.im/).
Maintainers identify limited large-scale, long-running production evidence.
The newer HAFleet companion admin is a separate Node service; it is not part
of the v0.4.0 archive. Credential rotation and fleet-wide stop acknowledgment
remain gaps. No blanket production-readiness or complete encryption-path
compatibility claim is made.

## Supporting sources

- [Matrix specification](https://spec.matrix.org/): rooms, identities, events,
  membership, application services, and protocol responsibilities.
- [Adora website source](https://github.com/ymote/adora-website): selected visual
  reference; local revision `44ff68f` matched public HEAD.
- [Astro documentation](https://docs.astro.build/): static routing and localized
  page architecture. Installed Astro version is pinned in `package-lock.json`.

Project names and upstream license attribution remain with the respective
projects. Marketing prose describes current responsibilities and explicitly
labeled illustrative scenarios; it invents no customer testimonials, adoption
statistics, performance benchmarks, pricing, or release commitments.

## Matrix introduction and agent-native positioning

The operator requested an open-source WeChat comparison, the benefits of Matrix
over centralized communication, equal granted agent privileges, and federation.
The resulting English and Chinese Matrix pages draw on these primary sources:

- [Matrix introduction](https://matrix.org/) and
  [elements of Matrix](https://matrix.org/docs/matrix-concepts/elements-of-matrix/):
  the open protocol and client/homeserver relationships.
- [Matrix room model](https://spec.matrix.org/latest/#room-structure):
  shared rooms, user identities, and event synchronization across homeservers.
- [Server-server API](https://spec.matrix.org/latest/server-server-api/):
  federation between independent homeservers.
- [Room power levels](https://spec.matrix.org/latest/client-server-api/#mroompower_levels):
  per-identity room permissions and per-action thresholds. The site's equal
  human/agent roles are an application of this identity-based model; the protocol
  does not award elevated privileges merely because a participant is an agent.
- [Application-service API](https://spec.matrix.org/latest/application-service-api/):
  integration identities and application-service participation.

The permission illustration uses ordinary message events and typical room topic/
redaction thresholds. It is not a settings screen and does not grant privileges.
Room authority remains distinct from runtime/host authority. Creator-specific
rules vary across Matrix room versions; no universal administrator override is
claimed. The source comparison concerns typical deployment models, not a feature
audit of every centralized messenger.

The WeChat comparison is the operator's product positioning for communication
and collaboration. Copy identifies Hagency as independent and does not claim
WeChat affiliation, payments/Mini Programs parity, universal encryption support,
automatic account migration, or outage immunity.

## Real project screenshots

Six reviewed September 7–8 integration captures were added from the operator's
local verification archive. Their originals, hashes, UI-language labels, and
provenance are recorded in [screenshots.md](screenshots.md). Homepage project
cards now show real interfaces; project pages each include two views. Palpo's
views are labeled as its separate development companion admin application,
not as features bundled in the published Palpo v0.4.0 server package.
