import { activeCodes } from './codes';
import { CHECKED_AT, OFFICIAL_CHECKED_AT, officialGameFacts } from './sources';
import type { TopicPage } from './types';

const commonImage = '/mydinopark/hero.png';

export const topicPages: Record<string, TopicPage> = {
  eggs: {
    route: '/eggs',
    label: 'Eggs',
    eyebrow: 'Egg Route',
    title: 'My Dino Park Eggs and Hatching',
    seoTitle: 'My Dino Park Eggs - Hatching Guide and Frozen Egg Tips',
    seoDescription:
      'Use My Dino Park eggs wisely: hatch dinosaurs, place them for visitor income, handle Frozen Egg rewards, and move tiers only when Cash recovery is stable.',
    summary:
      'Eggs are the main route into stronger dinosaurs. Hatch what your park can support, then move tiers when visitor Cash can recover the spend.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/eggs-and-hatching-guide',
      '/guides/fast-money-guide',
      '/guides/best-dinosaurs-watch-guide',
    ],
    sections: [
      {
        heading: 'Buy eggs that become working dinosaurs',
        paragraphs: [
          'The official Roblox page confirms the core loop: buy dino eggs, hatch dinosaurs, attract visitors, and upgrade the park. That means an egg is valuable when it quickly becomes a placed dinosaur that helps visitor income.',
          'Avoid treating unverified egg tables as final truth. Until exact in-game prices and hatch odds are checked, use a simple rule: buy the highest egg tier your park can hatch, place, and recover from repeatedly.',
        ],
      },
      {
        heading: 'Frozen Egg rewards need a plan',
        paragraphs: [
          'Current Update 2 code sources report DINOSLOVESU as a Frozen Egg plus Cash reward. If the code works in your server, hatch the egg before spending the Cash around it. The result can change whether you need more placement space, another egg tier, or an income upgrade.',
        ],
      },
    ],
    faq: [
      {
        question: 'What egg should I buy first in My Dino Park?',
        answer:
          'Buy an affordable egg that you can hatch and place quickly. Move to higher tiers when your visitor Cash can recover the cost.',
      },
      {
        question: 'Is there a verified egg calculator?',
        answer:
          'Not on this site yet. Exact egg ROI needs in-game verification before it becomes a public tool.',
      },
    ],
  },
  dinosaurs: {
    route: '/dinosaurs',
    label: 'Dinosaurs',
    eyebrow: 'Dino Value',
    title: 'My Dino Park Dinosaurs and Best Dino Signals',
    seoTitle: 'My Dino Park Dinosaurs - Best Dino Watch and Income Signals',
    seoDescription:
      'Evaluate My Dino Park dinosaurs by visitor income impact, egg cost, display space, rarity, and replacement risk without copying unverified tier lists.',
    summary:
      'Public dinosaur stat data is still thin, so this hub focuses on how to judge which dinosaurs deserve space and upgrades.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/best-dinosaurs-watch-guide',
      '/tier-list',
      '/guides/eggs-and-hatching-guide',
    ],
    sections: [
      {
        heading: 'Use income impact before rarity hype',
        paragraphs: [
          'A rare dinosaur is exciting, but the best dinosaur for your current park is the one that changes your next purchase timing. If Cash returns faster after placing it, it deserves attention. If it only looks impressive, wait before deep spending.',
          'This wiki does not copy exact T-Rex or legendary income claims until values are verified for the current Roblox build.',
        ],
      },
      {
        heading: 'Separate Roblox My Dino Park from other dino games',
        paragraphs: [
          'Search results mix My Dino Park with Crazy Dino Park, Dinosaur Park Tycoon, Be Dino, and other dinosaur experiences. Their species lists and income values are not safe sources for this Roblox game.',
        ],
      },
    ],
    faq: [
      {
        question: 'What is the best dinosaur in My Dino Park?',
        answer:
          'Use income impact, placement value, egg cost, rarity, and replacement timing until exact dinosaur data is verified.',
      },
      {
        question: 'Why is there no full dinosaur database yet?',
        answer:
          'Reliable My Dino Park-specific dinosaur stats were not available from official public sources in this pass.',
      },
    ],
  },
  money: {
    route: '/money',
    label: 'Money',
    eyebrow: 'Visitor Cash',
    title: 'My Dino Park Money and Visitor Income',
    seoTitle: 'My Dino Park Money Guide - Visitor Cash and Reinvest Order',
    seoDescription:
      'Earn money faster in My Dino Park by redeeming codes, hatching income dinosaurs, expanding capacity, and reinvesting visitor Cash deliberately.',
    summary:
      'Visitor Cash is the engine of the Roblox tycoon loop. Use rewards to build repeatable income, not scattered spending.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/fast-money-guide',
      '/codes',
      '/guides/park-upgrades-guide',
    ],
    sections: [
      {
        heading: 'Visitor income should decide your next purchase',
        paragraphs: [
          'The official game page names visitors as a core goal. Cash becomes powerful when it turns into hatched dinosaurs, placement space, or upgrades that make the next purchase arrive faster.',
          `Current sources list ${activeCodes.length} active or reported active codes, which makes codes a strong starter boost. The boost still needs a spending plan.`,
        ],
      },
      {
        heading: 'Use bottlenecks instead of a fixed list',
        paragraphs: [
          'If you lack dinosaurs, buy and hatch eggs. If you have dinosaurs waiting, expand placement. If Cash returns slowly, choose upgrades that improve recovery. This keeps the park moving even when exact public values are incomplete.',
        ],
      },
    ],
    faq: [
      {
        question: 'How do I earn money fast in My Dino Park?',
        answer:
          'Redeem codes, hatch dinosaurs that can be placed, reinvest visitor Cash into capacity or better eggs, and avoid low-impact decor early.',
      },
      {
        question: 'Are Cash per minute values verified here?',
        answer:
          'No. The site uses conservative mechanics-first advice until exact in-game values are checked.',
      },
    ],
  },
  upgrades: {
    route: '/upgrades',
    label: 'Upgrades',
    eyebrow: 'Park Growth',
    title: 'My Dino Park Upgrades and Expansion',
    seoTitle: 'My Dino Park Upgrades - Land, Pens and Park Growth',
    seoDescription:
      'Choose My Dino Park upgrades by bottleneck: land, pens, visitor income, capacity, and when an egg purchase beats another upgrade.',
    summary:
      'Park upgrades should solve capacity, placement, or income recovery problems instead of draining Cash without a clear return.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/park-upgrades-guide',
      '/money',
      '/guides/eggs-and-hatching-guide',
    ],
    sections: [
      {
        heading: 'Upgrade the problem that blocks the next hatch',
        paragraphs: [
          'The official game loop includes park upgrades, but timing matters. If you cannot place more dinosaurs, capacity is the bottleneck. If you have empty space, eggs are the bottleneck. If both are fine but Cash is slow, visitor-income upgrades deserve a look.',
        ],
      },
      {
        heading: 'Pause after a large upgrade',
        paragraphs: [
          'A large upgrade should be tested before chaining into another one. Fill the new space, watch Cash recovery, then choose the next bottleneck. This avoids upgrades that look productive but leave the park unable to use what it unlocked.',
        ],
      },
    ],
    faq: [
      {
        question: 'Should I upgrade or buy an egg?',
        answer:
          'Upgrade when capacity or income recovery blocks progress. Buy an egg when you have space and can recover the cost.',
      },
      {
        question: 'Are upgrade prices verified?',
        answer:
          'Not yet. Exact upgrade tables need in-game confirmation for the current Update 2 build.',
      },
    ],
  },
  tierList: {
    route: '/tier-list',
    label: 'Tier List',
    eyebrow: 'Spending Priority',
    title: 'My Dino Park Tier List Watch',
    seoTitle: 'My Dino Park Tier List - Best Spending and Dino Watch',
    seoDescription:
      'Use a conservative My Dino Park tier list watch for codes, eggs, dinosaurs, upgrades, Teeth, and spending priorities while exact stats are verified.',
    summary:
      'Search demand supports a tier-list page, but the safest current launch version ranks spending decisions and tracks dinosaur data carefully.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: [
      '/guides/best-dinosaurs-watch-guide',
      '/guides/eggs-and-hatching-guide',
      '/guides/update-2-codes-guide',
    ],
    sections: [
      {
        heading: 'S tier: rewards that start the income loop',
        paragraphs: [
          'Active codes, a working egg hatch, and enough placement space are the strongest early priorities. They directly support the official loop of eggs, dinosaurs, visitors, and upgrades.',
          'Teeth and Frozen Egg rewards are high-value but should be spent only after the in-game menu and hatch result are clear.',
        ],
      },
      {
        heading: 'Watch tier: exact dinosaur rankings',
        paragraphs: [
          'A dinosaur S-tier list needs verified species names, egg sources, income values, and Update 2 context. Until those values are checked, this page points players to decision rules instead of copying competitor claims.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is this a full My Dino Park tier list?',
        answer:
          'It is a launch tier-list watch page. It ranks spending priorities now and waits for verified dinosaur stats before publishing exact ranks.',
      },
      {
        question: 'Why include tier list if data is thin?',
        answer:
          'Because players search for it. The page answers the intent honestly without inventing dinosaur values.',
      },
    ],
  },
  download: {
    route: '/download',
    label: 'Roblox',
    eyebrow: 'Official Access',
    title: 'My Dino Park Roblox Page and Safe Play Links',
    seoTitle: 'My Dino Park Roblox - Official Game Page and Safe Links',
    seoDescription:
      'Open My Dino Park through the official Roblox page, verify Dino Community, and avoid APKs, scripts, or wrong-game downloads.',
    summary: `Use the official Roblox experience for My Dino Park. The correct place ID is ${officialGameFacts.robloxPlaceId}, by ${officialGameFacts.creatorName}.`,
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/guides/beginner-guide', '/codes', '/discord'],
    sections: [
      {
        heading: 'Use Roblox as the source of truth',
        paragraphs: [
          `The official game page is ${officialGameFacts.officialRobloxUrl}. It lists My Dino Park as a Roblox Simulation/Tycoon experience by ${officialGameFacts.creatorName}.`,
          'Avoid APK mirrors, scripts, auto-farm executors, and reward pages that ask for your Roblox password.',
        ],
      },
      {
        heading: 'Check the exact game before using guides',
        paragraphs: [
          'Search results mix several dinosaur park games. The correct page title currently includes [UPD 2] My Dino Park!, and the root place ID is 80701570784699.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is My Dino Park free?',
        answer:
          'It is a Roblox experience. Open it through Roblox and follow any account or purchase prompts only inside Roblox.',
      },
      {
        question: 'Does this site provide APK links?',
        answer: 'No. This site only links official Roblox and community pages.',
      },
    ],
  },
  discord: {
    route: '/discord',
    label: 'Discord',
    eyebrow: 'Community Links',
    title: 'My Dino Park Discord, Group and Official Links',
    seoTitle: 'My Dino Park Discord - Dino Community and Official Links',
    seoDescription:
      'Find safe My Dino Park community links, Dino Community context, code-check cautions, and where to verify Update 2 changes.',
    summary:
      'Use community links as update signals, but verify codes and mechanics against the official Roblox game and current in-game behavior.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/download', '/codes', '/updates'],
    sections: [
      {
        heading: 'Community links are signals, not final proof',
        paragraphs: [
          'Current code pages point players toward the Dino Community group and Discord for new rewards. That makes official community spaces useful when code spellings conflict or Update 2 changes quickly.',
          'Still, community reposts can be wrong. Compare claims against the official Roblox page and current in-game results before publishing exact dinosaur or upgrade values.',
        ],
      },
      {
        heading: 'Avoid fake reward communities',
        paragraphs: [
          'A real My Dino Park community link should not ask for your Roblox password outside Roblox. Do not install executors or extensions for codes, Teeth, or Frozen Egg rewards.',
        ],
      },
    ],
    faq: [
      {
        question: 'Where should I check new My Dino Park codes?',
        answer:
          'Check the official community first, then compare with current code pages and your in-game result.',
      },
      {
        question: 'Is this site official?',
        answer:
          'No. It is an independent guide site and does not represent Dino Community or Roblox.',
      },
    ],
  },
  updates: {
    route: '/updates',
    label: 'Updates',
    eyebrow: 'Live Status',
    title: 'My Dino Park Updates and Code Check Log',
    seoTitle: 'My Dino Park Updates - Update 2, Codes and Watchlist',
    seoDescription:
      'Track My Dino Park Update 2 status, Roblox API timestamps, code check dates, source conflicts, and guide changes without fake patch notes.',
    summary:
      'The Roblox title now shows Update 4. Public API data confirms the July 19 refresh, while exact mechanics and balance changes remain watch-only until stronger patch evidence appears.',
    image: commonImage,
    updatedAt: CHECKED_AT,
    featuredRoutes: ['/codes', '/guides/update-2-codes-guide', '/tier-list'],
    sections: [
      {
        heading: 'Official Roblox update signal',
        paragraphs: [
          `Roblox API data checked on ${OFFICIAL_CHECKED_AT} reports the experience was last updated at ${officialGameFacts.updatedAt}. The public title includes [UPD 4!], but detailed official patch notes were not exposed in the checked public data.`,
          'Because official patch detail is thin, this wiki updates pages only when the mechanic or code evidence is strong enough.',
        ],
      },
      {
        heading: 'Current code freshness result',
        paragraphs: [
          `The site tracks ${activeCodes.length} active or reported active codes. Update 2 code rewards are source-checked with medium confidence, and THXFORPLAYING is kept as a watch spelling variant.`,
        ],
      },
    ],
    faq: [
      {
        question: 'Did the site find official Update 4 patch notes?',
        answer:
          'No detailed official patch notes were found in public Roblox data during this pass. The page records the Roblox title and API timestamp instead.',
      },
      {
        question: 'Will guides change after updates?',
        answer:
          'Yes. Codes, Teeth advice, egg priority, and dinosaur rankings should be refreshed when reliable sources change.',
      },
    ],
  },
};

export const topicPageList = Object.values(topicPages);

export function getTopicPage(key: keyof typeof topicPages) {
  return topicPages[key];
}
