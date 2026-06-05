import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { codeCheckSummary } from '@/data/dragonfire/codes';
import { dragons } from '@/data/dragonfire/dragons';
import { guides, siteDescription } from '@/data/dragonfire/guides';
import { officialGameFacts } from '@/data/dragonfire/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Castle,
  ClipboardList,
  Flame,
  Shield,
  Sparkles,
  Swords,
} from 'lucide-react';
import Image from 'next/image';
import { DragonCard } from './dragon-card';
import { LastUpdated } from './last-updated';

const primaryLinks = [
  {
    title: 'Codes',
    body: codeCheckSummary.status,
    href: '/codes',
    icon: ClipboardList,
  },
  {
    title: 'Tier List',
    body: 'Launch-stage dragon ranking',
    href: '/tier-list',
    icon: Sparkles,
  },
  {
    title: 'Beginner Guide',
    body: 'First-day route and mistakes',
    href: '/guides/beginner-guide',
    icon: BookOpen,
  },
  {
    title: 'Campaign Reset',
    body: 'What to finish before Reigns move',
    href: '/campaigns/reset-guide',
    icon: Shield,
  },
];

const topicLinks = [
  {
    title: 'Dragons',
    body: 'Syrax, Caraxes, Vhagar, Seasmoke, and pending profiles.',
    href: '/dragons',
    icon: Flame,
  },
  {
    title: 'Resources',
    body: 'Wood, stone, iron, grain, meat, gold, and gem spending rules.',
    href: '/resources',
    icon: Castle,
  },
  {
    title: 'Alliances',
    body: 'Faction goals, alliance persistence, help timers, and war planning.',
    href: '/alliances',
    icon: Swords,
  },
];

export function DragonfireHomePage() {
  const featuredDragons = dragons.slice(0, 3);
  const latestGuides = guides.slice(0, 4);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${officialGameFacts.domain}/#website`,
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        description: siteDescription,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        gamePlatform: ['Android', 'iOS'],
        applicationCategory: 'Game',
        genre: ['4X Strategy', 'RTS', 'Mobile Strategy'],
        url: officialGameFacts.officialWebsiteUrl,
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
          availability: 'https://schema.org/InStock',
          url: officialGameFacts.googlePlayUrl,
        },
      },
    ],
  };

  return (
    <div className="bg-[#080707] text-[#F7EFE3]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#3A2721] border-b">
        <Image
          src="/dragonfire/hero.png"
          alt="Dragonfire strategy map with dragon silhouette"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,7,0.95)_0%,rgba(8,7,7,0.82)_38%,rgba(8,7,7,0.42)_70%,rgba(8,7,7,0.78)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[#080707] to-transparent" />

        <Container className="relative px-4 py-16 md:py-24 lg:min-h-[650px] lg:py-28">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-[#D6A03D] text-[#110D0B]">
              Unofficial strategy wiki
            </Badge>
            <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              Game of Thrones Dragonfire Wiki
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#F1DCC8] md:text-xl">
              An unofficial strategy hub for dragons, codes, campaigns,
              resources, alliances, Reigns, and first-day progression.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#B91C1C] text-[#F7EFE3] hover:bg-[#DC2626]"
              >
                <LocaleLink href="/tier-list">
                  Open tier list
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#D6A03D] bg-[#080707]/40 text-[#F7EFE3] hover:bg-[#D6A03D] hover:text-[#110D0B]"
              >
                <LocaleLink href="/guides/beginner-guide">
                  Start beginner guide
                </LocaleLink>
              </Button>
            </div>
            <LastUpdated date={codeCheckSummary.checkedAt} />
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {primaryLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#3A2721] bg-[#15110F]/88 p-4 backdrop-blur transition hover:border-[#D6A03D] hover:bg-[#211714]/92"
              >
                <item.icon className="size-6 text-[#D6A03D]" />
                <h2 className="mt-3 font-display text-lg font-bold">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#B8A99A]">
                  {item.body}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-[#3A2721] border-b bg-[#0E0B0A] py-12">
        <Container className="grid gap-6 px-4 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.18em] text-[#D6A03D]">
              Quick answer
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Do not spend like the data is finished
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#B8A99A]">
              Dragonfire launched globally on June 2, 2026, so early rankings
              should be useful but honest. This wiki separates verified
              strategy, provisional recommendations, and data still waiting for
              in-game confirmation.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {topicLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5 transition hover:border-[#D6A03D]"
              >
                <item.icon className="size-7 text-[#B91C1C]" />
                <h3 className="mt-4 font-display text-xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#B8A99A]">
                  {item.body}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#D6A03D]">
              Featured dragons
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Build one main dragon before spreading materials
            </h2>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {featuredDragons.map((dragon) => (
              <DragonCard key={dragon.slug} dragon={dragon} />
            ))}
          </div>
        </Container>
      </section>

      <section className="border-[#3A2721] border-y bg-[#0E0B0A] py-12">
        <Container className="space-y-6 px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-[#D6A03D]">
                Latest guides
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                Read the decision page before spending
              </h2>
            </div>
            <Button asChild variant="outline">
              <LocaleLink href="/guides">All guides</LocaleLink>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {latestGuides.map((guide) => (
              <LocaleLink
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5 transition hover:border-[#D6A03D]"
              >
                <Badge className="bg-[#B91C1C] text-[#F7EFE3]">
                  {guide.category}
                </Badge>
                <h3 className="mt-4 font-display text-lg font-bold">
                  {guide.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#B8A99A]">
                  {guide.summary}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
