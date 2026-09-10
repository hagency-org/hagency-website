# Interactive architecture — September 2026

The operator requested a whole-project React Flow chart covering Hagency ↔
Palpo web transport, Appservice registration, Robrix ↔ Palpo, and the different
coding-agent runtimes. The new `/en/architecture/` and `/zh-cn/architecture/`
routes are linked from main/footer navigation, the homepage/ecosystem overview,
all three project pages, search and the sitemap.

## Implementation

- `src/data/architecture.ts`: typed component and connection definitions; four
  view layouts; paired language strings; endpoint-membership validation.
- `src/data/architecture-content.ts`: registration steps, protocol/API tables,
  runtime differences, credential directions, storage and source notes.
- `src/components/ArchitectureFlow.tsx`: actual `@xyflow/react` island; pan,
  zoom, minimap, reset, keyboard selection, node/edge inspection and theme sync.
- `src/components/ArchitecturePage.astro`: static bilingual explanation and
  connection reference, including an island-loading fallback.
- `src/styles/architecture.css`: page and diagram styles in both themes.

React is hydrated only where the architecture island is rendered. The rest of
the site remains static Astro. React Flow's attribution is retained. Visitors
cannot add, reconnect or delete nodes/edges; dragging only changes the local
illustration, and Reset restores the reviewed layout. Separate ports and an
outer terminal route keep unrelated links from appearing to share endpoints.
Fit includes space for the outer routes. The map has no API client
for any live Hagency, Palpo, Matrix or model service. All protocol examples use
illustrative identifiers and credential placeholders.

There are four views: whole system (12 components), registration (8), message
delivery (10), and coding runtimes (8). Component descriptions and API fields
explain the inspected node; selecting a connection explains its direction and
authentication. Static text includes the same connection definitions, seven
registration stages, five transport operations, four client-connection stages,
five detailed coding-adapter cards, seven credential roles and five storage
locations. The ACP node identifies Octos, Hermes and Codex ACP, with separate
adapter details below the diagram. These are reviewed connections, not a claim
to visualize every internal function of the upstream repositories.

## Source baseline

Sources were read from the local checkouts, without modifying the applications
or contacting live service endpoints:

| Project | Reviewed checkout / revision | Evidence files |
| --- | --- | --- |
| Hagency | `hagency-outbound-20260908`, `05dc46b` | `lib/fleet-outbound-client.js`, `lib/fleet-outbound-config.js`, `lib/fleet-outbound-store.js`, `lib/matrix-direct-chat.js`, `router/src/runner.ts`, `lib/claude-thread-runtime.js`, `lib/runtime/acp.js`, `lib/runtime/tmux.js`, `lib/frameworks/{claude,codex,octos,hermes,codex-acp}.json` |
| Palpo | `palpo-outbound-20260908`, `8a0908cd` | `web-admin/README.md`, `web-admin/deploy/outbound-v2.md`, `web-admin/lib/service.mjs`, `web-admin/lib/outbound.mjs`, `web-admin/server.mjs`, `crates/server/src/routing/admin/appservice.rs` |
| Robrix2 | `robrix2`, `d5523276` | `src/sliding_sync.rs`: client construction, `MatrixRequest::SendMessage`, `SyncService` creation and persistent device configuration |

Additional Hagency evidence: `docs/guides/palpo-outbound.zh.md`,
`docs/reviews/2026-09-08-palpo-outbound-implementation.md`, and accepted
`knowledge/decisions/adr-011-backend-owned-ephemeral-runner-sessions.md`.

The public page links upstream repositories and explicitly labels the local
development baseline. Local revisions are not asserted to be the newest public
release or the exact deployed binary. The reviewed deployment report itself
distinguishes the live Palpo URL-CAS backport from the broader source baseline.
No operational URLs, private deployment IDs or downloaded credentials were
copied into the website.

## Protocol and scope decisions

1. Palpo homeserver and its companion Node web service are separate components.
   The AS relay and durable queues are inside that web service, not an additional
   implied deployment. Palpo calls the server-side relay with `hs_token`.
2. Hagency initiates HTTPS polling, ACKs and update publication with a machine
   token plus generation. No inbound fleet listener or reverse SSH tunnel is
   needed for this current path. Older explicit callback fleets remain distinct.
3. `as_token` authenticates AS calls to Matrix. `hs_token` authenticates Matrix
   delivery to the AS relay. The machine token is a third credential, independent
   of human browser sessions and of Matrix device tokens.
4. Registration read-back and owner download do not prove event delivery. An
   exact current-generation Matrix probe establishes the connection; subsequent
   heartbeats maintain liveness. ACK means receipt, not approval or completion.
5. Robrix uses Matrix SDK client APIs. Supported encrypted Hagency paths require
   actual device sessions and persistent crypto state; an AS relay alone has no
   implied decryption capability.
6. Current headless coding runners are Claude's streamed `-p` child and Codex's
   App Server stdio process. The latter creates a fresh `thread/start` and
   `turn/start`; it is not described as `codex exec` or persistent thread resume.
7. ACP, MCP, terminal transport and model-provider traffic remain distinct.
   Framework manifests declare different session, model flag, MCP injection and
   permission support. Their comments can contain historical material; actual
   runtime code and current structured capability fields take precedence.
8. Room roles, contributor resource decisions and runtime tool approvals remain
   independent. Agent-authored text is not a credential. Providers receive data
   through the agent's configured connection, not an invented Palpo model proxy.

The existing `connect-fleet` guide was refreshed in both languages to remove
its outdated default callback and unconditional connection-expiry description.

## External references inspected

- [Matrix Application Service API](https://spec.matrix.org/latest/application-service-api/): registration, scoped identities, AS token roles and transactions.
- [Matrix Client–Server API](https://spec.matrix.org/latest/client-server-api/): user/device tokens and client operations.
- [Matrix Server–Server API](https://spec.matrix.org/latest/server-server-api/): federation.
- [React Flow quick start](https://reactflow.dev/learn), [component API](https://reactflow.dev/api-reference/react-flow), and [accessibility](https://reactflow.dev/learn/advanced-use/accessibility).
- [Astro React integration](https://docs.astro.build/en/guides/integrations-guide/react/).

Dependencies were checked against their registry metadata: React/React DOM
19.2.8, `@astrojs/react` 6.0.5 and `@xyflow/react` 12.11.6. The pre-existing Sharp
0.34 dependency was updated to 0.35.4 after npm identified its inherited image
library advisories. All six original image dimensions and an in-memory hero
WebP encoding were verified with the update; no image files were rewritten.
The final dependency audit reports zero vulnerabilities.

See `verification.md` for browser checks and the separate native agent-spec
lifecycle limitation. Native skips must not be reported as executed tests.
