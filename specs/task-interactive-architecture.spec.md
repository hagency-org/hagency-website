spec: task
name: "Interactive bilingual project architecture"
inherits: project
satisfies: [REQ-INTERACTIVE-ARCHITECTURE]
tags: [website, architecture, react-flow, i18n]
---

## Intent

Explain the actual connections across the three projects with React Flow and
equivalent accessible text, based on the reviewed development sources.

## Constraints

- Preserve English/Chinese parity and the existing visual style.
- No live requests, credentials, server mutations, or actual grants.
- Identify development extensions separately from standard Matrix and releases.
- Native agent-spec skips are not substitutes for executed Node browser tests.

## Boundaries

### Allowed Changes
- src/**
- tests/**
- docs/**
- specs/**
- knowledge/**
- ./package.json
- ./package-lock.json
- ./astro.config.mjs
- ./tsconfig.json
- README.md

### Forbidden
- Parent/source applications, live services, credentials, external publication.

## Acceptance Criteria

Scenario: All diagram views expose their components and connections
  Test: architecture diagram switches views and inspects connections in both languages
  Given the bilingual architecture explorer
  When a visitor changes each view and selects a component or connection
  Then the localized details match the selection without live requests

Scenario: Diagram navigation can be reset
  Test: architecture zoom reset theme and mobile controls work
  Given the interactive diagram on desktop and mobile
  When the visitor zooms, moves a node, resets and changes the theme
  Then the map returns to its original layout and follows the selected theme

Scenario: Architecture remains available without client scripts
  Test: architecture text explains all connections without JavaScript
  Given a browser without JavaScript
  When the architecture page is opened
  Then registration, client, outbound, runtime and connection explanations remain readable

Scenario: Diagram loading failure retains the architecture explanation
  Test: architecture text survives a failed island request
  Given a failed React island request
  When the visitor reads the architecture page
  Then the static explanation and connection table remain available

Scenario: All localized destinations remain valid
  Test: all localized routes render and internal links resolve
  Given the localized static build
  When all routes and navigation links are opened
  Then each internal destination exists

Scenario: Mobile content remains usable
  Test: mobile navigation and layouts have no horizontal overflow
  Given every localized main page on a mobile viewport
  When the visitor explores the content
  Then the page has no horizontal overflow

Scenario: Both themes remain accessible
  Test: key pages meet automated accessibility checks in both themes
  Given both languages and themes
  When the key pages are examined
  Then automated accessibility checks have no violations
