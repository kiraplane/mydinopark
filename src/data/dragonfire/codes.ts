import { CHECKED_AT, sources } from './sources';
import type { GameCode } from './types';

export const codes: GameCode[] = [
  {
    code: 'NO VERIFIED ACTIVE CODES',
    reward: 'No reward confirmed',
    status: 'unverified',
    firstSeen: CHECKED_AT,
    lastChecked: CHECKED_AT,
    sourceLabel: sources.codesDemand.label,
    notes:
      'Code-search demand exists, but no active Game of Thrones: Dragonfire code was verified from official channels during this check.',
  },
];

export const activeCodes = codes.filter((code) => code.status === 'active');
export const expiredCodes = codes.filter((code) => code.status === 'expired');
export const unverifiedCodes = codes.filter(
  (code) => code.status === 'unverified'
);

export const codeCheckSummary = {
  checkedAt: CHECKED_AT,
  status: 'No verified active codes',
  sourcesChecked: [
    sources.wbLaunch,
    sources.googlePlay,
    sources.gameplay,
    sources.codesDemand,
  ],
  reviewNotes: [
    'Official launch, gameplay, store, and support-facing pages do not list a working redeem code.',
    'GamingonPhone tracks code demand but lists the active code table as TBA and says the game has no in-game redemption center at its June 4, 2026 check.',
    'Search results include unrelated games and similarly named code pages, so those entries are intentionally excluded.',
  ],
};
