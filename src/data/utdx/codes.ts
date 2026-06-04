import { CHECKED_AT, sources } from './sources';
import type { GameCode } from './types';

export const codes: GameCode[] = [
  {
    code: '3.0PartTwoUpdate!',
    reward: '30K Gold, 5K Gems, 25 Relic Rerolls, 50 Trait Rerolls',
    status: 'working',
    event: 'universal-fest-p2',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.fandomCodes, sources.gamesRadarCodes],
    notes:
      'Universal Fest P2 code candidate. Copy the punctuation exactly, including the exclamation mark.',
  },
  {
    code: 'FusionUpdate!',
    reward: '30K Gold, 20 Stat Locks, 50 Trait Rerolls, 25 Stat Rerolls',
    status: 'working',
    event: 'universal-fest-p2',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.fandomCodes, sources.proGameGuidesCodes],
    notes:
      'Best redeemed before trait or stat planning because the rewards support reroll decisions.',
  },
  {
    code: 'MercilessGodIsHere!',
    reward: '100K Gold, 30K Gems, 100 Trait Rerolls, 35K Universal Gems Part 2',
    status: 'working',
    event: 'universal-fest-p2',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.fandomCodes, sources.gamesRadarCodes],
    notes:
      'Directly tied to the Merciless God / Universal Fest P2 search spike.',
  },
  {
    code: 'NewBattlePass!!',
    reward: 'Event rewards and reroll resources',
    status: 'working',
    event: 'universal-fest-p2',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.fandomCodes],
    notes:
      'Use the double exclamation marks. Reward quantities should be trusted in-game if they differ.',
  },
  {
    code: 'UniverseFestDelay1!',
    reward: 'Universal Fest delay compensation rewards',
    status: 'working',
    event: 'universal-fest-p2',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.fandomCodes, sources.gamesRadarCodes],
    notes:
      'Part of the Universal Fest delay compensation batch. Try the delay codes together.',
  },
  {
    code: 'UniverseFestDelay2!',
    reward: 'Universal Fest delay compensation rewards',
    status: 'working',
    event: 'universal-fest-p2',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.fandomCodes, sources.gamesRadarCodes],
    notes:
      'If it fails, check level requirements, previous redemption, and exact punctuation.',
  },
  {
    code: 'UniverseFestDelay3!',
    reward: 'Trait Rerolls, Relic Rerolls, and Universal Gems Part 2',
    status: 'working',
    event: 'universal-fest-p2',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.fandomCodes],
    notes: 'Useful before deciding whether to reroll a Universal Fest P2 unit.',
  },
  {
    code: 'UniverseFestDelay4!',
    reward: 'Fragments, Trait Rerolls, and Zeny',
    status: 'working',
    event: 'universal-fest-p2',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.fandomCodes],
    notes:
      'Reward listings include fragment resources; in-game reward text is the final source of truth.',
  },
  {
    code: 'UniverseFestDelay5!',
    reward:
      'Universal Fragment, Frozen Fragments, Saiyan Fragments, Zen Beans, Trait Rerolls',
    status: 'working',
    event: 'universal-fest-p2',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.fandomCodes],
    notes:
      'A resource-heavy Universal Fest P2 delay code. Copy instead of typing manually.',
  },
  {
    code: '300KInterestedUtopia!',
    reward:
      'Ancient Shinobi, Trait Rerolls, Universal Gems, Gold, Luck Potions, Ultra Luck Potions, Kitsunox Struggle Key IV',
    status: 'working',
    event: 'general',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.fandomCodes, sources.gamesRadarCodes],
    notes:
      'Milestone code candidate with a long reward list; redeem before heavy summoning sessions.',
  },
  {
    code: 'WeLoveBerserker!',
    reward: 'Berserker and 50 Trait Rerolls',
    status: 'working',
    event: 'general',
    firstSeen: '2026-06',
    lastChecked: CHECKED_AT,
    sources: [sources.fandomCodes],
    notes:
      'Listed as active on the current Fandom code page. Use exact capitalization.',
  },
];

export const activeCodes = codes.filter((code) => code.status === 'working');
export const eventCodes = activeCodes.filter(
  (code) => code.event === 'universal-fest-p2'
);
export const expiredCodes = codes.filter((code) => code.status === 'expired');
