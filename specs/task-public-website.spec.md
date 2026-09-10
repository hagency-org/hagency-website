spec: task
name: "Publish the Hagency website"
inherits: project
satisfies: [REQ-PUBLIC-WEBSITE]
tags: [website, deployment, i18n]
---

## Intent

Publish the complete bilingual website with repeatable GitHub Pages deployment
and correct routing beneath the repository subdirectory.

## Boundaries

### Allowed Changes
- src/**
- public/**
- scripts/**
- tests/**
- .github/**
- specs/**
- knowledge/**
- docs/**
- ./astro.config.mjs
- ./package.json
- ./package-lock.json
- ./tsconfig.json
- ./.gitignore
- README.md

### Forbidden
- Live Matrix service configuration and credentials.

## Acceptance Criteria

Scenario: Repository subdirectory routing
  Test: GitHub Pages serves localized routes and assets under its base path
  Given a production build under the repository path
  When the homepage and all localized links are opened
  Then navigation and static assets resolve inside that path

Scenario: Interactive production navigation
  Test: GitHub Pages keeps locale search screenshots and architecture interactive
  Given the deployed bilingual website
  When a visitor changes locale, searches, opens a screenshot and changes a diagram
  Then each interaction works without missing assets or JavaScript errors

Scenario: Missing paths remain missing
  Test: GitHub Pages serves localized routes and assets under its base path
  Given a request outside the repository path
  When the preview server receives the request
  Then it returns a not found response
