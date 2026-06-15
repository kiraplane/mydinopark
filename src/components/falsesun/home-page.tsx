import {
  AdsterraAdFrame,
  AdsterraNativeBanner,
} from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedContentWarnings,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
  getLocalizedSiteDescription,
} from '@/data/falsesun/localized';
import { siteFacts } from '@/data/falsesun/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Download,
  Film,
  Gamepad2,
  HeartPulse,
  ListChecks,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export function FalseSunHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
  const primaryLinks = [
    {
      ...content.primaryLinks.play,
      href: '/play-online',
      icon: Gamepad2,
    },
    {
      ...content.primaryLinks.allEndings,
      href: '/all-endings',
      icon: ListChecks,
    },
    {
      ...content.primaryLinks.ending20,
      href: '/ending-20',
      icon: Sparkles,
    },
    {
      ...content.primaryLinks.silas,
      href: '/silas-route',
      icon: HeartPulse,
    },
    {
      ...content.primaryLinks.miniGames,
      href: '/mini-games',
      icon: Film,
    },
  ];
  const secondaryLinks = [
    {
      ...content.secondaryLinks.kyle,
      href: '/kyle-route',
      icon: BookOpen,
    },
    {
      ...content.secondaryLinks.download,
      href: '/download',
      icon: Download,
    },
    {
      ...content.secondaryLinks.itchIo,
      href: '/itch-io',
      icon: Download,
    },
    {
      ...content.secondaryLinks.warnings,
      href: '/content-warnings',
      icon: ShieldAlert,
    },
  ];
  const contentWarnings = getLocalizedContentWarnings(locale);
  const featuredGuides = getLocalizedFeaturedGuides(locale);
  const gameFacts = getLocalizedGameFacts(locale);
  const siteDescription = getLocalizedSiteDescription(locale);

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteFacts.domain}/#website`,
        name: siteFacts.siteName,
        url: siteFacts.domain,
        description: siteDescription,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: {
          '@type': 'Person',
          name: siteFacts.creator,
        },
        applicationCategory: 'Game',
        genre: ['Visual Novel', 'Horror', 'Romance'],
        gamePlatform: ['Web Browser', 'Windows', 'macOS', 'Linux', 'Android'],
        url: siteFacts.officialItchUrl,
      },
    ],
  };

  return (
    <div className="bg-[#0A0F0C] text-[#F7E8C9]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#493A34] border-b bg-[linear-gradient(135deg,#0A0F0C_0%,#111612_58%,#201418_100%)]">
        <div className="absolute inset-x-0 bottom-0 h-px bg-[#D9B56A]/30" />

        <Container className="relative px-4 py-14 md:py-20 lg:min-h-[560px] lg:py-24">
          <div className="max-w-3xl space-y-6">
            <Badge className="bg-[#D9B56A] text-[#15110B]">
              {content.badge}
            </Badge>
            <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
              {content.title}
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-[#E1D2B9] md:text-xl">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#D9B56A] text-[#15110B] hover:bg-[#E7C77C]"
              >
                <LocaleLink href="/all-endings">
                  {content.primaryCta}
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#E7C77C] bg-[#0A0F0C]/50 text-[#F7E8C9] hover:bg-[#1B231D]"
              >
                <LocaleLink href="/ending-20">{content.ending20Cta}</LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#E7C77C] bg-[#0A0F0C]/50 text-[#F7E8C9] hover:bg-[#1B231D]"
              >
                <LocaleLink href="/play-online">
                  <Gamepad2 className="size-4" />
                  {content.playCta}
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#E7C77C] bg-[#0A0F0C]/50 text-[#F7E8C9] hover:bg-[#1B231D]"
              >
                <LocaleLink href="/itch-io">
                  <Download className="size-4" />
                  {content.itchCta}
                </LocaleLink>
              </Button>
            </div>
            <p className="text-sm leading-6 text-[#C7BAA7]">
              {content.scopeNote}
            </p>
          </div>

          <div className="mt-12 grid gap-3 md:grid-cols-2 xl:grid-cols-5">
            {primaryLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#493A34] bg-[#111612]/90 p-4 backdrop-blur transition hover:border-[#D9B56A] hover:bg-[#182019]"
              >
                <item.icon className="size-6 text-[#D9B56A]" />
                <h2 className="mt-3 font-display text-lg font-bold">
                  {item.title}
                </h2>
                <p className="mt-1 text-sm leading-6 text-[#C7BAA7]">
                  {item.body}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <AdsterraNativeBanner className="border-[#493A34] border-b bg-[#0A0F0C]" />

      <section className="border-[#493A34] border-b bg-[#111612] py-12">
        <Container className="grid gap-6 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="font-semibold uppercase tracking-[0.18em] text-[#D9B56A]">
              {content.siteShapeEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.siteShapeTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#C7BAA7]">
              {content.siteShapeBody}
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {secondaryLinks.map((item) => (
              <LocaleLink
                key={item.href}
                href={item.href}
                className="rounded-lg border border-[#493A34] bg-[#0D1310] p-5 transition hover:border-[#D9B56A]"
              >
                <item.icon className="size-7 text-[#6EA69A]" />
                <h3 className="mt-4 font-display text-xl font-bold">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[#C7BAA7]">
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
            <p className="font-semibold uppercase tracking-[0.18em] text-[#D9B56A]">
              {content.endingEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.endingTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#C7BAA7]">
              {content.endingBody}
            </p>
          </div>
          <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
            {content.coreRouteItems.slice(0, 6).map((item) => (
              <LocaleLink
                key={item.keyword}
                href={item.route}
                className="rounded-lg border border-[#493A34] bg-[#111612] p-4 transition hover:border-[#D9B56A]"
              >
                <div className="flex items-center justify-between gap-3">
                  <Badge
                    variant="outline"
                    className="border-[#D9B56A]/60 text-[#F7E8C9]"
                  >
                    {item.priority}
                  </Badge>
                  <span className="text-xs uppercase tracking-[0.14em] text-[#6EA69A]">
                    {item.keyword}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-bold">
                  {item.label}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#C7BAA7]">
                  {item.intent}
                </p>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <AdsterraAdFrame
        slot="banner-300x250"
        className="border-[#493A34] border-b bg-[#0A0F0C] py-8"
        label
      />

      <section className="border-[#493A34] border-y bg-[#111612] py-12">
        <Container className="space-y-6 px-4">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="max-w-3xl">
              <p className="font-semibold uppercase tracking-[0.18em] text-[#D9B56A]">
                {content.coreGuidesEyebrow}
              </p>
              <h2 className="mt-2 font-display text-3xl font-black">
                {content.coreGuidesTitle}
              </h2>
            </div>
            <Button asChild variant="outline">
              <LocaleLink href="/guides">{content.allGuidesButton}</LocaleLink>
            </Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {featuredGuides.map((guide) => (
              <LocaleLink
                key={guide.slug}
                href={guide.path}
                className="overflow-hidden rounded-lg border border-[#493A34] bg-[#0D1310] transition hover:border-[#D9B56A]"
              >
                <div className="relative aspect-video border-[#493A34] border-b">
                  <Image
                    src={guide.coverImageUrl}
                    alt={`${guide.title} cover`}
                    fill
                    sizes="(min-width: 1280px) 380px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0C]/80 to-transparent" />
                  <Badge className="absolute top-4 left-4 bg-[#D9B56A] text-[#15110B]">
                    {guide.category}
                  </Badge>
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl font-bold">
                    {guide.title}
                  </h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-6 text-[#C7BAA7]">
                    {guide.summary}
                  </p>
                </div>
              </LocaleLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="grid gap-6 px-4 lg:grid-cols-2">
          <div className="rounded-lg border border-[#493A34] bg-[#111612] p-6">
            <h2 className="font-display text-2xl font-bold">
              {content.currentFactsTitle}
            </h2>
            <div className="mt-5 grid gap-3">
              {gameFacts.map((fact) => (
                <div
                  key={fact.label}
                  className="rounded-md border border-[#493A34] bg-[#0D1310] p-4"
                >
                  <h3 className="font-semibold text-[#F7E8C9]">{fact.label}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#C7BAA7]">
                    {fact.value}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#493A34] bg-[#111612] p-6">
            <h2 className="font-display text-2xl font-bold">
              {content.findPageTitle}
            </h2>
            <div className="mt-5 grid gap-3">
              {content.coreRouteItems.map((item) => (
                <LocaleLink
                  key={item.keyword}
                  href={item.route}
                  className="rounded-md border border-[#493A34] bg-[#0D1310] p-4 transition hover:border-[#D9B56A]"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge
                      variant="outline"
                      className="border-[#D9B56A]/60 text-[#F7E8C9]"
                    >
                      {item.priority}
                    </Badge>
                    <span className="text-sm font-semibold">{item.label}</span>
                  </div>
                  <p className="mt-2 text-sm leading-6 text-[#C7BAA7]">
                    {item.intent}
                  </p>
                </LocaleLink>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-[#493A34] border-t bg-[#111612] py-12">
        <Container className="px-4">
          <div className="rounded-lg border border-[#6F3A42] bg-[#201418] p-6">
            <h2 className="font-display text-2xl font-bold">
              {content.spoilerTitle}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {contentWarnings.map((warning) => (
                <Badge
                  key={warning}
                  variant="outline"
                  className="border-[#E7C77C]/50 text-[#F7E8C9]"
                >
                  {warning}
                </Badge>
              ))}
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-[#C7BAA7]">
              {content.spoilerBody}
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
