import type { DataSource } from './types';

export const CHECKED_AT = '2026-07-21';
export const OFFICIAL_CHECKED_AT = '2026-07-21';

export const officialGameFacts = {
  name: 'My Dino Park!',
  siteName: 'My Dino Park Wiki',
  domain: 'https://www.my-dino-park.wiki',
  canonicalHost: 'www.my-dino-park.wiki',
  robloxPlaceId: '80701570784699',
  robloxUniverseId: '10059591740',
  creatorName: 'Dino Community.',
  creatorType: 'Roblox Group',
  creatorId: '532484073',
  genre: 'Roblox dinosaur park simulation tycoon',
  status: '[UPD 4!] live Roblox experience',
  createdAt: '2026-04-20T02:17:30.874Z',
  updatedAt: '2026-07-19T01:08:26.338128Z',
  maxPlayers: 6,
  activePlayersAtCheck: 5483,
  visitsAtCheck: 13492254,
  favoritesAtCheck: 691349,
  upVotesAtCheck: 9569,
  downVotesAtCheck: 520,
  officialRobloxUrl: 'https://www.roblox.com/games/80701570784699/My-Dino-Park',
  officialGroupUrl:
    'https://www.roblox.com/communities/532484073/Dino-Community',
  discordUrl: '',
};

export const siteDescription =
  'My Dino Park Wiki helps Roblox players redeem codes, hatch better eggs, earn visitor cash, spend teeth, and upgrade parks without wrong-game advice.';

export const officialSources: DataSource[] = [
  {
    type: 'official',
    label: 'My Dino Park! on Roblox',
    url: officialGameFacts.officialRobloxUrl,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Primary source for the title, developer group, Update 4 marker, max players, and official gameplay loop: buy eggs, hatch dinosaurs, attract visitors, upgrade the park.',
  },
  {
    type: 'roblox_api',
    label: 'Roblox universe API snapshot',
    url: `https://games.roblox.com/v1/games?universeIds=${officialGameFacts.robloxUniverseId}`,
    checkedAt: OFFICIAL_CHECKED_AT,
    confidence: 'high',
    note: 'Confirmed root place ID, Simulation/Tycoon genre, visits, favorites, active players, creator group, creation date, and July 19, 2026 update timestamp.',
  },
  {
    type: 'codes_site',
    label: 'PCGamesN My Dino Park codes',
    url: 'https://www.pcgamesn.com/my-dino-park/codes',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Current July 5 code source listing Update 2 rewards, teeth, Frozen Egg, and redeem steps.',
  },
  {
    type: 'codes_site',
    label: 'Destructoid My Dino Park codes',
    url: 'https://www.destructoid.com/my-dino-park-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'July 4 code source with the same five active codes and Store menu redemption steps.',
  },
  {
    type: 'codes_site',
    label: 'Pro Game Guides My Dino Park codes',
    url: 'https://progameguides.com/roblox/my-dino-park-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'July 4 code source. It agrees on the three Update 2 codes but reports THXFORPLAYING, so the older THX4PLAYING spelling is tracked carefully.',
  },
  {
    type: 'codes_site',
    label: 'Roblox Den My Dino Park codes',
    url: 'https://robloxden.com/game-codes/my-dino-park',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'July 3 code source listing WELCOME and THX4PLAYING, useful for spelling cross-checking.',
  },
  {
    type: 'competitor',
    label: 'mydinopark.wiki competitor audit',
    url: 'https://mydinopark.wiki/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Competitor homepage covers codes, beginner guide, money guide, systems, wiki search, and a tier-list preview.',
  },
  {
    type: 'competitor',
    label: 'mydinopark.org competitor audit',
    url: 'https://mydinopark.org/en/',
    checkedAt: CHECKED_AT,
    confidence: 'low',
    note: 'Competitor claims egg calculator, dinosaur rankings, and exact income numbers. Treat as route inspiration only until verified in-game.',
  },
  {
    type: 'youtube',
    label: 'My Dino Park YouTube guide results',
    url: 'https://www.youtube.com/results?search_query=My+Dino+Park+Roblox+guide',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used to select guide-support videos for beginner, codes, and Update 2 coverage. Videos are source checks, not article bodies.',
  },
];

export const officialQuickLinks = [
  {
    label: 'Roblox',
    href: officialGameFacts.officialRobloxUrl,
  },
  {
    label: 'Group',
    href: officialGameFacts.officialGroupUrl,
  },
].filter((link) => Boolean(link.href));
