---
kind: requirement
id: REQ-INTERACTIVE-ARCHITECTURE
title: "Explain the entire project architecture with React Flow"
status: Accepted
liveness: n/a
tags: [website, architecture, i18n, react-flow]
---

## Source

The operator requested an entire-project React Flow architecture chart, including
Hagency to Palpo web service communication, Appservice registration with Palpo,
Robrix to Palpo connectivity, and Hagency's different coding-agent adapters in
detail. The existing English/Simplified Chinese website scope continues.

## Requirements

- Add a discoverable bilingual architecture page with a real React Flow island.
- Provide whole-system, registration, messaging, and runtime views with pan,
  zoom, reset, selectable components, and accessible text descriptions.
- Trace current implementation sources. Distinguish Palpo homeserver from its
  companion web service, outbound fleet polling from server-side AS delivery,
  and Matrix, machine, browser, and execution authorization.
- Cover actual Claude Code and Codex headless runners plus Octos, Hermes,
  Codex ACP, MCP coordination, retained tmux transport, and provider traffic.
- Explain registration steps, API directions, durable delivery, device crypto,
  federation, storage, runtime lifecycle, and published/development boundaries.
- Use illustrative hostnames and credential placeholders. The diagram must
  not communicate with live applications or grant authority.
