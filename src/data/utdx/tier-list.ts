import { sources } from './sources';
import type { TierEntry } from './types';

export const tierEntries: TierEntry[] = [
  {
    unitSlug: 'merciless-god',
    tier: 'S',
    mode: 'overall',
    reason:
      'Merciless God is the current headline Universal Fest P2 unit, so it deserves top-priority tracking for players deciding where to spend event resources.',
    confidence: 'medium',
    sources: [sources.fandomHome, sources.fandomUnits, sources.bloxInformer],
  },
  {
    unitSlug: 'ultimate-fused-warrior',
    tier: 'S',
    mode: 'overall',
    reason:
      'Ultimate Fused Warrior has top-rarity placement and clear fusion/relic synergy, making it one of the safest premium DPS pages to prioritize.',
    confidence: 'medium',
    sources: [sources.fandomUnits],
  },
  {
    unitSlug: 'angel-born-in-hell-unrivaled',
    tier: 'S',
    mode: 'story',
    reason:
      'The Unrivaled form is a current-update premium unit and should be evaluated before spending on lower forms.',
    confidence: 'medium',
    sources: [sources.fandomHome, sources.fandomUnits],
  },
  {
    unitSlug: 'jinoo-shadow-monarch',
    tier: 'S',
    mode: 'overall',
    reason:
      'Jinoo, Shadow Monarch is a Boundless unit and a clean benchmark for comparing current-event carries against established premium units.',
    confidence: 'medium',
    sources: [sources.fandomUnits],
  },
  {
    unitSlug: 'the-strongest-of-today',
    tier: 'S',
    mode: 'boss',
    reason:
      'The Strongest of Today belongs in the top comparison set for players evaluating late-game DPS and premium trait investment.',
    confidence: 'medium',
    sources: [sources.fandomUnits],
  },
  {
    unitSlug: 'the-strongest-in-history',
    tier: 'S',
    mode: 'boss',
    reason:
      'The Strongest in History is best treated as a high-end boss and late-game unit until current patch testing suggests otherwise.',
    confidence: 'medium',
    sources: [sources.fandomUnits],
  },
  {
    unitSlug: 'revolutionary-chief-spade',
    tier: 'A',
    mode: 'support',
    reason:
      'Revolutionary Chief (Spade) is valuable as a synchro planning example and support-profile unit, but requires prerequisites.',
    confidence: 'medium',
    sources: [sources.fandomTierList],
  },
  {
    unitSlug: 'unparalleled-armor',
    tier: 'A',
    mode: 'story',
    reason:
      'Unparalleled Armor is a synchro target worth building around when the account already has the source units.',
    confidence: 'medium',
    sources: [sources.fandomTierList],
  },
  {
    unitSlug: 'majestic-armor',
    tier: 'A',
    mode: 'story',
    reason:
      'Majestic Armor is useful for explaining the synchro path and should sit below more direct premium carries until more evidence is available.',
    confidence: 'medium',
    sources: [sources.fandomTierList],
  },
  {
    unitSlug: 'fused-warrior',
    tier: 'A',
    mode: 'early',
    reason:
      'Fused Warrior is update-relevant and ties into Fused Warrior relics, but should be compared with stronger fusion forms before heavy spending.',
    confidence: 'medium',
    sources: [sources.fandomHome, sources.fandomUnits],
  },
  {
    unitSlug: 'fused-warrior-earrings',
    tier: 'A',
    mode: 'early',
    reason:
      'Fused Warrior (Earrings) supports the same fusion build cluster and is likely useful when top-rarity options are missing.',
    confidence: 'medium',
    sources: [sources.fandomHome, sources.fandomUnits],
  },
  {
    unitSlug: 'limit-breaker-prince-marked',
    tier: 'A',
    mode: 'boss',
    reason:
      'Limit Breaker Prince (Marked) is a current-update boss/DPS candidate, but exact placement should stay conservative until more data lands.',
    confidence: 'medium',
    sources: [sources.fandomHome, sources.fandomUnits],
  },
  {
    unitSlug: 'super-roku-third-ascension',
    tier: 'A',
    mode: 'overall',
    reason:
      'Super Roku (Third Ascension) is relevant to the Universal Fest P2 Saiyan cluster and deserves A-tier watch coverage.',
    confidence: 'medium',
    sources: [sources.fandomHome, sources.fandomUnits],
  },
  {
    unitSlug: 'the-drink-super-rage',
    tier: 'A',
    mode: 'overall',
    reason:
      'The Drink (Super Rage) is a current-update unit that should be included in serious event planning but still needs current meta validation.',
    confidence: 'medium',
    sources: [sources.fandomHome, sources.fandomUnits],
  },
];
