spec: task
name: "Hagency website product rename"
inherits: project
satisfies: [REQ-HAGENCY-RENAME]
tags: [website, i18n, branding]
---

## Intent

Present the new product name consistently while preserving generic fleet terms
and identifying historical screenshots and unpublished release packages honestly.

## Boundaries

### Allowed Changes
- src/**
- public/**
- scripts/**
- tests/**
- docs/**
- specs/**
- knowledge/**
- README.md

### Forbidden
- Live service configuration and unrelated architecture changes.

## Acceptance Criteria

Scenario: New product routes and labels
  Test: all localized routes render and internal links resolve
  Given renamed bilingual product routes
  When each page and internal link is opened
  Then all pages render without a redirect from the obsolete brand

Scenario: Honest release downloads
  Test: download platform filter selects available assets
  Given the available release manifest
  When a platform is selected
  Then only the published assets are offered for download

Scenario: Historical image provenance
  Test: project screenshots load and enlarge with localized captions and keyboard controls
  Given captured integration screenshots
  When a visitor opens an image
  Then the original capture and its localized provenance remain available
