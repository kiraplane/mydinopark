import { CHECKED_AT, officialGameFacts, siteDescription } from './sources';
import type { Guide, GuideCategory, GuideVideo } from './types';

const youtubeThumbnail = (id: string) =>
  `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

const videos = {
  beginner: {
    id: 'ewX7kzNTmNk',
    title: 'HOW TO PLAY & NEW CODES! Update 1 | My Dino Park! Roblox',
    channel: 'Roblox guide creator',
    url: 'https://www.youtube.com/watch?v=ewX7kzNTmNk',
    thumbnailUrl: youtubeThumbnail('ewX7kzNTmNk'),
    publishedAt: '2026-07-03',
    checkedAt: CHECKED_AT,
  },
  codes: {
    id: 'igijSlN43OE',
    title: 'INFINITE Dinosaurs In My Dino Park!',
    channel: 'Roblox codes creator',
    url: 'https://www.youtube.com/watch?v=igijSlN43OE',
    thumbnailUrl: youtubeThumbnail('igijSlN43OE'),
    publishedAt: '2026-07-05',
    checkedAt: CHECKED_AT,
  },
  update2: {
    id: 'MouZAc-pI2A',
    title: 'Brand New My Dino Park Codes for 2026',
    channel: 'Roblox codes creator',
    url: 'https://www.youtube.com/watch?v=MouZAc-pI2A',
    thumbnailUrl: youtubeThumbnail('MouZAc-pI2A'),
    publishedAt: '2026-07-05',
    checkedAt: CHECKED_AT,
  },
} satisfies Record<string, GuideVideo>;

const localCover = '/mydinopark/hero.png';
const videoCover = (video: GuideVideo) => video.thumbnailUrl;

export { siteDescription };

export const guideCategoryIntro: Record<GuideCategory, string> = {
  Beginner:
    'Start the Roblox tycoon loop: redeem codes, buy your first eggs, hatch dinosaurs, and reinvest visitor Cash.',
  Codes:
    'Use current My Dino Park codes, resolve spelling conflicts, and spend Cash, Teeth, or eggs deliberately.',
  Eggs: 'Plan egg purchases around hatch value, placement space, and the point where better tiers become repeatable.',
  Economy:
    'Turn visitors, Cash rewards, and offline sessions into a stable park growth route.',
  Dinosaurs:
    'Compare dinosaurs by verified role and income impact without copying untested rankings.',
  Upgrades:
    'Spend on land, pens, and park upgrades only when they increase dinosaur capacity or income recovery.',
  Safety:
    'Keep this Roblox game separate from Crazy Dino Park, Dinosaur Park Tycoon, Be Dino, APKs, and scripts.',
  Updates:
    'Track the current Update 4 signal, codes, and Roblox API changes without inventing patch notes or fake stats.',
};

export const relatedRouteLabels: Record<string, string> = {
  '/': 'My Dino Park Wiki',
  '/codes': 'My Dino Park Codes',
  '/guides': 'All My Dino Park Guides',
  '/eggs': 'Eggs and Hatching Hub',
  '/dinosaurs': 'Dinosaurs Watch Hub',
  '/money': 'Money and Visitor Income',
  '/upgrades': 'Park Upgrades Hub',
  '/tier-list': 'Spending Tier List',
  '/download': 'Official Roblox Page',
  '/discord': 'Discord and Group Links',
  '/updates': 'Update 4 Tracker',
  '/guides/beginner-guide': 'Beginner Guide',
  '/guides/codes-redeem-guide': 'Codes Redeem Guide',
  '/guides/eggs-and-hatching-guide': 'Eggs and Hatching Guide',
  '/guides/fast-money-guide': 'Fast Money Guide',
  '/guides/how-to-get-teeth': 'How to Get Teeth',
  '/guides/park-upgrades-guide': 'Park Upgrades Guide',
  '/guides/best-dinosaurs-watch-guide': 'Best Dinosaurs Watch',
  '/guides/update-2-codes-guide': 'Update 2 Codes Guide',
  '/guides/wrong-game-safety-guide': 'Wrong-Game Safety',
};

export const guides: Guide[] = [
  {
    slug: 'beginner-guide',
    title: 'My Dino Park Beginner Guide',
    seoTitle: 'My Dino Park Beginner Guide - Eggs, Codes and First Upgrades',
    seoDescription:
      'Start My Dino Park on Roblox with the right code order, first egg purchase, hatching route, visitor Cash loop, and early upgrade priorities.',
    summary:
      'A first-session route for My Dino Park players: claim codes, buy and hatch eggs, place dinosaurs, reinvest visitor Cash, and avoid spending starter rewards on low-impact decoration.',
    category: 'Beginner',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.beginner),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Built from the official Roblox description, Roblox universe API facts, July 2026 code sources, and current YouTube beginner guide results.',
    video: videos.beginner,
    videoSearchQueries: [
      'My Dino Park Roblox beginner guide',
      'My Dino Park how to play',
      'My Dino Park Update 2 guide',
    ],
    tags: ['Roblox', 'First Session', 'Eggs'],
    relatedRoutes: [
      '/codes',
      '/eggs',
      '/money',
      '/upgrades',
      '/guides/fast-money-guide',
    ],
    body: [
      {
        heading: 'Start with the official loop, not random spending',
        paragraphs: [
          'My Dino Park is a Roblox simulation tycoon by Dino Community. The official page gives the whole loop in plain language: build your park, buy dino eggs, hatch dinosaurs, attract visitors, upgrade the park, and become the top dino park. That makes the first hour much simpler than it looks. You are not trying to buy every item you see. You are trying to turn starter Cash into more hatched dinosaurs and enough visitor income to recover each purchase.',
          'The biggest beginner mistake is treating codes like free decoration money. Codes are strongest before your first real egg and upgrade push. Claim the current rewards, decide what you need next, then spend in a tight route: egg, hatch, place, earn, upgrade, repeat.',
        ],
        bullets: [
          'Open the correct Roblox game page by Dino Community.',
          'Redeem active codes before buying your first serious egg.',
          'Buy an affordable egg and place the hatched dinosaur where visitors can count it.',
          'Use new income to expand capacity before cosmetic spending.',
        ],
      },
      {
        heading: 'Redeem codes before the first egg decision',
        paragraphs: [
          'Current July 2026 sources report five active or reported active My Dino Park codes. WELCOME and THX4PLAYING give starter Cash, while Update 2 sources report UPDATE2, BESTDINOGAME, and DINOSLOVESU for larger Cash, Teeth, and a Frozen Egg reward. Because code pages can disagree, copy the exact spelling from the codes page and keep THXFORPLAYING as a watch variant only.',
          'After redeeming, do not empty every reward into the first button that appears. If you receive a Frozen Egg, place and hatch it before judging your next spend. If you receive Teeth, wait until you understand what the game is asking for. If you receive Cash, use it to build the first repeatable visitor income loop rather than buying a one-off item that does not raise income.',
        ],
      },
      {
        heading: 'Hatch for income coverage first',
        paragraphs: [
          'A dinosaur that is hatched and placed can help the park attract visitors. An egg sitting in your plan does nothing until it becomes part of the park. Early players should favor a steady hatch chain over one expensive purchase that leaves the park empty. When you can afford several lower eggs but only one higher egg, ask which choice gets more dinosaurs working sooner.',
          'That does not mean low-tier eggs stay best forever. It means you move up when your visitor income can recover from the next tier. A good tier jump is repeatable. A bad jump gives you one exciting hatch and then leaves you waiting with no Cash for upgrades.',
        ],
      },
      {
        heading: 'Upgrade the bottleneck, not the prettiest object',
        paragraphs: [
          'Park upgrades are valuable when they solve a bottleneck. If you have dinosaurs waiting for better placement, capacity and land matter. If you have space but weak income, eggs and hatching matter. If visitors are flowing and Cash recovers quickly, higher egg tiers become easier to justify.',
          'Use this order as your default: active codes, first reliable hatch, enough placement space, income recovery, then better eggs. Decoration and flex choices can wait until the park is already paying for itself. My Dino Park rewards a clean tycoon rhythm more than scattered clicking.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the first thing to do in My Dino Park?',
        answer:
          'Open the official Roblox game, redeem active codes, buy an affordable egg, hatch it, place the dinosaur, and reinvest visitor Cash into more eggs or capacity.',
      },
      {
        question: 'Should I buy the most expensive egg I can afford?',
        answer:
          'Only when your park can recover from the cost. Early progress is usually better when eggs, hatching, and placement stay repeatable.',
      },
      {
        question: 'Is this the same game as Crazy Dino Park?',
        answer:
          'No. This wiki covers My Dino Park! on Roblox by Dino Community, not the separate Crazy Dino Park mobile game.',
      },
    ],
  },
  {
    slug: 'codes-redeem-guide',
    title: 'My Dino Park Codes Redeem Guide',
    seoTitle: 'My Dino Park Codes - How to Redeem UPDATE2 and Rewards',
    seoDescription:
      'Redeem My Dino Park codes in Roblox, fix failed entries, handle THX4PLAYING spelling conflicts, and spend Cash, Teeth, and Frozen Egg rewards well.',
    summary:
      'Use My Dino Park codes safely through the in-game Store, understand the Update 2 reward list, and avoid wasting Cash or Teeth after redemption.',
    category: 'Codes',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.codes),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Cross-checked against PCGamesN, Destructoid, Pro Game Guides, Roblox Den, Reddit reposts, and current YouTube code results. Codes are source-checked, not game-tested by this site.',
    video: videos.codes,
    videoSearchQueries: [
      'My Dino Park codes',
      'My Dino Park Roblox codes',
      'My Dino Park Update 2 codes',
    ],
    tags: ['Codes', 'Update 2', 'Rewards'],
    relatedRoutes: [
      '/codes',
      '/guides/beginner-guide',
      '/guides/update-2-codes-guide',
      '/guides/wrong-game-safety-guide',
    ],
    body: [
      {
        heading: 'Redeem inside Store, then spend with a target',
        paragraphs: [
          'Current code sources describe the same redemption path: launch My Dino Park on Roblox, open the Store button on the left side of the screen, scroll to the redeem gift code area, paste a code, and submit it. Some sources say to hit Enter, while others mention a Redeem button. The safe instruction is to follow the live in-game prompt after pasting the exact code.',
          'The reward is only the first half of the decision. Cash is best when it becomes eggs, hatching, placement, or capacity that creates more visitor income. Teeth should be saved until you understand the current Update 2 sinks. A Frozen Egg should be hatched and evaluated before you spend the Cash reward around it.',
        ],
      },
      {
        heading: 'Use the active list in priority order',
        paragraphs: [
          'For a new account, WELCOME and THX4PLAYING are easy starter boosts. Update 2 codes are larger and should be used when you can immediately turn the reward into progress. UPDATE2 is reported as 20,000 Cash plus 200 Teeth. DINOSLOVESU is reported as a Frozen Egg plus 10,000 Cash. BESTDINOGAME is reported as 300 Teeth.',
          'If you are brand new, redeem all working codes, then buy and hatch before chasing expensive upgrades. If you already have a park, check your bottleneck first. A Cash reward can solve an egg tier wall, a land/capacity wall, or a park upgrade wall, but it should not be split across random small purchases.',
        ],
      },
      {
        heading: 'Save Teeth until the sink is obvious',
        paragraphs: [
          'Teeth are the reward most likely to be wasted by a new player because they look like bonus currency. Treat them differently from Cash. Cash should usually become eggs, hatching, placement, or park upgrades right away. Teeth should wait until the game shows a clear Teeth sink that changes your dinosaur lineup, upgrade path, or Update 2 progress.',
          'If a code gives Teeth and Cash together, spend the Cash on the repeatable park loop first, then decide whether the Teeth purchase supports that loop. Do not spend Teeth only because the balance is new.',
        ],
        bullets: [
          'Use Cash to fix eggs, placement, income, or capacity.',
          'Use Teeth only when the purchase has a visible long-term payoff.',
          'Do not trade Teeth into a cosmetic or side route before the park earns reliably.',
          'If a Teeth sink is unclear, save it and keep the egg loop moving.',
        ],
      },
      {
        heading: 'Handle failed codes without risky shortcuts',
        paragraphs: [
          'A failed code does not prove the whole list is fake. My Dino Park code sources currently disagree on one spelling: most list THX4PLAYING, while Pro Game Guides lists THXFORPLAYING. That variant is tracked as a watch item. Copy the code exactly, confirm you are in the Roblox experience by Dino Community, and try a fresh server if the panel appears stuck.',
          'Never use an external reward page that asks for a Roblox password. A normal My Dino Park code is redeemed inside Roblox. If a site promises unlimited Teeth, free paid items, or a script executor, treat it as unsafe and leave.',
        ],
        bullets: [
          'Check casing and numbers in THX4PLAYING.',
          'Confirm the game title is [UPD 2] My Dino Park!',
          'Use the Store redeem box, not a third-party login form.',
          'Treat THXFORPLAYING as a watch variant until verified.',
        ],
      },
      {
        heading: 'Spend rewards by bottleneck',
        paragraphs: [
          'Codes should accelerate the loop you were already trying to build. If your park has too few dinosaurs, spend toward eggs and hatching. If you have dinosaurs but no display room, spend toward capacity. If you can hatch and place reliably but income is slow, upgrade the part of the park that improves visitor Cash recovery.',
          'This bottleneck approach is stronger than a generic "spend on the best thing" answer because My Dino Park accounts can be stuck in different places. One player needs a better egg. Another needs room for the dinosaurs they already hatched. A third needs to stop buying decor until the visitor loop catches up.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where do I redeem My Dino Park codes?',
        answer:
          'Open the Store in the My Dino Park Roblox experience, scroll to the gift code or redeem section, paste the code, and submit it through the in-game prompt.',
      },
      {
        question: 'Why is THX4PLAYING marked medium confidence?',
        answer:
          'Most sources list THX4PLAYING, but one current source lists THXFORPLAYING. The site keeps the conflict visible until the spelling is clearer.',
      },
      {
        question: 'Are My Dino Park codes game-tested here?',
        answer:
          'No. Codes are source-checked from current public sources, but this site has not redeemed them inside Roblox.',
      },
    ],
  },
  {
    slug: 'eggs-and-hatching-guide',
    title: 'My Dino Park Eggs and Hatching Guide',
    seoTitle: 'My Dino Park Eggs Guide - Hatching, Frozen Egg and ROI',
    seoDescription:
      'Plan My Dino Park egg purchases, Frozen Egg rewards, hatching order, placement timing, and when to move into better egg tiers on Roblox.',
    summary:
      'A practical egg route for My Dino Park: hatch what can work now, move tiers when recovery is repeatable, and avoid treating unverified egg tables as facts.',
    category: 'Eggs',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on the official Roblox egg and hatching loop plus current code rewards mentioning a Frozen Egg. Exact egg-tier prices are not published here until verified in-game.',
    videoSearchQueries: [
      'My Dino Park eggs guide',
      'My Dino Park Frozen Egg',
      'My Dino Park hatching dinosaurs',
    ],
    tags: ['Eggs', 'Hatching', 'Frozen Egg'],
    relatedRoutes: [
      '/eggs',
      '/dinosaurs',
      '/money',
      '/guides/fast-money-guide',
      '/guides/best-dinosaurs-watch-guide',
    ],
    body: [
      {
        heading: 'An egg is only progress after it joins the park',
        paragraphs: [
          'My Dino Park search demand already includes eggs, hatching, and ROI-style questions, but public data is still thin. The safest launch advice is to focus on the visible loop that the official Roblox page confirms. Buy dino eggs, hatch dinosaurs, and place them so they help attract visitors. If a purchase does not become a working dinosaur or unlock room for one, it is not solving the core loop yet.',
          'Players often ask for the best egg. The better early question is "which egg can I hatch, place, and recover from?" A higher tier egg may be stronger, but if it empties your Cash and leaves you waiting too long, the park can stall. Repeatable hatching beats one expensive gamble for most new accounts.',
        ],
      },
      {
        heading: 'Use Frozen Egg as a park test, not a trophy',
        paragraphs: [
          'Current Update 2 code sources report DINOSLOVESU as a Frozen Egg plus Cash reward. If that reward works in your server, hatch it and judge what it does for your current park. Do not leave it as a trophy while your visitor income stays low. The value of a special egg is the dinosaur and income route it creates.',
          'If the Frozen Egg gives a dinosaur that outperforms your current setup, build around it for a while. If it gives something that is interesting but not a clear income upgrade, keep your regular egg route moving and return to the special dinosaur later when your park has more space and Cash.',
        ],
      },
      {
        heading: 'Move egg tiers when Cash recovery is fast',
        paragraphs: [
          'Tier movement should be based on recovery speed. If buying the next egg tier still leaves enough Cash to hatch, place, and support the result, it is probably time to move up. If one egg purchase freezes all other progress, strengthen visitor income first.',
          'A useful rule is to watch what happens after three purchases. If most eggs at your current tier no longer improve the park, save for a better tier. If the new tier is still too expensive to repeat, upgrade capacity or income before forcing it. This keeps your route flexible without needing an exact public egg table.',
        ],
        bullets: [
          'Stay lower if each purchase still improves your placed dinosaur lineup.',
          'Move up when lower eggs stop changing visitor income.',
          'Pause when a higher egg leaves no Cash for placement or upgrades.',
          'Recheck after code rewards because Cash spikes can change the decision.',
        ],
      },
      {
        heading: 'Do not copy unverified egg prices blindly',
        paragraphs: [
          'Some competitor pages publish exact egg prices, species counts, and income numbers. Those can be useful leads, but they are not official facts unless verified in-game or by reliable data. This wiki avoids presenting a full egg calculator until the values can be checked cleanly.',
          'For now, use eggs as a decision page rather than a spreadsheet. The route is still useful: hatch the eggs you can support, keep dinosaurs working, expand when you hit capacity, and move to better tiers only when your park can recover quickly.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best egg in My Dino Park?',
        answer:
          'The best egg is the highest tier your park can hatch, place, and recover from repeatedly. Exact egg rankings need in-game verification.',
      },
      {
        question: 'What should I do with a Frozen Egg?',
        answer:
          'Hatch it, place the result if it improves your park, then decide whether to build around that dinosaur or keep progressing through normal eggs.',
      },
      {
        question: 'Should I wait for a calculator before buying eggs?',
        answer:
          'No. Use the core rule first: buy eggs that become working dinosaurs without freezing your next upgrade or placement decision.',
      },
    ],
  },
  {
    slug: 'fast-money-guide',
    title: 'My Dino Park Fast Money Guide',
    seoTitle: 'My Dino Park Money Guide - Visitor Cash and Reinvest Order',
    seoDescription:
      'Earn money faster in My Dino Park by using codes, hatching income dinosaurs, avoiding decor traps, expanding capacity, and timing upgrades.',
    summary:
      'A Cash route for My Dino Park players who want faster visitor income without falling into random spending or unverified tier-list claims.',
    category: 'Economy',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Based on official visitor and upgrade wording, Roblox API status, code reward sources, and competitor-route demand around money guides.',
    videoSearchQueries: [
      'My Dino Park money guide',
      'My Dino Park fast cash',
      'My Dino Park visitor income',
    ],
    tags: ['Money', 'Visitors', 'Cash'],
    relatedRoutes: [
      '/money',
      '/codes',
      '/eggs',
      '/upgrades',
      '/guides/park-upgrades-guide',
    ],
    body: [
      {
        heading: 'Money comes from dinosaurs that visitors can value',
        paragraphs: [
          'The official My Dino Park page names visitors as the key income source. That means your money route is not just "have more Cash." It is "turn Cash into hatched and placed dinosaurs that bring more visitors, then use that visitor income to buy the next improvement." When you keep that loop visible, spending choices become easier.',
          'Codes can start the engine, but they do not replace it. A code reward that becomes better hatching or capacity keeps paying. A code reward that disappears into decoration before the park has steady income slows the account down.',
        ],
      },
      {
        heading: 'Use a four-step reinvest order',
        paragraphs: [
          'The safest early reinvest order is codes, eggs, placement, then upgrades. Redeem codes first because the rewards are temporary opportunities. Buy eggs second because the game is built around hatching dinosaurs. Make sure the dinosaurs have useful placement third. Upgrade fourth when the upgrade solves a clear bottleneck.',
          'If your next upgrade increases capacity, it may beat another egg. If your current capacity is empty, eggs beat an upgrade. If you have dinosaurs placed but Cash recovery is slow, compare whether a better egg or an income upgrade gives the next visible jump. This is why a fixed spending list is weaker than a bottleneck check.',
        ],
        bullets: [
          'Cash reward: spend it where it creates repeatable visitor income.',
          'Teeth reward: wait until you know the current Update 2 sink.',
          'Frozen Egg reward: hatch it before judging your next purchase.',
          'Upgrade spend: solve capacity or income recovery, not vanity first.',
        ],
      },
      {
        heading: 'Stop buying when the park cannot recover',
        paragraphs: [
          'Fast money also means knowing when to stop. If you spend all Cash on one egg and then cannot place or upgrade around it, your park may look exciting but behave slowly. If you buy several low-impact items and none of them change visitor income, the same problem appears in a smaller form.',
          'Watch recovery time after purchases. When Cash returns quickly, you can push. When it returns slowly, hold spending until the current dinosaurs and upgrades catch up. The best My Dino Park players will look active, but the real skill is keeping the park ready for the next useful purchase.',
        ],
      },
      {
        heading: 'Use offline breaks as a test of your setup',
        paragraphs: [
          'Some public guide pages mention offline-style income, but the safest claim from official text is that visitors and upgrades are the income route. If you leave the game and return with enough Cash to move forward, your setup is working. If returns feel weak, your last session probably ended with poor placement, too little capacity, or too much spending on low-value items.',
          'Before leaving, make sure the strongest dinosaurs you own are actually helping the park, then set one next goal. A short next-goal note in your head matters: "buy one better egg," "expand one more display slot," or "test the Frozen Egg result." That focus makes the next login faster.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I get money fast in My Dino Park?',
        answer:
          'Redeem codes, hatch eggs into placed dinosaurs, reinvest visitor Cash into capacity or better eggs, and avoid decor until income recovers quickly.',
      },
      {
        question: 'Should I spend all code Cash immediately?',
        answer:
          'Spend it immediately only if the purchase improves eggs, hatching, placement, or a bottleneck upgrade. Otherwise, wait for a clearer goal.',
      },
      {
        question: 'Are exact Cash per minute numbers verified here?',
        answer:
          'No. This guide uses verified mechanics and conservative decision rules until exact in-game income tables are checked.',
      },
    ],
  },
  {
    slug: 'park-upgrades-guide',
    title: 'My Dino Park Upgrades Guide',
    seoTitle: 'My Dino Park Upgrades Guide - Land, Pens and Visitor Growth',
    seoDescription:
      'Choose My Dino Park upgrades by bottleneck: land, pens, visitor income, egg tiers, and when to wait before buying another park improvement.',
    summary:
      'A bottleneck-first upgrade guide for My Dino Park players who want each upgrade to improve hatching capacity, placement space, or visitor Cash.',
    category: 'Upgrades',
    difficulty: 'Intermediate',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'official',
    sourceNotes:
      'The official Roblox description confirms park upgrades as a core goal. Exact upgrade names and prices are deferred until in-game verification.',
    videoSearchQueries: [
      'My Dino Park upgrades',
      'My Dino Park park expansion',
      'My Dino Park tycoon guide',
    ],
    tags: ['Upgrades', 'Land', 'Visitors'],
    relatedRoutes: [
      '/upgrades',
      '/money',
      '/eggs',
      '/guides/eggs-and-hatching-guide',
    ],
    body: [
      {
        heading: 'Upgrade when a bottleneck is visible',
        paragraphs: [
          'My Dino Park tells players to upgrade the park, but that does not mean every upgrade has the same timing. An upgrade is good when it solves the problem blocking your next income jump. If you cannot place more dinosaurs, capacity or land matters. If you have room but no strong dinosaurs, eggs matter. If both are available but Cash returns slowly, the upgrade that improves visitor flow or income recovery becomes more important.',
          'This bottleneck approach protects new players from buying an upgrade just because it looks official. Tycoon games are full of buttons. Your job is to decide which button makes the next egg, hatch, or visitor cycle easier.',
        ],
      },
      {
        heading: 'Capacity upgrades can beat a better egg',
        paragraphs: [
          'A better egg is tempting, especially after a code reward. But if your current dinosaurs are waiting for useful placement, another egg may not solve the real problem. Capacity turns existing dinosaurs into working assets. That can be stronger than gambling on one more hatch.',
          'Use this check before buying a higher egg: can I place and benefit from the result right away? If no, upgrade the park first. If yes, the egg tier may be the correct next purchase.',
        ],
      },
      {
        heading: 'Avoid upgrade chains that empty the account',
        paragraphs: [
          'One upgrade often reveals another. A bigger park may need more dinosaurs. More dinosaurs may need more Cash. More Cash may require better egg tiers. That chain is good when your income keeps recovering. It becomes bad when each upgrade leaves you unable to use the thing it unlocked.',
          'After a large upgrade, pause long enough to fill the new capacity or test the income change. If the park still feels slow, the next purchase should support the new bottleneck, not continue the same upgrade chain blindly.',
        ],
      },
      {
        heading: 'Keep exact prices out until verified',
        paragraphs: [
          'Competitor pages publish upgrade names and prices, but those values are not treated as official here. My Dino Park is a live Roblox game with an Update 2 marker, so prices and reward values can move quickly. This wiki will add upgrade tables when the values are checked in-game or through a reliable dataset.',
          'Until then, the page stays useful by focusing on repeatable decision rules. Solve capacity, solve income recovery, solve egg access, then repeat. That is enough to avoid most early waste even without a full table.',
        ],
      },
    ],
    faq: [
      {
        question: 'What upgrade should I buy first in My Dino Park?',
        answer:
          'Buy the upgrade that solves your current bottleneck. If you lack placement space, upgrade capacity. If space is empty, buy and hatch eggs first.',
      },
      {
        question: 'Are upgrade prices listed here?',
        answer:
          'Not yet. Exact prices are deferred until reliable My Dino Park-specific data is verified.',
      },
      {
        question: 'Can upgrades be worse than eggs?',
        answer:
          'Yes. If an upgrade does not help placement, income recovery, or the next hatch route, an egg or saving Cash may be better.',
      },
    ],
  },
  {
    slug: 'best-dinosaurs-watch-guide',
    title: 'My Dino Park Best Dinosaurs Watch',
    seoTitle:
      'My Dino Park Best Dinosaurs - Tier List Watch and Income Signals',
    seoDescription:
      'Evaluate My Dino Park dinosaurs by income impact, rarity, placement value, upgrade timing, and source confidence while avoiding fake tier lists.',
    summary:
      'A safe alternative to an unverified dinosaur tier list: decide which dinosaurs deserve space by income impact, hatch cost, rarity, and replacement risk.',
    category: 'Dinosaurs',
    difficulty: 'Intermediate',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Tier-list demand exists, but exact dinosaur stats are not published by official sources in this pass. The page stays decision-first until in-game verification.',
    videoSearchQueries: [
      'My Dino Park best dinosaurs',
      'My Dino Park tier list',
      'My Dino Park dinosaur income',
    ],
    tags: ['Tier List Watch', 'Dinosaurs', 'Income'],
    relatedRoutes: [
      '/dinosaurs',
      '/tier-list',
      '/eggs',
      '/guides/eggs-and-hatching-guide',
    ],
    body: [
      {
        heading: 'Best dinosaur means best for your current park',
        paragraphs: [
          'Players search for My Dino Park tier lists because dinosaur choice feels like the heart of the game. The problem is that exact dinosaur income tables are not confirmed by official public data in this pass. Publishing a full S-tier list from another site would look useful but could mislead players after an update.',
          'Use a safer definition first. The best dinosaur is the one that improves your current park enough to justify its egg cost, placement space, and upgrade timing. A rare dinosaur that cannot be supported may be weaker for your account than a less rare dinosaur that immediately improves visitor income.',
        ],
      },
      {
        heading: 'Use four signals before ranking anything',
        paragraphs: [
          'A dinosaur deserves attention when it passes four checks: it improves visitor income, it comes from an egg tier you can repeat, it uses placement space efficiently, and it will not be replaced immediately by the next planned egg tier. Those checks work even when public stat tables are incomplete.',
          'When a dinosaur fails two or more checks, avoid deep investment. Place it if it helps now, but do not treat it as permanent. When a dinosaur passes most checks, build around it until a better hatch or official data changes the decision.',
        ],
        bullets: [
          'Income: does it improve visitor Cash right now?',
          'Cost: can you repeat the egg tier that produced it?',
          'Space: does it deserve the display slot it uses?',
          'Replacement: will your next egg tier make it obsolete quickly?',
        ],
      },
      {
        heading: 'Treat T-Rex and legendary claims carefully',
        paragraphs: [
          'Competitor pages mention T-Rex and legendary dinosaurs with exact income claims. Those claims are plausible route ideas because dinosaur park games naturally reward rarer dinosaurs, but they are not listed here as verified facts until checked in-game. If your own hatch clearly outperforms your current lineup, follow the evidence in your park.',
          'The practical rule is to let a strong dinosaur prove itself through recovery speed. If Cash returns faster after placing it, it is worth building around. If it looks impressive but does not change your next purchase timing, it may be more of a collection piece than a progression carry.',
        ],
      },
      {
        heading: 'When a full tier list becomes useful',
        paragraphs: [
          'A real My Dino Park tier list needs dinosaur names, egg sources, hatch chances or rarity, income impact, placement needs, and update date. It also needs to separate Roblox My Dino Park from Crazy Dino Park, Dinosaur Park Tycoon, and Be Dino results. Without that boundary, search engines mix data from unrelated games.',
          'This page will stay a watch guide until those facts are reliable. That is less flashy than a giant table, but it keeps the wiki honest and still helps players make better decisions today.',
        ],
      },
    ],
    faq: [
      {
        question: 'Does My Dino Park Wiki have a full dinosaur tier list?',
        answer:
          'Not yet. This page tracks tier-list intent and decision rules until dinosaur stats are verified for the exact Roblox game.',
      },
      {
        question: 'What makes a dinosaur good?',
        answer:
          'Income impact, egg cost, placement value, rarity, and replacement timing are the safest early signals.',
      },
      {
        question: 'Should I copy tier lists from other dinosaur games?',
        answer:
          'No. Crazy Dino Park, Dinosaur Park Tycoon, Be Dino, and other Roblox dinosaur games have different systems.',
      },
    ],
  },
  {
    slug: 'how-to-get-teeth',
    title: 'How to Get Teeth in My Dino Park',
    seoTitle: 'How to Get Teeth in My Dino Park - Codes and Update 2 Uses',
    seoDescription:
      'Learn how to get Teeth in My Dino Park through Update 2 codes, reward planning, egg routes, and safe spending decisions without wasting premium currency.',
    summary:
      'Teeth are the reward to save until the sink is clear: claim verified codes, check the Update 2 menu, then spend only when the purchase changes eggs, dinosaurs, or upgrades.',
    category: 'Economy',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.update2),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'community_crosscheck',
    sourceNotes:
      'Built from July 2026 Update 2 code sources that report Teeth rewards, the official Roblox Update 2 title, and current My Dino Park money/egg route coverage.',
    video: videos.update2,
    videoSearchQueries: [
      'My Dino Park how to get teeth',
      'My Dino Park teeth',
      'My Dino Park Update 2 teeth',
    ],
    tags: ['Teeth', 'Update 2', 'Rewards'],
    relatedRoutes: [
      '/codes',
      '/guides/codes-redeem-guide',
      '/guides/update-2-codes-guide',
      '/eggs',
      '/money',
    ],
    body: [
      {
        heading: 'Start with verified code rewards',
        paragraphs: [
          'The clearest public Teeth source right now is the Update 2 code cluster. Current sources report UPDATE2 and BESTDINOGAME as Teeth-related rewards, while DINOSLOVESU points players toward a Frozen Egg plus Cash route. Redeem only inside the official My Dino Park Roblox experience, then check the live reward message before planning a spend.',
          'Because this wiki does not game-test codes directly, treat the code table as source-checked rather than guaranteed forever. If a Teeth code fails, rejoin a fresh server, check spelling, and use the codes page before assuming a third-party list is safer.',
        ],
        bullets: [
          'Open the official Roblox experience by Dino Community.',
          'Redeem working codes from the codes page.',
          'Confirm the reward message says Teeth before spending.',
          'Keep Teeth separate from Cash decisions.',
        ],
      },
      {
        heading: 'Do not spend Teeth like Cash',
        paragraphs: [
          'Cash should usually become eggs, placement, capacity, or visitor income quickly. Teeth should move slower. A special currency is strongest when it buys a dinosaur, egg, upgrade, or Update 2 option that changes the next few sessions, not one small impulse purchase.',
          'Before spending, ask what the Teeth purchase replaces. If it saves a long grind, unlocks a stronger egg path, or raises the park ceiling, it is probably worth considering. If it only looks exciting for one minute, keep the Teeth and continue the visitor-income loop.',
        ],
      },
      {
        heading: 'Pair Teeth with eggs and park income',
        paragraphs: [
          'Teeth are easiest to waste when the rest of the park is weak. If you cannot place or support the dinosaur you unlock, the purchase may sit idle. Build enough income, space, and hatching flow so a Teeth purchase becomes usable immediately.',
          'A practical Update 2 route is: redeem codes, hatch any special egg, place useful dinosaurs, improve the visitor loop, then return to the Teeth menu with a clearer target. This makes Teeth part of the park plan instead of a separate gamble.',
        ],
      },
      {
        heading: 'Watch for new Teeth sinks after updates',
        paragraphs: [
          'My Dino Park is still moving quickly, and Update 2 search demand shows players are trying to understand new reward types. If a later update adds a better Teeth sink, the best answer may change. That is why this page uses decision rules instead of pretending one permanent purchase order is solved.',
          'When new codes or patch notes appear, update the codes page first, then revisit this Teeth guide only if the new reward changes how players should spend.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I get Teeth in My Dino Park?',
        answer:
          'The clearest current route is through verified Update 2 code rewards. Redeem inside the official Roblox game, then confirm the reward message before spending.',
      },
      {
        question: 'Should I spend Teeth immediately?',
        answer:
          'Usually no. Save Teeth until the purchase improves eggs, dinosaurs, capacity, or long-term park progress.',
      },
      {
        question: 'Are Teeth the same as Cash?',
        answer:
          'No. Cash supports the normal egg and upgrade loop, while Teeth should be treated as a rarer Update 2 reward or special currency.',
      },
    ],
  },
  {
    slug: 'update-2-codes-guide',
    title: 'My Dino Park Update 2 Codes Guide',
    seoTitle: 'My Dino Park Update 2 Codes - Teeth, Frozen Egg and Cash',
    seoDescription:
      'Understand My Dino Park Update 2 codes, reported Teeth and Frozen Egg rewards, what changed on Roblox, and how to spend new rewards safely.',
    summary:
      'A July 2026 Update 2 page for My Dino Park players who want the new code list, Roblox status, and a conservative plan for Teeth, Frozen Egg, and Cash rewards.',
    category: 'Updates',
    difficulty: 'Beginner',
    coverImageUrl: videoCover(videos.update2),
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'user_intent_youtube',
    sourceNotes:
      'Based on the official [UPD 2] Roblox title, July 5 Roblox API update timestamp, current code pages, and YouTube code results.',
    video: videos.update2,
    videoSearchQueries: [
      'My Dino Park Update 2 codes',
      'My Dino Park UPDATE2 code',
      'My Dino Park teeth Frozen Egg',
    ],
    tags: ['Update 2', 'Teeth', 'Frozen Egg'],
    relatedRoutes: [
      '/updates',
      '/codes',
      '/guides/codes-redeem-guide',
      '/guides/eggs-and-hatching-guide',
    ],
    body: [
      {
        heading: 'Update 2 is confirmed by the Roblox title and API',
        paragraphs: [
          'The official Roblox page title currently reads [UPD 2] My Dino Park!, and the Roblox universe API snapshot checked on July 5, 2026 shows a July 5 update timestamp. The public game description still summarizes the core loop instead of publishing detailed patch notes, so this page separates confirmed update status from code-source reports.',
          'That distinction matters. It is safe to say the Roblox experience is in an Update 2 state. It is not safe to invent every dinosaur, egg, or balance change unless the game, developer, or reliable in-game testing confirms it.',
        ],
      },
      {
        heading: 'The reported Update 2 code set',
        paragraphs: [
          'Current July 2026 sources agree that UPDATE2, BESTDINOGAME, and DINOSLOVESU are the new high-value code candidates. UPDATE2 is reported as Cash plus Teeth. BESTDINOGAME is reported as Teeth. DINOSLOVESU is reported as a Frozen Egg plus Cash. WELCOME and THX4PLAYING remain starter Cash codes in several sources.',
          'Because this site has not redeemed the codes inside Roblox, the codes page marks most new rewards as medium confidence rather than pretending they are fully game-tested. That is still enough to give players a useful order: claim codes, hatch the special egg if it works, then decide how Teeth fit your account.',
        ],
      },
      {
        heading: 'Do not spend Teeth before reading the menu',
        paragraphs: [
          'Teeth are the clearest new search interest because multiple Update 2 code sources list them as rewards. The safest advice is to claim them, then inspect the in-game menu before spending. A new currency can be tied to eggs, upgrades, event choices, or future features. Until the sink is clear, spending all Teeth immediately is risky.',
          'If Teeth buy a temporary item, compare it against your current bottleneck. If they buy a permanent upgrade or strong egg path, the value is higher. If the game asks for Teeth later in the update, saving some may be better than clearing the shop on day one.',
        ],
      },
      {
        heading: 'Use Update 2 as a reset point for old advice',
        paragraphs: [
          'Any guide written before Update 2 should be treated as a baseline, not final truth. The beginner loop probably remains the same because it is official: eggs, dinosaurs, visitors, upgrades. But exact values, code rewards, best dinosaurs, and egg priorities can change quickly after an update.',
          'When sources conflict, trust the official Roblox page and your in-game result first, then current code pages, then older videos. This wiki will add exact data only when it can be checked without mixing in other dinosaur games.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is My Dino Park Update 2 live?',
        answer:
          'The Roblox title shows [UPD 2], and the Roblox API snapshot checked on July 5, 2026 shows a July 5 update timestamp.',
      },
      {
        question: 'What are the Update 2 codes?',
        answer:
          'Current sources report UPDATE2, BESTDINOGAME, and DINOSLOVESU, alongside WELCOME and THX4PLAYING.',
      },
      {
        question: 'What should I do with Teeth?',
        answer:
          'Claim them if the codes work, then inspect the in-game menu before spending. Save some until the best Teeth sink is clear.',
      },
    ],
  },
  {
    slug: 'wrong-game-safety-guide',
    title: 'My Dino Park Wrong-Game Safety Guide',
    seoTitle: 'My Dino Park vs Crazy Dino Park, Be Dino and APK Searches',
    seoDescription:
      'Keep My Dino Park Roblox separate from Crazy Dino Park, Be Dino, Dinosaur Park Tycoon, APKs, scripts, and wrong code pages.',
    summary:
      'Search results mix several dinosaur park games. Use this guide to verify the correct Roblox place before following codes, tier lists, APK pages, or videos.',
    category: 'Safety',
    difficulty: 'Beginner',
    coverImageUrl: localCover,
    publishedAt: CHECKED_AT,
    updatedAt: CHECKED_AT,
    sourceStrategy: 'manual_data',
    sourceNotes:
      'Created because search results mix My Dino Park with Crazy Dino Park, Dinosaur Park Tycoon, Be Dino, Dinosaur Park: Primeval Zoo, and generic APK/script pages.',
    videoSearchQueries: [
      'My Dino Park Roblox wiki',
      'My Dino Park Crazy Dino Park',
      'My Dino Park APK script',
    ],
    tags: ['Safety', 'Wrong Game', 'Roblox'],
    relatedRoutes: ['/download', '/codes', '/discord'],
    body: [
      {
        heading: 'Use the Roblox place ID as the final check',
        paragraphs: [
          'The correct game for this wiki is My Dino Park! on Roblox, place ID 80701570784699, universe ID 10059591740, by the group Dino Community. If a code page, tier list, or video points to a different game, treat it as unrelated until proven otherwise.',
          'This matters because dinosaur park search results are noisy. Crazy Dino Park is a separate mobile game. Dinosaur Park: Primeval Zoo has its own gift-code mechanics. Be Dino is a different Roblox fantasy. Generic Dino Tycoon pages can look similar but do not prove My Dino Park facts.',
        ],
      },
      {
        heading: 'Do not import mobile-game mechanics',
        paragraphs: [
          'Crazy Dino Park guides talk about fossils, excavation, jigsaw-style restoration, and mobile progression. Those mechanics do not belong on a Roblox My Dino Park page unless the Roblox game itself adds them. A mobile wiki can inspire questions players ask, but it cannot provide code strings or dinosaur stats for this game.',
          'The same rule applies to dinosaur park tycoon games on other platforms. If a guide mentions app-store purchases, APK files, excavation puzzles, zoo objectives, or a different developer, use it only as a warning that names are being mixed.',
        ],
      },
      {
        heading: 'Avoid APKs, scripts, and password pages',
        paragraphs: [
          'My Dino Park is played through Roblox. This site does not provide APK mirrors, modified clients, script executors, auto-farm tools, or private reward pages. If a page asks for your Roblox password outside Roblox or promises unlimited Teeth, it is not part of normal code redemption.',
          'Safe access is boring but effective: use the official Roblox page, redeem codes inside the in-game Store, and check the official group or Discord for updates. That route protects your account and keeps guide data tied to the actual game.',
        ],
      },
      {
        heading: 'Filter YouTube by title, date, and visuals',
        paragraphs: [
          'YouTube results can be useful when a game is new and structured data is thin. They also mix similar games quickly. Before trusting a video, check that the title names My Dino Park, the link or visuals match the Roblox game by Dino Community, and the upload is current for Update 2.',
          'If a video is about Dinosaur Simulator, Build A Dinosaur Park, Grow a Garden dinosaurs, or an old Dino Tycoon, do not use its codes or stats here. At most, it can show that players enjoy dinosaur progression, not that its mechanics are correct for My Dino Park.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is My Dino Park the same as Crazy Dino Park?',
        answer:
          'No. My Dino Park is a Roblox tycoon by Dino Community. Crazy Dino Park is a separate mobile game with different systems.',
      },
      {
        question: 'Can I use codes from Be Dino or Dinosaur Park games?',
        answer:
          'No. Codes are game-specific unless the My Dino Park developer says otherwise.',
      },
      {
        question: 'Does this site provide scripts or APKs?',
        answer:
          'No. This site only links official Roblox access and safe guide pages.',
      },
    ],
  },
];

export function getGuide(slug: string) {
  return guides.find((guide) => guide.slug === slug);
}

export const allCoreRoutes = [
  '/',
  '/codes',
  '/guides',
  '/eggs',
  '/dinosaurs',
  '/money',
  '/upgrades',
  '/tier-list',
  '/download',
  '/discord',
  '/updates',
  '/disclaimer',
  ...guides.map((guide) => `/guides/${guide.slug}`),
];
