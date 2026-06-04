import type { Guide } from './types';

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'Universal Tower Defense X Beginner Guide',
    seoTitle: 'Universal Tower Defense X Beginner Guide - Start Strong in UTDX',
    seoDescription:
      'A practical Universal Tower Defense X beginner guide based on current UTDX beginner videos: codes, first summons, story progress, traits, relics, and early mistakes.',
    summary:
      'Start UTDX by making your first account stronger, not busier: claim codes, pick one carry, push story until you hit a real wall, then spend rerolls only when a unit earns them.',
    category: 'Start Here',
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Universal Tower Defense X beginner guide',
      'UTDX beginner guide codes traits units',
      'Universal Tower Defense X how to start',
    ],
    sourceNotes:
      'Selected a fresh beginner-search result with strong early traction, then rewrote the route as an original player-facing guide instead of a transcript.',
    coverImageUrl: 'https://i.ytimg.com/vi/oEoNLXXwZOk/hq720.jpg',
    video: {
      id: 'oEoNLXXwZOk',
      title: "NEW Best *BEGINNER'S* Guide To Start Universal Tower Defense X!",
      channel: 'TrueShinobi',
      url: 'https://www.youtube.com/watch?v=oEoNLXXwZOk',
      thumbnailUrl: 'https://i.ytimg.com/vi/oEoNLXXwZOk/hq720.jpg',
      publishedAt: 'YouTube label: 1 day ago, checked 2026-06-04',
      viewCountLabel: '20,680 views at check time',
    },
    tags: ['Beginner', 'Progression', 'Codes'],
    difficulty: 'Beginner',
    relatedRoutes: ['/codes', '/tier-list', '/units', '/traits', '/relics'],
    body: [
      {
        heading: 'The first hour is about focus',
        paragraphs: [
          'The easiest way to waste a new UTDX account is to treat every shiny pull like a project. You will get units, rerolls, gems, event currency, and advice from five different places, but your account only needs one thing early: a reliable way to clear stages without bleeding resources.',
          'So the opening route is simple. Claim codes, do a small amount of summoning, choose the best carry you actually own, and push story until the game tells you what is missing. If enemies survive forever, you need damage. If waves leak, you need placement, upgrades, or control. If upgrades are too expensive, you need to stop spending before the run starts working.',
        ],
      },
      {
        heading: 'Before you summon, claim every active code',
        paragraphs: [
          'Codes matter more on a fresh account than they do later because they decide how many mistakes you can afford. Gems help with early summons, Gold helps upgrades feel less painful, and Trait Rerolls are best saved until you know which unit is staying in your lineup.',
          'Do not redeem codes and immediately roll everything away. Open the codes page, copy the current codes, then pause for a minute. Check your best unit, your current story stage, and whether you are missing damage or consistency. That tiny pause is often the difference between a clean start and an account full of half-built units.',
        ],
        bullets: [
          'Redeem codes first, summon second, reroll last.',
          'Keep a note of which rewards are for summons and which are for long-term builds.',
          'If a code fails, check capitalization, punctuation, level requirements, and whether you already redeemed it.',
        ],
      },
      {
        heading: 'Pick one carry and let the rest support it',
        paragraphs: [
          'A beginner team does not need to look impressive. It needs to work. Your best early carry is usually the unit with the cleanest damage and upgrade path, not necessarily the rarest name in your box. A practical A-tier unit with upgrades can beat a premium unit you cannot afford to build.',
          'Once you pick the carry, everything else should make that unit better. Add a support, a farm option, or a control piece only when it solves a real problem. If a unit is just there because it looks cool, it is probably eating resources your carry needed.',
        ],
        bullets: [
          'Upgrade one carry before building three side projects.',
          'Use support or control only when waves are leaking or your carry needs help.',
          'Keep older upgraded units if they clear better than a fresh event pull.',
        ],
      },
      {
        heading: 'Story mode is your account test, not just a checklist',
        paragraphs: [
          'Push story until a stage feels uncomfortable, then read the failure. Do not instantly blame your units. Sometimes the fix is earlier placement, waiting for a stronger upgrade timing, or moving damage to the part of the map where enemies stay longest.',
          'When you do need more power, upgrade the unit that is already carrying the run. If that still fails, then compare the tier list and units database. The point is to make one good decision at a time, not to rebuild the whole account every time a stage gets harder.',
        ],
      },
      {
        heading: 'Save premium trait rerolls for units that earned trust',
        paragraphs: [
          'Trait Rerolls feel exciting because they can change a unit fast, but that is exactly why beginners burn them too early. A temporary unit does not need a dream trait. It needs a usable trait that lets you keep progressing while you learn the game.',
          'For early units, stop when the trait clearly helps the role. Damage traits belong on damage units. Economy traits belong on farm units. Support traits belong on units that actually spend time supporting. Chasing perfect traits before you have a real core is how accounts get stuck with no rerolls and no plan.',
        ],
      },
      {
        heading: 'When to leave beginner mode',
        paragraphs: [
          'You are ready to move beyond beginner decisions when you can explain why each unit is in your lineup. If the answer is "this one carries, this one supports, this one helps economy, and this one is my next upgrade target," you are doing fine.',
          'At that point, start caring about relics, advanced traits, event portals, and premium units. Until then, keep the account clean. UTDX rewards players who spend late and with a reason.',
        ],
      },
      {
        heading: 'What to read next',
        paragraphs: [
          'After this guide, open Codes, Tier List, Units, Traits, and Relics in that order. That gives you the basic loop: collect resources, choose a unit, decide whether it deserves rerolls, then decide whether it deserves relic farming.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should beginners chase Merciless God immediately?',
        answer:
          'Only if you can actually support it. A premium unit is great, but a beginner account still needs codes, story rewards, upgrade money, and a stable core first.',
      },
      {
        question: 'How many units should I build early?',
        answer:
          'Build one main carry seriously, then add support or farm units only when they solve a clear problem.',
      },
      {
        question: 'Should I reroll traits on my first good unit?',
        answer:
          'Use cheap stop points early. Save expensive reroll sessions for units you expect to keep for a long time.',
      },
      {
        question: 'What should I do when story mode gets hard?',
        answer:
          'First check placement and upgrade timing. If the run still fails, upgrade your carry or compare the tier list before changing the whole team.',
      },
    ],
  },
  {
    slug: 'merciless-god',
    title: 'Merciless God Guide',
    seoTitle: 'Merciless God Guide - Universal Tower Defense X',
    seoDescription:
      'Merciless God guide for Universal Tower Defense X with build path, portal advice, trait priorities, relic planning, and when to invest during Universal Fest P2.',
    summary:
      'Merciless God is worth taking seriously, but not blindly. Treat it as a premium carry project: plan the build path, protect your rerolls, and make sure the team can support it before you spend everything.',
    category: 'Boss / Raid',
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Universal Tower Defense X Merciless God guide',
      'UTDX Merciless God showcase build',
      'Universal Tower Defense X Universal Fest P2 Merciless God',
    ],
    sourceNotes:
      'Selected a Merciless God build/path result with high freshness and strong views, then rewrote as an investment and build guide.',
    coverImageUrl: 'https://i.ytimg.com/vi/nuJjNLKN0eQ/hq720.jpg',
    video: {
      id: 'nuJjNLKN0eQ',
      title:
        'The BEST Build & Path For Black Goku (Merciless God) In Universal Tower Defense X!',
      channel: 'NotScoobz',
      url: 'https://www.youtube.com/watch?v=nuJjNLKN0eQ',
      thumbnailUrl: 'https://i.ytimg.com/vi/nuJjNLKN0eQ/hq720.jpg',
      publishedAt: 'YouTube label: 1 day ago, checked 2026-06-04',
      viewCountLabel: '27,746 views at check time',
    },
    tags: ['Merciless God', 'Universal Fest P2', 'Build'],
    difficulty: 'Intermediate',
    relatedRoutes: [
      '/units/merciless-god',
      '/traits',
      '/relics',
      '/updates/universal-fest-p2',
      '/codes',
    ],
    body: [
      {
        heading: 'Do not treat Merciless God like a normal pull',
        paragraphs: [
          'Merciless God is the kind of unit that makes players want to spend first and think later. That is understandable: it is tied to the current Universal Fest P2 conversation, it has portal and build searches around it, and it looks like the kind of unit that can define an account.',
          'But the correct question is not "is Merciless God strong?" The useful question is "can my account make Merciless God strong right now?" If the answer is no, you should still track the unit, but you should not dump every reroll and relic resource into it on day one.',
        ],
      },
      {
        heading: 'The build path starts before the trait',
        paragraphs: [
          'Players often jump straight to best trait, but Merciless God needs a full path. First, decide whether the unit is your main carry or a specialist for portals and boss content. Then check whether your team has enough support, farm, and upgrade consistency to let it reach the part of the run where it actually matters.',
          'If Merciless God is your carry, the rest of the team should stop competing with it. Use support pieces that make the carry stronger, not side damage units that drain upgrades. If a map rewards economy, keep the farm slot. If the portal punishes leaks, bring control or a unit that buys time.',
        ],
      },
      {
        heading: 'Trait priorities',
        paragraphs: [
          'For a premium DPS project, you are looking for traits that clearly improve damage, uptime, or boss pressure. Ruler, Eternal, Fission, and Duelist are the serious chase traits in this site build, but not every account should chase the perfect hit immediately.',
          'If you have only a small reroll bank, set a stop rule before you start. Decide which traits are acceptable, which are dream outcomes, and where you stop if the roll gets expensive. The worst Merciless God build is not a bad trait; it is no rerolls left for the next unit that needs them.',
        ],
        bullets: [
          'Hard chase: Ruler, Eternal, Fission, Duelist.',
          'Practical stop: any trait that gives clear damage value while you farm more resources.',
          'Do not chase support or economy traits on a unit you expect to carry boss damage.',
        ],
      },
      {
        heading: 'Relic planning matters more than people admit',
        paragraphs: [
          'Merciless God can look weaker than expected if you stop at the unit screen. Relics decide how much of that power actually shows up in hard content. Fusion and Fused Warrior relic sets are the first comparison points for this update cycle because Universal Fest P2 leans into fusion-related planning.',
          'Do not enhance random relics just because you are excited. If a relic does not support the role you are building, it is a resource sink. Match relics to the job: boss damage, portal consistency, wave clear, or a specific build path.',
        ],
      },
      {
        heading: 'Portal advice: solve consistency first',
        paragraphs: [
          'Merciless God portal content is less about having a flashy unit and more about not falling apart during the run. If you lose because enemies leak early, adding more late damage will not fix the run. If you lose because the boss survives, then damage and trait quality matter more.',
          'Watch your failed attempts. Early leaks mean placement, control, or upgrade timing. Late failure means carry damage, relics, or support. That diagnosis tells you whether Merciless God needs more investment or whether the team around it is the real problem.',
        ],
      },
      {
        heading: 'Should you chase it now?',
        paragraphs: [
          'Chase Merciless God now if you already have enough resources to build it and you want a current-update carry. Wait if you are still missing a stable story team, if your reroll stash is tiny, or if your current carry already clears the content you care about.',
          'A premium unit is only premium after the account can pay the full cost: summons, upgrades, traits, relics, and support. If you can pay that cost, Merciless God is a serious project. If not, bookmark it and keep farming.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Merciless God worth building?',
        answer:
          'Yes, if you can support it with upgrades, damage traits, relic planning, and a team that lets it do its job.',
      },
      {
        question: 'What traits should I chase?',
        answer:
          'Start with Ruler, Eternal, Fission, and Duelist as premium DPS targets. Use a practical damage trait if your reroll bank is small.',
      },
      {
        question: 'Can beginners use Merciless God?',
        answer:
          'They can, but beginners should not spend every resource before they have a stable carry path and story progress.',
      },
      {
        question: 'Why does my Merciless God feel weak?',
        answer:
          'Usually because the build is unfinished: poor trait, weak relic support, bad upgrade timing, or a team that steals too many upgrades.',
      },
    ],
  },
  {
    slug: 'best-units-to-build-first',
    title: 'Best Units to Build First',
    seoTitle: 'Best Units to Build First - Universal Tower Defense X',
    seoDescription:
      'A practical Universal Tower Defense X unit priority guide based on current tier list video demand: which units deserve upgrades, traits, relics, and when to wait.',
    summary:
      'The best unit to build first is not always the rarest unit. Build the unit that clears your current wall, has a realistic trait path, and will still matter after the next summon session.',
    category: 'Tier / Units',
    sourceStrategy: 'popular_youtube',
    videoSearchQueries: [
      'Universal Tower Defense X best units',
      'UTDX tier list',
      'Universal Tower Defense X units to build first',
    ],
    sourceNotes:
      'Selected the highest-view fresh tier-list result for Update 3 Part 2, then rewrote the article as a decision guide instead of copying a ranking.',
    coverImageUrl: 'https://i.ytimg.com/vi/KkCics1GzeA/hq720.jpg',
    video: {
      id: 'KkCics1GzeA',
      title:
        'NEW *BEST* Units Tier List in Universal Tower Defense X... (DBS FESTIVAL UPD 3 PART 2)',
      channel: 'Radinal',
      url: 'https://www.youtube.com/watch?v=KkCics1GzeA',
      thumbnailUrl: 'https://i.ytimg.com/vi/KkCics1GzeA/hq720.jpg',
      publishedAt: 'YouTube label: 1 day ago, checked 2026-06-04',
      viewCountLabel: '57,017 views at check time',
    },
    tags: ['Tier List', 'Units', 'Investment'],
    difficulty: 'Beginner',
    relatedRoutes: ['/tier-list', '/units', '/traits', '/relics', '/codes'],
    body: [
      {
        heading: 'A tier list is a filter, not a command',
        paragraphs: [
          'Tier list videos are useful because they show what the community is paying attention to right now. They are dangerous when players treat them like a shopping list. If you build every high-ranked unit the moment you see it, your account ends up with five unfinished projects and no real carry.',
          'Use the tier list to narrow the decision, then ask the account question: which unit solves my current problem with the resources I actually have?',
        ],
      },
      {
        heading: 'Build a carry first',
        paragraphs: [
          'Your first serious investment should usually be a carry. A carry is the unit that makes stages end. It does not have to be the most expensive unit in the game. It has to be strong enough, upgradeable enough, and supported enough to clear content.',
          'Merciless God, Ultimate Fused Warrior, Jinoo, Shadow Monarch, and The Strongest units are premium comparison points on this site. That does not mean every player should chase all of them. Pick the best one you own or can realistically obtain, then make it work before moving on.',
        ],
        bullets: [
          'If a unit carries story and events, it deserves attention.',
          'If it only looks good after impossible traits, wait.',
          'If an older unit has better upgrades and traits, keep using it.',
        ],
      },
      {
        heading: 'Support and farm units are not optional forever',
        paragraphs: [
          'New players often overvalue raw damage and undervalue the units that make damage usable. A support unit can make your carry hit harder, reach better timing, or survive pressure. A farm unit can make upgrades happen before the map gets out of control.',
          'The trick is not to build support before you have something worth supporting. Get one carry online, then add the unit that fixes the next bottleneck.',
        ],
      },
      {
        heading: 'When to build a Watchlist unit',
        paragraphs: [
          'Watchlist units are interesting but not settled. They might be new, tied to the update, or missing enough gameplay proof. Build them only when testing is cheap or when the unit already solves a specific problem for your account.',
          'Do not spend your last rerolls on a Watchlist unit just because a new video is excited about it. Let the community test, compare results, and watch whether the unit still looks strong after the first wave of hype.',
        ],
      },
      {
        heading: 'A simple build order',
        paragraphs: [
          "First, build one carry. Second, add a support, farm, or control unit that fixes the carry's weakness. Third, roll a practical trait on the carry. Fourth, start relic farming for the units you know will stay. Fifth, only then chase luxury units.",
          'This order is boring, which is why it works. It keeps your account moving while other players are stuck rerolling a unit they might replace tomorrow.',
        ],
      },
      {
        heading: 'Units to delay',
        paragraphs: [
          'Delay units that require hard-to-farm relics, expensive traits, missing fusion prerequisites, or a team shape you cannot build yet. A delayed unit is not a skipped unit. It is a unit you are refusing to ruin with half-investment.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I build only S-tier units?',
        answer:
          'No. Build the best unit you can support. A well-built A-tier unit can outperform an unsupported S-tier unit.',
      },
      {
        question: 'What should beginners build first?',
        answer:
          'One reliable carry, then one support or farm option that helps that carry clear more content.',
      },
      {
        question: 'Are new update units always worth it?',
        answer:
          'No. New units are worth testing, but heavy investment should wait until their role, traits, and relic path are clear.',
      },
      {
        question: 'When should I farm relics?',
        answer:
          'Start farming relics after you know a unit will stay in your team. Relic farming for temporary units is usually wasteful.',
      },
    ],
  },
  {
    slug: 'reroll-strategy',
    title: 'Trait Reroll Strategy',
    seoTitle: 'UTDX Trait Reroll Strategy - Stop Wasting Rerolls',
    seoDescription:
      'Universal Tower Defense X trait reroll strategy based on reroll farming video demand: when to save, when to stop, and which units deserve premium traits.',
    summary:
      'Trait rerolls are not a slot machine you pull until you feel better. They are an account budget. Set stop rules, farm steadily, and spend hard only on units you will actually keep.',
    category: 'Traits / Relics',
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Universal Tower Defense X trait reroll guide',
      'UTDX best traits',
      'Universal Tower Defense X how to reroll traits',
    ],
    sourceNotes:
      'Selected a high-view F2P reroll-method video and rewrote the article as a reroll budgeting guide.',
    coverImageUrl: 'https://i.ytimg.com/vi/HS8aAbLtlvk/hq720.jpg',
    video: {
      id: 'HS8aAbLtlvk',
      title:
        'The *BEST* F2P Reroll Method IN Universal Tower Defense X Update 3.5!',
      channel: 'AB Plays',
      url: 'https://www.youtube.com/watch?v=HS8aAbLtlvk',
      thumbnailUrl: 'https://i.ytimg.com/vi/HS8aAbLtlvk/hq720.jpg',
      publishedAt: 'YouTube label: 8 days ago, checked 2026-06-04',
      viewCountLabel: '22,256 views at check time',
    },
    tags: ['Traits', 'Rerolls', 'F2P'],
    difficulty: 'Intermediate',
    relatedRoutes: ['/traits', '/units', '/tier-list', '/codes', '/relics'],
    body: [
      {
        heading: 'Think of rerolls as rent, not bonus money',
        paragraphs: [
          'Every UTDX player eventually has the same bad idea: "I will just roll a few more times." That sentence empties inventories. Trait Rerolls are not bonus money. They are the rent you pay to keep your best units relevant.',
          'The goal is not to hit a perfect trait on everything. The goal is to know which units deserve expensive rolls, which units only need a usable trait, and which units should not be touched at all.',
        ],
      },
      {
        heading: 'Make three lists before rolling',
        paragraphs: [
          'Before you open the reroll menu, split your units into three groups. The first group is permanent: your main carry, premium units, and supports you know you will keep. The second group is temporary: units helping you clear now but likely to be replaced. The third group is bait: units you like, but that do not solve a problem.',
          'Spend on the first group. Use cheap stop rules on the second. Ignore the third until the account has extra resources.',
        ],
        bullets: [
          'Permanent units can chase premium traits.',
          'Temporary units should stop at practical traits.',
          'Bait units get no rerolls until your core is stable.',
        ],
      },
      {
        heading: 'Stop rules for DPS, support, and farm',
        paragraphs: [
          'For DPS carries, traits like Ruler, Eternal, Fission, Duelist, Deadeye, and Lethal make sense depending on the unit and mode. For support, raw damage may not be the best answer; range, uptime, or utility can matter more. For farm units, Fortunate-style value can beat a flashy combat trait.',
          'The mistake is using one dream list for every role. A farm unit does not need to pretend it is a boss killer. A support unit does not need the same trait as your main DPS. Roll for the job, not for the screenshot.',
        ],
      },
      {
        heading: 'How F2P players should farm rerolls',
        paragraphs: [
          'F2P reroll farming is about rhythm. Claim codes, clear repeatable content, watch update events, and avoid spending rerolls faster than you can replace them. If an update adds a farming method, use it while it is good, but do not let farming turn into random spending.',
          'A good rule is to keep a reserve. If you cannot roll a new premium unit tomorrow because you spent everything today, you probably went too far.',
        ],
      },
      {
        heading: 'When to stop even if the trait is not perfect',
        paragraphs: [
          'Stop when the trait improves the unit enough to clear the content you are farming. Stop when the next upgrade would help more than another roll. Stop when the unit is likely to be replaced. Stop when the roll session has turned emotional.',
          'Perfect traits are for units you are married to. Good-enough traits are for units helping you pay the bills.',
        ],
      },
      {
        heading: 'Rerolls and relics should not fight each other',
        paragraphs: [
          'A unit with a good trait but no relic plan can still feel incomplete. A unit with a strong relic but a nonsense trait can also underperform. Spend with the full build in mind. If you cannot farm the relic set yet, you may not need to chase the perfect trait today.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I reroll every high-rarity unit?',
        answer:
          'No. High rarity makes a unit interesting, but role, team fit, and long-term use decide whether it deserves rerolls.',
      },
      {
        question: 'What is a good early stop trait?',
        answer:
          'Any trait that clearly helps the unit do its job. Damage for carries, utility for support, economy value for farm units.',
      },
      {
        question: 'How many rerolls should I keep in reserve?',
        answer:
          'Keep enough that a new premium unit or update does not leave you helpless. The exact number depends on how fast your account farms.',
      },
      {
        question: 'Are F2P reroll methods worth farming?',
        answer:
          'Yes, if you also control spending. Farming more rerolls does not help if you immediately waste them on temporary units.',
      },
    ],
  },
  {
    slug: 'story-mode',
    title: 'Story Mode Route',
    seoTitle: 'Universal Tower Defense X Story Mode Route',
    seoDescription:
      'Universal Tower Defense X story mode progression guide: how to read failed stages, upgrade your carry, choose support, and move into harder UTDX content.',
    summary:
      'Story mode is where your account learns how to win. Push until the run breaks, diagnose why it broke, then upgrade the one thing that actually fixes the problem.',
    category: 'Game Modes',
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'Universal Tower Defense X story mode guide',
      'UTDX story mode progression',
      'Universal Tower Defense X progression guide',
    ],
    sourceNotes:
      'Selected a progression-focused beginner video and rewrote it as a story-mode diagnosis route.',
    coverImageUrl: 'https://i.ytimg.com/vi/7VptBkRw9kw/hq720.jpg',
    video: {
      id: '7VptBkRw9kw',
      title:
        'A COMPLETE Beginners Guide on How to Progress in Universal Tower Defense X',
      channel: 'Balakay',
      url: 'https://www.youtube.com/watch?v=7VptBkRw9kw',
      thumbnailUrl: 'https://i.ytimg.com/vi/7VptBkRw9kw/hq720.jpg',
      publishedAt: 'YouTube label: 1 month ago, checked 2026-06-04',
      viewCountLabel: '34,826 views at check time',
    },
    tags: ['Story Mode', 'Progression', 'Team Building'],
    difficulty: 'Beginner',
    relatedRoutes: [
      '/guides/beginner-guide',
      '/units',
      '/tier-list',
      '/traits',
      '/best-team',
    ],
    body: [
      {
        heading: 'Story mode teaches you what your account is missing',
        paragraphs: [
          'Do not treat story mode as filler before the real game. Story is where you learn whether your team has damage, economy, placement, upgrade timing, and enough control to survive longer maps.',
          'A failed story stage is useful information. The important part is reading the failure instead of panic-changing the whole team.',
        ],
      },
      {
        heading: 'Read the failure type',
        paragraphs: [
          'If enemies leak early, your opening placement or upgrade timing is wrong, or your cheap early unit is not doing enough. If enemies stack up in the middle, your main damage is late or badly positioned. If the boss survives, you probably need better single-target damage, a stronger trait, or support around the carry.',
          'This diagnosis saves resources. Without it, players reroll traits when they should move placements, summon when they should upgrade, or replace units when they only needed a farm slot.',
        ],
        bullets: [
          'Early leaks: placement, cheap damage, or upgrade timing.',
          'Mid-run pileups: carry damage or control problem.',
          'Boss failure: single-target damage, trait quality, relics, or support.',
        ],
      },
      {
        heading: 'Use story rewards to strengthen the same core',
        paragraphs: [
          'Story rewards are best when they feed the unit that is already doing work. If your carry clears most waves, upgrade it. If your support makes clears more stable, keep it. If a unit sits there doing nothing, stop feeding it resources just because it is in the lineup.',
          'The goal is to walk into each next stage with a slightly cleaner version of the same plan, not a new experimental team every time.',
        ],
      },
      {
        heading: 'When to add support, farm, or control',
        paragraphs: [
          'Add support when your carry is close but not quite enough. Add farm when you consistently lose because upgrades arrive too late. Add control when enemies are reaching the end before your damage has time to work.',
          'Support is not a luxury slot. It is the slot that turns a good carry into a reliable clear. Just make sure the support solves the actual problem, not an imaginary one.',
        ],
      },
      {
        heading: 'When story mode stops being the best use of time',
        paragraphs: [
          'Leave story mode when your core clears reliably and your next meaningful upgrade comes from another system: traits, relics, portals, raids, events, or update currency. If story still gives useful rewards and teaches you something, stay longer.',
          'There is no shame in farming story until your account is stable. The mistake is jumping into harder content with a team that cannot explain why it exists.',
        ],
      },
      {
        heading: 'The clean progression loop',
        paragraphs: [
          'Clear a stage, read the reward, upgrade the carry, test the next stage, diagnose the failure, then decide whether the fix is unit, trait, relic, support, or placement. Repeat that loop and the account grows naturally.',
          'That loop is slower than gambling everything on one summon session, but it leaves you with a team that actually clears.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I rush story mode?',
        answer:
          'Push quickly when stages are easy, but slow down when failures start giving useful information about your team.',
      },
      {
        question: 'What is the most common story mode mistake?',
        answer:
          'Changing too many things at once. Fix one problem, test again, then make the next decision.',
      },
      {
        question: 'When should I add a farm unit?',
        answer:
          'Add farm when your clears fail because upgrades come too late, not just because someone said every team needs farm.',
      },
      {
        question: 'When should I move into harder modes?',
        answer:
          'Move on when your story core is stable and your next upgrade clearly comes from traits, relics, portals, raids, or event content.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}
