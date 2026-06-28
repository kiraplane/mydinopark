import type { DataSource, GameFact, KeywordMatrixItem } from './types';

export const checkedAt = '2026-06-28';

export const siteFacts = {
  siteName: 'nophenia',
  domain: 'https://www.nophenia.wiki',
  canonicalHost: 'www.nophenia.wiki',
  gameName: 'nophenia',
  creator: 'lane',
  officialSteamUrl: 'https://store.steampowered.com/app/3979330/nophenia/',
  officialItchUrl: 'https://emiwa.itch.io/nophenia',
  officialSiteUrl: 'https://nophenia.net/',
  officialTwitterUrl: 'https://x.com/emiwau',
  steamCommunityUrl: 'https://steamcommunity.com/app/3979330',
  steamDiscussionsUrl: 'https://steamcommunity.com/app/3979330/discussions/0/',
  supportEmail: 'hello@nophenia.wiki',
  officialCoverImage: '/nophenia/nophenia-og.png',
  officialHeroImage: '/nophenia/screenshots/nophenia-steam-1.jpg',
  officialScreenshot: '/nophenia/screenshots/nophenia-itch-1.png',
  browserGameUrl: '/games/nophenia/index.html',
  genre: 'Lo-fi 3D dream exploration',
  releaseSnapshot:
    'Steam lists nophenia by lane as released on Jun 26, 2026. The official itch.io HTML5 page is a slightly outdated demo and remains the source for the self-hosted browser build.',
  positioning:
    'An independent guide hub for nophenia wiki, play online, controls, walkthrough, ending, achievements, Steam, itch.io demo, community, and comfort/safety questions.',
} as const;

export const siteDescription =
  'nophenia wiki with play online, controls, walkthrough, ending, achievements, Steam, itch.io demo, community, and safety help.';

export const gameFacts: GameFact[] = [
  {
    label: 'Game type',
    value:
      'A lo-fi 3D dream explorer about wandering through brutalist, liminal, and familiar-feeling spaces as a small wolf girl.',
  },
  {
    label: 'Official release',
    value:
      'Steam lists nophenia as released on Jun 26, 2026 by developer and publisher lane.',
  },
  {
    label: 'Playable here',
    value:
      'The play-online page self-hosts the official itch.io HTML5 demo build with permission from the project requirements.',
  },
  {
    label: 'Main guide clusters',
    value:
      'Play online, controls, comfort, walkthrough and ending, 100% achievements, Steam release, itch.io demo, community, and safe download guidance.',
  },
];

export const sourceList: DataSource[] = [
  {
    type: 'official',
    label: 'Steam store page',
    url: siteFacts.officialSteamUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for official title, developer, publisher, release date, genres, supported languages, screenshots, and Steam release status.',
  },
  {
    type: 'official',
    label: 'Official itch.io demo page',
    url: siteFacts.officialItchUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for browser demo source, HTML5 embed, controls, screenshots, warning tone, itch color direction, and self-hosted build assets.',
  },
  {
    type: 'official',
    label: 'Official site',
    url: siteFacts.officialSiteUrl,
    checkedAt,
    confidence: 'medium',
    note: 'Used as an owned-domain signal and official contact/identity support.',
  },
  {
    type: 'serper',
    label: 'Serper long-tail discovery',
    url: 'https://google.serper.dev/',
    checkedAt,
    confidence: 'medium',
    note: 'Balanced discovery on nophenia, wiki, guide, play online, walkthrough, and ending seeds. Used for candidate keywords, not batch rank verification.',
  },
  {
    type: 'steam_api',
    label: 'Steam global achievements API',
    url: 'https://api.steampowered.com/ISteamUserStats/GetGlobalAchievementPercentagesForApp/v0002/?gameid=3979330&format=json',
    checkedAt,
    confidence: 'medium',
    note: 'Returned four public internal achievement identifiers: achievement_???, achievement_meow, achievement_howl, and achievement_mattress.',
  },
  {
    type: 'community',
    label: 'Steam Community hub',
    url: siteFacts.steamCommunityUrl,
    checkedAt,
    confidence: 'medium',
    note: 'Serper surfaced Steam Community as a guide/discussion source, including 100% guide and player expectation signals.',
  },
  {
    type: 'youtube',
    label: 'nophenia pre-release trailer thingy',
    url: 'https://www.youtube.com/watch?v=brHDlSkKQMQ',
    checkedAt,
    confidence: 'high',
    note: 'Embedded on the official itch.io page and authored by emiwa, used as official visual context.',
  },
  {
    type: 'youtube',
    label: 'Nophenia gameplay walkthrough full game and ending',
    url: 'https://www.youtube.com/watch?v=qQCsY4pnbnM',
    checkedAt,
    confidence: 'medium',
    note: 'Used as a walkthrough cross-check for full-game/ending search demand, not as transcript material.',
  },
];

export const keywordMatrix: KeywordMatrixItem[] = [
  {
    keyword: 'nophenia',
    intent: 'Head term, official context, and entry point for the game.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Serper autocomplete includes nophenia, nophenia game, nophenia steam, nophenia demo, and nophenia twitter.',
    notes:
      'Homepage should be a wiki-style hub with official links and guide routes.',
  },
  {
    keyword: 'nophenia wiki',
    intent:
      'Find a structured explanation hub, routes, endings, and community links.',
    route: '/',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Serper related searches include Nophenia wiki explained, wiki fandom, endings, and reddit.',
    notes:
      'No verified full database exists yet, so launch as a guide/wiki hub rather than an empty encyclopedia.',
  },
  {
    keyword: 'nophenia guide',
    intent: 'General guide, first-session expectations, and route help.',
    route: '/guides',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Serper organic results include Steam Community guide signals and YouTube walkthroughs.',
    notes:
      'Guide hub should split controls, walkthrough, ending, and achievements.',
  },
  {
    keyword: 'nophenia play online',
    intent: 'Launch the HTML5 demo directly in a browser.',
    route: '/play-online',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Serper autocomplete includes play online free, play online game, play online unblocked, and play online.',
    notes: 'Canonical play page self-hosts the authorized itch.io demo build.',
  },
  {
    keyword: 'nophenia paly online',
    intent:
      'Misspelled play-online search that should still reach the browser game.',
    route: '/play-online',
    priority: 'P2',
    status: 'keep',
    evidence: 'User-provided keyword checklist includes this misspelling.',
    notes:
      'Handle with copy and redirect variants rather than a separate page.',
  },
  {
    keyword: 'nophenia steam',
    intent:
      'Find official Steam page, release date, languages, and full version context.',
    route: '/steam',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Steam is the top organic result and lists the Jun 26, 2026 release by lane.',
    notes: 'Dedicated official bridge page.',
  },
  {
    keyword: 'nophenia demo',
    intent: 'Find and understand the official itch.io demo.',
    route: '/itch-io',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Serper autocomplete includes nophenia demo and itch.io appears as an official organic result.',
    notes: 'Explain demo status and self-hosted browser build.',
  },
  {
    keyword: 'nophenia controls',
    intent:
      'Learn movement, interaction, sit/howl buttons, and browser comfort.',
    route: '/guides/controls-and-comfort',
    priority: 'P1',
    status: 'keep',
    evidence:
      'The official itch.io page lists WASD/arrows, Shift/Ctrl run, Space jump, Z/Enter/click interact, P/Esc pause, Tab cursor, C sit, and H howl.',
    notes:
      'Use a guide page because controls matter immediately in the browser build.',
  },
  {
    keyword: 'nophenia walkthrough',
    intent: 'Find a complete route through dream areas and ending path.',
    route: '/guides/walkthrough-ending',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Serper autocomplete includes walkthrough guide and organic results include full-game ending walkthrough videos.',
    notes: 'Write spoiler-light route guidance with video support.',
  },
  {
    keyword: 'nophenia ending explained',
    intent:
      'Understand ending flow and the dreamlike interpretation without getting lost.',
    route: '/guides/walkthrough-ending',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Serper autocomplete and related searches include ending explained, endings, ending scene, ending reddit, and ending story.',
    notes: 'Merge with walkthrough at launch to avoid a thin duplicate page.',
  },
  {
    keyword: 'nophenia 100% guide',
    intent: 'Complete currently visible Steam achievements.',
    route: '/guides/achievements-100-percent',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Serper surfaced Steam Community snippets for a Nophenia 100% Guide; Steam global achievement API returned four achievement identifiers.',
    notes:
      'Do not invent exact triggers; use the four public identifiers and exploration checklist.',
  },
  {
    keyword: 'nophenia twitter',
    intent: 'Find creator/social update signals.',
    route: '/community',
    priority: 'P1',
    status: 'keep',
    evidence:
      'Serper autocomplete and related searches include nophenia twitter; itch metadata lists @emiwau as creator.',
    notes:
      'Route to community page with official/owned links, Steam Community, and itch comments.',
  },
  {
    keyword: 'nophenia mobile apk',
    intent: 'Find an unofficial mobile file or shortcut.',
    route: '/download',
    priority: 'P2',
    status: 'ignore',
    evidence:
      'No official mobile/APK source was verified; Steam and itch.io are the supported official paths.',
    notes:
      'Cover as a safety warning on download/comfort pages, not as an APK page.',
  },
];
