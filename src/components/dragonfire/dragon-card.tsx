import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import type { Dragon } from '@/data/dragonfire/types';
import { LocaleLink } from '@/i18n/navigation';
import { Flame, Shield, Swords } from 'lucide-react';
import { ConfidenceBadge, TierBadge } from './status-badge';

export function DragonCard({ dragon }: { dragon: Dragon }) {
  return (
    <article className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5 shadow-sm transition hover:border-[#D6A03D]">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex flex-wrap gap-2">
            <TierBadge tier={dragon.tier} />
            <ConfidenceBadge confidence={dragon.sourceConfidence} />
          </div>
          <h2 className="mt-4 font-display text-2xl font-bold text-[#F7EFE3]">
            {dragon.name}
          </h2>
        </div>
        <div className="flex size-11 shrink-0 items-center justify-center rounded-md border border-[#3A2721] bg-[#211714] text-[#D6A03D]">
          {dragon.role === 'Defense' ? (
            <Shield className="size-5" />
          ) : dragon.role === 'Siege' || dragon.role === 'Alliance War' ? (
            <Swords className="size-5" />
          ) : (
            <Flame className="size-5" />
          )}
        </div>
      </div>

      <p className="mt-4 line-clamp-3 text-sm leading-6 text-[#B8A99A]">
        {dragon.summary}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        <Badge className="bg-[#B91C1C] text-[#F7EFE3]">{dragon.role}</Badge>
        <Badge variant="outline" className="border-[#4A4039] text-[#F7EFE3]">
          {dragon.upgradePriority} priority
        </Badge>
      </div>

      <div className="mt-5 grid gap-2 text-sm leading-6 text-[#B8A99A]">
        <p>
          <strong className="text-[#F7EFE3]">Best use:</strong> {dragon.bestUse}
        </p>
        <p>
          <strong className="text-[#F7EFE3]">Unlock:</strong> {dragon.unlock}
        </p>
      </div>

      <Button
        asChild
        className="mt-5 bg-[#D6A03D] text-[#110D0B] hover:bg-[#F0B64A]"
      >
        <LocaleLink href={`/dragons/${dragon.slug}`}>
          Open dragon profile
        </LocaleLink>
      </Button>
    </article>
  );
}
