import { endingChecklist, endingRules } from './endings';
import { checkedAt, siteFacts } from './sources';
import type { Guide, GuideVideo } from './types';

const videoCover = (id: string) => `https://i.ytimg.com/vi/${id}/hq720.jpg`;
const localGuideCover = (slug: string) => `/falsesun/guides/${slug}.png`;

const videos = {
  allEndings: {
    id: 'PVpgRF8nC1M',
    title: 'All endings walkthrough for The False Sun',
    channel: 'VikOchka',
    url: 'https://www.youtube.com/watch?v=PVpgRF8nC1M',
    thumbnailUrl: videoCover('PVpgRF8nC1M'),
    publishedAt: '2026-06-07',
    checkedAt,
  },
  englishAllEndings: {
    id: 'AoA1yeeLoKQ',
    title:
      'Insane Yandere Farm Boy Is In Love With YOU | The False Sun - ALL ENDINGS | Yandere Dating Sim',
    channel: 'Hello Yinny',
    url: 'https://www.youtube.com/watch?v=AoA1yeeLoKQ',
    thumbnailUrl: videoCover('AoA1yeeLoKQ'),
    publishedAt: '2026-06-09',
    viewCountLabel: '6.5K+ views',
    checkedAt,
  },
  ritsuPartOne: {
    id: 'phQ-IF0zPGg',
    title: 'The False Sun walkthrough, all endings part 1',
    channel: 'ritsu',
    url: 'https://www.youtube.com/watch?v=phQ-IF0zPGg',
    thumbnailUrl: videoCover('phQ-IF0zPGg'),
    publishedAt: '2026-06-03',
    viewCountLabel: '22K+ views',
    checkedAt,
  },
  ritsu: {
    id: '9iG-Ho_Uas8',
    title: 'The False Sun walkthrough, all endings part 2',
    channel: 'ritsu',
    url: 'https://www.youtube.com/watch?v=9iG-Ho_Uas8',
    thumbnailUrl: videoCover('9iG-Ho_Uas8'),
    publishedAt: '2026-06-07',
    checkedAt,
  },
} satisfies Record<string, GuideVideo>;

export const siteDescription =
  'The False Sun is an unofficial play-online and walkthrough hub for all endings, Ending 20, Silas and Kyle routes, mini-games, safe downloads, and mature-content warnings.';

export const guides: Guide[] = [
  {
    slug: 'all-endings',
    path: '/all-endings',
    title: 'The False Sun All Endings Guide',
    seoTitle: 'The False Sun All Endings Guide - 20 Ending Walkthrough',
    seoDescription:
      'Track all 20 The False Sun endings with route clusters, save points, Silas and Kyle branches, Ending 20 notes, and spoiler-safe walkthrough advice.',
    summary:
      'Start here if your gallery is stuck. This all endings guide groups the 20 slots by route, save point, and confidence instead of pretending every branch is already perfectly named.',
    category: 'Endings',
    difficulty: 'Spoiler Heavy',
    coverImageUrl: videos.englishAllEndings.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'The False Sun all endings',
      'The False Sun walkthrough endings',
      'The False Sun ending 20',
    ],
    sourceNotes:
      'Built from official itch details and current all-endings video cross-checks. The 2026-06-09 English all-endings upload is the primary player-facing reference; ending labels are route notes, not official gallery names.',
    video: videos.englishAllEndings,
    tags: ['20 Endings', 'Walkthrough', 'Spoilers'],
    relatedRoutes: [
      '/play-online',
      '/save-points',
      '/ending-20',
      '/silas-route',
      '/he-let-you-go',
      '/kyle-route',
      '/mini-games',
    ],
    body: [
      {
        heading: 'Use route clusters before hunting exact numbers',
        paragraphs: [
          'The False Sun is not a database game, so the best all endings guide is a save-file strategy. Your first job is to split the story into reusable branches: early bed scene, farm chore split, memory recovery, confrontation, escape, late affection route, and the low-chance farm accident.',
          'Do not replay from the beginning after every missing slot. Make named saves before choices that change the relationship tone, before farm work, before the pier, before the tree answer, before the dream questions, and before the final dream sequence.',
        ],
        bullets: endingRules,
      },
      {
        heading: 'Current 20-ending tracker',
        paragraphs: [
          'The table below is intentionally honest. It gives route focus and confidence, because community information is moving faster than stable English route documentation. Use it to decide what to test next, then mark your own gallery once you verify the exact slot.',
        ],
        bullets: endingChecklist.map(
          (item) =>
            `${item.number}. ${item.label}: ${item.routeFocus} (${item.confidence})`
        ),
      },
      {
        heading: 'Choose the page by the slot you are missing',
        paragraphs: [
          'The fastest cleanup route is not always the all-endings page. Use this page to identify the family, then move to the specific page that matches the blocker.',
          'If a missing slot looks like a direct Silas relationship outcome, use the Silas route. If it looks like farm injury or a promise to return, use Kyle or Ending 20. If it happens before the story gets heavy, check the farm mini-game save instead of late dialogue.',
        ],
        bullets: [
          'Missing a warm or dangerous Silas branch: open the Silas route page.',
          'Missing the rare farm accident: open Ending 20 and test the chicken loop.',
          'Missing a calmer farm aftermath: open the Kyle route page.',
          'Missing a platform or save problem before route cleanup: use download, play online, or mini-games first.',
        ],
      },
      {
        heading: 'Best save points for fast clean-up',
        paragraphs: [
          'Keep one early save before the tutorial and first farm work. Keep one save before you decide how much Silas handles on the farm. Keep one save before refusing or accepting the pier. Keep one save before the tree answer. Keep one save before the past-partner question and another before the final dream.',
          'The goal is to replay two or three scenes at a time. If you are missing only one late Silas ending, do not burn an hour rebuilding the whole route unless your early farm choices were wrong.',
        ],
      },
      {
        heading: 'What to do if you are stuck after 7 or 11 endings',
        paragraphs: [
          'Players getting stuck around 7 endings usually have only tested the obvious danger branches. Move into the warmer Silas route and the Kyle/farm branch. Players stuck around 11 endings usually need to test the late affection chain, the pier refusal chain, and the random-looking farm accident route.',
          'When a missing ending feels impossible, stop changing everything. Change one branch at a time and write down the save name, the choice changed, and the gallery result.',
        ],
      },
      {
        heading: 'Spoiler and source note',
        paragraphs: [
          'This page is spoiler-heavy by design. It avoids copying game script or transcript text and only records route logic. If a branch has low confidence, it is labeled as watch instead of being presented as settled truth.',
          `Official game and download details should always be checked on ${siteFacts.officialItchUrl}.`,
        ],
      },
    ],
    faq: [
      {
        question: 'How many endings does The False Sun have?',
        answer:
          'Community videos and player discussion point to 20 endings. This site tracks them as 20 route slots while exact English gallery names are still being verified.',
      },
      {
        question: 'Should I replay from the beginning for every ending?',
        answer:
          'No. Use save points before major forks. Most endings are easier to clean up by replaying a short route cluster.',
      },
      {
        question: 'Are the ending names official?',
        answer:
          'No. The labels here are route notes so players can navigate the branches without waiting for a fully verified official-name list.',
      },
      {
        question: 'What should I do if I am stuck around 11 of 20 endings?',
        answer:
          'Stop replaying the whole game. Keep one save before the farm/chicken loop, one before Silas confrontation choices, and one before late affection choices, then test one family at a time.',
      },
    ],
  },
  {
    slug: 'save-points',
    path: '/save-points',
    title: 'The False Sun Save Points Guide',
    seoTitle: 'The False Sun Save Points Guide - Puzzle, Farm and Route Saves',
    seoDescription:
      'Plan The False Sun saves before farm tasks, puzzles, swimming, route choices, and Ending 20 so you can test endings without full restarts.',
    summary:
      'A practical save map for players who keep replaying too much of The False Sun. Use it before farm tasks, path choices, puzzle-like scenes, and late Silas route checks.',
    category: 'Route',
    difficulty: 'Intermediate',
    coverImageUrl: videos.englishAllEndings.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'The False Sun walkthrough',
      'The False Sun puzzle',
      'The False Sun save points',
    ],
    sourceNotes:
      'Created for GSC walkthrough and puzzle demand, using the current English all-endings walkthrough as route cross-check material.',
    video: videos.englishAllEndings,
    tags: ['Save Points', 'Puzzle', 'Walkthrough'],
    relatedRoutes: [
      '/all-endings',
      '/ending-20',
      '/silas-route',
      '/he-let-you-go',
      '/mini-games',
    ],
    body: [
      {
        heading: 'Build saves around route families',
        paragraphs: [
          'The biggest time sink in The False Sun is not one hard puzzle. It is losing track of which emotional route you are testing, then replaying an hour of early scenes just to reach the same ending again. A good save map turns the story into short branches instead of one long mystery.',
          'Use separate saves for route families: early farm setup, fear answers, escape attempts, Silas warmth, Kyle or farm aftermath, and the rare farm accident path. If a save name only says "test" or "ending", it will stop being useful after two attempts. Name saves by the scene and the tone you are testing.',
        ],
        bullets: [
          'Early setup save: before farm chores and first tone-setting choices.',
          'Farm-state save: before animal or chicken interactions.',
          'Escape save: before path, water, road, or bridge decisions.',
          'Silas warmth save: before the gentler affection chain begins.',
          'Late dream save: before the final sequence that branches several outcomes.',
        ],
      },
      {
        heading: 'Farm and chicken saves matter early',
        paragraphs: [
          'The farm scenes can look like pacing, but they are exactly where repeated ending hunters need clean saves. Ending 20 appears to be tied to the chicken or farm accident branch, so saving after the outcome is already decided can trap you in a loop that never changes.',
          'Keep one save before the first farm task and another before the chicken interaction itself. If the same result repeats many times, move one save earlier. Do not change late romance answers while testing a farm trigger, because that mixes two different problems and makes the result harder to read.',
        ],
        bullets: [
          'Save before the farm task starts, then keep a separate save after finishing it.',
          'For Ending 20 attempts, reload from before the chicken interaction, not after the scene resolves.',
          'If ten attempts repeat the same route, move earlier instead of rewriting the final dream choices.',
        ],
      },
      {
        heading: 'Path, water, and road choices split escape outcomes',
        paragraphs: [
          'Several endings are easiest to understand as movement or escape outcomes. When the story asks you to go toward a road, water, bridge, or isolated path, treat that as a hard checkpoint. These scenes can produce fast bad endings, but they can also tell you which route family you have not cleaned up.',
          'Do not overwrite an escape save with an affection-route save. Escape testing is about distance, hesitation, and survival logic. Silas testing is about trust, fear, and reassurance. Mixing them often creates a route that reaches one known ending and teaches you nothing new.',
        ],
      },
      {
        heading: 'Puzzle-like moments need before-and-after saves',
        paragraphs: [
          'The False Sun is a visual novel, but players still search for puzzle help because some scenes behave like puzzle states: farm chores, navigation, accident triggers, and repeated route checks. The cleanest habit is a before-and-after pair.',
          'Before the scene, save with a name like "before chicken" or "before road". After the result, save in another slot only if the outcome is useful. If the outcome is wrong, do not keep building on it. Return to the before save and test one change at a time.',
        ],
        bullets: [
          'Use "before" saves for testing.',
          'Use "after" saves only when the branch is worth preserving.',
          'Never overwrite your only clean save after a new ending unlocks.',
          'Write down the one changed choice, especially when testing late Silas outcomes.',
        ],
      },
      {
        heading: 'Silas saves should be cleaner than the route feels',
        paragraphs: [
          'Silas outcomes can feel emotionally messy, but your save structure should be boring and clear. Keep one fear route, one confrontation route, one escape route, and one warm route. The warm route is especially fragile because several small reassurances can matter before the ending appears.',
          'If you are aiming for calmer Silas branches such as a separation-style ending, start from a clean warm save instead of trying to repair a fear route at the last choice. Late kindness usually cannot undo a route that spent the earlier scenes escalating distance or panic.',
        ],
      },
      {
        heading: 'Browser saves versus downloaded builds',
        paragraphs: [
          'If you are playing online, make sure the browser is not clearing site data between sessions. If saves vanish, switch to the official downloadable build from itch.io before doing serious ending cleanup. A full all-endings run is too much work to risk on a temporary browser state.',
          'Use browser play for quick route checks or first impressions. Use the official Windows, macOS, Linux, or Android build when you want reliable local saves and repeated testing.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where should I save first in The False Sun?',
        answer:
          'Save before the first farm task and again before the route starts changing tone around Silas. Those two saves prevent most full restarts.',
      },
      {
        question: 'Is The False Sun puzzle-heavy?',
        answer:
          'Not like a traditional puzzle game, but some farm, navigation, and route-state moments behave like puzzles when you are hunting every ending.',
      },
      {
        question: 'Why do I keep getting the same ending?',
        answer:
          'Your save may already be locked into that route family. Move to an earlier save and change only one important branch at a time.',
      },
      {
        question: 'Should I use browser play or a download for all endings?',
        answer:
          'Use browser play for quick checks, but use the official downloadable build if you are doing a serious all-endings cleanup and care about stable saves.',
      },
    ],
  },
  {
    slug: 'ending-20',
    path: '/ending-20',
    title: 'The False Sun Ending 20 Guide',
    seoTitle: 'The False Sun Ending 20 Guide - Chicken Ending Route Notes',
    seoDescription:
      'How to approach The False Sun Ending 20, the low-chance chicken accident route, with retry advice, save points, and what not to change.',
    summary:
      'Ending 20 appears to be the rare farm/chicken accident branch. The right tactic is not a late-game route rebuild; it is a tight retry loop from the closest farm save.',
    category: 'Endings',
    difficulty: 'Spoiler Heavy',
    coverImageUrl: videos.ritsu.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'The False Sun ending 20',
      'The False Sun chicken ending',
      'The False Sun all endings part 2',
    ],
    sourceNotes:
      'Cross-checked from itch player questions and a walkthrough transcript that describes a low-chance chicken accident leading to a hospital/city outcome.',
    video: videos.ritsu,
    tags: ['Ending 20', 'Chicken', 'Rare Branch'],
    relatedRoutes: [
      '/play-online',
      '/all-endings',
      '/save-points',
      '/mini-games',
      '/kyle-route',
      '/download',
    ],
    body: [
      {
        heading: 'Why Ending 20 feels different',
        paragraphs: [
          'Most routes in The False Sun feel like they come from relationship tone: how much the protagonist trusts Silas, whether a scene escalates, and which late memory answers you choose. Ending 20 is strange because the useful clue points back to the farm instead of the final romance chain.',
          'Treat it as a rare chicken/farm accident branch. Make a save before the animal interaction, replay that short section, and keep Silas or Kyle choices unchanged until you know the farm state itself is not the blocker.',
        ],
      },
      {
        heading: 'Recommended retry loop',
        paragraphs: [
          'Start from the closest save before the chicken/farm mini-game section. Run the interaction normally, watch for the accident outcome, and return to the save if the branch does not trigger. If your save is after the animal setup, go earlier.',
          'Do not solve this by replaying the final dream chain over and over. The available evidence points to the farm accident itself, not a hidden dialogue answer at the end of the story.',
        ],
        bullets: [
          'Save before the chicken interaction, not after the result.',
          'Retry the same farm section several times before changing route tone.',
          'If nothing happens, move one save earlier and include the tutorial/farm setup.',
          'Track attempts so you know whether you tested 5, 10, or 20 loops.',
        ],
      },
      {
        heading: 'Check whether your save is already locked',
        paragraphs: [
          'A farm accident branch can feel random even when the important state was decided earlier. If ten or more retries from the same save repeat the same result, move back one checkpoint instead of changing final-scene answers.',
          'Good checkpoints are before the first farm task, before the chicken interaction, and before the route decides whether the protagonist can safely remain on the farm.',
        ],
        bullets: [
          'Use the closest pre-farm save first.',
          'If the branch repeats exactly, move one save earlier.',
          'Keep Silas tone unchanged while testing the farm state.',
          'Do not overwrite a save that already reaches a known ending.',
        ],
      },
      {
        heading: 'What the ending seems to show',
        paragraphs: [
          'The branch appears to lead into an injury aftermath where the protagonist cannot stay on the farm as planned. Kyle is mentioned as helping around the farm, and the route has a bittersweet return-next-summer shape rather than a direct Silas confrontation.',
          'Because the exact English gallery label still needs replay verification, this guide names the branch by its mechanic: the chicken accident route.',
        ],
      },
      {
        heading: 'Common mistakes',
        paragraphs: [
          'The most common mistake is assuming Ending 20 is a moral answer hidden in the final romance route. That sends players through long loops that never touch the rare farm trigger.',
          'The second mistake is saving too late. If the farm state is already decided, reloading that save can repeat the same result forever.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is Ending 20 random?',
        answer:
          'Current community evidence suggests a low-chance branch, but the exact probability is not officially confirmed. Treat it as random until replay testing proves a deterministic setup.',
      },
      {
        question: 'Where should I save for Ending 20?',
        answer:
          'Save before the chicken/farm interaction. If that does not work, save earlier before the tutorial or farm setup begins.',
      },
      {
        question: 'Is Ending 20 a Silas ending?',
        answer:
          'It is better described as a farm accident / Kyle-adjacent aftermath branch, not a standard Silas affection ending.',
      },
    ],
  },
  {
    slug: 'silas-route',
    path: '/silas-route',
    title: 'The False Sun Silas Route Guide',
    seoTitle: 'The False Sun Silas Route Guide - Choices, Saves and Endings',
    seoDescription:
      'A spoiler-marked Silas route guide for The False Sun with save points, affection-chain choices, confrontation branches, and ending clean-up advice.',
    summary:
      'Silas has the densest route logic. The cleanest approach is to split his endings into fear, confrontation, escape, and affection-chain branches.',
    category: 'Route',
    difficulty: 'Spoiler Heavy',
    coverImageUrl: localGuideCover('silas-route'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'The False Sun Silas route',
      'The False Sun all endings Silas',
      'The False Sun walkthrough Silas',
    ],
    sourceNotes:
      'Route notes are cross-checked from current all-endings videos and player demand. Adult context is intentionally kept non-explicit.',
    video: videos.allEndings,
    tags: ['Silas', 'Route', 'Save Points'],
    relatedRoutes: [
      '/play-online',
      '/all-endings',
      '/save-points',
      '/he-let-you-go',
      '/ending-20',
      '/kyle-route',
      '/content-warnings',
    ],
    body: [
      {
        heading: 'Split Silas into four route families',
        paragraphs: [
          'Trying to solve Silas as one route is messy. Treat him as four families: fear answers, confrontation answers, escape answers, and the late affection chain. Each family should have its own save file.',
          'This matters because one warm answer does not magically repair a route built on fear, and one escape answer will not test the late affection outcomes.',
        ],
      },
      {
        heading: 'Core save points',
        paragraphs: [
          'Make saves before the bed scene, before choosing how to answer fear, before recovering memories, before the weapon confrontation, before the pier, before the tree, before the past-partner question, before the dream follow-up, and before the final dream.',
          'Name saves by branch, not by slot number. A save called "tree-cute-before" is more useful than "ending test 12" when you return later.',
        ],
      },
      {
        heading: 'The affectionate route is fragile',
        paragraphs: [
          'The warmer Silas route seems to depend on several small reassuring choices. Give Silas farm work, avoid escalating the pier scene, choose the warm tree answer, reassure him around the relationship-history question, choose the gentle dream follow-up, initiate the later kiss, keep the morning playful, and stay after the final nightmare setup.',
          'If that sounds like a lot, it is. Do not test it from memory. Write each choice down as you go and keep a save before the chain begins.',
        ],
      },
      {
        heading: 'The confrontation route is a separate clean-up path',
        paragraphs: [
          'The weapon and memory route is where many darker endings split. Keep it separate from the affection chain. If you are testing fear, hesitation, violence, or legal aftermath branches, do not overwrite your warm-route save.',
          'This page avoids quoting the VN script directly, but the practical rule is simple: create a save before every answer that changes whether the protagonist resists, freezes, reassures, or runs.',
        ],
      },
      {
        heading: 'When a Silas run fails to unlock anything new',
        paragraphs: [
          'If a Silas test keeps returning to the same ending, compare the earliest route family first. A fear run that became affectionate in the middle is no longer a clean fear test. An affectionate run that escalated at the pier may no longer be testing the warmer chain.',
          'Make one clean save line for each family and resist the temptation to repair the route at the final scene. Late fixes are usually less reliable than returning to the first tone-setting choice.',
        ],
        bullets: [
          'Fear route: keep distance and test the darker outcomes deliberately.',
          'Confrontation route: save before memory and weapon choices.',
          'Escape route: save before path and river/bridge decisions.',
          'Affection route: keep the warm chain consistent from farm work onward.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is there a good Silas ending?',
        answer:
          'There appears to be at least one more peaceful separation-style Silas branch, but it requires a specific warm route chain and should be treated as spoiler-heavy.',
      },
      {
        question: 'Why do small answers matter so much?',
        answer:
          'Visual novels often store relationship flags across scenes. The False Sun seems to use several small tone choices before late outcomes unlock.',
      },
      {
        question: 'Should I mix escape choices with affectionate choices?',
        answer:
          'Not when testing. Keep separate save lines so you can tell which family produced the missing ending.',
      },
    ],
  },
  {
    slug: 'he-let-you-go',
    path: '/he-let-you-go',
    title: 'The False Sun He Let You Go Guide',
    seoTitle: 'The False Sun He Let You Go Guide - Silas Route Ending',
    seoDescription:
      'Reach The False Sun He Let You Go ending with a clean Silas route plan, save points, affection choices, and warnings about mixed route states.',
    summary:
      'A focused Silas ending guide for the calmer separation branch. Use it when the broad Silas route page is too general and you need a cleaner plan for one specific ending.',
    category: 'Route',
    difficulty: 'Spoiler Heavy',
    coverImageUrl: videos.englishAllEndings.thumbnailUrl,
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'user_intent_youtube',
    videoSearchQueries: [
      'The False Sun He Let You Go',
      'The False Sun Silas ending',
      'The False Sun all endings Silas',
    ],
    sourceNotes:
      'Built from current English all-endings chapter structure and Silas route demand. The guide avoids copied script and presents a clean route plan.',
    video: videos.englishAllEndings,
    tags: ['Silas', 'Ending', 'Affection Route'],
    relatedRoutes: [
      '/silas-route',
      '/all-endings',
      '/save-points',
      '/kyle-route',
      '/content-warnings',
    ],
    body: [
      {
        heading: 'What this ending is testing',
        paragraphs: [
          'He Let You Go reads like a Silas ending built around trust, restraint, and the possibility of separation without the darkest route collapse. That means it should not be tested from a save where the protagonist has already pushed the route into panic, direct escape, or hard confrontation.',
          'Use this page for one purpose: keep the Silas route warm enough to reach a calmer branch, while still preserving saves that let you return to darker outcomes later. If you only need the full ending list, start with all endings. If you specifically want this Silas outcome, build the run from a clean warm save.',
        ],
      },
      {
        heading: 'Start from a clean warm Silas save',
        paragraphs: [
          'The safest setup is a save before the route begins asking how much emotional distance you want from Silas. From there, keep the tone consistent. Do not alternate between reassurance and panic just to see every scene in one run. Mixed tone is the easiest way to land in a different ending family.',
          'A clean warm route usually means choosing answers that keep the conversation open, avoiding unnecessary escalation, and letting the story register that the protagonist is not only trying to run or attack. It does not mean ignoring danger. It means testing the branch where Silas can still respond to trust.',
        ],
        bullets: [
          'Save before the first major Silas tone choice.',
          'Save again before the pier or path scene.',
          'Save before the tree or memory answer.',
          'Save before the late dream sequence.',
          'Keep every save, even after unlocking the ending, so you can branch backward.',
        ],
      },
      {
        heading: 'Keep the route from splitting into danger endings',
        paragraphs: [
          'Danger endings often come from fear, hesitation, route escape, or confrontation. Those branches are useful for the gallery, but they are poor starting points for He Let You Go. If the story is already treating the protagonist as trapped in a panic route, return to an earlier save instead of trying to fix the final answer.',
          'The best test is boring on purpose: choose a consistent warm tone, avoid aggressive course changes, and only change one answer after you know the route reaches a Silas ending. If one altered answer produces a darker ending, mark that save as a separate branch and reload the clean warm route.',
        ],
      },
      {
        heading: 'Where this fits in the ending cleanup order',
        paragraphs: [
          'Do not hunt this ending before you have stable saves. First, finish one all-endings pass or at least map the major route families. Second, confirm your farm and Ending 20 saves are preserved. Third, use the Silas route page to separate fear, confrontation, escape, and affection branches. Then use this page to refine the warm branch.',
          'That order matters because Silas endings can look similar when you only remember the final scene. With clean saves, He Let You Go becomes one branch in a route tree instead of a vague hope that the next replay will somehow land differently.',
        ],
      },
      {
        heading: 'When the ending still does not appear',
        paragraphs: [
          'If you keep reaching another Silas ending, do not rewrite every choice at once. Go back to the earliest save where the route tone could have changed and adjust one scene. If you are still stuck, compare whether you accidentally kept an escape choice, a confrontation choice, or a farm-state result from another test.',
          'A good troubleshooting pass has three notes: the save you loaded, the one choice you changed, and the ending you reached. After three attempts, patterns become visible. Without notes, every run feels different even when the same hidden state is repeating.',
        ],
        bullets: [
          'Same dark ending again: move earlier and soften the first tone-setting choice.',
          'Same escape ending again: separate path and road choices from the warm Silas save.',
          'No new gallery slot: confirm you did not overwrite the clean pre-route save.',
          'Different late outcome: keep that save and branch from it later instead of deleting it.',
        ],
      },
      {
        heading: 'Where to go after this ending',
        paragraphs: [
          'After unlocking He Let You Go, move back to the broader all-endings tracker. The next useful checks are the darker Silas confrontation endings, the Kyle or farm aftermath route, and Ending 20 if your gallery is still missing the rare accident branch.',
          'Keep this ending save as a warm Silas baseline. It is one of the best starting points for testing nearby relationship outcomes without rebuilding the whole visual novel.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is He Let You Go a Silas ending?',
        answer:
          'Yes, it is best treated as a Silas route ending focused on a calmer separation-style outcome rather than a farm accident or Kyle aftermath branch.',
      },
      {
        question: 'Can I reach it from a fear route save?',
        answer:
          'That is unlikely to be efficient. Start from an earlier warm Silas save so the route tone stays consistent before the late branch.',
      },
      {
        question: 'Why do I keep getting darker Silas endings?',
        answer:
          'Your route probably split earlier through fear, escape, or confrontation choices. Move to an earlier save and change one branch at a time.',
      },
      {
        question: 'Should I read the all endings page first?',
        answer:
          'Yes if you are missing many slots. Use this page when you already know you are cleaning up a Silas-specific ending.',
      },
    ],
  },
  {
    slug: 'kyle-route',
    path: '/kyle-route',
    title: 'The False Sun Kyle Route Guide',
    seoTitle:
      'The False Sun Kyle Route Guide - Farm, Hospital and Summer Ending',
    seoDescription:
      'Find Kyle-related route outcomes in The False Sun, including farm aftermath, hospital return, and the promise-to-return branch.',
    summary:
      'Kyle is not just background. His route value is in the aftermath branches: farm help, hospital recovery, and a cleaner promise to return next summer.',
    category: 'Route',
    difficulty: 'Intermediate',
    coverImageUrl: localGuideCover('kyle-route'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'community_crosscheck',
    videoSearchQueries: [
      'The False Sun Kyle ending',
      'The False Sun Kyle route',
      'The False Sun hospital ending',
    ],
    sourceNotes:
      'Kyle guide is based on current walkthrough cross-checks and should be updated after direct English replay verification.',
    video: videos.ritsu,
    tags: ['Kyle', 'Farm', 'Aftermath'],
    relatedRoutes: [
      '/play-online',
      '/all-endings',
      '/save-points',
      '/ending-20',
      '/mini-games',
      '/silas-route',
    ],
    body: [
      {
        heading: 'Kyle routes are aftermath routes',
        paragraphs: [
          'Do not look for Kyle like a full dating-sim route with a long separate arc. Current evidence points to Kyle mattering most when the protagonist cannot continue the same farm path and the story needs a grounded aftermath.',
          'That is why the Kyle page connects strongly to Ending 20 and hospital/farm outcomes.',
        ],
      },
      {
        heading: 'Where Kyle becomes important',
        paragraphs: [
          'Kyle is useful to track around injury, farm support, and promises about returning next summer. If your missing ending sounds calmer than the Silas confrontation branches, check Kyle-adjacent outcomes before replaying the darker route family.',
          'The chicken accident / Ending 20 route appears to lead toward a scenario where Kyle helps the grandfather and the protagonist leaves with a promise to come back.',
        ],
      },
      {
        heading: 'How to test Kyle-adjacent endings',
        paragraphs: [
          'Keep an early farm save, a save before animal/chicken interaction, and a save before any route that changes whether the protagonist can stay on the farm. Run these branches before rebuilding late Silas affection choices.',
          'If the gallery slot you are missing sits near the calmer aftermath endings, try Kyle and farm-state branches first.',
        ],
      },
      {
        heading: 'Do not force Kyle into every missing slot',
        paragraphs: [
          'Kyle is useful, but not every unresolved ending belongs to him. If the missing branch depends on fear, confrontation, or late affection, it is probably a Silas family problem. If it depends on injury, leaving the farm, or a return-next-summer note, Kyle is more likely involved.',
          'Use Kyle as a route filter. When the story tone is calmer and farm aftermath matters, test Kyle. When the story turns toward direct threat or romance escalation, move back to Silas-specific saves.',
        ],
        bullets: [
          'Kyle likely matters: hospital, farm support, return promise, aftermath.',
          'Silas likely matters: fear, weapon, pier, tree, dream, late affection.',
          'Mini-games likely matter: chicken, farm task timing, early state locks.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does Kyle have a full route?',
        answer:
          'Based on current public evidence, Kyle is better treated as an aftermath branch than a full separate route.',
      },
      {
        question: 'Is Kyle tied to Ending 20?',
        answer:
          'The available walkthrough evidence suggests Kyle is mentioned in the Ending 20 aftermath, so yes, this is one of the main places to check.',
      },
      {
        question: 'Should I replay Silas choices to find Kyle endings?',
        answer:
          'Not first. Start with farm state, accident, and aftermath branches before changing late Silas route choices.',
      },
    ],
  },
  {
    slug: 'mini-games',
    path: '/mini-games',
    title: 'The False Sun Mini-Games Guide',
    seoTitle:
      'The False Sun Mini-Games Guide - Farm Tasks, Chicken and QR Code',
    seoDescription:
      'The False Sun mini-games guide covering farm task saves, chicken retry logic, QR-code curiosity, and why mod or APK shortcuts are not worth using.',
    summary:
      'The mini-games matter because they can affect route cleanup and Ending 20 attempts. Treat farm tasks as save points, not filler.',
    category: 'Mini-Games',
    difficulty: 'Beginner',
    coverImageUrl: localGuideCover('mini-games'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'manual_data',
    videoSearchQueries: [
      'The False Sun mini games',
      'The False Sun chicken ending',
      'The False Sun farm tasks',
    ],
    sourceNotes:
      'Manual-data page built from official platform info, itch player comments requesting mini-game help, and ending-route cross-checks. No reliable dedicated mini-game video was selected.',
    tags: ['Mini-Games', 'Farm', 'Chicken'],
    relatedRoutes: [
      '/play-online',
      '/ending-20',
      '/save-points',
      '/all-endings',
      '/download',
      '/content-warnings',
    ],
    body: [
      {
        heading: 'Farm tasks are route state',
        paragraphs: [
          'The farm sections are not just pacing. They create useful save points and may affect route state. Before you rush through animal or chore interactions, make a save and name it clearly.',
          'This is especially important if you are hunting Ending 20, because the current best clue points toward the chicken/farm interaction rather than a late dialogue answer.',
        ],
      },
      {
        heading: 'Do not chase skip mods',
        paragraphs: [
          'Some players want to skip the mini-games, which is understandable when repeating routes. This site will not recommend modified clients, unsafe APKs, or script workarounds.',
          'The safer approach is save discipline: keep a save before the mini-game, test the branch, and reload only from the closest relevant point.',
        ],
      },
      {
        heading: 'Chicken retries for Ending 20',
        paragraphs: [
          'If you are only missing the chicken accident branch, turn the farm section into a retry loop. Do the same interaction multiple times before moving earlier in the story. If the result never changes, your save may be too late or the route state may already be locked.',
          'Write down attempt counts. A rare branch feels less maddening when you know you tested a real sample instead of vaguely trying "a bunch".',
        ],
      },
      {
        heading: 'Farm-task save map',
        paragraphs: [
          'Before a mini-game starts, save in a slot that names the task. After a successful result, save in a different slot. That gives you a clean before-and-after pair instead of one overwritten file that may already be locked.',
          'For ending cleanup, the most useful mini-game saves are before the first farm work, before animal interaction, before path movement, and before any timed or puzzle-like sequence that changes the next scene.',
        ],
        bullets: [
          'Before farm task: use this to test early state.',
          'Before chicken interaction: use this for Ending 20 attempts.',
          'Before path movement: use this for escape or navigation branches.',
          'After success: keep it separate so you can return without redoing the task.',
        ],
      },
      {
        heading: 'QR code and curiosity interactions',
        paragraphs: [
          'Players have commented on the QR-code joke and other curiosity interactions. Treat those as flavor unless a repeatable ending link is confirmed. Do not confuse a joke interaction with a mandatory ending path without evidence.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can I skip The False Sun mini-games?',
        answer:
          'There is no official skip flow confirmed on this site. Use saves and replays instead of modified clients or unsafe downloads.',
      },
      {
        question: 'Do mini-games affect endings?',
        answer:
          'At least one rare ending appears tied to a farm/chicken interaction, so mini-games should be treated as route-relevant until verified otherwise.',
      },
      {
        question: 'Should I scan the QR code?',
        answer:
          'Only scan codes if you are comfortable opening external links. It is not currently treated as required for the main ending tracker.',
      },
    ],
  },
  {
    slug: 'download',
    path: '/download',
    title: 'The False Sun Download Guide',
    seoTitle: 'The False Sun Download - Official itch.io, Android, Mac and PC',
    seoDescription:
      'Download The False Sun safely from the official itch.io page and understand Android, macOS, Windows, Linux, iOS, and APK risks.',
    summary:
      'Use the official itch.io page for The False Sun downloads. The site tracks platform availability and avoids APK mirror advice.',
    category: 'Download',
    difficulty: 'Beginner',
    coverImageUrl: localGuideCover('download'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'The False Sun download',
      'The False Sun Android',
      'The False Sun Mac not working',
    ],
    sourceNotes:
      'Official-only page. The itch.io page checked on 2026-06-10 listed Android, Windows/Linux, and macOS files; no YouTube video is used for download claims.',
    tags: ['Download', 'Android', 'Mac'],
    relatedRoutes: [
      '/play-online',
      '/itch-io',
      '/content-warnings',
      '/all-endings',
      '/mini-games',
    ],
    body: [
      {
        heading: 'Official download path',
        paragraphs: [
          `Download The False Sun from the official itch.io page by Oniray: ${siteFacts.officialItchUrl}. The page listed Android, Windows/Linux, and macOS builds when checked on 2026-06-10.`,
          'Use the creator page as the source of truth. A third-party mirror can be outdated, unsafe, or bundled with files that do not belong to the game.',
        ],
      },
      {
        heading: 'Which file should you choose?',
        paragraphs: [
          'The itch.io download flow can show multiple files. Choose Android for an Android phone or emulator, Windows/Linux for a PC build, and macOS for Mac. If the file names or sizes change, trust the official itch.io page over any guide snapshot.',
          'If you only want to check a route quickly, the browser play page can be easier than downloading a large build. If you care about local saves or performance, the official downloadable build is usually the safer long-run option.',
        ],
        bullets: [
          'Android: use the official Android file, not a mirror APK.',
          'Windows/Linux: use the combined desktop build from itch.io.',
          'macOS: use the Mac build and expect normal indie-app security prompts.',
          'Browser: use play online for quick route checks before committing to a download.',
        ],
      },
      {
        heading: 'Android, Mac, Windows, and Linux',
        paragraphs: [
          'The official page lists an Android build and desktop builds for Windows/Linux and macOS. If a platform fails to open, check the itch page comments and update date before assuming your device is unsupported.',
          'On macOS, blocked app warnings can happen with indie downloads. Only adjust security settings if you are sure the file came from the official itch page.',
        ],
      },
      {
        heading: 'iOS and APK warnings',
        paragraphs: [
          'The official page did not list an iOS build at the time of this check. Avoid pages that promise an iPhone version, mod menu, or unofficial APK unless the creator links to them directly.',
          'APK mirrors are not a shortcut for a visual novel. They can break saves, include old builds, or add security risk to a game that already has an official Android file.',
        ],
      },
      {
        heading: 'Mac launch trouble',
        paragraphs: [
          'Some itch.io players report Mac launch friction, which is common for unsigned indie downloads. Start with the official file, unzip it cleanly, keep it in a normal folder such as Applications or Downloads, and check the creator comments before using terminal commands from strangers.',
          'Avoid broad permission commands that you do not understand. If a workaround tells you to open every file permission on a folder, treat it as a last resort and prefer official creator guidance first.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where can I download The False Sun?',
        answer:
          'Use Oniray’s official itch.io page for downloadable builds. This site also offers a browser play page.',
      },
      {
        question: 'Is The False Sun on Android?',
        answer:
          'Yes, the official itch.io page listed an Android build when checked on 2026-06-10.',
      },
      {
        question: 'Is there an iOS version?',
        answer:
          'The official page did not list iOS at the time of this check. Avoid unofficial iOS or APK claims unless the creator confirms them.',
      },
    ],
  },
  {
    slug: 'itch-io',
    path: '/itch-io',
    title: 'The False Sun itch.io Page Guide',
    seoTitle: 'The False Sun itch.io - Official Page, Downloads and Files',
    seoDescription:
      'Find the official The False Sun itch.io page by Oniray, included Android, Windows/Linux and Mac files, platform notes, comments, and safe download advice.',
    summary:
      'Use this page when you are trying to reach the real The False Sun itch.io listing, confirm files, or avoid unsafe mirrors before opening the walkthrough.',
    category: 'Download',
    difficulty: 'Beginner',
    coverImageUrl: localGuideCover('download'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'The False Sun itch io',
      'itch io The False Sun',
      'Oniray The False Sun itch.io',
    ],
    sourceNotes:
      'Official-only bridge page built for itch.io search intent. Claims should stay limited to the official listing and visible download flow.',
    tags: ['itch.io', 'Official', 'Files'],
    relatedRoutes: [
      '/download',
      '/play-online',
      '/all-endings',
      '/content-warnings',
    ],
    body: [
      {
        heading: 'Use Oniray’s official listing',
        paragraphs: [
          `The official listing for The False Sun is Oniray's itch.io page: ${siteFacts.officialItchUrl}. Use that page for the creator name, release status, content warnings, and downloadable files.`,
          'This guide is only a bridge to help you recognize the correct listing and choose the next page. It does not mirror the game, host files, or replace itch.io.',
        ],
      },
      {
        heading: 'Included files on the official download flow',
        paragraphs: [
          'The itch.io download flow currently shows The False Sun 1.0 files for Android, Windows/Linux, and macOS. File names and sizes can change after creator updates, so confirm the live itch.io page before downloading.',
          'If you see a page promising a modded APK, cracked build, iOS port, or faster mirror, treat it as unsafe unless Oniray links to it directly.',
        ],
        bullets: [
          'The False Sun 1.0 Android was listed as a large Android file.',
          'The False Sun 1.0 Windows/Linux was listed as the desktop PC option.',
          'The False Sun 1.0 mac was listed as the Mac option.',
          'The creator accepts optional support, but the game page also exposes the standard itch.io download flow.',
        ],
      },
      {
        heading: 'When to use the download guide instead',
        paragraphs: [
          'Use this itch.io page guide when you need the official listing. Use the download guide when you need platform help, APK warnings, browser-play alternatives, or Mac launch notes.',
          'For route spoilers, skip both platform pages and start with all endings, Ending 20, Silas route, or Kyle route.',
        ],
      },
      {
        heading: 'Comments can help, but they are not official patch notes',
        paragraphs: [
          'itch.io comments are useful for seeing what other players are stuck on, including ending counts, platform questions, and Mac issues. They are not the same as an official changelog.',
          'When comments disagree, trust the creator listing first and use walkthrough pages only for route planning.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the official The False Sun itch.io page?',
        answer:
          'The official page is Oniray’s listing at oniray.itch.io/the-false-sun.',
      },
      {
        question: 'Is this site the official itch.io page?',
        answer:
          'No. This is an unofficial fan guide that links to the official creator page and helps with walkthrough decisions.',
      },
      {
        question: 'Should I use a third-party The False Sun APK?',
        answer:
          'No. Use the official Android file on itch.io and avoid APK mirrors, mod menus, or reuploaded builds.',
      },
    ],
  },
  {
    slug: 'content-warnings',
    path: '/content-warnings',
    title: 'The False Sun Content Warnings',
    seoTitle:
      'The False Sun Content Warnings - Mature Visual Novel Safety Notes',
    seoDescription:
      'Read spoiler-light content warnings for The False Sun, including mature themes, violence, disturbing scenes, flashing effects, and sound warnings.',
    summary:
      'The False Sun is intended for mature audiences. Read this page before using the walkthrough if you need warning context without full ending spoilers.',
    category: 'Safety',
    difficulty: 'Beginner',
    coverImageUrl: localGuideCover('content-warnings'),
    publishedAt: checkedAt,
    updatedAt: checkedAt,
    sourceStrategy: 'official',
    videoSearchQueries: [
      'The False Sun content warnings',
      'The False Sun mature audiences',
    ],
    sourceNotes:
      'Official-only page. Warnings are based on the official itch.io mature-audience notice and tag list rather than creator videos or community retellings.',
    tags: ['Warnings', 'Mature', 'Spoiler Light'],
    relatedRoutes: [
      '/play-online',
      '/download',
      '/all-endings',
      '/silas-route',
    ],
    body: [
      {
        heading: 'Spoiler-light warning summary',
        paragraphs: [
          'The official page presents The False Sun as a mature-audience visual novel and warns for physical and emotional violence, disturbing themes, flashing visual effects, and sudden or loud sound effects.',
          'This walkthrough site keeps explicit adult details out of public guide text. Route pages still contain major story spoilers, violence outcomes, and ending implications.',
        ],
      },
      {
        heading: 'Before reading ending pages',
        paragraphs: [
          'The all endings, Silas route, and Ending 20 pages are spoiler-heavy. If you only need a download or platform answer, stay on the download page first.',
          'If you are sensitive to flashing visuals or sudden audio, check the game settings and play in a comfortable environment before doing repeated ending runs.',
        ],
      },
      {
        heading: 'What this site will not publish',
        paragraphs: [
          'This site will not publish explicit adult scene walkthroughs, copied game script, unsafe APK instructions, or creator impersonation. The goal is route clarity, not replacing the game.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is The False Sun for mature audiences?',
        answer:
          'Yes. The official itch.io page marks the game as intended for mature audiences.',
      },
      {
        question: 'Are the walkthrough pages spoiler-free?',
        answer:
          'No. Ending and route pages are spoiler-heavy by nature. This content warnings page is the safer spoiler-light entry point.',
      },
      {
        question: 'Does this site include explicit adult content?',
        answer:
          'No. It focuses on route logic, endings, download safety, and content warnings without explicit adult scene descriptions.',
      },
    ],
  },
];

export const featuredGuides = guides.slice(0, 6);

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export function getGuideByPath(path: string) {
  return guides.find((guide) => guide.path === path);
}
