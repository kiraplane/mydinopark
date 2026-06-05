import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts, sources } from '@/data/dragonfire/sources';
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
    title: 'Game of Thrones Dragonfire Alliance Guide - Factions and War',
    description:
      'Learn Game of Thrones Dragonfire alliance basics, faction goals, alliance persistence, help timers, defense, and campaign coordination.',
    locale,
    pathname: '/alliances',
    image: '/dragonfire/og-image.png',
  });
}

export default function AlliancesPage() {
  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Alliances</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Alliance Guide
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            Alliances are progression infrastructure: help timers, chat,
            defense, faction objectives, and long-term identity across Reigns.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            [
              'Join early',
              'Use Alliance Finder instead of waiting until you are attacked.',
            ],
            [
              'Use help timers',
              'Alliance activity makes building and research tempo easier.',
            ],
            [
              'Follow calls',
              'Gather, reinforce, and fight where the objective needs bodies.',
            ],
            [
              'Plan Reigns',
              'Alliances persist, but faction direction can change.',
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

        <section className="rounded-lg border border-[#3A2721] bg-[#15110F] p-6">
          <h2 className="font-display text-2xl font-bold">Official source</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#B8A99A]">
            Official Dragonfire guidance says alliances are persistent across
            Reigns, while factions can fluctuate. Use the official page for the
            latest wording before making alliance-wide decisions.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B91C1C] text-[#F7EFE3] hover:bg-[#DC2626]"
            >
              <a href={sources.alliances.url} target="_blank" rel="noreferrer">
                Official alliance guide
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/reigns">Reigns guide</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <a
                href={officialGameFacts.supportUrl}
                target="_blank"
                rel="noreferrer"
              >
                Support hub
              </a>
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
