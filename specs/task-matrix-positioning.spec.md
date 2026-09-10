spec: task
name: "Explain Matrix federation and equal room permissions"
inherits: project
satisfies: [REQ-MATRIX-POSITIONING]
tags: [website, matrix, i18n]
---

## Intent

Introduce Matrix as the open protocol beneath Hagency, explain the benefits of
federation, and demonstrate agent-native room participation in both languages.

## Constraints

- Centralized versus federated examples explain architecture, not benchmark claims.
- Permission controls are illustrative; never connect them to real authorizations.
- Room roles are distinct from Hagency runtime execution permissions.
- Native agent-spec cannot execute Node browser tests; retain native skips.

## Boundaries

### Allowed Changes
- src/**
- tests/**
- docs/**
- specs/**
- knowledge/**
- README.md

### Forbidden
- Live applications, credentials, agent permissions, external publication.

## Acceptance Criteria

Scenario: Matrix content is discoverable in both languages
  Test: all localized routes render and internal links resolve
  Given the complete localized static build
  When each route and its navigation links are opened
  Then localized content renders and every internal destination exists

Scenario: Visitors can compare network architectures
  Test: Matrix network comparison switches architecture without live requests
  Given the bilingual Matrix introduction
  When a visitor switches between federated and centralized examples
  Then the diagram and explanation reflect the selected architecture without live requests

Scenario: Identical granted roles have identical example capabilities
  Test: equal room roles update human and agent permissions together
  Given the illustrative human and agent room members
  When a visitor changes the role from collaborator to moderator and back
  Then both members receive the same displayed capabilities and no real grant is issued

Scenario: New explanations fit small screens
  Test: mobile navigation and layouts have no horizontal overflow
  Given each localized main page on a mobile viewport
  When the visitor explores the page and navigation
  Then the content fits without page-level horizontal scrolling
