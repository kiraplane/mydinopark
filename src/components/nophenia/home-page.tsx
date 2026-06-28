import Container from '@/components/layout/container';
import { FaqSection } from '@/components/nophenia/faq-section';
import {
  QuickWikiLinks,
  WikiRouteSidebar,
} from '@/components/nophenia/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getHomeContent,
  getLocalizedFeaturedGuides,
  getLocalizedGameFacts,
  getLocalizedSiteDescription,
} from '@/data/nophenia/localized';
import { siteFacts } from '@/data/nophenia/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BadgeAlert,
  BookOpen,
  ExternalLink,
  Gamepad2,
  MapPinned,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const keywordLinks = [
  ['nophenia', '/'],
  ['nophenia wiki', '/'],
  ['nophenia guide', '/guides'],
  ['nophenia wiki guide', '/guides'],
  ['nophenia play online', '/play-online'],
  ['nophenia paly online', '/play-online'],
  ['nophenia beginner guide', '/guides/beginner-guide'],
  ['nophenia controls', '/guides/controls-and-comfort'],
  ['nophenia walkthrough', '/guides/walkthrough-ending'],
  ['nophenia ending explained', '/guides/walkthrough-ending'],
  ['nophenia 100% guide', '/guides/achievements-100-percent'],
  ['nophenia Steam', '/steam'],
  ['nophenia browser game', '/play-online'],
  ['nophenia community', '/community'],
] as const;

const beginnerJourney = [
  {
    title: 'Play nophenia online',
    href: '/play-online',
    body: 'Launch the browser game and check input focus before exploring.',
  },
  {
    title: 'Read the first-session route',
    href: '/guides/beginner-guide',
    body: 'Set expectations before treating the dream spaces like a checklist.',
  },
  {
    title: 'Fix controls early',
    href: '/guides/controls-and-comfort',
    body: 'Use Shift to run, Tab for cursor focus, C to sit, and H to howl.',
  },
  {
    title: 'Use a spoiler-light route',
    href: '/guides/walkthrough-ending',
    body: 'Find the next transition without flattening the whole ending.',
  },
  {
    title: 'Use the completion checklist',
    href: '/guides/achievements-100-percent',
    body: 'Use Steam tracking after one normal completion path.',
  },
] as const;

const coreModules = [
  {
    title: 'Play and Version',
    icon: Gamepad2,
    body: 'Play nophenia online in the browser, then use Steam for the full release, community hub, and completion tracking.',
    links: [
      ['Play online', '/play-online'],
      ['Steam release', '/steam'],
      ['Browser version', '/browser-version'],
    ],
  },
  {
    title: 'Route and Ending',
    icon: MapPinned,
    body: 'Use slow perimeter passes, staged thresholds, and walkthrough support only when a transition blocks you.',
    links: [
      ['Beginner guide', '/guides/beginner-guide'],
      ['Walkthrough', '/guides/walkthrough-ending'],
      ['100% achievements', '/guides/achievements-100-percent'],
    ],
  },
  {
    title: 'Controls and Comfort',
    icon: ShieldAlert,
    body: 'Keep browser input clean and treat liminal isolation as a comfort setting, not something to force through.',
    links: [
      ['Controls', '/guides/controls-and-comfort'],
      ['Comfort notes', '/comfort'],
      ['Download safety', '/download'],
    ],
  },
  {
    title: 'Community Signals',
    icon: Sparkles,
    body: 'Use Steam Community, player comments, and creator-owned links when you want update signals or player help.',
    links: [
      ['Community', '/community'],
      ['Steam', '/steam'],
      ['Browser notes', '/browser-version'],
    ],
  },
] as const;

const homeTrailer = {
  title: 'nophenia pre-release trailer thingy',
  embedUrl: 'https://www.youtube-nocookie.com/embed/brHDlSkKQMQ?rel=0&hl=en',
  watchUrl: 'https://www.youtube.com/watch?v=brHDlSkKQMQ',
};

export function NopheniaHomePage({ locale }: { locale?: Locale }) {
  const content = getHomeContent(locale);
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
        '@type': 'Organization',
        '@id': `${siteFacts.domain}/#organization`,
        name: siteFacts.siteName,
        url: siteFacts.domain,
        logo: `${siteFacts.domain}/nophenia/nophenia-icon.png`,
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: {
          '@type': 'Person',
          name: siteFacts.creator,
        },
        applicationCategory: 'Game',
        genre: ['Adventure', 'Casual', 'Indie', 'Simulation'],
        gamePlatform: ['Windows', 'Web Browser'],
        url: siteFacts.officialSteamUrl,
        sameAs: [siteFacts.officialSteamUrl, siteFacts.officialSiteUrl],
      },
      {
        '@type': 'VideoObject',
        '@id': `${siteFacts.domain}/#trailer`,
        name: homeTrailer.title,
        thumbnailUrl: ['https://i.ytimg.com/vi/brHDlSkKQMQ/hq720.jpg'],
        url: homeTrailer.watchUrl,
        embedUrl: homeTrailer.embedUrl,
        author: {
          '@type': 'Person',
          name: siteFacts.creator,
        },
      },
    ],
  };

  return (
    <div className="bg-[#070911] text-[#F6F0EA]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#26384A] border-b">
        <Image
          src="/nophenia/screenshots/nophenia-steam-1.jpg"
          alt="nophenia dreamlike landscape"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#070911]/78" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#070911] to-transparent" />

        <Container className="relative grid grid-cols-1 items-center gap-8 px-4 py-8 md:py-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:py-12 xl:grid-cols-[minmax(0,1fr)_520px]">
          <div className="min-w-0">
            <h1 className="max-w-4xl font-display text-4xl font-black leading-tight text-white sm:text-5xl md:text-6xl">
              {content.title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-[#D8E8EF] md:text-lg">
              {content.intro}
            </p>
            <div className="mt-6 grid max-w-full grid-cols-1 gap-3 sm:flex sm:flex-wrap">
              <Button
                asChild
                className="h-auto min-w-0 whitespace-normal bg-[#F6D089] text-left text-[#17100B] leading-5 hover:bg-[#FFE1A8]"
              >
                <LocaleLink href="/guides/beginner-guide">
                  <span className="min-w-0 break-words">
                    {content.primaryCta}
                  </span>
                  <ArrowRight className="size-4 shrink-0" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="h-auto min-w-0 whitespace-normal border-white/60 bg-white/10 text-left text-white leading-5 hover:bg-white/20"
              >
                <LocaleLink href="/play-online">
                  <Gamepad2 className="size-4 shrink-0" />
                  {content.playCta}
                </LocaleLink>
              </Button>
            </div>
            <p className="mt-4 max-w-3xl text-sm leading-6 text-[#D8E8EF]/85">
              {content.scopeNote}
            </p>
            <div className="mt-4">
              <QuickWikiLinks locale={locale} />
            </div>
          </div>

          <aside
            aria-label="nophenia trailer"
            className="min-w-0 overflow-hidden rounded-lg border border-white/15 bg-[#111827]/88 shadow-2xl shadow-black/30 backdrop-blur"
          >
            <div className="aspect-video bg-black">
              <iframe
                className="block h-full w-full"
                src={homeTrailer.embedUrl}
                title={homeTrailer.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </aside>
        </Container>
      </section>

      <Container className="px-4 py-12">
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <div className="min-w-0 space-y-12">
            <section className="grid grid-cols-1 gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#26384A] bg-[#111827] p-5">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#6DDFC4]">
                      Current game status
                    </p>
                    <h2 className="mt-1 font-display text-xl font-bold text-white">
                      Game snapshot
                    </h2>
                  </div>
                  <a
                    href={siteFacts.officialSteamUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 text-[#D8E8EF] text-sm hover:text-[#F6D089]"
                  >
                    Steam <ExternalLink className="size-3.5" />
                  </a>
                </div>
                <div className="mt-4 space-y-2">
                  {gameFacts.map((fact) => (
                    <div
                      key={fact.label}
                      className="grid grid-cols-[10px_minmax(0,1fr)] gap-3 rounded-md px-2 py-2"
                    >
                      <span className="mt-2 size-2 rounded-full bg-[#6DDFC4]" />
                      <div className="min-w-0">
                        <h3 className="font-semibold text-sm text-white">
                          {fact.label}
                        </h3>
                        <p className="mt-1 line-clamp-2 text-[#D8E8EF] text-xs leading-5">
                          {fact.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#26384A] bg-[#111827] p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#F6D089]">
                  Start here
                </p>
                <h2 className="mt-1 font-display text-xl font-bold text-white">
                  A cleaner first nophenia route
                </h2>
                <div className="mt-4 space-y-2">
                  {beginnerJourney.map((step, index) => (
                    <LocaleLink
                      key={step.href}
                      href={step.href}
                      className="group grid grid-cols-[30px_minmax(0,1fr)_auto] gap-3 rounded-md border border-transparent px-2 py-2 transition hover:border-[#F6D089]/45 hover:bg-[#1C2936]"
                    >
                      <span className="flex size-7 items-center justify-center rounded-full border border-[#26384A] bg-[#070911] text-xs font-semibold text-white">
                        {index + 1}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-sm text-white group-hover:text-[#F6D089]">
                          {step.title}
                        </span>
                        <span className="mt-0.5 line-clamp-1 block text-[#D8E8EF] text-xs leading-5">
                          {step.body}
                        </span>
                      </span>
                      <ArrowRight className="mt-1 size-4 shrink-0 text-[#F6D089]" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section className="grid grid-cols-1 gap-8 lg:grid-cols-[340px_minmax(0,1fr)]">
              <div>
                <Badge className="bg-[#F6D089] text-[#17100B]">
                  Quick routes
                </Badge>
                <h2 className="mt-4 font-display text-3xl font-black text-white">
                  Pick the page that matches your next question.
                </h2>
                <p className="mt-4 text-sm leading-7 text-[#D8E8EF]">
                  The launch set follows current demand: play online, guide,
                  controls, walkthrough, ending, Steam, browser play, community,
                  and comfort notes.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {keywordLinks.map(([label, href]) => (
                  <Button
                    key={label}
                    asChild
                    variant="outline"
                    className="h-auto whitespace-normal border-[#26384A] bg-[#111827] px-3 py-2 text-left text-[#F6F0EA] hover:border-[#6DDFC4] hover:bg-[#1C2936]"
                  >
                    <LocaleLink href={href}>{label}</LocaleLink>
                  </Button>
                ))}
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <Badge className="bg-[#6DDFC4] text-[#06120F]">
                    Latest guides
                  </Badge>
                  <h2 className="mt-4 font-display text-3xl font-black text-white">
                    Start with these dream-space decisions
                  </h2>
                </div>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#26384A] bg-[#111827] text-[#F6F0EA] hover:bg-[#1C2936]"
                >
                  <LocaleLink href="/guides">
                    {content.allGuidesButton}
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
                {featuredGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={guide.path}
                    className="group overflow-hidden rounded-lg border border-[#26384A] bg-[#111827] transition hover:-translate-y-0.5 hover:border-[#6DDFC4] hover:shadow-lg hover:shadow-[#6DDFC4]/10"
                  >
                    <div className="relative aspect-video border-[#26384A] border-b">
                      <Image
                        src={guide.coverImageUrl}
                        alt={`${guide.title} cover`}
                        fill
                        sizes="(min-width: 1280px) 25vw, (min-width: 768px) 50vw, 100vw"
                        className="object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-[#F6D089] text-[#17100B]">
                        {guide.category}
                      </Badge>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-xl font-bold text-white">
                        {guide.title}
                      </h3>
                      <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#D8E8EF]">
                        {guide.summary}
                      </p>
                    </div>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {coreModules.map((module) => {
                const Icon = module.icon;

                return (
                  <article
                    key={module.title}
                    className="rounded-lg border border-[#26384A] bg-[#111827] p-6"
                  >
                    <div className="flex items-center gap-3">
                      <div className="flex size-11 items-center justify-center rounded-md bg-[#070911] text-[#6DDFC4]">
                        <Icon className="size-5" />
                      </div>
                      <h2 className="font-display text-2xl font-bold text-white">
                        {module.title}
                      </h2>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-[#D8E8EF]">
                      {module.body}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {module.links.map(([label, href]) => (
                        <Button
                          key={href}
                          asChild
                          variant="outline"
                          size="sm"
                          className="border-[#26384A] bg-[#070911] text-[#F6F0EA] hover:border-[#F6D089] hover:bg-[#1C2936]"
                        >
                          <LocaleLink href={href}>{label}</LocaleLink>
                        </Button>
                      ))}
                    </div>
                  </article>
                );
              })}
            </section>

            <section className="grid grid-cols-1 gap-5 lg:grid-cols-[minmax(0,1fr)_360px]">
              <div className="rounded-lg border border-[#26384A] bg-[#111827] p-6">
                <div className="flex items-center gap-3">
                  <BookOpen className="size-5 text-[#6DDFC4]" />
                  <h2 className="font-display text-2xl font-bold text-white">
                    Player questions covered
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#D8E8EF]">
                  If you are deciding whether to play nophenia online, buy on
                  Steam, finish a completion path, or ask the community, use
                  these route pages before jumping between random search
                  results.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {[
                    ['Play online', '/play-online'],
                    ['Steam', '/steam'],
                    ['Achievements', '/guides/achievements-100-percent'],
                    ['Community', '/community'],
                    ['Comfort', '/comfort'],
                    ['Disclaimer', '/disclaimer'],
                  ].map(([label, href]) => (
                    <Button
                      key={href}
                      asChild
                      variant="outline"
                      size="sm"
                      className="border-[#26384A] bg-[#070911] text-[#F6F0EA] hover:border-[#6DDFC4] hover:bg-[#1C2936]"
                    >
                      <LocaleLink href={href}>{label}</LocaleLink>
                    </Button>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#F6D089]/55 bg-[#251A21] p-6">
                <div className="flex items-center gap-3">
                  <BadgeAlert className="size-5 text-[#F6D089]" />
                  <h2 className="font-display text-2xl font-bold text-white">
                    Browser play clarity
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-[#FFE6B9]">
                  The browser version lets you play nophenia online inside this
                  nophenia wiki. Steam is the current full release for
                  completion and the full route.
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#F6D089] text-[#17100B] hover:bg-[#FFE1A8]"
                >
                  <LocaleLink href="/browser-version">
                    Read browser notes
                  </LocaleLink>
                </Button>
              </div>
            </section>

            <FaqSection
              className="border-[#26384A] bg-[#111827]"
              items={content.faq}
            />
          </div>

          <WikiRouteSidebar currentPath="/" locale={locale} />
        </div>
      </Container>
    </div>
  );
}
