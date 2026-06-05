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
    title: 'Game of Thrones Dragonfire Stronghold Guide - Upgrade Priority',
    description:
      'Plan Game of Thrones Dragonfire Stronghold upgrades, builders, resource buildings, troop infrastructure, Dragon Pit, and early breakpoints.',
    locale,
    pathname: '/stronghold',
    image: '/dragonfire/og-image.png',
  });
}

export default function StrongholdPage() {
  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Stronghold</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Stronghold Guide
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            Your Stronghold is the engine behind buildings, troop flow, dragon
            systems, campaign pressure, and alliance value. Idle builders are
            lost progress.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            [
              'Core first',
              'Push required stronghold and throne-room style upgrades first.',
            ],
            [
              'Economy next',
              'Resource buildings keep every later timer easier to fund.',
            ],
            [
              'Troops when needed',
              'Train for campaign and alliance objectives, not random losses.',
            ],
            [
              'Dragon systems',
              'Upgrade dragon systems when one main dragon can use them.',
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
            <a href={sources.stronghold.url} target="_blank" rel="noreferrer">
              Official Stronghold guide
            </a>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/resources">Resource guide</LocaleLink>
          </Button>
        </div>
      </Container>
    </div>
  );
}
