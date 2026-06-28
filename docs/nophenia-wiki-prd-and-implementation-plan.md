# Nophenia Wiki PRD And Implementation Plan

Target site: nophenia

Target domain: https://www.nophenia.wiki

## Positioning

Nophenia is a small dream explorer by lane. The site should be a compact guide
hub for players who search for `nophenia`, `nophenia wiki`, `nophenia guide`,
`nophenia play online`, walkthroughs, endings, achievements, Steam, itch.io, and
safe download paths.

The first screen should answer the game identity and let users either play the
browser build or jump into practical guide pages. The site should not pretend to
be an official wiki, and it should not invent unsupported Discord, APK, mobile,
or modded-client claims.

## Source Notes

- Official Steam app: https://store.steampowered.com/app/3979330/nophenia/
- Steam API release metadata: released June 26, 2026; developer and publisher
  lane; genres Adventure, Casual, Indie, Simulation; short description "a small
  dream explorer."
- Official itch.io page: https://emiwa.itch.io/nophenia
- itch browser build source used for self-hosting:
  https://html.itch.zone/html/15717590/index.html
- Official itch trailer video: https://www.youtube.com/watch?v=brHDlSkKQMQ
- Supporting walkthrough videos:
  - https://www.youtube.com/watch?v=qQCsY4pnbnM
  - https://www.youtube.com/watch?v=CMaQymZ0y9Q
  - https://www.youtube.com/watch?v=ImxzKzGgva4
- Steam achievement identifiers found through the Steam achievement percentage
  API: `achievement_???`, `achievement_meow`, `achievement_howl`,
  `achievement_mattress`.

## Keyword Matrix

- `nophenia`: home page, source facts, screenshots, official trailer
- `nophenia wiki`: home page and guides hub
- `nophenia guide`: `/guides` and `/guides/beginner-guide`
- `nophenia paly online` and `nophenia play online`: `/play-online`, with
  typo redirect coverage
- `nophenia walkthrough`: `/guides/walkthrough-ending`
- `nophenia ending`: `/guides/walkthrough-ending`
- `nophenia achievements`: `/guides/achievements-100-percent`
- `nophenia steam`: `/steam`
- `nophenia demo` and `nophenia itch io`: `/itch-io`
- `nophenia download`: `/download`

Long-tail data was collected with the Serper API key available in the local
environment used by the wiki growth workflow. Searches surfaced Steam, itch.io,
Steam Community, and YouTube walkthrough demand. No official Discord or
official mobile/APK source was verified during this build pass.

## Page Plan

- `/`: searchable home page with game summary, play entry, official trailer,
  screenshots, guide modules, source facts, and FAQ.
- `/play-online`: self-hosted browser build, control notes, screenshots, and
  official-link safety notes.
- `/guides`: complete guide index.
- `/guides/beginner-guide`: first-session orientation and route-reading help.
- `/guides/controls-and-comfort`: controls, pause/cursor notes, and comfort
  expectations.
- `/guides/walkthrough-ending`: spoiler-aware route and ending guide.
- `/guides/achievements-100-percent`: conservative achievement checklist.
- `/steam`: Steam release facts and full-game path.
- `/itch-io`: demo/browser source facts.
- `/download`: safe download guidance.
- `/community`: verified source/community links without invented Discord.
- `/comfort`: liminality/isolation comfort guide.
- `/disclaimer`, `/privacy`, `/terms`, `/cookie`: legal and affiliation pages.

## Design Direction

Use a dark dream-explorer palette instead of the previous template palette:

- Background: `#070911`
- Panel: `#111827`
- Border: `#26384A`
- Primary accent: `#6DDFC4`
- Warm accent: `#F6D089`
- Text: `#F6F0EA`
- Muted text: `#D8E8EF`

The site should use real Nophenia artwork from Steam and itch.io as the primary
visual signal. Avoid decorative abstract hero sections.

## Implementation Checklist

- Replace Orb routes, data, config, metadata, nav, footer, sitemap, middleware,
  manifest, favicon assets, and visible legal text with Nophenia.
- Self-host the itch browser build under `public/games/nophenia/` and stream
  large `.pck` and `.wasm` files through chunked API routes.
- Delete old Orb API routes and static assets.
- Keep guide copy original, source-based, and conservative where walkthrough or
  achievement evidence is incomplete.
- Validate with lint, TypeScript, build, local route checks, and game asset API
  checks.
