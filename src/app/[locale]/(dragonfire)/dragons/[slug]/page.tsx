import { FaqSection } from '@/components/dragonfire/faq-section';
import {
  ConfidenceBadge,
  TierBadge,
} from '@/components/dragonfire/status-badge';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { dragons, getDragon } from '@/data/dragonfire/dragons';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    dragons.map((dragon) => ({ locale, slug: dragon.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const dragon = getDragon(slug);

  if (!dragon) {
    return {};
  }

  return constructMetadata({
    title: `${dragon.name} Dragonfire Profile - Role, Tier and Upgrade Priority`,
    description: `${dragon.name} profile for Game of Thrones Dragonfire with role, launch-stage tier, best use, unlock notes, commands, habits, cautions, and source confidence.`,
    locale,
    pathname: `/dragons/${slug}`,
    image: '/dragonfire/og-image.png',
  });
}

export default async function DragonPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const dragon = getDragon(slug);

  if (!dragon) {
    notFound();
  }

  const faqs = [
    {
      question: `Is ${dragon.name} worth upgrading?`,
      answer: `${dragon.name} is currently marked as ${dragon.tier} with ${dragon.upgradePriority.toLowerCase()} upgrade priority. Use that as a launch-stage decision, not a final endgame verdict.`,
    },
    {
      question: `What is ${dragon.name} best for?`,
      answer: dragon.bestUse,
    },
    {
      question: `Are ${dragon.name} commands verified?`,
      answer:
        dragon.sourceConfidence === 'pending'
          ? 'Not yet. Commands and habits should be replaced with direct in-game data once verified.'
          : 'The profile has medium or better source confidence, but command numbers should still be checked after updates.',
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${dragon.name} Dragonfire Profile`,
    description: dragon.summary,
    dateModified: dragon.lastChecked,
  };

  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="rounded-lg border border-[#3A2721] bg-[#15110F] p-6">
          <div className="flex flex-wrap gap-2">
            <TierBadge tier={dragon.tier} />
            <ConfidenceBadge confidence={dragon.sourceConfidence} />
            <Badge className="bg-[#B91C1C] text-[#F7EFE3]">{dragon.role}</Badge>
          </div>
          <h1 className="mt-5 font-display text-4xl font-black md:text-6xl">
            {dragon.name}
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-[#B8A99A]">
            {dragon.summary}
          </p>
        </header>

        <section className="grid gap-5 lg:grid-cols-3">
          <div className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5">
            <h2 className="font-display text-2xl font-bold">Decision tags</h2>
            <div className="mt-4 space-y-3 text-sm leading-6 text-[#B8A99A]">
              <p>
                <strong className="text-[#F7EFE3]">Affinity:</strong>{' '}
                {dragon.affinity}
              </p>
              <p>
                <strong className="text-[#F7EFE3]">Unlock:</strong>{' '}
                {dragon.unlock}
              </p>
              <p>
                <strong className="text-[#F7EFE3]">Priority:</strong>{' '}
                {dragon.upgradePriority}
              </p>
            </div>
          </div>

          <div className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5">
            <h2 className="font-display text-2xl font-bold">Commands</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#B8A99A]">
              {dragon.commands.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5">
            <h2 className="font-display text-2xl font-bold">Habits</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#B8A99A]">
              {dragon.habits.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5">
            <h2 className="font-display text-2xl font-bold">Strengths</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#B8A99A]">
              {dragon.strengths.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5">
            <h2 className="font-display text-2xl font-bold">Cautions</h2>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-[#B8A99A]">
              {dragon.cautions.map((item) => (
                <li key={item}>- {item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5">
          <h2 className="font-display text-2xl font-bold">Sources</h2>
          <div className="mt-4 grid gap-3 md:grid-cols-2">
            {dragon.sources.map((source) => (
              <a
                key={source.url}
                href={source.url}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-[#3A2721] bg-[#0E0B0A] p-4 text-sm leading-6 text-[#B8A99A] transition hover:border-[#D6A03D]"
              >
                <strong className="block text-[#F7EFE3]">{source.label}</strong>
                <span>{source.note}</span>
              </a>
            ))}
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B91C1C] text-[#F7EFE3] hover:bg-[#DC2626]"
            >
              <LocaleLink href="/tier-list">Back to tier list</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/dragons">All dragons</LocaleLink>
            </Button>
          </div>
        </section>

        <FaqSection title={`${dragon.name} FAQ`} items={faqs} />
      </Container>
    </div>
  );
}
