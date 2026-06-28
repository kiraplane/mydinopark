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
    title: 'nophenia Demo Gameplay Walkthrough [4K 60FPS] - No Commentary',
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
      'Start nophenia with the right expectations: explore slowly, learn the controls, read dream spaces, and know when to switch from demo to Steam.',
    summary:
      'nophenia is less about combat or winning a route quickly and more about reading quiet spaces. Start slowly, learn how the game handles movement, and let odd rooms pull you forward.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: screenshotCover('nophenia-steam-1.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'nophenia beginner guide',
      'nophenia guide',
      'nophenia demo gameplay',
    ],
    sourceNotes:
      'Built from the official Steam and itch.io descriptions, Serper guide demand, and demo/full-game walkthrough checks.',
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
          'Use the play-online page for the official itch.io HTML5 demo build.',
          'Expect a mood piece with secrets, achievements, and route discovery rather than enemies or combat.',
          'Take breaks if isolation or liminal spaces start feeling uncomfortable.',
        ],
      },
      {
        heading: 'Learn movement before hunting secrets',
        paragraphs: [
          'Spend the first few minutes simply moving, turning, jumping, pausing, and recovering the mouse cursor. The official itch demo gives the whole keyboard baseline: WASD or arrows for movement, Shift or Ctrl to run, Space to jump, Z, Enter, or left click to interact, P or Escape to pause, Tab to show the cursor, C to sit, and H to howl.',
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
        heading: 'Know when to move from demo to Steam',
        paragraphs: [
          'The self-hosted browser build comes from the official itch.io demo. It is useful because it lets you try the mood immediately. The current Steam release is the official full game, listed as released on Jun 26, 2026, and should be your main version if you want the complete ending path and achievements.',
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
        question: 'Should I start with Steam or the browser demo?',
        answer:
          'Start with browser play if you want a quick taste. Use Steam for the current full release and achievements.',
      },
    ],
  },
  {
    slug: 'play-online',
    path: '/play-online',
    title: 'nophenia Play Online',
    seoTitle: 'nophenia Play Online - Free Browser Demo and Controls',
    seoDescription:
      'Play nophenia online with the self-hosted itch.io HTML5 demo, then learn controls, browser focus tips, and when Steam is the better version.',
    summary:
      'Launch the authorized itch.io demo in your browser, then use the controls and beginner links below it to make the quiet exploration easier to read.',
    category: 'Start',
    difficulty: 'Status',
    coverImageUrl: localCover('nophenia-og.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'nophenia play online',
      'nophenia play online free',
      'nophenia demo',
    ],
    sourceNotes:
      'The HTML5 build is sourced from the official itch.io page. The user states permission was obtained for self-hosting.',
    tags: ['Play Online', 'HTML5', 'Demo'],
    relatedRoutes: [
      '/guides/beginner-guide',
      '/guides/controls-and-comfort',
      '/steam',
      '/itch-io',
    ],
    body: [
      {
        heading: 'What the online version is for',
        paragraphs: [
          'The online version is best for trying nophenia quickly. It runs inside the browser and keeps the first session close to the official itch.io demo source instead of sending you through unrelated game mirrors.',
          'The demo is intentionally smaller than the Steam release. If you want the complete game, ending route, and achievement tracking, use Steam after trying the browser build.',
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
          'Yes. The play-online page self-hosts the official itch.io HTML5 demo build with permission from the project requirements.',
      },
      {
        question: 'Is the browser build the full Steam game?',
        answer:
          'No. The itch page describes the browser build as a slightly outdated demo. Steam is the current full release.',
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
      'The controls are simple, but the browser context can make them feel strange. Use this page before assuming the demo is broken.',
    category: 'Start',
    difficulty: 'Beginner',
    coverImageUrl: screenshotCover('nophenia-itch-1.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: ['nophenia controls', 'nophenia demo controls'],
    sourceNotes:
      'Uses the official itch.io control list and comfort notice checked during the build pass.',
    video: videos.demoWalkthrough,
    tags: ['Controls', 'Browser', 'Comfort'],
    relatedRoutes: [
      '/play-online',
      '/guides/beginner-guide',
      '/comfort',
      '/itch-io',
    ],
    body: [
      {
        heading: 'Keyboard controls from the official demo',
        paragraphs: [
          'The official itch.io page lists a compact control set. Movement works with WASD or arrow keys. Run with Shift or Ctrl. Jump with Space. Interact with Z, Enter, or left click. Pause with P or Escape. Show the cursor with Tab.',
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
          'The itch page warns that nophenia does not rely on conventional horror elements, but liminality, isolation, and escapism can still feel difficult. If the atmosphere gets under your skin, lower the volume, take a short break, or switch from fullscreen to windowed play.',
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
        answer:
          'Press C to sit and H to howl in the official demo control layout.',
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
          'Because public API names are not full descriptions, the safest guide language is hint-first. If an exact trigger is later verified through official notes or repeatable testing, this page can become a precise table.',
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
        question: 'Can I 100% nophenia from the browser demo?',
        answer:
          'No. Use Steam for achievement tracking. The browser demo is for trying the game.',
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
      'Find the official nophenia Steam page, Jun 26 2026 release status, supported languages, genres, achievements, and how Steam differs from the demo.',
    summary:
      'Steam is the current full-release home for nophenia, with the official release date, store screenshots, community hub, and achievement tracking.',
    category: 'Official',
    difficulty: 'Status',
    coverImageUrl: localCover('nophenia-steam-header.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: ['nophenia steam', 'nophenia release date'],
    sourceNotes:
      'Uses the official Steam store API response and store page checked during the build pass.',
    video: videos.officialTrailer,
    tags: ['Steam', 'Release', 'Official'],
    relatedRoutes: [
      '/download',
      '/itch-io',
      '/guides/walkthrough-ending',
      '/guides/achievements-100-percent',
    ],
    body: [
      {
        heading: 'Use Steam for the full release',
        paragraphs: [
          'Steam lists nophenia as released on Jun 26, 2026, with lane as both developer and publisher. The store categories include single-player and controller support, and the game appears under Adventure, Casual, Indie, and Simulation.',
          'The Steam page is the right place for the full build, achievements, reviews, screenshots, and community discussions. The browser page on this site is based on the official itch.io demo and should not be treated as a full replacement.',
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
        heading: 'Why Steam and demo pages both matter',
        paragraphs: [
          'The demo lets players test the atmosphere instantly. Steam gives the complete release context. A strong route is to try the demo, read the beginner and comfort guides, then move to Steam if the mood lands for you.',
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
        question: 'Is Steam different from the browser demo?',
        answer:
          'Yes. Steam is the full release; the itch.io browser build is described as a slightly outdated demo.',
      },
    ],
  },
  {
    slug: 'itch-io',
    path: '/itch-io',
    title: 'nophenia itch.io Demo Guide',
    seoTitle: 'nophenia itch.io - Official Demo, Controls and Screenshots',
    seoDescription:
      'Use the official nophenia itch.io page for the HTML5 demo, controls, screenshots, trailer, update status, and browser-play context.',
    summary:
      'The itch.io page is the official demo source and the basis for this site’s self-hosted play-online build.',
    category: 'Official',
    difficulty: 'Status',
    coverImageUrl: localCover('nophenia-og.png'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: ['nophenia demo', 'nophenia itch io'],
    sourceNotes:
      'Uses the official lane itch.io page and embedded HTML5 build details.',
    video: videos.officialTrailer,
    tags: ['itch.io', 'Demo', 'HTML5'],
    relatedRoutes: [
      '/play-online',
      '/guides/controls-and-comfort',
      '/steam',
      '/download',
    ],
    body: [
      {
        heading: 'The itch page is the browser demo source',
        paragraphs: [
          'The official itch.io page describes the demo as slightly outdated and asks players not to expect the full release. That warning is useful. The demo is still valuable because it captures the walking, atmosphere, and early dreamlike presentation quickly.',
          'This site self-hosts that HTML5 build so the play-online page can load inside the wiki experience, with guide links and screenshots placed directly below the frame.',
        ],
      },
      {
        heading: 'What the itch page tells you that Steam does not',
        paragraphs: [
          'The itch page gives the direct control list, the comfort warning, the creator contact style, the trailer embed, screenshots, and demo-specific context. Steam is better for release status; itch is better for understanding the demo.',
          'For browser play, follow the itch controls exactly and expect a smaller build than Steam.',
        ],
      },
      {
        heading: 'Use official links before mirrors',
        paragraphs: [
          'If you want to support the creator or verify the demo, use the official itch page. If you want the full game, use Steam. Avoid random reuploads that copy the HTML5 build without context or permission.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is the nophenia itch.io page official?',
        answer:
          'Yes. It is published by lane under the emiwa itch.io account and is the source for the browser demo.',
      },
      {
        question: 'Is the itch demo the full game?',
        answer:
          'No. The page describes it as a slightly outdated demo. Use Steam for the full release.',
      },
      {
        question: 'Where do the screenshots below the game come from?',
        answer:
          'They are sourced from the official Steam and itch.io media shown during the build pass.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'nophenia Download and Safety Guide',
    seoTitle: 'nophenia Download - Steam, itch.io Demo and Mirror Safety',
    seoDescription:
      'Download or play nophenia safely through official Steam and itch.io paths, avoid APK/mirror claims, and understand browser save limitations.',
    summary:
      'Use Steam for the full game and itch.io for the official demo. Avoid APK mirrors, unofficial browser rehosts, and files that claim to be newer than Steam.',
    category: 'Safety',
    difficulty: 'Status',
    coverImageUrl: screenshotCover('nophenia-steam-4.jpg'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'nophenia download',
      'nophenia steam',
      'nophenia play online free',
    ],
    sourceNotes:
      'Download guidance is based on official Steam and itch.io pages. No third-party mirrors are recommended.',
    tags: ['Download', 'Safety', 'Steam'],
    relatedRoutes: ['/steam', '/itch-io', '/play-online', '/comfort'],
    body: [
      {
        heading: 'Choose the official path for your goal',
        paragraphs: [
          'Use Steam when you want the current full game, achievements, controller support, and community hub. Use itch.io when you want the official demo source and browser-play context. Use this site’s play-online page when you want to try the authorized demo inside a guide hub.',
          'Those three paths cover the useful cases. A random mirror does not add value, and it can make the version situation harder to understand.',
        ],
      },
      {
        heading: 'Avoid APK and mirror claims',
        paragraphs: [
          'No official mobile or APK source was verified during this build pass. Treat APK pages, modded clients, file mirrors, and “unlocked” downloads as unsafe or unsupported. For a small indie release, the safest answer is often the simplest: Steam for full game, itch for demo.',
          'If a third-party page claims to have a newer build than Steam or itch.io, do not trust it without an official creator link.',
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
          'Use Steam for the full release or itch.io for the official browser demo.',
      },
      {
        question: 'Does this site provide an APK?',
        answer:
          'No. This site does not provide APKs, modded builds, or mirror downloads.',
      },
      {
        question: 'Can I play without downloading?',
        answer:
          'Yes. Use the play-online page for the official itch.io HTML5 demo build.',
      },
    ],
  },
  {
    slug: 'community',
    path: '/community',
    title: 'nophenia Community and Official Links',
    seoTitle: 'nophenia Community - Steam, itch.io, Twitter and Updates',
    seoDescription:
      'Find nophenia community and official links: Steam Community, itch.io comments, creator social signals, official site, and where to ask questions.',
    summary:
      'Use Steam Community for launch discussion, itch.io comments for demo feedback, and creator-owned links for official signals.',
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
      'Serper surfaced twitter, reddit, Steam Community, and Steam guide demand. The itch page metadata lists @emiwau as creator.',
    tags: ['Community', 'Steam', 'Twitter'],
    relatedRoutes: [
      '/steam',
      '/itch-io',
      '/guides/achievements-100-percent',
      '/download',
    ],
    body: [
      {
        heading: 'Use the right community surface',
        paragraphs: [
          'Steam Community is best for launch discussions, screenshots, reviews, and achievement questions tied to the full release. The itch.io comment section is better for demo-specific feedback and HTML5 browser issues.',
          'Search results also show social and Reddit interest. Treat those as demand signals, not final facts. For release status, always return to Steam, itch.io, or creator-owned pages.',
        ],
      },
      {
        heading: 'Ask version-specific questions',
        paragraphs: [
          'When asking for help, say whether you are playing Steam or the browser demo. Mention the room, action, or achievement you are stuck on. “What do I do next?” is harder to answer than “I reached a chess-like space and cannot find the next transition.”',
          'For achievement cleanup, say which public identifier is still locked if Steam exposes it to you. That makes community answers more useful and less spoilery.',
        ],
      },
      {
        heading: 'Do not invent an official Discord',
        paragraphs: [
          'This build pass did not verify an official nophenia Discord. If one appears later through the official site, Steam page, or itch page, it can be added. Until then, this page uses community links that have visible source support.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there an official nophenia Discord?',
        answer:
          'No official Discord was verified during this build pass. Use Steam Community, itch.io comments, and creator-owned links for now.',
      },
      {
        question: 'Where should I ask achievement questions?',
        answer:
          'Use Steam Community for achievement questions because Steam is where achievements are tracked.',
      },
      {
        question: 'Is Reddit a source of truth for nophenia?',
        answer:
          'No. Reddit is useful for player reactions and demand signals, but official facts should be checked against Steam, itch.io, or creator-owned pages.',
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
    sourceStrategy: 'official',
    videoSearchQueries: [
      'nophenia horror',
      'nophenia comfort',
      'nophenia liminal space',
    ],
    sourceNotes:
      'Uses the official itch.io comfort notice about liminality, isolation, and escapism.',
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
          'The official itch page says the software does not contain conventional horror elements, but liminality, isolation, and escapism may still evoke unsettling feelings. That is the right way to think about nophenia: it can be quiet, soft, strange, and difficult all at once.',
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
          'No conventional jumpscare or combat loop was verified from official material, but the atmosphere can still feel unsettling.',
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
