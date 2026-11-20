# Feature verification and core Agent UX — November 19, 2026

Scope: website plus Desktop core Agent collaboration. The requested acceptance
target is ≥90/100 and a better result than Buzz; neither target is assumed from
feature counts, source support or passing component tests.

## Source and release boundaries

- desktop: [`71d6e9adba17b15dcb33c15732320c4286c45735`](https://github.com/hagency-org/hagency-desktop/tree/71d6e9adba17b15dcb33c15732320c4286c45735)
- server: [`9a9cbad5195f72d583b760f627d9eba608b9067f`](https://github.com/hagency-org/hagency-server/tree/9a9cbad5195f72d583b760f627d9eba608b9067f)
- buzz: [`69ea27343c9b60eeeb1f6e903529cd8b789e910e`](https://github.com/block/buzz/tree/69ea27343c9b60eeeb1f6e903529cd8b789e910e)
- buzzApp: [`c3d2b046a8773824244735750c8d87a23da36218`](https://github.com/block/buzz-app/tree/c3d2b046a8773824244735750c8d87a23da36218)

Desktop rc.13 publishes macOS ARM64 and Windows x86-64 installers. Its build
source is `5d9933a9d04577d0637723e35f369abe5f1c6e61`, earlier than reviewed main.
No rc.13 Linux/Intel Mac/mobile binary is inferred. Server has source and CI
containers, not a standalone release installer. Palpo standalone is v0.6.0.

## Website corrections

| Previous website | Current correction |
| --- | --- |
| Robrix2 v1.1.0 client | Hagency Desktop rc.13, main preparing rc.14 |
| Hagency 1.2 runtime / Node-era setup | Hagency Server, integrated Rust service |
| Separate Palpo companion admin | Embedded Palpo + Pasion + Rust/Yew management |
| Fleet configuration, pairing and per-Fleet AS | Native OAuth/device ownership and mandatory integrated AS |
| Project → reservation → Agent allocation as entry path | Personal Agent first; schema-24 pool requests need no Project |
| Provider allocation = ready | Owner decision, native hold, worker qualification and room admission are distinct |
| Broad desktop/mobile download story | Five actual Desktop/Palpo installers, Server source-only release record |
| Hermes/Codex ACP and tmux architecture | Current Codex App Server, Claude CLI, Octos OUP |
| Broad task/report promise | Native captured reports supported; autonomous post-run ADR remains partial |
| Screens from September shown as current | Dated JIT capture and explicit archived September gallery |
| Development and releases loosely separated | Source pins, release commits and evidence category per feature |
| No substantive Buzz comparison | Includes Buzz encryption, Git, workflows, canvas, voice and harness strengths |

## Feature-by-feature result

Source-reviewed does not mean live-validated. `server-smoke` names the Server
portion exercised by the exact-image smoke; it does not certify the Desktop
journey or paid inference. `historical-jit` explicitly refers to November 17.

| Feature | Desktop | Server | Buzz source review | Limit / evidence |
| --- | --- | --- | --- |
| Account and sign-in | Native Pasion OAuth / PKCE; Matrix SDK session. | Embedded Pasion; Matrix account provisioning. | Nostr identity; native key custody and import. | Different identity systems; include key backup and device readiness in onboarding tests. **server-smoke** |
| First personal Agent | Agent → Agent manager → My Agents → Add Local Agent, after this account is hosted here. | Permanent owner and Agent creation policy. | Personal agents with recommended harness setup. | Fresh accounts need hosting setup for local execution. Without hosting and pool capability, current main has an onboarding dead end; a guidance fix is prepared separately. **server-smoke** |
| Agent ownership | Owner controls settings, execution and removal. | Personal ownership is separate from global administration. | Agent identity, config and harness management. | Room access does not transfer ownership. **source** |
| Projects and rooms | Projects use Matrix Spaces; rooms have independent membership. | Space/room verification and bindings. | Relay-scoped communities, channels and threads. | A Space is not a workspace ACL inherited by every room. **server-smoke** |
| When an Agent responds | Personal DM; group mention and supported thread follow-up. | Routes eligible events to the bound executor. | Mentions, personal chat and workflow triggers. | An unmentioned group message must not silently start a model task. **source** |
| Conversation context | Contexts scoped by Agent, room and top-level group thread. | Durable context and dispatch identity. | Conversation and thread context in native agents. | Room membership and another thread must not broaden execution scope. **source** |
| Codex integration | Native App Server protocol, supported approvals, questions and usage. | Executor capability and lease control. | Codex harness available. | Protocol support is not a claim of every interactive CLI feature. **source** |
| Claude integration | Managed native CLI, structured supported controls. | Qualified executor dispatch. | Claude harness available. | Review platform sandbox and permission policy; do not infer CLI parity. **source** |
| Octos and actual model profiles | OUP integration lists installed Octos profiles and model choices. | Resource configuration is bound to executor capability. | The reviewed help does not establish an Octos harness. | Keep distinct profiles for the same model; a listed model is not a successful inference test. **source** |
| Local and custom model endpoints | Octos profiles may use local models or custom endpoints. | Per-resource accounting; no universal provider identity. | Harness and provider dependent; not scored as absent. | Expose only the owner-selected profiles; local secrets stay local. **source** |
| Pi, Goose and Hermes | No complete current native adapter acceptance for these in this audit. | Executor protocols do not automatically add an adapter. | Pi and Goose are documented harnesses. | Buzz has broader documented harness coverage; Hermes support is not established here. **source** |
| Tool permission decisions | Owner reviews supported native requests in structured UI. | Validates ownership, bound decision and execution authority. | Harness policy and permission controls. | Ordinary chat text and room roles are not tool authorization. **source** |
| Interactive questions | Supported structured questions return to the active runtime. | Retains bound operations and receipts. | Harness interaction support; exact parity needs a matched test. | Question handling is provider-specific; do not advertise a terminal replacement. **source** |
| Files and artifacts | Native Matrix file bridge for Codex and Claude. | Media and durable authorized file operations. | Media and local agent artifacts. | Hagency native path caps a request at 64 files / 64 MiB; Octos parity is not established. **source** |
| Encrypted conversation | Matrix SDK device keys and encrypted Agent room path. | Executor-device routing for encrypted Agent work. | NIP-17 gift-wrapped encrypted direct messages. | Both support encrypted paths. Executors and configured model providers can see task plaintext. **source** |
| Room-key readiness | Signature-checked SDK discovery guards sendability. | Server key publication alone does not update sender SDK state. | Different Nostr key model; no Matrix room-key claim. | The 30-second helper bound does not guarantee every key-sharing case succeeds. **source** |
| Independent Agent reports | Captured provider reports get distinct chat events and duplicate suppression. | Delivery-only authorization and reply outbox. | Agent messages in chat; no equivalent matched recovery test run here. | November 17 JIT tested encrypted DM/group and restart with deterministic Codex, not paid inference. **historical-jit** |
| Autonomous post-run messages | ADR 0013 remains partial; native Octos report experiment is disabled. | Full durable unsolicited routing is not established by current evidence. | Schedule/webhook workflows documented. | Do not claim every autonomous message from every CLI is delivered. **partial** |
| Request an Agent from a pool | Select pool, Agent name and positive token ceiling. | Current schema-24 applicant-driven contract. | No equivalent shared-capacity approval contract verified. | One pool per Agent; no prerequisite Project or intermediate reservation in the new flow. **source** |
| Resource owner approval | Owner receives and reviews the request. | Only selected owner decides; native hold and executor qualification follow. | Not established in reviewed sources. | Approval alone is not a successful hold or a ready worker. **source** |
| Resource-pool availability | Requires a compatible Server-advertised capability. | Optional management gates; explicit TOML overrides environment defaults. | No Hagency management API compatibility. | A hidden pool entry may be a server configuration issue, not a missing Desktop feature. **source** |
| Budget and accounting | Shows limits, actual use and retained uncertainty. | Postpaid reconciliation and retained holds. | Agent usage reporting; no equivalent pool ledger claimed. | Admitted work may exceed a limit. This is not a hard spending cap or commercial billing. **source** |
| Retry and restart | Durable commands recover their original operation. | Leases, outbox receipts and generation checks. | Recovery behavior requires matched testing. | An uncertain result must not trigger a blind replay or be counted as zero usage. **server-smoke** |
| Stop and revoke | Applicant removes Agent; resource owner can stop supply. | Fences new execution; retains consumed and unresolved usage. | Harness run controls and configuration. | Revocation cannot undo completed tool side effects; stop acknowledgment must be tested. **source** |
| Multiple owner accounts | Reviewed main adds account-aware daemon hosting after rc.13. | Each owner/account has separate authority. | Community switching has relay-scoped identity and state rules. | Do not promise this main-only behavior in the rc.13 installer. **main-only** |
| Federation and community scope | Matrix room membership and standard client transport. | Embedded Palpo supports Matrix server-to-server federation. | Community URL is authoritative; relay-scoped tenants, NIP-29/NIP-42. | Federation depends on deployment, membership and keys; it does not federate coding-tool authority. **source** |
| Other clients, including Element | Standard m.room.message text is interoperable. | Delivers Matrix room events; management is Hagency-specific. | Nostr/NIP-compatible clients have different interoperability boundaries. | Element E2E verification was not performed; native approval cards need client-specific UI. **partial** |
| Server administration | Native Agent experience is separate from server administration. | Rust/Yew web UI, integrated Palpo and Pasion in one process. | Relay/server tooling and desktop client. | No separate Node companion or Fleet pairing is required. **server-smoke** |
| Published Desktop installers | rc.13: macOS ARM64 and Windows x86-64. Main prepares rc.14. | No standalone release binary; source and CI containers. | Desktop releases and platform-specific harness availability. | Old Robrix2 packages are not current Hagency Desktop releases. **release** |
| Mobile availability | No Android or iOS installer in rc.13. | Browser frontend exists; mobile UX not validated here. | Do not infer mobile native parity from desktop sources. | Source/platform support and available installers are different claims. **release** |
| Git workflow collaboration | Coding agents can work in local repositories. | No matched native NIP-34-style Git review flow verified. | NIP-34 patches, repositories and status are documented. | Buzz has a documented product advantage here; a CLI returning a patch is not equivalent UX. **source** |
| Scheduled and event workflows | No full native YAML workflow builder established in this audit. | Agent dispatch is not a workflow-builder parity claim. | YAML message, reaction, schedule and webhook workflows. | Buzz has broader documented automation; no fabricated Hagency parity. **source** |
| Shared canvas | Mini-apps and webviews exist; no matched collaborative canvas acceptance. | No equivalent canvas contract established. | Channels and direct-message canvases are documented. | A mini-app container is not a substitute for a tested shared canvas workflow. **source** |
| Voice collaboration | No equivalent core Agent voice workflow verified. | No matched voice task acceptance. | Current help documents voice huddles and agent participation. | Use current Buzz help, not its older incomplete-huddles README summary. **source** |
| Acceptance and evidence | Historical encrypted real-stack JIT evidence is dated separately. | Pinned-main CI and local container smoke have separate results. | Source-reviewed here; no same-task native live benchmark yet. | A score above 90 or an overall win requires repeatable task evidence for both products. **source** |

Every row has immutable supporting links in `src/data/verification.json` and
the bilingual capability/compare pages. This table is a snapshot, not a claim
that native Buzz was benchmarked against Hagency on the same tasks.

## Current checks

- Exact Server OCI image `ghcr.io/hagency-org/hagency-server:sha-9a9cbad`,
  digest `sha256:40e0429cd662e7f6bc40231d56bfb7585af217cd302fd96f71d20d8bf99461e5`.
  Source fingerprint matched the reviewed commit before running.
- Isolated local Docker smoke passed: three databases, required AS roundtrip,
  ordinary registration → DCR/PKCE without second login, non-admin rights,
  Space/Room/Agent, actual Matrix reply, file receipt drain on SIGTERM, and
  durable identity/new device generation after restart. No model invoked.
- Current Desktop: 50 `hagency::ui::tests` passed through the pinned Makepad JIT,
  using existing helpers and 19 source/version/feature-matched native packages.
  The fail-closed Cargo/cc adapters only reused precompiled native outputs.
  The runner generic “building native dependencies” line is not a native build.
- Widget tests cover actual Octos profile identity, saved model choices, stale
  approval rejection, service/stop status, room scope, unknown-result retry and
  creation/chat routing. These are component tests, not full live task evidence.
- A separate hidden current-main JIT completed real Pasion PKCE and Matrix sync
  against the current OCI Server. Testing uses a private profile and installation
  root on an idle host; existing user JIT processes are retained.
- Website final browser results and UX measurements are recorded in
  `docs/current-audit-results.json`. Earlier `docs/*tests*.txt` are historical.

## UX rubric and acceptance gates

Website review weights: truth/version clarity 25, finding the right first step
20, task guidance 20, accessibility/responsiveness 20, loading/interaction 15.
The score is an internal expert review backed by headless checks and actual
screens, not user-research data or field Core Web Vitals. Deduct for remaining
legacy bookmark names, long reference pages and untested assistive-technology
behavior. The machine-readable result records each awarded score and evidence.

Desktop core journey weights: first account/Agent setup 20, runtime/model
selection 15, encrypted DM/group collaboration 25, approvals/questions 15,
stop/recovery/uncertainty 15, accessibility/performance 10. A widget pass cannot
fill a live-journey category. Unrun categories remain **not scored**, not zero
and not a pass. A live model task, encrypted multi-user flow, permission/stop
journeys and matched Buzz task run are required before granting ≥90 or a win.

## Comparative judgment and remaining work

Hagency has useful source-level distinctions: Matrix room federation, explicit
resource-owner decisions and installed Octos profile selection. Buzz has
documented broader harnesses, YAML workflows, NIP-34 Git, canvases and voice.
Both have encrypted messaging paths. No overall superiority is established.

Run both products with the same fresh-account setup, deterministic provider,
repository, permission task, encrypted conversation and restart scenario.
Record task success, time, recovery clarity, keyboard completion and supported
platform/version. Preserve failed attempts. Then add real model smoke separately
if approved credentials are available; do not silently spend a personal account.

Website and Desktop are separate scorecards. Closing website checks does not
close the end-to-end/Desktop/Buzz acceptance gate.


## Live finding, repair and score

The real fresh-account UI revealed a documentation drift that source-only review
missed. The entry is **Agent → Agent manager → My Agents → Add Local Agent**,
after Hosting has set up this account on the execution computer. The old quick
start still says Agents → New Agent. The website now explains the actual path
and its prerequisite.

Without hosting and with pool capability disabled, current main hid the local
section and only asserted that the server needed an update. A current Server
with optional pools disabled disproved that diagnosis. [Desktop PR #179](https://github.com/hagency-org/hagency-desktop/pull/179)
adds the missing hosting guidance and distinguishes settings from version
support. The patch rendered correctly in the real restored JIT session in both
languages, and the stated Hosting header reached the existing setup page. No
OS hosting setup was installed. This PR is separate from the audited main and
is not represented as already released or merged.

**Website review: 92/100**, internally awarded as 24/25 truth/version clarity,
18/20 first-step findability, 18/20 guidance, 18/20 accessibility/responsiveness,
and 14/15 loading/interaction. This is a declared expert review, not independent
user research. The 23 checks passed, covering 68 localized routes, and both production-path checks passed at the domain root and repository prefix. Sixteen local headless samples at 4× CPU,
40 ms latency and 10 Mbps, cache disabled, measured FCP 164–228 ms, LCP
164–292 ms, initial CLS ≤0.00033 and no overflow. Subresource transfers were
116–183 kB; these exclude the HTML document and are not field measurements.

**Desktop ≥90 is not accepted; no overall Buzz win is established.** Current
component checks are 50/50; the live checks cover login, workspace navigation,
restoration and the repaired prerequisite/error guidance. They do not complete
hosting installation, first-Agent creation/model execution, current-main
encrypted multi-user execution, live permission/stop controls, or a matched
native Buzz run. Historical November 17 encrypted acceptance is still distinct.

The held UI fixture's subsequent smoke continuation failed with HTTP 401 when
renewing its original harness session after the long pause. It is retained as
a failure, not counted as a second smoke pass. The separate fresh exact-image
Server smoke passed in full. Private Docker state was disposed; this pause
failure does not turn the UI checks into a full post-hold recovery test.


## Next acceptance work for the Desktop/Buzz target

1. Finish the first-local-Agent journey in a dedicated OS-user/installation
   environment where hosting setup cannot replace another account's service.
   Verify that the actual installed profile catalog reaches its saved model and
   that stale/unsupported runtime choices explain a recovery path.
2. On the same Desktop/Server snapshot, exercise encrypted owner DM and two-human
   group work, structured question/permission decisions, stop while busy,
   reconnect/restart and uncertain-result recovery. Keep the deterministic
   provider boundary explicit and report actual inference separately.
3. Run Buzz's current native app on the same tasks and provider fixture. Compare
   completion, time, steps, keyboard reachability and recovery clarity. Grade
   only matched tasks. Implement the highest-impact observed gaps, then rerun.

These are acceptance gates, not features that this website PR claims to ship.
No native development build or shared-machine hosting installation is used as a
shortcut. The proposed website's 92/100 is separate from the still-unaccepted
Desktop score and does not apply to the old public site before deployment.
