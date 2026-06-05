import type { CampaignResetItem } from './types';

export const campaignResetItems: CampaignResetItem[] = [
  {
    system: 'Account identity',
    likelyStatus: 'Permanent',
    playerAction:
      'Keep your account secure and avoid switching devices without linking correctly.',
    notes:
      'Account-level identity is not described as a seasonal reset target, but players should still use official account systems.',
    confidence: 'medium',
  },
  {
    system: 'Alliance identity',
    likelyStatus: 'Permanent',
    playerAction:
      'Join an active alliance early because alliances persist across Reigns.',
    notes:
      'Official faction/alliance guidance says alliances are persistent across Reigns, while Factions can fluctuate.',
    confidence: 'high',
  },
  {
    system: 'Faction assignment',
    likelyStatus: 'Seasonal',
    playerAction:
      'Coordinate with your Alliance Leader before a new Reign begins.',
    notes:
      'Faction choice can change across Reigns and is influenced by alliance leadership decisions.',
    confidence: 'high',
  },
  {
    system: 'Campaign stage objectives',
    likelyStatus: 'Seasonal',
    playerAction:
      'Finish stage objectives before the campaign window closes instead of saving them for later.',
    notes:
      'Campaigns and Reigns are presented as seasonal structures, so objective timing matters.',
    confidence: 'medium',
  },
  {
    system: 'Dragon growth',
    likelyStatus: 'Mixed',
    playerAction:
      'Invest in one main dragon, but record exact carry-over behavior after each Reign.',
    notes:
      'Official pages describe raising dragons as account progression, but exact reset details should be verified in-game.',
    confidence: 'pending',
  },
  {
    system: 'World map tiles',
    likelyStatus: 'Seasonal',
    playerAction:
      'Treat tile control as a campaign objective, not permanent ownership.',
    notes:
      'Territory and Seats of Power are tied to Faction and Campaign goals.',
    confidence: 'medium',
  },
  {
    system: 'Unspent basic resources',
    likelyStatus: 'Data Pending',
    playerAction:
      'Spend toward meaningful stronghold and troop breakpoints before reset windows.',
    notes:
      'Exact resource carry-over rules require direct in-game confirmation.',
    confidence: 'pending',
  },
];

export const campaignChecklist = [
  'Confirm your alliance and faction plan before the next Reign begins.',
  'Finish personal Campaign Stage Objectives that unlock immediate rewards.',
  'Spend basic resources on stronghold or troop breakpoints instead of tiny scattered upgrades.',
  'Keep dragon upgrade materials for one main dragon unless the event clearly rewards a second project.',
  'Screenshot any reset message so the wiki can improve the carry-over table.',
];
