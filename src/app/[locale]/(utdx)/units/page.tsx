import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { UnitsBrowser } from '@/components/utdx/units-browser';
import { units } from '@/data/utdx/units';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Universal Tower Defense X Units - Roles, Traits and Builds',
    description:
      'Browse Universal Tower Defense X units by name, rarity, role, tier, placement, traits, relics, update tag, and build priority.',
    locale,
    pathname: '/units',
  });
}

export default function UnitsPage() {
  const roleCount = new Set(units.map((unit) => unit.role)).size;
  const rarityCount = new Set(units.map((unit) => unit.rarity)).size;
  const tierCount = new Set(units.map((unit) => unit.tier)).size;

  return (
    <div className="bg-[#0F1117] py-12 text-[#F8FAFC]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#27D8B8] text-[#07111F]">Units</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Universal Tower Defense X Units
          </h1>
          <p className="text-lg leading-8 text-[#D7DCE7]">
            Browse UTDX units by name, rarity, role, placement, traits, relics,
            and update relevance. This MVP intentionally uses text-only unit
            cards when safe character icons are not available.
          </p>
          <div className="grid gap-3 text-sm md:grid-cols-4">
            {[
              ['Units', units.length],
              ['Roles', roleCount],
              ['Rarities', rarityCount],
              ['Tier states', tierCount],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-md border border-[#2A3242] bg-[#171B25] px-3 py-2"
              >
                <span className="block text-[#AAB2C0]">{label}</span>
                <strong className="font-display text-xl text-white">
                  {value}
                </strong>
              </div>
            ))}
          </div>
        </header>

        <UnitsBrowser units={units} />

        <section className="rounded-lg border border-[#2A3242] bg-[#171B25] p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-white">
            Reading the UTDX unit database
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#AAB2C0] md:grid-cols-3">
            <p>
              Start with role: DPS, support, farm, control, boss, utility, or
              hybrid.
            </p>
            <p>
              Check whether the unit has a realistic trait and relic path before
              investing.
            </p>
            <p>
              Treat Watchlist units as update leads until enough gameplay
              evidence exists.
            </p>
          </div>
        </section>
      </Container>
    </div>
  );
}
