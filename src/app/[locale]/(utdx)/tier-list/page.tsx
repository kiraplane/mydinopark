import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaqSection } from '@/components/utdx/faq-section';
import { tierEntries } from '@/data/utdx/tier-list';
import type { Unit, UnitTier } from '@/data/utdx/types';
import { units } from '@/data/utdx/units';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const tiers: UnitTier[] = ['S', 'A', 'B', 'C', 'Watchlist'];
const tierNotes: Record<UnitTier, string> = {
  S: 'Top-priority UTDX units to compare before heavy summons, traits, and relic farming.',
  A: 'Strong units that are often worth building when they fit your account and mode.',
  B: 'Useful units that need clearer team context before major investment.',
  C: 'Low-priority units unless they fill a very specific role.',
  Watchlist:
    'Current update units or forms that need more evidence before a firm ranking.',
};

const tierEntryBySlug = tierEntries.reduce((map, entry) => {
  const list = map.get(entry.unitSlug) || [];
  list.push(entry);
  map.set(entry.unitSlug, list);
  return map;
}, new Map<string, typeof tierEntries>());

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Universal Tower Defense X Tier List - Best Units to Build',
    description:
      'Universal Tower Defense X tier list for best units, Merciless God, Universal Fest P2 units, Boundless carries, Synchro paths, traits, relics, and upgrade priority.',
    locale,
    pathname: '/tier-list',
  });
}

function getReason(unit: Unit) {
  const notes = tierEntryBySlug.get(unit.slug) || [];
  return (
    notes[0]?.reason ||
    `${unit.name} is a ${unit.rarity} ${unit.role.toLowerCase()} unit. Compare its role, traits, relic fit, and obtainment before spending resources.`
  );
}

export default function TierListPage() {
  return (
    <div className="bg-[#0F1117] py-12 text-[#F8FAFC]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#22D3EE] text-[#07111F]">Tier list</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Universal Tower Defense X Tier List
          </h1>
          <p className="text-lg leading-8 text-[#D7DCE7]">
            Use this UTDX tier list before you summon, reroll traits, or farm
            relics. The ranking focuses on unit role, update relevance,
            obtainment, trait value, and whether a unit solves a real story,
            raid, boss, or event problem.
          </p>
        </header>

        <section className="rounded-lg border border-[#2A3242] bg-[#171B25] p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-white">
            How to use this UTDX tier list
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#AAB2C0] md:grid-cols-3">
            <p>
              1. Start with your blocker: damage, support, farm, or boss DPS.
            </p>
            <p>
              2. Check whether the unit has a realistic trait and relic path.
            </p>
            <p>
              3. Treat Watchlist units as current-update leads, not final math.
            </p>
          </div>
        </section>

        <div className="grid gap-4">
          {tiers.map((tier) => {
            const entries = units.filter((item) => item.tier === tier);
            if (entries.length === 0) return null;

            return (
              <section
                key={tier}
                className="rounded-lg border border-[#2A3242] bg-[#171B25] shadow-sm"
              >
                <div className="flex items-center gap-3 border-[#2A3242] border-b p-5">
                  <div className="flex size-12 items-center justify-center rounded-lg bg-[#22D3EE] font-display text-2xl font-black text-[#07111F]">
                    {tier === 'Watchlist' ? '?' : tier}
                  </div>
                  <div>
                    <h2 className="font-display text-2xl font-bold text-white">
                      {tier} tier units
                    </h2>
                    <p className="text-sm text-[#AAB2C0]">
                      {entries.length} entries · {tierNotes[tier]}
                    </p>
                  </div>
                </div>
                <div className="grid gap-0 divide-y divide-[#2A3242]">
                  {entries.map((unit) => {
                    const notes = tierEntryBySlug.get(unit.slug) || [];

                    return (
                      <div
                        key={unit.slug}
                        className="grid gap-4 p-5 md:grid-cols-[220px_1fr_auto] md:items-center"
                      >
                        <div className="min-w-0">
                          <LocaleLink
                            href={`/units/${unit.slug}`}
                            className="font-display text-xl font-bold text-white hover:text-[#22D3EE]"
                          >
                            {unit.name}
                          </LocaleLink>
                          <div className="mt-2 flex flex-wrap gap-2">
                            <Badge className="bg-[#27D8B8] text-[#07111F]">
                              {unit.role}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="border-[#485366] text-[#D7DCE7]"
                            >
                              {unit.rarity}
                            </Badge>
                            <Badge
                              variant="outline"
                              className="border-[#485366] text-[#D7DCE7]"
                            >
                              {unit.placement}
                            </Badge>
                          </div>
                        </div>
                        <div className="space-y-2 text-sm leading-6 text-[#AAB2C0]">
                          <p>{getReason(unit)}</p>
                          <p>
                            <strong className="text-white">Traits:</strong>{' '}
                            {unit.bestTraits.join(', ')}
                          </p>
                          <p>
                            <strong className="text-white">Relics:</strong>{' '}
                            {unit.bestRelics.join(', ')}
                          </p>
                        </div>
                        <div className="flex flex-wrap gap-2 md:justify-end">
                          {notes.slice(0, 2).map((note) => (
                            <Badge
                              key={note.mode}
                              variant="outline"
                              className="border-[#485366] text-[#D7DCE7]"
                            >
                              {note.mode}
                            </Badge>
                          ))}
                          <Button asChild variant="outline" size="sm">
                            <LocaleLink href={`/units/${unit.slug}`}>
                              Profile
                            </LocaleLink>
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>

        <section className="rounded-lg border border-[#2A3242] bg-[#171B25] p-6">
          <h2 className="font-display text-2xl font-bold text-white">
            Ranking rules
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#AAB2C0] md:grid-cols-2">
            <p>
              This list values current update relevance, trait fit, relic fit,
              obtainment, and whether a unit helps with story, raids, bosses, or
              event farming.
            </p>
            <p>
              New Universal Fest P2 units can start in Watchlist or A tier until
              more gameplay evidence is available. That is better than forcing a
              fake exact ranking.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild className="bg-[#22D3EE] text-[#07111F]">
              <LocaleLink href="/units">Open units database</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/traits">Compare traits</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/relics">Compare relics</LocaleLink>
            </Button>
          </div>
        </section>

        <FaqSection
          items={[
            {
              question: 'What is the best unit in Universal Tower Defense X?',
              answer:
                'Merciless God, Ultimate Fused Warrior, Jinoo, and The Strongest units are top comparison points, but the best unit depends on your trait, relic, and mode needs.',
            },
            {
              question: 'Should beginners only build S-tier units?',
              answer:
                'No. Beginners should build the best unit they can support with traits, relics, and upgrades. An A-tier unit with a practical build can outperform an unsupported S-tier pull.',
            },
            {
              question: 'What does Watchlist mean?',
              answer:
                'Watchlist means the unit is important enough to track, often because it is new, but there is not enough evidence for a final ranking yet.',
            },
            {
              question: 'Are support units worth building?',
              answer:
                'Yes, when they improve the carry, economy, or clear consistency. Not every slot should be pure DPS.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
