import type { DataSource, GameFact, KeywordMatrixItem } from './types';

export const checkedAt = '2026-06-28';

export const siteFacts = {
  siteName: 'nophenia',
  domain: 'https://www.nophenia.wiki',
  canonicalHost: 'www.nophenia.wiki',
  gameName: 'nophenia',
  creator: 'lane',
  officialSteamUrl: 'https://store.steampowered.com/app/3979330/nophenia/',
  officialSteamDemoUrl:
    'https://store.steampowered.com/app/4172800/nophenia_Demo/',
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
    'Steam lists nophenia by lane as released on Jun 26, 2026. This site also gives players a browser-play route for trying the game online.',
  positioning:
    'A nophenia wiki guide hub for play online, controls, walkthrough, ending, Steam, community, and comfort questions.',
} as const;

export const siteDescription =
  'nophenia wiki guides for play online, controls, walkthrough, ending, Steam, community, and comfort help.';

export const gameFacts: GameFact[] = [
  {
    label: 'Game type',
    value:
      'A lo-fi 3D dream explorer about wandering through brutalist, liminal, and familiar-feeling spaces as a small wolf girl.',
  },
  {
    label: 'Steam release',
    value:
      'Steam lists nophenia as released on Jun 26, 2026 by developer and publisher lane.',
  },
  {
    label: 'Playable here',
    value:
      'The play-online page launches nophenia in your browser from inside the nophenia wiki.',
  },
  {
    label: 'Main guide clusters',
    value:
      'Play online, controls, comfort, walkthrough and ending, 100% route help, Steam release, community, and download guidance.',
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
    label: 'Steam demo page',
    url: siteFacts.officialSteamDemoUrl,
    checkedAt,
    confidence: 'high',
    note: 'Used for the current Steam demo route and demo/full-game distinction.',
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
    type: 'manual_review',
    label: 'SteamDB nophenia Demo app',
    url: 'https://steamdb.info/app/4172800/',
    checkedAt,
    confidence: 'medium',
    note: 'Used as a cross-check for demo app id, demo release date, supported systems, language list, and parent app relationship.',
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
      'Homepage should be a wiki-style hub with play online and guide routes.',
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
    intent: 'Launch nophenia directly in a browser.',
    route: '/play-online',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Serper autocomplete includes play online free, play online game, play online unblocked, and play online.',
    notes: 'Canonical play page lets users play nophenia online.',
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
      'Find Steam page, release date, languages, and full version context.',
    route: '/steam',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Steam is the top organic result and lists the Jun 26, 2026 release by lane.',
    notes: 'Dedicated Steam bridge page.',
  },
  {
    keyword: 'nophenia demo',
    intent:
      'Find the Steam Demo, browser-play option, and full release difference.',
    route: '/demo',
    priority: 'P0',
    status: 'keep',
    evidence:
      'Serper autocomplete includes nophenia demo and browser-play variants.',
    notes:
      'Dedicated demo page now separates the Steam Demo, browser play, and full Steam release decision.',
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
