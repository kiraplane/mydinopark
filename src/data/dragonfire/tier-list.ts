import { dragons } from './dragons';
import type { TierEntry } from './types';

export const tierEntries: TierEntry[] = [
  {
    dragonSlug: 'syrax',
    tier: 'Recommended',
    rankingReason:
      'Best early recommendation because Syrax is easy to understand, broadly useful, and fits beginner campaign progression before the player has a specialized dragon roster.',
    bestFor: ['Beginner progression', 'Campaign stages', 'First main dragon'],
    earlyValue: 'High',
    longTermValue: 'Medium',
    resourceCost: 'Medium',
    sourceConfidence: 'medium',
  },
  {
    dragonSlug: 'caraxes',
    tier: 'Recommended',
    rankingReason:
      'Recommended for players who want a more aggressive first serious dragon and can support combat with troop training and resource production.',
    bestFor: ['Offense', 'Territory fights', 'Campaign pressure'],
    earlyValue: 'High',
    longTermValue: 'Medium',
    resourceCost: 'Medium',
    sourceConfidence: 'medium',
  },
  {
    dragonSlug: 'vhagar',
    tier: 'Situational',
    rankingReason:
      'High-interest combat dragon, but exact unlock path and command data are still pending, so it should not be treated as a guaranteed early rush target.',
    bestFor: ['Alliance war planning', 'Late-game comparison'],
    earlyValue: 'Low',
    longTermValue: 'High',
    resourceCost: 'High',
    sourceConfidence: 'pending',
  },
  {
    dragonSlug: 'seasmoke',
    tier: 'Situational',
    rankingReason:
      'A useful flexible profile to track, but current public data is not strong enough for a top recommendation.',
    bestFor: ['Flexible marches', 'Mid-account comparison'],
    earlyValue: 'Medium',
    longTermValue: 'Medium',
    resourceCost: 'Pending',
    sourceConfidence: 'pending',
  },
  {
    dragonSlug: 'moondancer',
    tier: 'Data Pending',
    rankingReason:
      'Listed for tracking only. Wait for verified commands, habits, and unlock data before ranking.',
    bestFor: ['Future verification'],
    earlyValue: 'Pending',
    longTermValue: 'Pending',
    resourceCost: 'Pending',
    sourceConfidence: 'pending',
  },
  {
    dragonSlug: 'vermithor',
    tier: 'Data Pending',
    rankingReason:
      'Listed for tracking only. The name carries search demand, but investment advice needs confirmed game data.',
    bestFor: ['Future verification'],
    earlyValue: 'Pending',
    longTermValue: 'Pending',
    resourceCost: 'Pending',
    sourceConfidence: 'pending',
  },
];

export const tierEntriesWithDragons = tierEntries.map((entry) => ({
  ...entry,
  dragon: dragons.find((dragon) => dragon.slug === entry.dragonSlug),
}));
