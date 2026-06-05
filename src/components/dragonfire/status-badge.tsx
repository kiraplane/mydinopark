import { Badge } from '@/components/ui/badge';
import type { Confidence, DragonTier } from '@/data/dragonfire/types';

const confidenceClassName: Record<Confidence, string> = {
  high: 'border-[#2F6B35] bg-[#15351D] text-[#B9F6C8]',
  medium: 'border-[#7A5520] bg-[#342414] text-[#F6D58B]',
  low: 'border-[#6B2F2F] bg-[#351515] text-[#F5B5B5]',
  pending: 'border-[#4A4039] bg-[#211714] text-[#B8A99A]',
};

const tierClassName: Record<DragonTier, string> = {
  Recommended: 'border-[#D6A03D] bg-[#3B2710] text-[#F7D98B]',
  Situational: 'border-[#8A4F22] bg-[#2C1A10] text-[#F2B879]',
  'Data Pending': 'border-[#4A4039] bg-[#211714] text-[#B8A99A]',
};

export function ConfidenceBadge({ confidence }: { confidence: Confidence }) {
  return (
    <Badge variant="outline" className={confidenceClassName[confidence]}>
      {confidence === 'pending' ? 'Data pending' : `${confidence} confidence`}
    </Badge>
  );
}

export function TierBadge({ tier }: { tier: DragonTier }) {
  return (
    <Badge variant="outline" className={tierClassName[tier]}>
      {tier}
    </Badge>
  );
}
