import { checkedAt, siteDescription, siteFacts } from './sources';
import type { Guide, GuideVideo } from './types';

const videoCover = (id: string) => `https://i.ytimg.com/vi/${id}/hq720.jpg`;
const localCover = (name: string) => `/nophenia/${name}`;
const screenshotCover = (name: string) => `/nophenia/screenshots/${name}`;

const videos = {
  officialTrailer: {
    id: 'brHDlSkKQMQ',
    title: 'nophenia pre-release trailer thingy',
    channel: 'emiwa',
    url: 'https://www.youtube.com/watch?v=brHDlSkKQMQ',
    thumbnailUrl: videoCover('brHDlSkKQMQ'),
    publishedAt: '2025-09-29T13:27:41+00:00',
    checkedAt,
  },
  fullWalkthrough: {
    id: 'qQCsY4pnbnM',
    title:
      'Nophenia Gameplay Walkthrough Full Game & Ending [No Commentary 4K 60FPS Ultra]',
    channel: 'Phoenix Ascent Gaming',
    url: 'https://www.youtube.com/watch?v=qQCsY4pnbnM',
    thumbnailUrl: videoCover('qQCsY4pnbnM'),
    checkedAt,
  },
  endingRoute: {
    id: 'CMaQymZ0y9Q',
    title: 'Nophenia - Full Game and Ending - (No Commentary)',
    channel: 'DanielLucius2000',
    url: 'https://www.youtube.com/watch?v=CMaQymZ0y9Q',
    thumbnailUrl: videoCover('CMaQymZ0y9Q'),
    checkedAt,
  },
  demoWalkthrough: {
    id: 'ImxzKzGgva4',
    title: 'nophenia Browser Gameplay Walkthrough [4K 60FPS] - No Commentary',
    channel: 'YashimaGaming',
    url: 'https://www.youtube.com/watch?v=ImxzKzGgva4',
    thumbnailUrl: videoCover('ImxzKzGgva4'),
    checkedAt,
  },
} satisfies Record<string, GuideVideo>;

export { siteDescription };

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    path: '/guides/beginner-guide',
    title: 'nophenia Beginner Guide',
    seoTitle: 'nophenia Beginner Guide - First Session and What To Do',
    seoDescription:
      'Start nophenia with the right expectations: explore slowly, learn controls, read dream spaces, and know when to switch from browser play to Steam.',
    summary:
      'nophenia is less about combat or winning a route quickly and more about reading quiet spaces. Start slowly, learn how the game handles movement, and let odd rooms pull you forward.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: screenshotCover('nophenia-steam-1.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'nophenia beginner guide',
      'nophenia guide',
      'nophenia browser gameplay',
    ],
    sourceNotes:
      'Built from Steam release details, Serper guide demand, and browser/full-game walkthrough checks.',
    video: videos.officialTrailer,
    tags: ['Beginner', 'Exploration', 'Steam'],
    relatedRoutes: [
      '/play-online',
      '/guides/controls-and-comfort',
      '/guides/walkthrough-ending',
      '/steam',
    ],
    body: [
      {
        heading: 'Set the right expectation before you start',
        paragraphs: [
          'nophenia is a small dream explorer, not a combat game and not a checklist-heavy survival game. The first useful move is to stop looking for a health bar, weapon loop, or quest marker. You are here to walk through dreamlike places, notice transitions, and let the spaces change your sense of direction.',
          'That does not mean there is nothing to do. It means progress is quieter. Look for doorways, thresholds, rooms that seem placed too deliberately, views that pull your eye, and little expressive actions that make the wolf girl feel present in the world.',
        ],
        bullets: [
          'Use Steam for the current full release.',
          'Use the play-online page to try nophenia in the browser.',
          'Expect a mood piece with secrets, achievements, and route discovery rather than enemies or combat.',
          'Take breaks if isolation or liminal spaces start feeling uncomfortable.',
        ],
      },
      {
        heading: 'Learn movement before hunting secrets',
        paragraphs: [
          'Spend the first few minutes simply moving, turning, jumping, pausing, and recovering the mouse cursor. The browser control baseline is WASD or arrows for movement, Shift or Ctrl to run, Space to jump, Z, Enter, or left click to interact, P or Escape to pause, Tab to show the cursor, C to sit, and H to howl.',
          'In a browser, prefer Shift for running when possible. Ctrl can conflict with browser shortcuts on some systems, and losing focus during a quiet exploration game is the fastest way to make the first session feel broken.',
        ],
      },
      {
        heading: 'Read spaces like a route, not like a map',
        paragraphs: [
          'The most useful beginner habit is to treat each area as a question. What is the room framing? Where does the path narrow? Which object feels too specific to be decoration? Does a transition only become obvious after you look back from a different angle?',
          'If you feel stuck, do a perimeter pass, then a center pass, then a vertical pass. Liminal games often hide progress in the edge between ordinary walking and deliberate looking. The route is rarely a straight arrow, but it usually rewards checking the parts of a space that feel staged.',
        ],
      },
      {
        heading: 'Know when to move from browser play to Steam',
        paragraphs: [
          'The browser version is useful because it lets you try the mood immediately. The current Steam release is the full game, listed as released on Jun 26, 2026, and should be your main version if you want the complete ending path and completion tracking.',
          'Use the browser version to learn whether the tone works for you. Use Steam when you want a stable full-session route, controller support, community screenshots, and achievement tracking.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is nophenia a horror game?',
        answer:
          'It is not presented as conventional horror, but its liminal spaces, isolation, and escapist themes can feel unsettling. Treat comfort as part of the route.',
      },
      {
        question: 'What should I do first in nophenia?',
        answer:
          'Learn movement, interact with obvious thresholds, explore slowly, and check the controls page before chasing achievements.',
      },
      {
        question: 'Should I start with Steam or browser play?',
        answer:
          'Start with browser play if you want a quick taste. Use Steam for the current full release and achievements.',
      },
    ],
  },
  {
    slug: 'play-online',
    path: '/play-online',
    title: 'nophenia Play Online',
    seoTitle: 'nophenia Play Online - Browser Game and Controls',
    seoDescription:
      'Play nophenia online in the browser, then learn controls, browser focus tips, and when Steam is the better version.',
    summary:
      'Launch nophenia in your browser, then use the controls and beginner links below it to make the quiet exploration easier to read.',
    category: 'Start',
    difficulty: 'Status',
    coverImageUrl: localCover('nophenia-og.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'nophenia play online',
      'nophenia play online free',
      'nophenia browser game',
    ],
    sourceNotes:
      'The HTML5 build is hosted for browser play. The user states permission was obtained for self-hosting.',
    tags: ['Play Online', 'HTML5', 'Browser'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/controls-and-comfort',
      '/steam',
      '/browser-version',
    ],
    body: [
      {
        heading: 'What the online version is for',
        paragraphs: [
          'The online version is best for trying nophenia quickly. It runs inside the browser and keeps the first session inside the nophenia wiki instead of sending you through unrelated game mirrors.',
          'Browser play is best for a quick first read. If you want the complete game, ending route, and achievement tracking, use Steam after trying the browser build.',
        ],
      },
      {
        heading: 'Browser focus matters',
        paragraphs: [
          'After the game loads, click inside the frame before moving. If the cursor or keyboard focus feels wrong, use Tab to show the cursor, pause with P or Escape, then click back into the frame.',
          'If Ctrl causes a browser shortcut on your system, use Shift to run. This is especially useful when playing inside an iframe, where browser controls and game controls can compete.',
        ],
      },
      {
        heading: 'What to read after your first walk',
        paragraphs: [
          'Read the controls guide if movement felt strange, the beginner guide if you were not sure what the game expects, and the walkthrough guide if you want a spoiler-light route toward the ending.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I play nophenia online here?',
        answer:
          'Yes. The play-online page launches nophenia in the browser with guide links nearby.',
      },
      {
        question: 'Is the browser build the full Steam game?',
        answer:
          'No. Steam is the current full release, while browser play is best for a quick first walk.',
      },
      {
        question: 'Why does the game need time to load?',
        answer:
          'The Godot HTML5 build downloads a large WebAssembly file and pack file. Wait for the progress bar before refreshing.',
      },
    ],
  },
  {
    slug: 'controls-and-comfort',
    path: '/guides/controls-and-comfort',
    title: 'nophenia Controls and Comfort Guide',
    seoTitle: 'nophenia Controls - Run, Sit, Howl, Interact and Comfort',
    seoDescription:
      'Learn nophenia controls for movement, running, sitting, howling, interacting, pausing, cursor focus, and comfort settings for liminal spaces.',
    summary:
      'The controls are simple, but the browser context can make them feel strange. Use this page before assuming the game is broken.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: screenshotCover('nophenia-itch-1.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: ['nophenia controls', 'nophenia browser controls'],
    sourceNotes:
      'Uses the control list and comfort notice checked during the build pass.',
    video: videos.demoWalkthrough,
    tags: ['Controls', 'Browser', 'Comfort'],
    relatedRoutes: [
      '/play-online',
      '/guides/beginner-guide',
      '/comfort',
      '/browser-version',
    ],
    body: [
      {
        heading: 'Keyboard controls for browser play',
        paragraphs: [
          'nophenia uses a compact control set. Movement works with WASD or arrow keys. Run with Shift or Ctrl. Jump with Space. Interact with Z, Enter, or left click. Pause with P or Escape. Show the cursor with Tab.',
          'nophenia also gives the wolf girl expressive buttons: C to sit and H to howl. These are not throwaway jokes. In a quiet walking game, expressive actions help you check the mood of a room and can be relevant when achievement hunting.',
        ],
        bullets: [
          'Move: WASD or arrow keys.',
          'Run: Shift or Ctrl.',
          'Jump: Space.',
          'Interact: Z, Enter, or left click.',
          'Pause: P or Escape.',
          'Show cursor: Tab.',
          'Sit: C.',
          'Howl: H.',
        ],
      },
      {
        heading: 'Use Shift when Ctrl collides with the browser',
        paragraphs: [
          'Inside a browser, Ctrl can trigger browser or operating-system shortcuts. If you are playing in the embedded frame and the tab behaves oddly, use Shift for running instead. That small swap removes most first-session control confusion.',
          'If keyboard input stops working, click inside the game again. If the mouse feels trapped, press Tab or pause, then re-enter the frame deliberately.',
        ],
      },
      {
        heading: 'Comfort is part of the route',
        paragraphs: [
          'The comfort note explains that nophenia does not rely on conventional horror elements, but liminality, isolation, and escapism can still feel difficult. If the atmosphere gets under your skin, lower the volume, take a short break, or switch from fullscreen to windowed play.',
          'This is not failure. Dreamlike exploration games work by making ordinary spaces feel loaded. The best session is the one you can actually enjoy and remember.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I interact in nophenia?',
        answer:
          'Use Z, Enter, or left click. If one does not respond inside the browser frame, click the frame and try again.',
      },
      {
        question: 'How do I sit or howl?',
        answer: 'Press C to sit and H to howl in the browser control layout.',
      },
      {
        question: 'Why does running feel unreliable in browser play?',
        answer:
          'Ctrl can collide with browser shortcuts. Use Shift to run when playing inside the web frame.',
      },
    ],
  },
  {
    slug: 'walkthrough-ending',
    path: '/guides/walkthrough-ending',
    title: 'nophenia Walkthrough and Ending Guide',
    seoTitle: 'nophenia Walkthrough - Full Game Route and Ending Help',
    seoDescription:
      'Use this nophenia walkthrough for a spoiler-light route: how to read dream areas, recover when stuck, and approach the ending without missing the mood.',
    summary:
      'The clean route is not about rushing. Move through each dream space deliberately, check staged edges, and use walkthrough videos only when a transition stops making sense.',
    category: 'Walkthrough',
    difficulty: 'Intermediate',
    coverImageUrl: videos.fullWalkthrough.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'nophenia walkthrough',
      'nophenia full game ending',
      'nophenia ending explained',
    ],
    sourceNotes:
      'Serper surfaced walkthrough and ending demand. The selected full-game video is used to cross-check route shape, not as transcript material.',
    video: videos.fullWalkthrough,
    tags: ['Walkthrough', 'Ending', 'Route'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/controls-and-comfort',
      '/guides/achievements-100-percent',
      '/comfort',
    ],
    body: [
      {
        heading: 'Start with a slow perimeter pass',
        paragraphs: [
          'When a new area opens, do not sprint straight through the most obvious corridor. Walk the perimeter first, then cross through the center, then look for height changes, thresholds, and objects that break the pattern. nophenia often communicates with framing rather than signs.',
          'This habit also helps you keep the place in memory. The game is dreamlike, but your route should not become random. Name the rooms in your head: snow field, hallway, chess-like space, frequency space, or whatever detail makes the area easy to recall.',
        ],
      },
      {
        heading: 'Use interaction only after you have looked',
        paragraphs: [
          'The interact button matters, but walking and looking usually come first. If you mash interact in every room, you may miss why a transition worked. Stand still, check the room shape, then interact with objects or thresholds that feel deliberately placed.',
          'If nothing responds, try changing your angle. Some dream spaces make more sense when approached from the side, from a distance, or after you have crossed the room once.',
        ],
      },
      {
        heading: 'Recover when the route feels circular',
        paragraphs: [
          'If you feel like the game is looping you, reset your search pattern. First, return to the last doorway or threshold. Second, check whether an object changed after you entered the room. Third, test the edge of the space, especially corners and paths that looked decorative.',
          'A full-game walkthrough can be useful here, but use it as a stopgap. Watch only enough to identify the missed transition, then return to your own session so the ending still feels like your discovery.',
        ],
      },
      {
        heading: 'Approach the ending as a mood landing',
        paragraphs: [
          'Search demand around nophenia ending and ending explained is real, but the game works better when the ending is treated as a mood landing rather than a lore puzzle with one clean answer. Pay attention to what the route made you feel: distance, familiarity, isolation, relief, or the sense of returning from somewhere that never quite existed.',
          'If you want a literal completion check, use Steam achievements and the full-game route. If you want the strongest first experience, finish once before reading interpretations.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does nophenia have an ending?',
        answer:
          'Yes, current full-game walkthrough results and Steam achievement signals support a complete route and ending path.',
      },
      {
        question: 'Should I watch a full walkthrough before playing?',
        answer:
          'No. Play first, then use a walkthrough only when a transition blocks you or when you are cleaning up achievements.',
      },
      {
        question: 'Is there more than one ending?',
        answer:
          'Search demand includes endings, but this build pass did not verify multiple distinct endings. Treat the walkthrough page as the canonical route until stronger evidence appears.',
      },
    ],
  },
  {
    slug: 'achievements-100-percent',
    path: '/guides/achievements-100-percent',
    title: 'nophenia 100% Achievements Guide',
    seoTitle: 'nophenia 100% Guide - Achievements, Howl, Meow and Mattress',
    seoDescription:
      'Plan a nophenia 100% run with the public Steam achievement names, exploration checklist, howl/sit checks, and spoiler-light cleanup order.',
    summary:
      'Steam currently exposes four achievement identifiers. Use them as a cleanup checklist, but avoid treating unverified trigger guesses as final truth.',
    category: 'Achievement',
    difficulty: 'Advanced',
    coverImageUrl: videos.endingRoute.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'nophenia 100% guide',
      'nophenia achievements',
      'nophenia ending',
    ],
    sourceNotes:
      'Steam global achievement percentages returned achievement_???, achievement_meow, achievement_howl, and achievement_mattress. Serper also surfaced Steam Community 100% guide demand.',
    video: videos.endingRoute,
    tags: ['Achievements', '100%', 'Steam'],
    relatedRoutes: [
      '/guides/walkthrough-ending',
      '/guides/controls-and-comfort',
      '/steam',
      '/community',
    ],
    body: [
      {
        heading: 'Start with one normal completion',
        paragraphs: [
          'Do not make your first nophenia run a checklist run. Complete the route once, learn how the spaces connect, and only then start achievement cleanup. The game is short enough that a second pass is more pleasant than turning every first room into a spreadsheet.',
          'After one completion, use the four public Steam identifiers as a memory aid: achievement_???, achievement_meow, achievement_howl, and achievement_mattress. They suggest the cleanup shape without proving every trigger.',
        ],
        bullets: [
          'Finish the route once before cleanup.',
          'Keep a note of rooms with unusual animals, beds, or expressive-action opportunities.',
          'Test H for howl and C for sitting during a focused cleanup pass.',
          'Use a walkthrough only to locate the next missed space.',
        ],
      },
      {
        heading: 'Treat names as hints, not proof',
        paragraphs: [
          'achievement_howl strongly points you toward the howl button, and achievement_mattress points you toward a bed or rest-like scene. achievement_meow suggests a cat-like interaction or sound cue. achievement_??? is intentionally opaque, so it should be handled as a secret-space check rather than a guessed objective.',
          'Because public API names are not full descriptions, the safest guide language is hint-first. If an exact trigger is later verified through repeatable testing, this page can become a precise table.',
        ],
      },
      {
        heading: 'Use the cleanup order that wastes the least time',
        paragraphs: [
          'First, replay the route while testing expressive actions in rooms that feel staged. Second, revisit spaces with furniture, animals, or strange sound cues. Third, use the ending walkthrough to identify any dream area you skipped too quickly.',
          'Do not restart repeatedly after every single guess. Finish a pass, check which achievements unlocked, then adjust the next pass. That keeps the game atmospheric instead of turning it into a frustrating menu loop.',
        ],
      },
      {
        heading: 'When to use community guides',
        paragraphs: [
          'Serper surfaced a Steam Community 100% guide signal, so player-made achievement help exists. Use community guides when you are comfortable with spoilers, but cross-check exact triggers against your own current Steam build because early launch guides can be corrected quickly.',
        ],
      },
    ],
    faq: [
      {
        question:
          'How many nophenia achievements are visible through Steam data?',
        answer:
          'The public Steam percentages endpoint returned four identifiers during this build pass.',
      },
      {
        question: 'Can I 100% nophenia from the browser version?',
        answer:
          'No. Use Steam for achievement tracking. The browser version is for trying the game.',
      },
      {
        question: 'Does this page spoil exact achievement triggers?',
        answer:
          'Not yet. It gives a conservative cleanup route because exact triggers were not all independently verified.',
      },
    ],
  },
  {
    slug: 'steam-release',
    path: '/steam',
    title: 'nophenia Steam Guide',
    seoTitle: 'nophenia Steam - Release Date, Languages and Full Game',
    seoDescription:
      'Find the nophenia Steam page, Jun 26 2026 release status, supported languages, genres, achievements, and how Steam differs from browser play.',
    summary:
      'Steam is the current full-release home for nophenia, with the release date, store screenshots, community hub, and achievement tracking.',
    category: 'Official',
    difficulty: 'Status',
    coverImageUrl: localCover('nophenia-steam-header.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: ['nophenia steam', 'nophenia release date'],
    sourceNotes:
      'Uses the Steam store API response and store page checked during the build pass.',
    video: videos.officialTrailer,
    tags: ['Steam', 'Release', 'Full Game'],
    relatedRoutes: [
      '/download',
      '/browser-version',
      '/guides/walkthrough-ending',
      '/guides/achievements-100-percent',
    ],
    body: [
      {
        heading: 'Use Steam for the full release',
        paragraphs: [
          'Steam lists nophenia as released on Jun 26, 2026, with lane as both developer and publisher. The store categories include single-player and controller support, and the game appears under Adventure, Casual, Indie, and Simulation.',
          'The Steam page is the right place for the full build, achievements, reviews, screenshots, and community discussions. The browser page on this site is a quick way to try nophenia and should not be treated as a full replacement.',
        ],
      },
      {
        heading: 'Languages and platform expectations',
        paragraphs: [
          'The Steam API lists English, Russian, German, and Japanese language support. If you are searching from outside English, use the Steam page for the current language snapshot before relying on translated third-party pages.',
          'Controller support is visible in the Steam category data, but a quiet first-person exploration game still benefits from keyboard familiarity. Read the controls page before achievement cleanup.',
        ],
      },
      {
        heading: 'Why Steam and browser play both matter',
        paragraphs: [
          'Browser play lets players test the atmosphere instantly. Steam gives the complete release context. A strong route is to play online, read the beginner and comfort guides, then move to Steam if the mood lands for you.',
        ],
      },
    ],
    faq: [
      {
        question: 'When did nophenia release on Steam?',
        answer: 'Steam lists the release date as Jun 26, 2026.',
      },
      {
        question: 'Who made nophenia?',
        answer: 'Steam lists lane as developer and publisher.',
      },
      {
        question: 'Is Steam different from browser play?',
        answer:
          'Yes. Steam is the full release; browser play is a quick way to try the game online.',
      },
    ],
  },
  {
    slug: 'itch-io',
    path: '/browser-version',
    title: 'nophenia Browser Version Guide',
    seoTitle: 'nophenia Browser Version - Controls and Screenshots',
    seoDescription:
      'Use the nophenia browser version guide for HTML5 play, controls, screenshots, trailer, update status, and browser-play context.',
    summary:
      'The browser version guide explains how online play fits with controls, screenshots, and Steam release context.',
    category: 'Start',
    difficulty: 'Status',
    coverImageUrl: localCover('nophenia-og.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: ['nophenia browser game', 'nophenia play online'],
    sourceNotes:
      'Uses browser build details and Steam release context checked during the build pass.',
    video: videos.officialTrailer,
    tags: ['Browser', 'Play Online', 'HTML5'],
    relatedRoutes: [
      '/play-online',
      '/guides/controls-and-comfort',
      '/steam',
      '/download',
    ],
    body: [
      {
        heading: 'What the browser version is for',
        paragraphs: [
          'The browser version is valuable because it captures the walking pace, atmosphere, and early dreamlike presentation quickly.',
          'This site hosts the HTML5 build so the play-online page can load inside the wiki experience, with guide links and screenshots placed directly below the frame.',
        ],
      },
      {
        heading: 'What browser notes tell you that Steam does not',
        paragraphs: [
          'Browser notes give the direct control list, comfort framing, trailer reference, screenshots, and play-online context. Steam is better for release status; this page is better for understanding browser play.',
          'For browser play, follow the controls exactly and expect a smaller build than Steam.',
        ],
      },
      {
        heading: 'Use the built-in play page first',
        paragraphs: [
          'If you want to try nophenia online, start with the play-online page. If you want the full game, use Steam. Random reuploads add confusion and can make the version situation harder to understand.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the nophenia browser version?',
        answer:
          'It is the online browser version used by the play-online page so you can try nophenia before choosing a full Steam session.',
      },
      {
        question: 'Is browser play the full game?',
        answer:
          'No. Use Steam for the full release and browser play for a quick first walk.',
      },
      {
        question: 'Where do the screenshots below the game come from?',
        answer:
          'They come from the game media collected during the build pass.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'nophenia Download and Safety Guide',
    seoTitle: 'nophenia Download - Steam, Browser Play and Mirror Safety',
    seoDescription:
      'Download or play nophenia through Steam or browser play, avoid APK/mirror claims, and understand browser save limitations.',
    summary:
      'Use Steam for the full game and the play-online page for browser play. Avoid APK mirrors, browser rehosts, and files that claim to be newer than Steam.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: screenshotCover('nophenia-steam-4.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'nophenia download',
      'nophenia steam',
      'nophenia play online free',
    ],
    sourceNotes:
      'Download guidance is based on Steam and browser-play checks. No third-party mirrors are recommended.',
    tags: ['Download', 'Safety', 'Steam'],
    relatedRoutes: ['/steam', '/browser-version', '/play-online', '/comfort'],
    body: [
      {
        heading: 'Choose the path for your goal',
        paragraphs: [
          'Use Steam when you want the current full game, achievements, controller support, and community hub. Use this site’s play-online page when you want to try nophenia inside a guide hub.',
          'Those three paths cover the useful cases. A random mirror does not add value, and it can make the version situation harder to understand.',
        ],
      },
      {
        heading: 'Avoid APK and mirror claims',
        paragraphs: [
          'No mobile or APK source was verified during this build pass. Treat APK pages, modded clients, file mirrors, and “unlocked” downloads as unsafe or unsupported. For a small indie release, the simplest route is Steam for the full game and this site for browser play.',
          'If a third-party page claims to have a newer build than Steam, do not trust it without a creator-owned link.',
        ],
      },
      {
        heading: 'Browser saves and local data',
        paragraphs: [
          'Browser play can lose data if site storage is cleared, if you play in private browsing, or if the browser blocks persistent storage. Since nophenia is short, that may not be a disaster, but Steam is still the better home for achievement tracking.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where should I download nophenia?',
        answer:
          'Use Steam for the full release or this site’s play-online page for browser play.',
      },
      {
        question: 'Does this site provide an APK?',
        answer:
          'No. This site does not provide APKs, modded builds, or mirror downloads.',
      },
      {
        question: 'Can I play without downloading?',
        answer: 'Yes. Use the play-online page for the browser version.',
      },
    ],
  },
  {
    slug: 'community',
    path: '/community',
    title: 'nophenia Community and Update Links',
    seoTitle: 'nophenia Community - Steam, Twitter and Updates',
    seoDescription:
      'Find nophenia community links: Steam Community, creator social signals, update links, and where to ask questions.',
    summary:
      'Use Steam Community for launch discussion, browser feedback, and creator-owned links for update signals.',
    category: 'Community',
    difficulty: 'Status',
    coverImageUrl: screenshotCover('nophenia-steam-2.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'nophenia twitter',
      'nophenia reddit',
      'nophenia steam community',
    ],
    sourceNotes:
      'Serper surfaced twitter, reddit, Steam Community, and Steam guide demand. Creator social signals were checked during the build pass.',
    tags: ['Community', 'Steam', 'Twitter'],
    relatedRoutes: [
      '/steam',
      '/browser-version',
      '/guides/achievements-100-percent',
      '/download',
    ],
    body: [
      {
        heading: 'Use the right community surface',
        paragraphs: [
          'Steam Community is best for launch discussions, screenshots, reviews, and achievement questions tied to the full release. Browser feedback is better kept close to the play-online page and controls guide.',
          'Search results also show social and Reddit interest. Treat those as demand signals, not final facts. For release status, return to Steam or creator-owned pages.',
        ],
      },
      {
        heading: 'Ask version-specific questions',
        paragraphs: [
          'When asking for help, say whether you are playing Steam or the browser version. Mention the room, action, or achievement you are stuck on. “What do I do next?” is harder to answer than “I reached a chess-like space and cannot find the next transition.”',
          'For achievement cleanup, say which public identifier is still locked if Steam exposes it to you. That makes community answers more useful and less spoilery.',
        ],
      },
      {
        heading: 'Use verified Discord signals',
        paragraphs: [
          'This build pass did not verify a nophenia Discord link. If one appears later through Steam or creator-owned pages, it can be added. Until then, this page uses community links that have visible source support.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there a nophenia Discord?',
        answer:
          'No Discord link was verified during this build pass. Use Steam Community and creator-owned links for now.',
      },
      {
        question: 'Where should I ask achievement questions?',
        answer:
          'Use Steam Community for achievement questions because Steam is where achievements are tracked.',
      },
      {
        question: 'Is Reddit a source of truth for nophenia?',
        answer:
          'No. Reddit is useful for player reactions and demand signals, but release facts should be checked against Steam or creator-owned pages.',
      },
    ],
  },
  {
    slug: 'comfort',
    path: '/comfort',
    title: 'nophenia Comfort and Content Guide',
    seoTitle: 'nophenia Comfort Guide - Liminal Spaces and Safety Notes',
    seoDescription:
      'Understand nophenia comfort notes: liminal spaces, isolation, escapism, no conventional combat, when to pause, and how to play safely.',
    summary:
      'nophenia can be gentle and unsettling at the same time. Use comfort settings and session pacing as part of the experience.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: screenshotCover('nophenia-itch-3.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'nophenia horror',
      'nophenia comfort',
      'nophenia liminal space',
    ],
    sourceNotes:
      'Uses the comfort notice about liminality, isolation, and escapism checked during the build pass.',
    tags: ['Comfort', 'Liminal', 'Safety'],
    relatedRoutes: [
      '/play-online',
      '/guides/controls-and-comfort',
      '/guides/walkthrough-ending',
      '/download',
    ],
    body: [
      {
        heading: 'The game can feel unsettling without using horror rules',
        paragraphs: [
          'nophenia does not rely on conventional horror elements, but liminality, isolation, and escapism may still evoke unsettling feelings. That is the right way to think about the game: it can be quiet, soft, strange, and difficult all at once.',
          'If you are sensitive to empty spaces, dreamlike loops, or lonely audio, start in windowed mode and keep the volume comfortable.',
        ],
      },
      {
        heading: 'Pause before the mood turns into pressure',
        paragraphs: [
          'Exploration games sometimes make players push through discomfort because “nothing is attacking me.” That is not necessary. Pause with P or Escape, show the cursor with Tab, step away, then return when the atmosphere feels interesting again.',
          'The strongest session is not the longest session. It is the one where the spaces stay memorable instead of becoming stressful noise.',
        ],
      },
      {
        heading: 'Use guides without flattening the experience',
        paragraphs: [
          'If you need help, read only the section that solves your current block. A full walkthrough is useful, but nophenia loses something if every transition is known before you enter the room.',
          'For achievements, separate your first completion from cleanup. First experience for mood, second pass for 100%.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does nophenia contain jumpscares?',
        answer:
          'No conventional jumpscare or combat loop was verified, but the atmosphere can still feel unsettling.',
      },
      {
        question: 'What should I do if the game feels too intense?',
        answer:
          'Pause, lower audio, leave fullscreen, take a break, or stop the session. The comfort note is part of the game context.',
      },
      {
        question: 'Should I use a walkthrough on the first run?',
        answer:
          'Use it only when truly stuck. A first run is stronger when you discover most transitions yourself.',
      },
    ],
  },
];

export const featuredGuideSlugs = [
  'beginner-guide',
  'controls-and-comfort',
  'walkthrough-ending',
  'achievements-100-percent',
] as const;

export const featuredGuides = featuredGuideSlugs
  .map((slug) => guides.find((guide) => guide.slug === slug))
  .filter((guide): guide is Guide => Boolean(guide));

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
