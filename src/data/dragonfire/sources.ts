import type { DataSource } from './types';

export const CHECKED_AT = '2026-06-05';

export const sources = {
  wbLaunch: {
    type: 'official',
    label: 'Warner Bros. Games launch announcement',
    url: 'https://warnerbrosgames.com/article/warner-bros-games-launches-game-of-thrones-dragonfire',
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Used for launch status, platform availability, 4X strategy positioning, dragon count, and army count.',
  },
  googlePlay: {
    type: 'store',
    label: 'Google Play listing',
    url: 'https://play.google.com/store/apps/details?id=com.wb.goog.hotd.socialstrategy&hl=en_US',
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Used for Android download link, game description, and store positioning.',
  },
  gameplay: {
    type: 'official',
    label: 'Official gameplay overview',
    url: 'https://gotdragonfire.com/gameplay/',
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Used for Hatchery, Dragon Relics, Commands, Habits, Stronghold, resources, objectives, and Campaign concepts.',
  },
  alliances: {
    type: 'official',
    label: 'Official Factions & Alliances guide',
    url: 'https://gotdragonfire.com/news/an-introduction-to-factions-alliances/',
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Used for Factions, Alliances, Reigns, Alliance Finder, and alliance persistence.',
  },
  stronghold: {
    type: 'official',
    label: 'Official Stronghold guide',
    url: 'https://gotdragonfire.com/news/stronghold-guide/',
    checkedAt: CHECKED_AT,
    confidence: 'high',
    note: 'Used for Stronghold building priorities and base-building vocabulary.',
  },
  fandom: {
    type: 'community',
    label: 'Wiki of Westeros community page',
    url: 'https://gameofthrones.fandom.com/wiki/Game_of_Thrones:_Dragonfire',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used only as a community cross-check for game identity and public references.',
  },
  beginnerGuideDemand: {
    type: 'guide_site',
    label: 'GamingonPhone beginner guide',
    url: 'https://gamingonphone.com/guides/game-of-thrones-dragonfire-beginners-guide-and-tips/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used as a demand and topic signal for beginner progression, not copied as source text.',
  },
  resourceGuideDemand: {
    type: 'guide_site',
    label: 'GamingonPhone resource guide',
    url: 'https://gamingonphone.com/guides/game-of-thrones-dragonfire-resource-management-guide/',
    checkedAt: CHECKED_AT,
    confidence: 'medium',
    note: 'Used as a demand and topic signal for resource planning, not copied as source text.',
  },
  codesDemand: {
    type: 'guide_site',
    label: 'GamingonPhone redeem codes page',
    url: 'https://gamingonphone.com/guides/game-of-thrones-dragonfire-redeem-codes-and-how-to-use-them/',
    checkedAt: CHECKED_AT,
    confidence: 'low',
    note: 'Used as evidence that code-search demand exists. Active codes still require direct verification.',
  },
} satisfies Record<string, DataSource>;

export const officialGameFacts = {
  name: 'Game of Thrones: Dragonfire',
  siteName: 'Game of Thrones Dragonfire Wiki',
  domain: 'https://www.gameofthronesdragonfire.wiki',
  developer: 'Warner Bros. International Enterprises',
  publisher: 'Warner Bros. Games',
  launchDate: '2026-06-02',
  googlePlayUrl:
    'https://play.google.com/store/apps/details?id=com.wb.goog.hotd.socialstrategy&hl=en_US',
  officialWebsiteUrl: 'https://gotdragonfire.com/',
  supportUrl:
    'https://hbogamessupport.wbgames.com/hc/en-us/categories/46519301484563-Game-of-Thrones-Dragonfire',
  primarySource: sources.wbLaunch,
};
