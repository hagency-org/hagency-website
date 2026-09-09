# Project screenshot provenance

Added September 8, 2026 in response to the operator's request for real project
screenshots. Six existing integration verification captures were visually
reviewed and copied from the local `palpo-admin-e2e/2026-09-06` cache archive.
The archive directory name is not the capture date: these selected files have
September 7–8 modification dates. We did not recapture live services for this
website change, and the site labels these scenes as September 2026 development
integration views, rather than assigning an unverified release or commit.

## Selected scenes

| Website asset | Archive-relative source | Source modification (UTC) | Application / UI |
| --- | --- | --- | --- |
| `hafleet-resources.png` | `resource-agent-live-v8.png` | September 8, 07:48 | HAFleet resource console / Chinese |
| `hafleet-engagements.png` | `walkthrough-engagements.png` | September 7, 21:24 | HAFleet engagements console / English |
| `robrix2-group-files.png` | `robrix-files-native-0908/robrix-files-group-saved.png` | September 8, 22:02 | Robrix2 native desktop client / English UI, Chinese conversation |
| `robrix2-encrypted-files.png` | `robrix-files-native-0908/robrix-files-encrypted-final.png` | September 8, 22:05 | Robrix2 native desktop client / English UI, Chinese conversation |
| `palpo-project-access.png` | `request-readiness-final-deployed.png` | September 7, 22:58 | Palpo companion administration / English |
| `palpo-resource-catalog.png` | `agent-definition-check-0908-repaired.png` | September 8, 23:48 | Palpo companion administration / English |

The cache archive is under the operator's local Library/Caches directory; it is
not needed to build, serve, or re-encode the website. Original PNGs, dimensions,
byte counts, full UTC timestamps, and SHA-256 digests are retained in
`public/images/screenshots/` and `src/data/screenshot-assets.json`.

## Representation and review

- Original PNGs are byte-identical to the selected sources. No interface pixels,
  account names, text, or status indicators were rewritten or generated.
- The selected scenes contain integration test accounts, test room identifiers,
  and example CSV calculations. Visible screenshots were reviewed for secrets;
  no passwords, access tokens, private keys, personal file paths, or private
  conversations were included. Other candidates containing local paths or
  authenticated view URLs were excluded.
- Robrix2 captures show the actual native client. Element Web and separate
  operations-board screenshots were excluded from Robrix2's gallery.
- The group thread is visibly unencrypted and is described only as a file
  delivery scene. The separate encrypted-room screenshot retains its lock
  indicators; neither image is presented as proof that every room is encrypted.
- Palpo's screenshots show the separate `palpo-admin-web` companion app used
  for HAFleet integration. The gallery expressly distinguishes it from the
  Palpo homeserver and says it is not included in Palpo v0.4.0's server release.
- Development status indicators and test data are retained. These images do not
  imply all visible features are part of the published release packages.

## Rendering and maintenance

`src/data/screenshots.ts` contains paired English/Chinese titles, captions,
alternative text, UI-language labels, and availability explanations. Both
languages use the original interface captures. They are not fake translations.

`node scripts/optimize-screenshots.mjs` verifies each original SHA-256 before
producing 800px and up-to-1600px WebP previews. It only resizes and encodes;
the original PNG remains unchanged. Homepage/gallery previews use a top-aligned
16:9 viewport; the resource-catalog preview is positioned lower to show its
catalog instead of repeating the access header. This is CSS framing only.
Full images remain available in the viewer and through direct
PNG links. The viewer supports width fitting, actual pixel size with scrolling,
Escape/close, focus restoration, and a localized loading/error status. Links
open the original image directly if JavaScript is disabled or a modified click
is used. PNGs load on demand when the viewer is opened.

To replace a scene, review a real capture, replace its PNG, update the manifest
and bilingual captions together, then re-run optimization and site verification.
Keep provenance distinct from hero image-generation prompts in `artwork.md`.
