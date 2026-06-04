import type { DataSource } from './types';

export const CHECKED_AT = '2026-06-04';

export const sources = {
  roblox: {
    type: 'official',
    label: 'Roblox official experience page',
    url: 'https://www.roblox.com/games/133410800847665/Universal-Tower-Defense-X',
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Used for official title, developer, game description, and play link.',
  },
  fandomHome: {
    type: 'fandom',
    label: 'Universal Tower Defense X Fandom home',
    url: 'https://universal-tdx.fandom.com/wiki/Universal_Tower_Defense_X_Wiki',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used for game modes, update notes, and current wiki information architecture.',
  },
  fandomUnits: {
    type: 'fandom',
    label: 'Universal Tower Defense X Fandom units',
    url: 'https://universal-tdx.fandom.com/wiki/Units',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used for unit names, rarity groups, and current new-unit coverage.',
  },
  fandomTierList: {
    type: 'fandom',
    label: 'Universal Tower Defense X Fandom tier list',
    url: 'https://universal-tdx.fandom.com/wiki/Tier_List',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used as one signal for unit relationships and synchro notes.',
  },
  fandomCodes: {
    type: 'fandom',
    label: 'Universal Tower Defense X Fandom codes',
    url: 'https://universal-tdx.fandom.com/wiki/Codes',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used for current active code candidates and reward text.',
  },
  fandomTraits: {
    type: 'fandom',
    label: 'Universal Tower Defense X Fandom traits',
    url: 'https://universal-tdx.fandom.com/wiki/Traits',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used for trait names and rarity groups.',
  },
  bloxInformer: {
    type: 'guide_site',
    label: 'BloxInformer Universal Tower Defense X wiki',
    url: 'https://bloxinformer.com/wikis/universal-tower-defense/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used to cross-check units, traits, relics, and code rewards.',
  },
  bloxInformerRelics: {
    type: 'guide_site',
    label: 'BloxInformer Universal Tower Defense X relics',
    url: 'https://bloxinformer.com/wikis/universal-tower-defense/relics/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used for relic set names, stage notes, and buff summaries.',
  },
  gamesRadarCodes: {
    type: 'guide_site',
    label: 'GamesRadar Universal Tower Defense codes',
    url: 'https://www.gamesradar.com/games/strategy/universal-tower-defense-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used as a cross-checking source for code candidates.',
  },
  proGameGuidesCodes: {
    type: 'guide_site',
    label: 'Pro Game Guides Universal Tower Defense codes',
    url: 'https://progameguides.com/roblox/universal-tower-defense-codes/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used as a cross-checking source for code candidates.',
  },
} satisfies Record<string, DataSource>;

export const officialGameFacts = {
  name: 'Universal Tower Defense X',
  siteName: 'Universal Tower Defense X Wiki',
  developer: 'Universal Tower Defense [UTD]',
  robloxUrl:
    'https://www.roblox.com/games/133410800847665/Universal-Tower-Defense-X',
  canonicalUrl: 'https://www.universaltowerdefensex.wiki',
  currentUpdate: 'Universal Fest P2',
  source: sources.roblox,
};
