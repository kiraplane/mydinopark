# My Dino Park Wiki PRD And Implementation Plan

Checked date: 2026-07-05  
Site name: My Dino Park Wiki  
Canonical domain: https://www.my-dino-park.wiki  
Official Roblox page: https://www.roblox.com/games/80701570784699/My-Dino-Park  

## Demand Packet

The project turns the current template into a guide/wiki site for the Roblox game My Dino Park!. The target keywords include `my dino park`, `my dino park wiki`, and related long-tail searches around codes, eggs, hatching, money, upgrades, dinosaurs, tier list, Discord, and safe Roblox access.

The official Roblox page currently shows `[UPD 2] My Dino Park!` by `Dino Community.`. The public description confirms the main loop: build a dinosaur park, buy dino eggs, hatch dinosaurs, attract visitors, upgrade the park, and compete to become the top park. Roblox API snapshot on 2026-07-05 returned universe ID `10059591740`, root place ID `80701570784699`, max players `6`, genre `Simulation / Tycoon`, `2,641,432` visits, `159,230` favorites, `11,331` active players, and updated timestamp `2026-07-05T08:20:57.9096423Z`.

## Keyword Matrix

| Keyword | Intent | Route | Priority | Status | Evidence | Notes |
| --- | --- | --- | --- | --- | --- | --- |
| my dino park | head term | `/` | P0 | keep | Roblox official page, code sites, competitors | Homepage hub targets game identity and guide paths. |
| my dino park wiki | wiki navigation | `/` + `/guides` | P0 | keep | Competitor `mydinopark.wiki`, SERP snippets | Homepage must be dense and link all hubs. |
| my dino park codes | redeem rewards | `/codes` + `/guides/codes-redeem-guide` | P0 | keep | PCGamesN, Destructoid, Pro Game Guides, Roblox Den | Include UPDATE2, BESTDINOGAME, DINOSLOVESU, WELCOME, THX4PLAYING, plus spelling watch. |
| my dino park update 2 codes | fresh code query | `/guides/update-2-codes-guide` | P0 | keep | Official title `[UPD 2]`, current YouTube/code pages | Source-checked but not game-tested. |
| my dino park roblox | official access | `/download` | P0 | keep | Official page and API | Safe access page filters APK/script risk. |
| my dino park eggs | egg route | `/eggs` + guide | P1 | keep | Official gameplay loop, competitor hubs | Do not publish exact egg table until verified. |
| my dino park frozen egg | reward/egg | `/guides/eggs-and-hatching-guide` | P1 | keep | Update 2 code sources report DINOSLOVESU | Treat as reported reward, not in-game tested. |
| my dino park money | visitor income | `/money` + `/guides/fast-money-guide` | P1 | keep | Official visitor/Cash loop, PGG money section | Build reinvest order and bottleneck logic. |
| my dino park upgrades | progression | `/upgrades` + guide | P1 | keep | Official upgrade loop | Exact upgrade prices deferred. |
| my dino park dinosaurs | entity/value | `/dinosaurs` | P1 | keep | Game premise and competitor pages | Decision-first until stats are verified. |
| my dino park tier list | ranking | `/tier-list` + `/guides/best-dinosaurs-watch-guide` | P1 | keep/watch | Competitor pages and search snippets | Publish spending/tier watch, not fake S-tier dinosaur table. |
| my dino park discord | community link | `/discord` | P1 | keep | Code pages reference Discord/group | Use for update checking, with safety notes. |
| crazy dino park wiki | different game | `/guides/wrong-game-safety-guide` | P1 | ignore as facts | SERP mixed mobile game | Explain separation from Roblox My Dino Park. |
| my dino park apk / script | unsafe shortcut | `/guides/wrong-game-safety-guide` | P1 | ignore as instructions | Search risk pattern | No APKs, scripts, executors, or password pages. |
| dinosaur park tycoon codes | different game | safety guide | P2 | ignore as facts | Image/search results mix similar Roblox games | Mention as wrong-game confusion only. |

## Competitor Benchmark

| Competitor | Pages observed | Match | Improve |
| --- | --- | --- | --- |
| `mydinopark.wiki` | Homepage, codes, tier list, beginner, money, wiki/search/progress | Codes, beginner, money, systems snapshot, wrong mobile-game distinction | It still shows older Update 1 copy in places. Our build uses current `[UPD 2]` and July 5 Roblox API facts. |
| `mydinopark.org/en/` | Homepage, tier list, calculator, codes, guide, money, updates | Strong tool intent: tier list and egg calculator demand exists | It publishes exact egg/dino/income values that are not official in this pass. Our calculator/database waits for verification. |
| PCGamesN / Destructoid / Pro Game Guides / Roblox Den | Code pages | Code list and redeem steps | We cross-check conflicts, especially THX4PLAYING vs THXFORPLAYING. |
| YouTube code/guide videos | Beginner, codes, Update 2 codes | Use thumbnails/video embeds for guides | Videos support articles; article prose remains original and player-decision-first. |

## Launch Scope

This is a thin-to-medium Roblox launch with strong codes demand and limited verified data. The first release uses 12 core public pages plus 8 guide articles:

- `/`
- `/codes`
- `/guides`
- `/eggs`
- `/dinosaurs`
- `/money`
- `/upgrades`
- `/tier-list`
- `/download`
- `/discord`
- `/updates`
- `/disclaimer`
- `/guides/beginner-guide`
- `/guides/codes-redeem-guide`
- `/guides/eggs-and-hatching-guide`
- `/guides/fast-money-guide`
- `/guides/park-upgrades-guide`
- `/guides/best-dinosaurs-watch-guide`
- `/guides/update-2-codes-guide`
- `/guides/wrong-game-safety-guide`

## Implementation Notes

- Data layer lives in `src/data/mydinopark/`.
- Components live in `src/components/mydinopark/`.
- Route group lives in `src/app/[locale]/(mydinopark)/`.
- Official Roblox thumbnails are stored under `public/mydinopark/` and used for hero, logo, and OG imagery.
- Canonical URLs use `https://www.my-dino-park.wiki`.
- Codes are source-checked, not game-tested, with confidence labels.
- Dinosaur tier list remains a watch/decision page until exact stats are verified.
- No APK, script, exploit, or password-page guidance is provided.

## Deferred Items

- Full egg ROI calculator: wait for verified prices, hatch odds, and income values.
- Full dinosaur database: wait for names, egg sources, income impact, rarity, and update date.
- Localization: defer until English core pages have GSC evidence.
- GA property creation, GitHub repository creation, and Cloudflare Worker deployment require authenticated external sessions/CLI credentials.
