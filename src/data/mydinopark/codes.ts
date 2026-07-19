import { officialGameFacts } from './sources';
import type { GameCode } from './types';

export const CODE_CHECKED_AT = '2026-07-17';

export const activeCodes: GameCode[] = [
  {
    code: 'MERCHANTACOS',
    reward: '10,000 Money',
    status: 'active',
    firstSeen: '2026-07-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pocket Tactics, PCGamesN, Beebom, Destructoid',
    confidence: 'medium',
    notes:
      'Newest merchant-event code cross-checked on July 14. Spend the cash on the next concrete egg or park upgrade, not random decoration churn.',
  },
  {
    code: 'MBDELAYUPDTLOL',
    reward:
      '200 Teeth, 20,000 Money, 2x Money for 5 minutes, and 2x Luck for 10 minutes',
    status: 'active',
    firstSeen: '2026-07-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pocket Tactics, PCGamesN, Beebom, Destructoid',
    confidence: 'medium',
    notes:
      'Delay-compensation code from the Update 3 source refresh. Redeem only when ready to use the temporary money and luck boosts.',
  },
  {
    code: 'UPDATE3',
    reward:
      '1,500 Teeth, 25,000 Money, 2x Money for 5 minutes, and 2x Luck for 10 minutes',
    status: 'active',
    firstSeen: '2026-07-14',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pocket Tactics, PCGamesN, Beebom, Destructoid',
    confidence: 'medium',
    notes:
      'Newest Update 3 reward code reported by several current July 2026 trackers. Use before a hatch or merchant-buying route.',
  },
  {
    code: 'UPDATE2',
    reward: '20,000 Cash and 200 Teeth',
    status: 'active',
    firstSeen: '2026-07-04',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'PCGamesN, Destructoid, Pro Game Guides, Reddit reposts',
    confidence: 'medium',
    notes:
      'Update 2 code reported by multiple current code trackers. Use it before buying your next egg so the Cash and Teeth are spent on one plan.',
  },
  {
    code: 'BESTDINOGAME',
    reward: '300 Teeth',
    status: 'active',
    firstSeen: '2026-07-04',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'PCGamesN, Destructoid, Pro Game Guides',
    confidence: 'medium',
    notes:
      'Teeth reward reported across current July sources. Save Teeth until you know whether your account needs an egg, upgrade, or event purchase.',
  },
  {
    code: 'DINOSLOVESU',
    reward: 'Frozen Egg and 10,000 Cash',
    status: 'active',
    firstSeen: '2026-07-04',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'PCGamesN, Destructoid, Pro Game Guides',
    confidence: 'medium',
    notes:
      'Reported as a Frozen Egg plus Cash reward. Place and hatch the egg before spending the cash on decorations.',
  },
  {
    code: 'WELCOME',
    reward: '1,000 Cash',
    status: 'active',
    firstSeen: '2026-07-03',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'PCGamesN, Destructoid, Pro Game Guides, Roblox Den',
    confidence: 'high',
    notes:
      'Starter Cash code with broad source agreement. It is best used before the first affordable egg purchase.',
  },
  {
    code: 'THX4PLAYING',
    reward: '650 Cash',
    status: 'active',
    firstSeen: '2026-07-03',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'PCGamesN, Destructoid, Roblox Den',
    confidence: 'medium',
    notes:
      'Most current sources use THX4PLAYING. Pro Game Guides lists THXFORPLAYING, so copy carefully and check the watchlist if this fails.',
  },
];

export const watchCodes: GameCode[] = [
  {
    code: 'THXFORPLAYING',
    reward: 'Reported 650 Cash variant',
    status: 'watch',
    firstSeen: '2026-07-04',
    lastChecked: CODE_CHECKED_AT,
    sourceLabel: 'Pro Game Guides',
    confidence: 'watch',
    notes:
      'One current source lists this spelling, while several others list THX4PLAYING. Keep it as a watch item rather than presenting both as equally verified.',
  },
];

export const expiredCodes: GameCode[] = [];

export const codeCheckSummary = {
  checkedAt: CODE_CHECKED_AT,
  status:
    'Codes are source-checked from current July 2026 code pages and Roblox search results. This site has not redeemed them inside Roblox.',
  sourcesChecked: [
    {
      label: 'Roblox game page',
      url: officialGameFacts.officialRobloxUrl,
    },
    {
      label: 'Dino Community group',
      url: officialGameFacts.officialGroupUrl,
    },
    {
      label: 'PCGamesN',
      url: 'https://www.pcgamesn.com/my-dino-park/codes',
    },
    {
      label: 'Destructoid',
      url: 'https://www.destructoid.com/my-dino-park-codes/',
    },
    {
      label: 'Pro Game Guides',
      url: 'https://progameguides.com/roblox/my-dino-park-codes/',
    },
    {
      label: 'Roblox Den',
      url: 'https://robloxden.com/game-codes/my-dino-park',
    },
  ],
};
