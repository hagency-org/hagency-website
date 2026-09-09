# Hero artwork and visual reference

Created September 8, 2026 for this website with the native image-generation
tool. The dark image was generated first; the light image was an edit referencing
the dark image to preserve composition. No text or interface was baked into the
backgrounds. No existing product screenshot was edited or claimed as a new one.

## Reference inspected

- Repository: https://github.com/ymote/adora-website
- Inspected revision: `44ff68f`, matching the public HEAD during review.
- Scripts: `gen-hero.cjs`, `gen-hero-light.cjs`.
- Reference provider: `@google/genai`, `GEMINI_API_KEY`,
  `gemini-3.1-flash-image-preview`.
- Prompt requested 1920×1080; saved reference assets were 1376×768.

The adopted direction is charcoal/teal/amber, precise fine geometric linework,
generous negative space, and HTML typography over a decorative generated image.
Hagency's original motif uses connected geometric constellations for human–agent
collaboration. No Adora logo or hero asset was copied.

## Exact dark prompt

Create an original premium website hero BACKGROUND for Hagency, an open source human-and-AI-agent collaboration ecosystem. Wide landscape 16:9, ideally 2048x1152. Style: fine mono-weight geometric linework inspired by Renaissance engineering proportion studies reimagined as an understated modern network drawing. Deep near-black charcoal (#0A0A0F) background with very faint indigo depth. Delicate teal (#00D4AA) lines and sparse amber (#FFB84D) accent points. Refined, quiet, precise, spacious, highly polished. Three loosely connected constellations at the OUTER edges suggest conversations, coordinated agent work and federated servers: concentric proportion circles and orbiting small nodes, branching fine communication paths, subtle golden-ratio construction curves. Asymmetric diagonal composition: upper-right and lower-left host most fine detail; a few faint connections hug the right and bottom edges. KEEP THE ENTIRE MIDDLE 60 PERCENT nearly empty dark charcoal with no focal objects: a centered large HTML headline and buttons will overlay this region. Ensure the central crop still works on a tall mobile screen. Artwork is low-contrast decorative atmosphere, not an explanatory diagram. No literal robots, no robot arms, no people, no brains, no gears, no photographic textures, no bright neon bloom, no interface panels. ABSOLUTELY NO TEXT, letters, numbers, captions, labels, logos or watermark. Single finished dark hero background image.

## Exact light edit prompt

Create the LIGHT THEME counterpart of this Hagency website hero background. Preserve the exact composition, node positions, circular construction geometry, fine paths, original image aspect ratio, and vast quiet empty middle. Change only the palette and luminosity: background becomes very pale near-white lavender (#F5F5FA with a subtle #EAEAF2 depth), dark teal (#008866) thin lines at restrained opacity, small muted warm amber (#B5761C) nodes and very faint slate-blue geometry. Match the understated elegance of a modern Renaissance engineering drawing on clean bright paper. Keep the middle 60 percent almost empty for dark HTML headings. No additional objects, no filled panels, absolutely no text, letters, numbers, logos, watermark or UI elements. One finished light-theme background with the same geometry as the input.

## Outputs

Actual output dimensions for both images: **1672×941**. Model-specific dimensions
were not assumed from the prompt. These files are the retained original outputs:

- `public/images/hagency-hero-dark.png`
- `public/images/hagency-hero-light.png`

Generation artifact identifiers:

- Dark: `01a08345-3bd2-7272-914b-b0579f2bdf9a/exec-62082b28-1fab-4ce2-b9df-3f785c06b8db.png`
- Light: `01a08345-3bd2-7272-914b-b0579f2bdf9a/exec-567c4c27-c58e-4551-9a09-4157026c41de.png`

`scripts/optimize-images.mjs` performs format optimization only, preserving
dimensions. WebP exports are approximately 48 KB (dark) and 66 KB (light).
The social preview currently uses a copy of the original dark artwork.

Homepage project cards now show genuine interface screenshots. Each project
page also has a two-image gallery, while its original HTML conceptual diagram
remains explicitly labeled. See [screenshot provenance](screenshots.md) for the
six reviewed integration captures and the difference between Palpo's server
and its companion administration app. Product screenshots are separate from
the generated hero artwork.
