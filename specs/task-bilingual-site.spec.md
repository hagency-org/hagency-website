spec: task
name: "Build the complete bilingual Hagency website"
inherits: project
satisfies: [REQ-BILINGUAL-SITE]
tags: [website, i18n, implementation]
---

## Intent

Implement the approved website scope with original hero art, equivalent
localized content and useful browser interactions.

## Constraints

- Localized routes preserve page identity when changing language.
- A walkthrough is explicitly illustrative and issues no live requests.
- Public download links are derived from verified release assets.
- Native agent-spec cannot execute Node browser tests; report its skips separately.

## Boundaries

### Allowed Changes
- src/**
- public/**
- scripts/**
- tests/**
- specs/**
- knowledge/**
- docs/**
- .github/**
- ./package.json
- ./package-lock.json
- ./astro.config.mjs
- ./tsconfig.json
- ./.gitignore
- README.md

### Forbidden
- Parent runtime source, credentials, existing services and external publication.

## Acceptance Criteria

Scenario: Both languages deliver complete static pages
  Test: all localized routes render and internal links resolve
  Given the production static build
  When every English and Chinese route is opened
  Then each renders localized content and all internal destinations exist

Scenario: Language and theme survive navigation
  Test: language preserves route and theme persists across pages
  Given a Chinese project page in light theme
  When the visitor changes language and navigates
  Then the corresponding English page and selected theme remain active

Scenario: The walkthrough can be completed and replayed
  Test: walkthrough progresses and replays without live requests
  Given the illustrative demo
  When a visitor advances through every step and replays
  Then the active panel and progress reflect the selected step

Scenario: Search handles matches and no results
  Test: localized search finds guides and handles no matches
  Given the current language search interface
  When the visitor searches known and unknown phrases
  Then matching local pages or an explicit empty result are displayed

Scenario: Download filtering retains valid release links
  Test: download platform filter selects available assets
  Given the verified release manifest
  When the visitor selects a platform
  Then only applicable release assets are offered

Scenario: Small screens remain navigable
  Test: mobile navigation and layouts have no horizontal overflow
  Given a mobile viewport in each language
  When the navigation opens and pages are explored
  Then all controls remain accessible without page-level horizontal scrolling

## Out of Scope

- Product feature development, paid services and public DNS changes.
