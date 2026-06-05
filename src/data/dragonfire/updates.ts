import { sources } from './sources';
import type { GameUpdate } from './types';

export const updates: GameUpdate[] = [
  {
    slug: 'global-launch',
    title: 'Global launch on iOS and Android',
    publishedAt: '2026-06-02',
    summary:
      'Warner Bros. Games announced the global launch of Game of Thrones: Dragonfire, a free-to-play 4X strategy game set in the House of the Dragon era.',
    source: sources.wbLaunch,
  },
  {
    slug: 'factions-and-alliances',
    title: 'Factions and Alliances guide',
    publishedAt: '2026-05-08',
    summary:
      'Official guidance explains Factions, Alliance Finder, alliance persistence across Reigns, and how leaders choose faction direction.',
    source: sources.alliances,
  },
  {
    slug: 'stronghold-guide',
    title: 'Stronghold guide',
    publishedAt: '2026-04-01',
    summary:
      'Official Stronghold guidance introduces the base systems that control buildings, troops, Dragon Pit progress, and account capability.',
    source: sources.stronghold,
  },
];
