import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { sources } from '@/data/dragonfire/sources';
import { LocaleLink } from '@/i18n/navigation';
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
    title: 'Game of Thrones Dragonfire Factions - Reign and Alliance Planning',
    description:
      'Understand Game of Thrones Dragonfire factions, Reign shifts, alliance leader choices, Seats of Power, and campaign objectives.',
    locale,
    pathname: '/factions',
    image: '/dragonfire/og-image.png',
  });
}

export default function FactionsPage() {
  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Factions</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Factions
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            Factions shape Campaign Goals, Stage Objectives, Seats of Power, and
            the map pressure around your alliance. They can change between
            Reigns, so treat them as strategy context.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            [
              'Choose with your alliance',
              'Solo preference matters less than whether your alliance can coordinate.',
            ],
            [
              'Watch Seats of Power',
              'Faction success depends on map objectives, not only individual fights.',
            ],
            [
              'Prepare for change',
              'Factions can fluctuate across Reigns, so keep your plan flexible.',
            ],
          ].map(([title, body]) => (
            <article
              key={title}
              className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5"
            >
              <h2 className="font-display text-xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#B8A99A]">{body}</p>
            </article>
          ))}
        </section>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#B91C1C] text-[#F7EFE3] hover:bg-[#DC2626]"
          >
            <a href={sources.alliances.url} target="_blank" rel="noreferrer">
              Official factions guide
            </a>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/alliances">Alliance guide</LocaleLink>
          </Button>
        </div>
      </Container>
    </div>
  );
}
