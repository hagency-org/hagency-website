spec: project
name: "Hagency bilingual promotional website"
tags: [website, astro, i18n]
---

## Intent

Present Hagency, Robrix2 and Palpo through a comprehensive, accessible static
website in English and Simplified Chinese using the operator-selected Adora style.

## Constraints

- Every public content route has an English and Simplified Chinese equivalent.
- Keep generated background art separate from accessible HTML typography.
- Identify development previews separately from published release capabilities.
- Never connect public interactions to live agents or Matrix services.
- Do not publish credentials or private runtime data.

## Decisions

- Astro with TypeScript, static generation and shared bilingual content.
- Browser tests run against a local static preview; external links are checked separately.
- This is an independent new repository under projects/hagency-website, not a symlink.

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
- Parent application code and all live service configuration.
