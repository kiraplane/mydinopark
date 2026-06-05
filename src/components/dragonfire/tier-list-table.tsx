import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { tierEntriesWithDragons } from '@/data/dragonfire/tier-list';
import type { DragonTier } from '@/data/dragonfire/types';
import { LocaleLink } from '@/i18n/navigation';
import { ConfidenceBadge, TierBadge } from './status-badge';

const tierOrder: DragonTier[] = ['Recommended', 'Situational', 'Data Pending'];

export function TierListTable() {
  return (
    <div className="space-y-5">
      {tierOrder.map((tier) => {
        const entries = tierEntriesWithDragons.filter(
          (entry) => entry.tier === tier && entry.dragon
        );

        if (entries.length === 0) {
          return null;
        }

        return (
          <section
            key={tier}
            className="overflow-hidden rounded-lg border border-[#3A2721] bg-[#15110F]"
          >
            <div className="flex flex-wrap items-center justify-between gap-3 border-[#3A2721] border-b p-5">
              <div>
                <TierBadge tier={tier} />
                <h2 className="mt-3 font-display text-2xl font-bold text-[#F7EFE3]">
                  {tier} dragons
                </h2>
              </div>
              <p className="max-w-2xl text-sm leading-6 text-[#B8A99A]">
                Launch-stage ranking based on early progression value, combat
                role, resource cost, and source confidence.
              </p>
            </div>

            <Table>
              <TableHeader className="bg-[#0E0B0A]">
                <TableRow className="border-[#3A2721]">
                  <TableHead className="min-w-[180px] px-5 text-[#D6A03D]">
                    Dragon
                  </TableHead>
                  <TableHead className="min-w-[220px] px-5 text-[#D6A03D]">
                    Best for
                  </TableHead>
                  <TableHead className="min-w-[320px] px-5 text-[#D6A03D]">
                    Ranking reason
                  </TableHead>
                  <TableHead className="min-w-[160px] px-5 text-[#D6A03D]">
                    Confidence
                  </TableHead>
                  <TableHead className="px-5 text-[#D6A03D]">Open</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {entries.map((entry) => {
                  const dragon = entry.dragon;
                  if (!dragon) return null;

                  return (
                    <TableRow
                      key={entry.dragonSlug}
                      className="border-[#3A2721] hover:bg-[#211714]"
                    >
                      <TableCell className="px-5 text-[#F7EFE3]">
                        <div className="font-display text-lg font-bold">
                          {dragon.name}
                        </div>
                        <div className="mt-2 flex flex-wrap gap-2">
                          <Badge className="bg-[#B91C1C] text-[#F7EFE3]">
                            {dragon.role}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="border-[#4A4039] text-[#F7EFE3]"
                          >
                            {entry.earlyValue} early
                          </Badge>
                        </div>
                      </TableCell>
                      <TableCell className="px-5 text-[#B8A99A]">
                        <div className="flex flex-wrap gap-2">
                          {entry.bestFor.map((item) => (
                            <Badge
                              key={item}
                              variant="outline"
                              className="border-[#4A4039] text-[#F7EFE3]"
                            >
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="whitespace-normal px-5 leading-6 text-[#B8A99A]">
                        {entry.rankingReason}
                      </TableCell>
                      <TableCell className="px-5">
                        <ConfidenceBadge confidence={entry.sourceConfidence} />
                      </TableCell>
                      <TableCell className="px-5">
                        <Button asChild variant="outline" size="sm">
                          <LocaleLink href={`/dragons/${dragon.slug}`}>
                            Profile
                          </LocaleLink>
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </section>
        );
      })}
    </div>
  );
}
