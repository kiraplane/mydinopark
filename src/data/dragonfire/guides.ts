import { officialGameFacts } from './sources';
import type { Guide, GuideVideo } from './types';

const checkedAt = '2026-06-05';
const cover = (slug: string) => `/dragonfire/guides/${slug}.jpg`;

const videos = {
  beginner: {
    id: '_htPny9CsCk',
    title:
      "Game of Thrones: Dragonfire COMPLETE Beginner's Guide (Start here!)",
    channel: 'HJW Gaming',
    url: 'https://www.youtube.com/watch?v=_htPny9CsCk',
    thumbnailUrl: 'https://i.ytimg.com/vi/_htPny9CsCk/hqdefault.jpg',
    checkedAt,
  },
  proTips: {
    id: 'PgjIP-KgJLI',
    title: "Don't Start Wrong! Game of Thrones Dragonfire Beginner Pro Tips",
    channel: 'RTS Mobile',
    url: 'https://www.youtube.com/watch?v=PgjIP-KgJLI',
    thumbnailUrl: 'https://i.ytimg.com/vi/PgjIP-KgJLI/hqdefault.jpg',
    checkedAt,
  },
  resources: {
    id: 'iE5n_PaSdqA',
    title:
      'Game of Thrones Dragonfire Early Game Guide | Tiles, Resources & House Power',
    channel: 'RTS Mobile',
    url: 'https://www.youtube.com/watch?v=iE5n_PaSdqA',
    thumbnailUrl: 'https://i.ytimg.com/vi/iE5n_PaSdqA/hqdefault.jpg',
    checkedAt,
  },
  quickTips: {
    id: 'DtvBViiNzws',
    title: 'Game of Thrones Dragonfire Tips and Tricks',
    channel: 'Bena Colada',
    url: 'https://www.youtube.com/watch?v=DtvBViiNzws',
    thumbnailUrl: 'https://i.ytimg.com/vi/DtvBViiNzws/hqdefault.jpg',
    checkedAt,
  },
  tierList: {
    id: 'b5yC8N5GHMA',
    title: 'Game of Thrones: Dragonfire Tier List and Tips',
    channel: 'Matics',
    url: 'https://www.youtube.com/watch?v=b5yC8N5GHMA',
    thumbnailUrl: 'https://i.ytimg.com/vi/b5yC8N5GHMA/hqdefault.jpg',
    checkedAt,
  },
  season: {
    id: 'tjYLU8-lgko',
    title: 'Game of Thrones: Dragonfire Season 1 Guidelines',
    channel: 'Matics',
    url: 'https://www.youtube.com/watch?v=tjYLU8-lgko',
    thumbnailUrl: 'https://i.ytimg.com/vi/tjYLU8-lgko/hqdefault.jpg',
    checkedAt,
  },
  launch: {
    id: 'GdUOy4J3irk',
    title: 'Game of Thrones: Dragonfire - Available Now!',
    channel: 'Warner Bros. Games',
    url: 'https://www.youtube.com/watch?v=GdUOy4J3irk',
    thumbnailUrl: 'https://i.ytimg.com/vi/GdUOy4J3irk/hqdefault.jpg',
    checkedAt,
  },
} satisfies Record<string, GuideVideo>;

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Game of Thrones Dragonfire Beginner Guide',
    seoTitle:
      'Game of Thrones Dragonfire Beginner Guide - First Day Progression',
    seoDescription:
      'Start Game of Thrones Dragonfire with a real first-day route from the complete beginner video: UI menus, tiles, resources, dragons, campaign store, and alliances.',
    summary:
      'A first-day route built from the complete beginner walkthrough: learn the menus first, then make tile, resource, dragon, and alliance decisions with less waste.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: cover('beginner-guide'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'youtube_explainer',
    video: videos.beginner,
    tags: ['Beginner', 'First Day', 'Progression'],
    relatedRoutes: ['/codes', '/tier-list', '/dragons', '/resources'],
    body: [
      {
        heading: 'Use the first hour as a map tour',
        paragraphs: [
          'The complete beginner video is valuable because it does not start with a flashy battle. It spends time moving through the interface: the tile list, resource storage, throne room, campaign store, dragon pit, and alliance menu. That is exactly how a new player should treat the first hour.',
          'Do not rush to prove that your first army can win fights. First learn where the game hides the costs. Dragonfire lets you spend from many places, and the first real skill is knowing which menu is asking for a permanent decision and which one is only showing information.',
        ],
      },
      {
        heading: 'The menus that matter before you spend',
        paragraphs: [
          'The tile menu tells you how close you are to cap, where your holdings are, and which weak claims can be released later. The keep shows the basic resource pressure: food for troops, wood and iron across troops and upgrades, and stone as a heavy early building requirement.',
          'The dragon pit is not only a collection screen. It shows star ranks, habits, feeding, and the dragon upgrade tracks that can drain rare materials if you build too many projects at once.',
        ],
        bullets: [
          'Tile menu: check cap, locations, levels, and release options.',
          'Keep resources: watch food, wood, iron, and stone before training extra troops.',
          'Dragon pit: inspect star rank, habits, and role before feeding broadly.',
          'Campaign store: treat campaign rewards as planned spending, not bonus clutter.',
          'Alliance menu: join early enough to receive direction before the map becomes dangerous.',
        ],
      },
      {
        heading: 'Tiles are not trophies',
        paragraphs: [
          'Early tiles are often just roads. You take them so you can reach something better. Later, those same tiles can block your cap and slow income if you never clean them up.',
          'A practical first-day habit is to separate path tiles from income tiles. Path tiles can be released once they stop connecting you to an objective. Income tiles should justify their place with better resource output or strategic position.',
        ],
      },
      {
        heading: 'Dragons: build one plan, not a museum',
        paragraphs: [
          'The video explains that dragons have keys, relics, star ranks, feeding, commands, and habits. That is a lot of progression. A beginner who upgrades every dragon evenly will quickly own several half-built dragons and no clear main army.',
          'Pick one main dragon for your current campaign and tile plan. Use the rest with restraint until battle reports, command text, and resource supply tell you what the second project should be.',
        ],
      },
      {
        heading: 'A cleaner day-one sequence',
        paragraphs: [
          'Read the UI, push basic chapter tasks, claim useful tiles, build toward the next keep requirement, check campaign rewards, and join an active alliance. Only after that should you start testing harder defenders.',
          'When a fight creates expensive troop losses, stop and ask whether the reward was worth the replacement cost. Losing troops for a bad tile is one of the fastest ways to make a new account feel slower than it should.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I do first in Game of Thrones Dragonfire?',
        answer:
          'Learn the tile, resource, dragon, campaign, and alliance menus before spending heavily. The first hour should make the account readable.',
      },
      {
        question: 'Should beginners rush combat power?',
        answer:
          'No. Combat power matters when it opens better tiles, campaign progress, or alliance objectives without creating bad troop losses.',
      },
      {
        question: 'Should I upgrade every dragon?',
        answer:
          'No. Build one main dragon first, then add a second serious project after you understand commands, habits, and resource supply.',
      },
      {
        question: 'Why do tiles matter so much?',
        answer:
          'Tiles create paths, income, and objective access. Weak early path tiles should eventually be replaced by better resource or strategic tiles.',
      },
    ],
  },
  {
    slug: 'tier-list-best-dragons',
    title: 'Game of Thrones Dragonfire Tier List',
    seoTitle: 'Game of Thrones Dragonfire Tier List - Best Dragons to Build',
    seoDescription:
      'A launch-stage Game of Thrones Dragonfire tier list guide based on the Matics tier list video, dragon roles, command value, rarity gaps, and war-map usefulness.',
    summary:
      'The tier list is not just about famous names. Matics spends the stream reading dragon kits, rarity gaps, taunt effects, damage patterns, and map jobs.',
    category: 'Tier List',
    difficulty: 'Intermediate',
    coverImageUrl: cover('tier-list-best-dragons'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'youtube_explainer',
    video: videos.tierList,
    tags: ['Tier List', 'Dragons', 'Upgrade Priority'],
    relatedRoutes: ['/tier-list', '/dragons', '/resources', '/campaigns'],
    body: [
      {
        heading: 'This video is a workshop, not a neat chart',
        paragraphs: [
          'The tier list video is a long discussion, so the useful part is not a single screenshot. The creator reads dragon kits, compares low-rarity and higher-rarity value, talks through taunt, damage reduction, panic-style effects, target selection, and then connects those choices to real map play.',
          'That makes the written guide different from a normal tier list. You should use it as a dragon-reading method. If a dragon has a famous name but its kit does not solve your current fight, it is not automatically a good spend.',
        ],
      },
      {
        heading: 'Blue dragons are tools before they are projects',
        paragraphs: [
          'One repeated lesson from the tier discussion is that lower-rarity dragons can have visible stat gaps compared with stronger options. That does not make them useless. It means they should usually do cheaper jobs first: pathing, easy tiles, secondary armies, or temporary coverage.',
          'The danger is turning a utility dragon into your rare-material plan. If the base stats and command ceiling are not there, keep the dragon useful without pretending it is your account carry.',
        ],
      },
      {
        heading: 'Read commands by trigger, target, and lane',
        paragraphs: [
          'A dragon rises in value when its command does something specific and repeatable: hits the enemy with the most troops, adds damage reduction, punishes taunted targets, improves a flank, or creates a debuff your army can exploit.',
          'Before upgrading, ask what has to happen for the command to matter. A high-damage line with awkward timing can be worse than a modest command that triggers reliably in the fight you are actually taking.',
        ],
        bullets: [
          'Trigger: how often does the command happen?',
          'Target: does it hit the enemy that matters?',
          'Lane: does the dragon want vanguard, flank support, or a specific army shape?',
          'Follow-up: does taunt, panic, damage reduction, or fire damage improve another dragon?',
        ],
      },
      {
        heading: 'Map war changes dragon value',
        paragraphs: [
          'The stream also moves beyond dragons and talks about towns, castles, objectives, and tile movement. That matters because a dragon that looks fine in neutral PvE can be less important when your alliance needs fast objective pressure or safer reinforcement fights.',
          'A serious tier list should therefore separate personal progression from alliance war. Your best tile dragon, your best campaign dragon, and your best objective-fight dragon may not be the same unit.',
        ],
      },
      {
        heading: 'How to spend after watching the tier list',
        paragraphs: [
          'Upgrade the dragon whose job you can describe in one sentence. If the sentence is "this dragon takes stronger resource tiles with fewer losses," that is usable. If the sentence is only "this dragon is rare," wait.',
          'Keep the public tier list conservative until more battle reports are available. Recommended means the role is clear now. Situational means the dragon is good only if your army can use that role. Data Pending means the name is interesting but the spend is not proven.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best dragon in Game of Thrones Dragonfire?',
        answer:
          'The best dragon depends on the job: tile progression, campaign pushing, alliance war, or support. Do not spend only because a dragon is rare or famous.',
      },
      {
        question: 'Are blue dragons useless?',
        answer:
          'No. They can handle utility work, pathing, and cheap tasks, but they should not automatically receive rare long-term materials.',
      },
      {
        question: 'What should I check before upgrading a dragon?',
        answer:
          'Check command trigger, target, troop affinity, lane fit, passive habit, and whether the dragon changes your next real fight.',
      },
      {
        question: 'Why is the site tier list conservative?',
        answer:
          'Because launch data is still forming. Conservative labels prevent players from treating early opinions as solved endgame math.',
      },
    ],
  },
  {
    slug: 'resource-guide',
    title: 'Game of Thrones Dragonfire Resource Guide',
    seoTitle:
      'Game of Thrones Dragonfire Resource Guide - Wood, Stone, Iron, Grain',
    seoDescription:
      'Plan Dragonfire resources from the RTS Mobile tile and resource video: tile cleanup, resource-per-hour, food timing, Stronghold goals, resolve, and house power.',
    summary:
      'The resource video is really a tile audit: hit cap, delete weak claims, replace them with higher-level income, and stop letting troop losses steal Stronghold progress.',
    category: 'Resources',
    difficulty: 'Beginner',
    coverImageUrl: cover('resource-guide'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'youtube_explainer',
    video: videos.resources,
    tags: ['Resources', 'Tiles', 'Economy'],
    relatedRoutes: ['/resources', '/stronghold', '/dragons', '/campaigns'],
    body: [
      {
        heading: 'The plateau is usually tile quality',
        paragraphs: [
          'RTS Mobile frames the early resource wall around a simple problem: players hit tile cap while many of those tiles are no longer good. Having 100-plus claimed tiles feels productive, but the cap is only valuable if the tiles are producing enough.',
          'The practical move is an audit. Keep the paths that still connect you to targets, then start cutting old low-level resource tiles and replacing them with stronger claims.',
        ],
      },
      {
        heading: 'Do a tile audit in three passes',
        paragraphs: [
          'First, mark the tiles that are only roads. Second, mark the tiles that are actually feeding your current building plan. Third, decide which low-level claims can be released safely without breaking a path.',
          'The video shows the idea of removing older level 2 to 5 style clutter and then looking toward stronger tiles. Your exact levels will depend on account power, but the habit is the same: tile cap should become better over time, not just fuller.',
        ],
        bullets: [
          'Road tile: keep only while it connects movement.',
          'Income tile: keep if it supports your current bottleneck.',
          'Dead tile: release when it is low-level and no longer connecting anything.',
        ],
      },
      {
        heading: 'Stone now, food later',
        paragraphs: [
          'Early building pushes make stone feel painful because keep and building requirements lean hard on construction resources. Later, food becomes more important because repeated troop training and player conflict punish accounts that ignored it.',
          'That means your tile mix should change. In the first days, chase the resources that keep Stronghold upgrades alive. As fighting increases, start valuing food before losses force the issue.',
        ],
      },
      {
        heading: 'House power and heirlooms are part of the economy',
        paragraphs: [
          'The video also connects resource play to house power and heirloom progression. That is an important shift: resources are not just piles for buildings. They indirectly unlock stronger account layers, better defender farming, and better progression options.',
          'When a resource decision improves Stronghold level, house power, dragon experience, or useful defender farming, it is doing more than raising a number.',
        ],
      },
      {
        heading: 'Resolve and stamina should have a reason',
        paragraphs: [
          'Resolve and dragon stamina are easy to burn because they feel like daily fuel. Use them where the return is visible: resource defenders, dragon experience, tile upgrades, or the next objective path.',
          'If you are spending stamina just to stay busy, pause. Busy map play often creates more troop cost than progress.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best early resource in Dragonfire?',
        answer:
          'It changes by bottleneck. Stone is often tight during early building pushes, while food becomes more important as troop training and fighting increase.',
      },
      {
        question: 'Should I keep every tile I capture?',
        answer:
          'No. Keep useful paths and productive resource tiles. Release weak old claims when they only block your cap.',
      },
      {
        question: 'When should I switch toward food tiles?',
        answer:
          'Start valuing food more as your alliance prepares for more fighting or your troop replacement costs become noticeable.',
      },
      {
        question: 'How do I know a resource spend is good?',
        answer:
          'A good spend opens a building requirement, stronger tile income, useful troop capacity, dragon growth, or a campaign objective.',
      },
    ],
  },
  {
    slug: 'campaign-reset-guide',
    title: 'Game of Thrones Dragonfire Campaign Reset Guide',
    seoTitle:
      'Game of Thrones Dragonfire Campaign Reset Guide - What Carries Over',
    seoDescription:
      'Understand Dragonfire Campaign resets from official Reign guidance and Season 1 video notes: stages, stores, rewards, objectives, and permanent dragon growth.',
    summary:
      'Campaign planning is about separating temporary stage pressure from permanent account value. Claim time-limited rewards, but invest carefully into dragons and core growth.',
    category: 'Campaigns',
    difficulty: 'Intermediate',
    coverImageUrl: cover('campaign-reset-guide'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'youtube_explainer',
    video: videos.season,
    tags: ['Campaigns', 'Reigns', 'Reset'],
    relatedRoutes: ['/campaigns', '/reigns', '/alliances', '/resources'],
    body: [
      {
        heading: 'Think in two ledgers',
        paragraphs: [
          'Campaigns create two different kinds of progress. One ledger is seasonal: stage objectives, faction position, territory control, campaign shops, and timers. The other ledger is your account: dragon growth, stronger armies, better habits, and the knowledge your alliance carries forward.',
          'A reset feels scary when those ledgers are mixed together. The safer play is to treat campaign goals as time-limited pressure and account growth as the thing you want to keep improving.',
        ],
      },
      {
        heading: 'Campaign stages change what the map asks for',
        paragraphs: [
          'The Season 1 video talks through early map structure, connected tiles, campaign stages, and objectives. That matters because a stage is not just a label. It changes where players move, what they can hold, and how quickly alliances need to react.',
          'If a campaign stage is about to close, do not keep wandering as if the map will wait. Finish the tasks that produce rewards, then decide whether the next objective is worth the cost.',
        ],
      },
      {
        heading: 'Stores and timers should be handled before emotion',
        paragraphs: [
          'The complete beginner walkthrough mentions campaign rewards and campaign store spending. Treat that as a warning: anything tied to a campaign store or stage timer should be checked before the window ends.',
          'Do not save a seasonal currency because it feels valuable. Save only when the game clearly says it carries over. Otherwise, claim rewards and convert them into account value that will still matter later.',
        ],
        bullets: [
          'Check personal, alliance, and faction rewards before reset.',
          'Open campaign stores and read whether currency is seasonal.',
          'Spend toward permanent-looking growth when the store allows it.',
          'Screenshot unclear timers so the alliance can discuss the same information.',
        ],
      },
      {
        heading: 'Territory is useful even when temporary',
        paragraphs: [
          'Temporary does not mean worthless. A town, castle, dock, or seat of power can still create rewards and pressure during the current campaign. The mistake is assuming a temporary holding should receive permanent-level emotional investment.',
          'Before reset, ask whether a final push gives rewards or just pride. Pride is expensive in a troop-cost game.',
        ],
      },
      {
        heading: 'What carries over should guide spending',
        paragraphs: [
          'Official guidance says permanent progress like dragon growth remains while seasonal competition resets territory pressure. That does not prove every currency rule, but it does give a good spending principle.',
          'When in doubt, spend on durable account improvements, claim time-limited rewards, and avoid last-minute wars that only create troop bills.',
        ],
      },
    ],
    faq: [
      {
        question: 'Do alliances reset in Game of Thrones Dragonfire?',
        answer:
          'Official guidance says alliances persist across Reigns, while faction context and territory competition can change.',
      },
      {
        question: 'Does dragon growth reset?',
        answer:
          'Warner Bros. says permanent progress like dragon growth remains, so dragon investment is treated as long-term account value.',
      },
      {
        question: 'Should I save campaign currency?',
        answer:
          'Only if the game clearly says it carries over. Campaign-store currency should be checked before each timer ends.',
      },
      {
        question: 'What should I do the day before reset?',
        answer:
          'Claim rewards, check stores, coordinate alliance objectives, avoid wasteful troop losses, and invest in durable account progress.',
      },
    ],
  },
  {
    slug: 'alliance-guide',
    title: 'Game of Thrones Dragonfire Alliance Guide',
    seoTitle:
      'Game of Thrones Dragonfire Alliance Guide - Factions, Discord, Events, and War',
    seoDescription:
      'Use the Dragonfire tips video to build better alliance habits: Discord activity, hidden defender checks, event timing, troop focus, and shared objectives.',
    summary:
      'The short tips video is direct: active alliances, Discord coordination, event timing, troop focus, and scouting habits matter more than quiet roster power.',
    category: 'Alliance',
    difficulty: 'Beginner',
    coverImageUrl: cover('alliance-guide'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'youtube_explainer',
    video: videos.quickTips,
    tags: ['Alliance', 'Factions', 'War'],
    relatedRoutes: ['/alliances', '/factions', '/campaigns', '/reigns'],
    body: [
      {
        heading: 'The video is short because the advice is blunt',
        paragraphs: [
          'Bena Colada compresses several practical tips into a short Dragonfire video. The alliance lesson is not hidden: active players and outside coordination matter. A decent alliance will often expect activity and Discord because map decisions move faster than casual chat.',
          'That is not elitism. It is how tile wars work. If a call goes out for a path, a scout report, or a timed objective, the alliance needs people who see it before the opportunity is gone.',
        ],
      },
      {
        heading: 'Share scouting information, especially on hidden defenders',
        paragraphs: [
          'The video notes that higher-level tiles can hide defender troop type, and that a tiny test attack can reveal information through battle reports. That is exactly the kind of knowledge alliances should share.',
          'One player testing a defender saves many players from bad troop trades. If your alliance chat only shows victories and never reports matchups, everyone is paying for the same lesson separately.',
        ],
      },
      {
        heading: 'Focus troop upgrades before spreading them',
        paragraphs: [
          'The tips video recommends focusing troop attack and defense upgrades instead of scattering across every troop type. This becomes even more important inside an alliance because coordinated armies are easier to plan around.',
          'If your alliance knows which troop type you are building around, it can place you into better roles. A half-upgraded mix of everything is harder to use and easier to punish.',
        ],
      },
      {
        heading: 'Event timing is alliance timing',
        paragraphs: [
          'The video calls out daily event timing around 14:00 UTC and suggests restarting shortly after to check new events. Whether that exact habit changes later or not, the broader idea is important: event timing should become a shared routine.',
          'An alliance that checks events together can decide who gathers, who fights, who saves resolve, and who pushes objectives. A roster that discovers events at random will waste the first wave of value.',
        ],
      },
      {
        heading: 'What to look for before joining',
        paragraphs: [
          'Look for clear calls, active officers, shared reports, realistic rules, and members who explain why an objective matters. Raw power without communication is fragile.',
          'If you are new, joining a structured alliance is better than creating a quiet one-man banner. Learn the rhythm first; leadership can come later.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I play Dragonfire without an alliance?',
        answer:
          'You can start solo, but alliances become important for objective calls, scouting, timer help, and safer map movement.',
      },
      {
        question: 'Is Discord required for Dragonfire alliances?',
        answer:
          'Not always, but serious alliances often use Discord because event timing, scouting, and objective calls are easier outside slow in-game chat.',
      },
      {
        question: 'Should I upgrade every troop type?',
        answer:
          'No. Focus attack and defense upgrades around the troop type your dragons and alliance role actually use.',
      },
      {
        question: 'What makes an alliance worth joining?',
        answer:
          'Activity, clear communication, shared scouting, event planning, and realistic objective calls matter more than a quiet high-power roster.',
      },
    ],
  },
  {
    slug: 'download-guide',
    title: 'Game of Thrones Dragonfire Download Guide',
    seoTitle:
      'Game of Thrones Dragonfire Download Guide - Android, iOS, Official Links',
    seoDescription:
      'Use official Game of Thrones Dragonfire download paths, understand what the launch video confirms, and avoid unsafe APK or fake code pages.',
    summary:
      'The official launch video confirms availability; this guide keeps the install path clean and explains what to check before investing in a seasonal account.',
    category: 'Download',
    difficulty: 'Beginner',
    coverImageUrl: cover('download-guide'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    video: videos.launch,
    tags: ['Download', 'Android', 'iOS'],
    relatedRoutes: ['/download', '/guides/beginner-guide', '/codes'],
    body: [
      {
        heading: 'Start from the publisher, not a code page',
        paragraphs: [
          'The Warner Bros. launch video is simple: the game is available now. That should be your starting point. Use the official site, App Store, or Google Play listing before clicking any page that mixes downloads with free reward promises.',
          'Dragonfire is a live strategy game. A copied client is not a shortcut if it breaks updates, account login, purchases, or region compatibility.',
        ],
      },
      {
        heading: 'What to verify before installing',
        paragraphs: [
          'Check that the publisher, app name, and store listing match Game of Thrones: Dragonfire. Confirm that you are not on a mirror using screenshots and keywords to imitate the official listing.',
          'If the page asks you to install an unknown file before showing a reward code, close it. Real install paths do not need that trade.',
        ],
        bullets: [
          'Use official App Store or Google Play links.',
          'Confirm the publisher identity before downloading.',
          'Avoid APK mirrors with reward-code bait.',
          'Do not enter account credentials into unofficial download pages.',
        ],
      },
      {
        heading: 'The setup choices that matter after download',
        paragraphs: [
          'After installation, link the account properly, check region/server choice, and allow only the permissions you understand. Seasonal games reward consistency, so losing account access is more damaging than in a casual offline game.',
          'Before spending early rewards, read the beginner and resource guides. The download is only the door; the first bad spend can still slow the account.',
        ],
      },
      {
        heading: 'Why this guide avoids APK instructions',
        paragraphs: [
          'The site does not provide APK installation steps because that would push players toward riskier behavior. The safer answer is boring but correct: use official channels unless Warner Bros. provides a verified direct alternative.',
          'This is especially important while code demand is high. Fake code pages often use download buttons to move users into unsafe files.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Game of Thrones Dragonfire on Android?',
        answer:
          'Yes. Warner Bros. says players can download the game on Google Play for Android.',
      },
      {
        question: 'Is Game of Thrones Dragonfire on iOS?',
        answer:
          'Yes. Warner Bros. says players can download the game on the App Store for iOS.',
      },
      {
        question: 'Should I download a Dragonfire APK?',
        answer:
          'No. Use official channels unless Warner Bros. provides a verified direct alternative.',
      },
      {
        question: 'What should I do after installing?',
        answer:
          'Link your account, confirm server or region choice, then read the beginner guide before spending early rewards.',
      },
    ],
  },
  {
    slug: 'reigns-guide',
    title: 'Game of Thrones Dragonfire Reigns Guide',
    seoTitle:
      'Game of Thrones Dragonfire Reigns Guide - Seasonal Reset Planning',
    seoDescription:
      'Plan Dragonfire Reigns with Season 1 video notes: connected tiles, docks, towns, resolve, dragon progression, alliance direction, and faction resets.',
    summary:
      'A Reign is a map season. The Season 1 video is useful because it shows the actual board: connected tiles, docks, towns, resolve, dragons, and alliance movement.',
    category: 'Campaigns',
    difficulty: 'Intermediate',
    coverImageUrl: cover('reigns-guide'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'youtube_explainer',
    video: videos.season,
    tags: ['Reigns', 'Factions', 'Campaigns'],
    relatedRoutes: ['/reigns', '/campaigns', '/alliances', '/factions'],
    body: [
      {
        heading: 'A Reign is easier to understand from the map',
        paragraphs: [
          'The Season 1 video begins with the basic board: your base, connected tiles, regions, crossings, towns, and larger control points. That is the right way to understand a Reign. It is not only a timer; it is the current shape of the war map.',
          'If you cannot explain how your alliance reaches an objective, the Reign plan is not ready yet.',
        ],
      },
      {
        heading: 'Connected tiles decide what is possible',
        paragraphs: [
          'You cannot simply march anywhere you want. Tile ownership and connection decide movement. That makes pathing a seasonal skill: a good path opens objectives, while a careless path wastes cap and exposes plans.',
          'At Reign start, alliances should decide which direction matters before every member creates random roads in different directions.',
        ],
      },
      {
        heading: 'Docks and crossings are alliance problems',
        paragraphs: [
          'The video calls out docks and water crossings as movement points that require alliance control on both sides. That makes them more than scenery. They are chokepoints, timing problems, and coordination tests.',
          'A solo player can understand a dock, but an alliance has to hold it. If both sides are not controlled, the route does not function the way players expect.',
        ],
      },
      {
        heading: 'Resolve, meat, and dragon growth connect seasons to accounts',
        paragraphs: [
          'Season play still feeds permanent progression. The video discusses resolve for special defenders, meat for dragons, and star-based dragon growth. These are the parts of a Reign that turn map activity into account strength.',
          'That is why Reign planning should not be only about flags on the map. The best seasonal route also feeds the dragons and armies that will matter next season.',
        ],
      },
      {
        heading: 'How to start the next Reign cleaner',
        paragraphs: [
          'Before a new Reign begins, ask your alliance where it wants to move, which faction context matters, what crossings or towns need early attention, and which members are responsible for scouting.',
          'When the map opens, do fewer random actions. Build connected paths, claim purposeful tiles, and use early resolve and stamina where they support the shared route.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is a Reign in Dragonfire?',
        answer:
          'A Reign is the seasonal structure for faction conflict, campaign stages, territory pressure, and changing map objectives.',
      },
      {
        question: 'Does everything reset after a Reign?',
        answer:
          'No. Official guidance says permanent progress like dragon growth remains, while seasonal territory competition resets.',
      },
      {
        question: 'Why do docks matter?',
        answer:
          'Docks and crossings affect movement across water and require alliance control, so they become strategic chokepoints.',
      },
      {
        question: 'Should free players care about Reigns?',
        answer:
          'Yes. Free players still need to know where to path, when to claim rewards, and which account upgrades survive the season.',
      },
    ],
  },
  {
    slug: 'stronghold-upgrade-priority',
    title: 'Game of Thrones Dragonfire Stronghold Upgrade Priority',
    seoTitle: 'Game of Thrones Dragonfire Stronghold Guide - Upgrade Priority',
    seoDescription:
      'Use the beginner video to plan Stronghold upgrades around keep resources, troop costs, stone bottlenecks, Dragon Pit timing, and campaign rewards.',
    summary:
      'The Stronghold is not a decorative base. It is where food, wood, iron, stone, troop training, Dragon Pit choices, and campaign spending all collide.',
    category: 'Stronghold',
    difficulty: 'Beginner',
    coverImageUrl: cover('stronghold-upgrade-priority'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'youtube_explainer',
    video: videos.beginner,
    tags: ['Stronghold', 'Buildings', 'Upgrades'],
    relatedRoutes: ['/stronghold', '/resources', '/dragons', '/alliances'],
    body: [
      {
        heading: 'The Stronghold is a queue, not a castle model',
        paragraphs: [
          'The beginner walkthrough spends enough time inside the keep to make one thing clear: Stronghold progress is mostly a queue discipline problem. Buildings, resources, troop training, and dragon systems all compete for the same early attention.',
          'A good base is not the one with every button tapped. It is the one where the next keep requirement, troop need, and dragon plan are not fighting each other.',
        ],
      },
      {
        heading: 'Read the four basic resources separately',
        paragraphs: [
          'Food is mainly troop pressure. Wood and iron support both troop and building needs. Stone is heavily tied to keep and building upgrades, which makes it painful in the first serious push.',
          'If you treat all resources as one pile, you will misread the bottleneck. A player short on stone has a building problem. A player short on food after bad fights has a troop-cost problem.',
        ],
      },
      {
        heading: 'Troop losses rewrite your building plan',
        paragraphs: [
          'The pro tips video shows why bad fights matter: retraining troops can consume the same resources you wanted for main hall or keep progress. That makes battle discipline part of Stronghold strategy.',
          'Before attacking a defender, ask whether the target is worth the recovery cost. If the answer is no, the attack is not a combat decision; it is a delayed building setback.',
        ],
      },
      {
        heading: 'Upgrade Dragon Pit systems when they serve a march',
        paragraphs: [
          'The beginner video explains Dragon Pit concepts such as star ranks, feeding, habits, and keys. Those systems are important, but they should serve a main march instead of becoming another place to scatter materials.',
          'Upgrade dragon systems when they help your chosen dragon take better tiles, clear campaign walls, or support an alliance role. If the upgrade only makes a side dragon look less empty, wait.',
        ],
      },
      {
        heading: 'Use campaign rewards to break bottlenecks',
        paragraphs: [
          'Campaign rewards and stores can push the Stronghold forward if you spend them into the real blocker. Use them to unlock a keep requirement, fix a resource shortage, or support the main dragon plan.',
          'Do not spend campaign rewards just because a store is open. The best purchase is the one that changes your next queue, next fight, or next objective.',
        ],
      },
    ],
    faq: [
      {
        question: 'What should I upgrade first in the Stronghold?',
        answer:
          'Prioritize keep requirements, resource production, troop support, and dragon systems that help your main march.',
      },
      {
        question: 'Why is stone so important early?',
        answer:
          'Stone is heavily used by keep and building upgrades, so early construction pushes often bottleneck there.',
      },
      {
        question: 'Can bad fights slow Stronghold progress?',
        answer:
          'Yes. Troop replacement costs can steal resources that would otherwise go into building upgrades.',
      },
      {
        question: 'When should I upgrade Dragon Pit systems?',
        answer:
          'Upgrade them when they support a chosen dragon and a real account goal, not just because the menu is available.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const siteDescription = `${officialGameFacts.siteName} is an unofficial strategy hub for dragons, codes, campaigns, resources, alliances, and beginner progression.`;
