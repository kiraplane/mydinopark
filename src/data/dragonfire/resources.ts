import type { ResourceItem } from './types';

export const resources: ResourceItem[] = [
  {
    slug: 'wood',
    name: 'Wood',
    type: 'Basic',
    priority: 'Always Spend',
    bestSources: [
      'Stronghold production',
      'World map gathering',
      'Daily quests',
    ],
    bestUses: ['Core building upgrades', 'Early economy growth'],
    avoid:
      'Do not let construction queues idle while hoarding wood for a distant upgrade.',
    sourceConfidence: 'high',
  },
  {
    slug: 'stone',
    name: 'Stone',
    type: 'Basic',
    priority: 'Always Spend',
    bestSources: [
      'Stronghold production',
      'World map gathering',
      'Campaign rewards',
    ],
    bestUses: [
      'Stronghold structures',
      'Defensive and infrastructure upgrades',
    ],
    avoid:
      'Avoid spending stone on scattered side upgrades before your main stronghold path is moving.',
    sourceConfidence: 'high',
  },
  {
    slug: 'iron',
    name: 'Iron',
    type: 'Military',
    priority: 'Save Carefully',
    bestSources: [
      'World map gathering',
      'Military objectives',
      'Event rewards',
    ],
    bestUses: ['Troop strength', 'Military upgrades', 'War preparation'],
    avoid:
      'Do not drain iron right before alliance conflict if your troop queues still need it.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'grain',
    name: 'Grain',
    type: 'Military',
    priority: 'Use for Timers',
    bestSources: ['Farms', 'World map gathering', 'Daily activity'],
    bestUses: ['Troop upkeep', 'Training flow', 'March activity'],
    avoid:
      'Avoid long offline windows with idle grain production and empty troop queues.',
    sourceConfidence: 'high',
  },
  {
    slug: 'meat',
    name: 'Meat',
    type: 'Dragon',
    priority: 'Save Carefully',
    bestSources: ['Dragon-focused rewards', 'Campaign progression', 'Events'],
    bestUses: ['Dragon growth', 'Main dragon upgrades'],
    avoid:
      'Do not feed every newly hatched dragon evenly. Pick one serious dragon first.',
    sourceConfidence: 'medium',
  },
  {
    slug: 'gold',
    name: 'Gold',
    type: 'Premium',
    priority: 'Save Carefully',
    bestSources: ['Daily quests', 'Campaign rewards', 'Events', 'Purchases'],
    bestUses: [
      'Alliance creation',
      'Key timers',
      'High-impact account decisions',
    ],
    avoid:
      'Avoid panic spending gold on tiny speed-ups that do not unlock a meaningful breakpoint.',
    sourceConfidence: 'high',
  },
  {
    slug: 'dragonfire-gems',
    name: 'Dragonfire Gems',
    type: 'Premium',
    priority: 'Save Carefully',
    bestSources: ['Daily objectives', 'Events', 'Store bundles'],
    bestUses: ['Rare progression purchases', 'Time-sensitive event value'],
    avoid:
      'Do not spend gems before checking whether the same progress comes from daily objectives or alliance help.',
    sourceConfidence: 'medium',
  },
];
