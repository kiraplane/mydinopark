import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeCopyButton } from '@/components/utdx/code-copy-button';
import { FaqSection } from '@/components/utdx/faq-section';
import { activeCodes } from '@/data/utdx/codes';
import { guides } from '@/data/utdx/guides';
import { officialGameFacts } from '@/data/utdx/sources';
import { featuredUnits, universalFestUnits } from '@/data/utdx/units';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  ClipboardList,
  Database,
  Gem,
  Sparkles,
  Trophy,
} from 'lucide-react';

const primaryLinks = [
  {
    title: 'Codes',
    label: 'Active UTDX codes',
    href: '/codes',
    icon: ClipboardList,
  },
  {
    title: 'Tier List',
    label: 'Best units to build',
    href: '/tier-list',
    icon: Trophy,
  },
  {
    title: 'Units',
    label: 'Text-only unit database',
    href: '/units',
    icon: Database,
  },
  {
    title: 'Universal Fest P2',
    label: 'Current update hub',
    href: '/updates/universal-fest-p2',
    icon: Sparkles,
  },
];

const routeCards = [
  {
    title: 'Traits and Rerolls',
    body: 'Stop wasting rerolls by matching traits to DPS, farm, support, and boss roles.',
    href: '/traits',
    icon: Sparkles,
  },
  {
    title: 'Relics',
    body: 'Compare Fusion, Fused Warrior, Monarch, Sorcerer, and other relic planning targets.',
    href: '/relics',
    icon: Gem,
  },
  {
    title: 'Merciless God Guide',
    body: 'Read the current Universal Fest P2 breakout guide before spending premium resources.',
    href: '/guides/merciless-god',
    icon: Trophy,
  },
  {
    title: 'Beginner Guide',
    body: 'A practical first-session route for codes, story progress, units, traits, and relics.',
    href: '/guides/beginner-guide',
    icon: BookOpen,
  },
];

export function UtdxHomePage() {
  const highlightedCodes = activeCodes.slice(0, 5);
  const latestGuides = guides.slice(0, 3);
  const topUnits = featuredUnits.slice(0, 6);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: officialGameFacts.siteName,
    url: officialGameFacts.canonicalUrl,
    description:
      'Universal Tower Defense X Wiki with active codes, tier list rankings, best units, traits, relics, Merciless God, Universal Fest P2 updates, and beginner guides.',
  };

  return (
    <div className="bg-[#060B12] text-[#F8FAFC]">
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: static local schema data.
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="border-[#1E2A3D] border-b bg-[#080D16]">
        <Container className="px-4 py-14 md:py-18 lg:min-h-[520px] lg:py-20">
          <div className="mx-auto max-w-5xl space-y-6 text-center">
            <div className="space-y-5">
              <h1 className="mx-auto max-w-5xl font-display text-4xl font-black leading-tight tracking-normal sm:text-5xl md:text-7xl">
                <span className="block whitespace-nowrap">
                  Universal Tower Defense X
                </span>
                <span className="block">Wiki</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg leading-8 text-[#D7DCE7] md:text-xl">
                A fan-made UTDX guide hub for active codes, unit rankings,
                traits, relics, event updates, Merciless God, and beginner
                progression.
              </p>
            </div>

            <div className="mx-auto grid max-w-3xl gap-3 sm:grid-cols-2">
              {primaryLinks.map((item) => (
                <Button
                  key={item.href}
                  asChild
                  className="h-auto justify-center gap-3 border border-[#263349] bg-[#101827] px-4 py-3 text-center text-white hover:border-[#22D3EE] hover:bg-[#172135]"
                >
                  <LocaleLink href={item.href}>
                    <item.icon className="size-5 text-[#22D3EE]" />
                    <span>
                      <span className="block font-semibold">{item.title}</span>
                      <span className="block text-xs text-[#AAB2C0]">
                        {item.label}
                      </span>
                    </span>
                  </LocaleLink>
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-[#1E2A3D] border-b bg-[#0B1220] py-10">
        <Container className="grid gap-6 px-4 lg:grid-cols-[0.76fr_1.24fr]">
          <div className="max-w-2xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#22D3EE]">
              Active UTDX codes
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Copy codes before you summon or reroll
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#AAB2C0]">
              Keep the code block close to the homepage, but separate from the
              hero so the first screen stays focused on the wiki promise.
            </p>
            <Button
              asChild
              variant="outline"
              className="mt-5 border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#07111F]"
            >
              <LocaleLink href="/codes">
                Open all codes
                <ArrowRight className="size-4" />
              </LocaleLink>
            </Button>
          </div>

          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
            {highlightedCodes.map((item) => (
              <div
                key={item.code}
                className="grid grid-cols-[1fr_auto] items-center gap-3 rounded-lg border border-[#263349] bg-[#101827] p-4 shadow-sm"
              >
                <div className="min-w-0">
                  <p className="truncate font-mono text-sm font-bold text-white">
                    {item.code}
                  </p>
                  <p className="mt-1 line-clamp-1 text-xs text-[#AAB2C0]">
                    {item.reward}
                  </p>
                </div>
                <CodeCopyButton code={item.code} />
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-[#1E2A3D] border-b py-10">
        <Container className="grid gap-5 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.18em] text-[#27D8B8]">
              Universal Fest P2 Update
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Current update coverage starts with Merciless God
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#AAB2C0]">
              Universal Fest P2 adds Merciless God, Otherworld Disturbance
              content, Divine Wrath Ultra Boss, Freakybuu Incident Raid, relic
              changes, Universal Banner events, and new codes. The update hub
              collects the parts that affect summons, rerolls, and early
              resource decisions.
            </p>
            <Button
              asChild
              className="mt-5 bg-[#22D3EE] text-[#07111F] hover:bg-[#67E8F9]"
            >
              <LocaleLink href="/updates/universal-fest-p2">
                Read the update hub
              </LocaleLink>
            </Button>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {universalFestUnits.slice(0, 6).map((unit) => (
              <LocaleLink
                key={unit.slug}
                href={`/units/${unit.slug}`}
                className="rounded-lg border border-[#263349] bg-[#101827] p-4 transition hover:border-[#22D3EE]"
              >
                <Badge className="bg-[#8B5CF6] text-white">{unit.rarity}</Badge>
                <h3 className="mt-3 font-display text-lg font-bold">
                  {unit.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#AAB2C0]">
                  {unit.role} · {unit.upgradePriority} priority
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#22D3EE]">
              Core UTDX pages
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              Choose the page that matches the decision in front of you
            </h2>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
            {routeCards.map((item) => (
              <LocaleLink
                key={item.title}
                href={item.href}
                className="rounded-lg border border-[#2A3242] bg-[#171B25] p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-[#22D3EE]"
              >
                <item.icon className="mb-4 size-7 text-[#22D3EE]" />
                <h3 className="font-display text-lg font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#AAB2C0]">
                  {item.body}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="border-[#1E2A3D] border-y bg-[#0B1220] py-12 text-[#F8FAFC]">
        <Container className="space-y-6 px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-[#67E8F9]">
                Universal Tower Defense X Tier List
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                Best units and roles to compare first
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#07111F]"
            >
              <LocaleLink href="/tier-list">Open tier list</LocaleLink>
            </Button>
          </div>
          <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
            {topUnits.map((unit) => (
              <LocaleLink
                key={unit.slug}
                href={`/units/${unit.slug}`}
                className="rounded-lg border border-[#263349] bg-[#101827] p-4 transition hover:border-[#7C3AED]"
              >
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#22D3EE] text-[#07111F]">
                    Tier {unit.tier}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#334155] text-[#CBD5E1]"
                  >
                    {unit.rarity}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#334155] text-[#CBD5E1]"
                  >
                    {unit.role}
                  </Badge>
                </div>
                <h3 className="mt-3 font-display text-xl font-bold text-white">
                  {unit.name}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#AAB2C0]">
                  {unit.summary}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6 px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-[#27D8B8]">
                Latest Universal Tower Defense X guides
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                Short answers first, then practical decisions
              </h2>
            </div>
            <Button
              asChild
              variant="outline"
              className="border-[#22D3EE] text-[#22D3EE] hover:bg-[#22D3EE] hover:text-[#07111F]"
            >
              <LocaleLink href="/guides">Open all guides</LocaleLink>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {latestGuides.map((guide) => (
              <LocaleLink
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="rounded-lg border border-[#2A3242] bg-[#171B25] p-5 shadow-sm transition hover:border-[#22D3EE]"
              >
                <Badge className="bg-[#27D8B8] text-[#07111F]">
                  {guide.category}
                </Badge>
                <h3 className="mt-4 font-display text-xl font-bold">
                  {guide.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#AAB2C0]">
                  {guide.summary}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <Container className="px-4 pb-12">
        <FaqSection
          title="Universal Tower Defense X FAQ"
          items={[
            {
              question: 'What is Universal Tower Defense X?',
              answer:
                'Universal Tower Defense X is a Roblox tower defense experience where players summon units, fight enemy waves, upgrade and evolve units, and progress through story, raid, boss, and event content.',
            },
            {
              question: 'Is this an official Universal Tower Defense X Wiki?',
              answer:
                'No. This is an independent fan guide for codes, tier list decisions, units, traits, relics, and update notes.',
            },
            {
              question: 'Where do I find active UTDX codes?',
              answer:
                'Open the Codes page. It keeps active code candidates, event codes, rewards, copy buttons, and common failure reasons in one place.',
            },
            {
              question: 'What is the best unit in Universal Tower Defense X?',
              answer:
                'Merciless God, Ultimate Fused Warrior, Jinoo, and The Strongest units are top comparison points, but the best unit depends on your traits, relics, and current mode.',
            },
            {
              question: 'What should beginners read after redeeming codes?',
              answer:
                'Read the beginner guide, then compare the tier list and traits page before spending premium rerolls.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
