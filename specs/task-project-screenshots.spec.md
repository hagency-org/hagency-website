spec: task
name: "Add genuine project screenshots and accessible image viewing"
inherits: project
satisfies: [REQ-PROJECT-SCREENSHOTS]
tags: [website, screenshots, i18n]
---

## Intent

Let visitors see actual project interfaces through bilingual screenshot cards
on the homepage and project pages, with an accessible enlarged original view.

## Constraints

- Keep product pixels original; generated artwork remains decorative hero art.
- Label development integration scenes, UI languages, and companion app scope.
- Only use reviewed test scenes without credentials or private runtime data.
- Native agent-spec cannot execute Node browser tests; retain native skips.

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
- Parent application code, live services, credentials, external publication.

## Acceptance Criteria

Scenario: Project screenshots open with localized context
  Test: project screenshots load and enlarge with localized captions and keyboard controls
  Given both localized homepages and the three project galleries
  When a visitor opens each screenshot and closes the enlarged view
  Then the original image loads with its localized caption and focus returns to its link

Scenario: Screenshot links work without JavaScript
  Test: original screenshot links work without JavaScript
  Given a visitor with JavaScript disabled
  When the visitor follows a screenshot link
  Then the original image opens directly

Scenario: A failed image request has a visible recovery path
  Test: screenshot load failures show a localized recovery link
  Given an unavailable original screenshot
  When the enlarged image cannot load
  Then a localized error explains how to open the original and the viewer can still close

Scenario: Localized destinations remain valid
  Test: all localized routes render and internal links resolve
  Given the complete localized static build
  When each route and its navigation links are opened
  Then every internal destination exists

Scenario: Screenshot layouts fit small screens
  Test: mobile navigation and layouts have no horizontal overflow
  Given each localized main page on a mobile viewport
  When a visitor explores the page
  Then the content fits without page-level horizontal scrolling
