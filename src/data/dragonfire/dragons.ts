import { CHECKED_AT, sources } from './sources';
import type { Dragon } from './types';

export const dragons: Dragon[] = [
  {
    slug: 'syrax',
    name: 'Syrax',
    role: 'Campaign Carry',
    tier: 'Recommended',
    affinity: 'Balanced campaign pressure',
    unlock: 'Campaign progression signal; confirm exact stage in-game.',
    upgradePriority: 'High',
    bestUse:
      'Use as an early campaign anchor when you need a reliable dragon-led army instead of spreading meat and relic materials across several dragons.',
    summary:
      'Syrax is the cleanest early-profile dragon to explain because the game and guide demand both point new players toward familiar House of the Dragon names. Treat Syrax as a strong first serious dragon project until deeper combat math is available.',
    strengths: [
      'Easy for new players to understand as a first main dragon.',
      'Fits campaign and general progression content better than a narrow specialist.',
      'Good internal-link target for beginner, resource, and tier list pages.',
    ],
    cautions: [
      'Exact command values and unlock timing still need direct in-game verification.',
      'Do not overfeed every dragon just because the hatchery opens new options.',
    ],
    commands: ['Data pending', 'Use official command text after in-game check'],
    habits: [
      'Data pending',
      'Record habit unlocks after hatchery verification',
    ],
    sourceConfidence: 'medium',
    sources: [sources.gameplay, sources.beginnerGuideDemand],
    lastChecked: CHECKED_AT,
  },
  {
    slug: 'caraxes',
    name: 'Caraxes',
    role: 'Siege',
    tier: 'Recommended',
    affinity: 'Aggressive army pressure',
    unlock: 'Campaign progression signal; confirm exact stage in-game.',
    upgradePriority: 'High',
    bestUse:
      'Build around Caraxes when your current blocker is offensive pressure, territory fights, or campaign battles that reward stronger dragon-led marches.',
    summary:
      'Caraxes should be treated as an aggressive upgrade candidate, especially for players who want their first dragon investment to help with fighting rather than only safe growth.',
    strengths: [
      'Strong thematic fit for offensive guides and alliance-war content.',
      'Useful comparison point against Syrax in early tier list decisions.',
      'Good candidate for siege and territory-pressure explanations.',
    ],
    cautions: [
      'Avoid calling it the best dragon until command numbers are verified.',
      'Aggressive dragons are less useful if your economy cannot keep troop queues alive.',
    ],
    commands: ['Data pending', 'Prioritize verified command screenshots'],
    habits: ['Data pending', 'Confirm whether habits favor combat tempo'],
    sourceConfidence: 'medium',
    sources: [sources.gameplay, sources.beginnerGuideDemand],
    lastChecked: CHECKED_AT,
  },
  {
    slug: 'vhagar',
    name: 'Vhagar',
    role: 'Alliance War',
    tier: 'Situational',
    affinity: 'Late-game combat pressure',
    unlock: 'Data pending; likely tied to deeper progression or event access.',
    upgradePriority: 'Medium',
    bestUse:
      'Track Vhagar as a long-term combat target, especially for players who join active alliances and expect larger fights.',
    summary:
      'Vhagar belongs on the site because players will search for the name immediately. The responsible MVP stance is to list the dragon, explain likely combat demand, and mark the data as needing confirmation.',
    strengths: [
      'High search demand from House of the Dragon fans.',
      'Natural fit for alliance-war and late-game planning pages.',
      'Useful long-term comparison point once more data arrives.',
    ],
    cautions: [
      'Do not rush resources into Vhagar without exact unlock and command data.',
      'Treat ranking as provisional until in-game testing confirms performance.',
    ],
    commands: ['Data pending'],
    habits: ['Data pending'],
    sourceConfidence: 'pending',
    sources: [sources.fandom, sources.gameplay],
    lastChecked: CHECKED_AT,
  },
  {
    slug: 'seasmoke',
    name: 'Seasmoke',
    role: 'Balanced',
    tier: 'Situational',
    affinity: 'Flexible march support',
    unlock: 'Data pending.',
    upgradePriority: 'Medium',
    bestUse:
      'Use Seasmoke as a flexible comparison dragon until exact commands and troop synergies are verified.',
    summary:
      'Seasmoke is a useful early data page because players recognize the name, but current public information is not enough to make a hard investment call.',
    strengths: [
      'Flexible thematic profile for general strategy pages.',
      'Good candidate for mid-account comparison once more data is collected.',
      'Can support both campaign and alliance guide internal links.',
    ],
    cautions: [
      'Needs direct command and habit verification.',
      'Should not outrank verified early carry options without proof.',
    ],
    commands: ['Data pending'],
    habits: ['Data pending'],
    sourceConfidence: 'pending',
    sources: [sources.fandom, sources.gameplay],
    lastChecked: CHECKED_AT,
  },
  {
    slug: 'moondancer',
    name: 'Moondancer',
    role: 'Resource Raid',
    tier: 'Data Pending',
    affinity: 'Data pending',
    unlock: 'Data pending.',
    upgradePriority: 'Pending',
    bestUse:
      'Hold upgrade resources until Moondancer commands, habits, and unlock path are verified.',
    summary:
      'Moondancer is included as a placeholder profile for future verification because dragon-name searches are likely to grow as players unlock more roster entries.',
    strengths: [
      'Useful search landing page once confirmed data is available.',
      'Can become a resource-raid or speed profile if in-game data supports it.',
    ],
    cautions: [
      'No reliable command data in the MVP.',
      'Do not recommend heavy investment yet.',
    ],
    commands: ['Data pending'],
    habits: ['Data pending'],
    sourceConfidence: 'pending',
    sources: [sources.fandom],
    lastChecked: CHECKED_AT,
  },
  {
    slug: 'vermithor',
    name: 'Vermithor',
    role: 'Data Pending',
    tier: 'Data Pending',
    affinity: 'Data pending',
    unlock: 'Data pending.',
    upgradePriority: 'Pending',
    bestUse:
      'Track for future combat testing; do not spend rare dragon resources based only on name recognition.',
    summary:
      'Vermithor is a high-interest dragon name, but this page deliberately stays conservative until the game data can be verified.',
    strengths: [
      'High future search value.',
      'Useful for separating confirmed strategy from lore-driven assumptions.',
    ],
    cautions: [
      'No verified commands, habits, unlock path, or role in the MVP.',
      'Keep in Data Pending until screenshots or official data confirm details.',
    ],
    commands: ['Data pending'],
    habits: ['Data pending'],
    sourceConfidence: 'pending',
    sources: [sources.fandom],
    lastChecked: CHECKED_AT,
  },
];

export function getDragon(slug: string) {
  return dragons.find((dragon) => dragon.slug === slug);
}
