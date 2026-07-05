import Container from '@/components/layout/container';
import {
  MyDinoParkMobileMenu,
  MyDinoParkRouteSidebar,
} from '@/components/mydinopark/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { activeCodes } from '@/data/mydinopark/codes';
import { guides, siteDescription } from '@/data/mydinopark/guides';
import { officialGameFacts } from '@/data/mydinopark/sources';
import { topicPageList } from '@/data/mydinopark/topics';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Coins,
  Download,
  Egg,
  ExternalLink,
  Landmark,
  Play,
  Sparkles,
  Trophy,
  Wallet,
} from 'lucide-react';
import Image from 'next/image';

const primaryLinks = [
  {
    title: 'Codes',
    body: `${activeCodes.length} source-checked codes, spelling notes, and reward planning.`,
    href: '/codes',
    icon: Sparkles,
  },
  {
    title: 'Beginner Route',
    body: 'First-session path for codes, eggs, hatching, visitors, and upgrades.',
    href: '/guides/beginner-guide',
    icon: BookOpen,
  },
  {
    title: 'Eggs',
    body: 'Plan egg buys, Frozen Egg rewards, hatching, and tier movement.',
    href: '/eggs',
    icon: Egg,
  },
  {
    title: 'Dinosaurs',
    body: 'Judge best-dino claims by income, rarity, space, and confidence.',
    href: '/dinosaurs',
    icon: Trophy,
  },
  {
    title: 'Money',
    body: 'Turn visitor Cash and code rewards into repeatable growth.',
    href: '/money',
    icon: Wallet,
  },
  {
    title: 'Upgrades',
    body: 'Choose land, pens, and capacity by the bottleneck they solve.',
    href: '/upgrades',
    icon: Landmark,
  },
  {
    title: 'Official Roblox',
    body: 'Open the correct My Dino Park place and avoid wrong-game links.',
    href: '/download',
    icon: Download,
  },
];

const keywordLinks = [
  { keyword: 'my dino park', href: '/' },
  { keyword: 'my dino park Wiki', href: '/' },
  { keyword: 'my dino park codes', href: '/codes' },
  { keyword: 'my dino park roblox wiki', href: '/guides' },
  { keyword: 'my dino park eggs', href: '/eggs' },
  { keyword: 'my dino park money', href: '/money' },
  { keyword: 'my dino park dinosaurs', href: '/dinosaurs' },
  { keyword: 'my dino park tier list', href: '/tier-list' },
];

const startSteps = [
  {
    title: 'Claim codes',
    href: '/codes',
    body: 'Copy UPDATE2, WELCOME, and watch spelling conflicts carefully.',
  },
  {
    title: 'Hatch with a target',
    href: '/guides/eggs-and-hatching-guide',
    body: 'Buy eggs that can become placed dinosaurs and visitor income.',
  },
  {
    title: 'Fix the bottleneck',
    href: '/guides/fast-money-guide',
    body: 'Spend Cash on eggs, space, or upgrades based on what blocks growth.',
  },
  {
    title: 'Watch dino ranks',
    href: '/guides/best-dinosaurs-watch-guide',
    body: 'Use tier-list demand safely until exact dinosaur stats are verified.',
  },
];

const latestUpdateItems = [
  {
    title: 'Roblox universe refresh',
    date: officialGameFacts.updatedAt.slice(0, 10),
    body: 'The official Roblox experience was refreshed before this wiki pass. Use the official place as the source of truth for live game state.',
  },
  {
    title: 'Codes watch is live',
    date:
      activeCodes[0]?.lastChecked ?? officialGameFacts.updatedAt.slice(0, 10),
    body: `${activeCodes.length} active or reported active codes are source-checked, with THXFORPLAYING kept as a spelling watch item.`,
  },
  {
    title: 'Wrong-game filter added',
    date: officialGameFacts.updatedAt.slice(0, 10),
    body: 'Crazy Dino Park, Be Dino, Dinosaur Park Tycoon, APK, and script results are intentionally separated from My Dino Park pages.',
  },
];

export function MyDinoParkHomePage() {
  const latestGuides = guides.slice(0, 6);
  const featuredVideo = guides.find((guide) => guide.video)?.video;
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
        '@type': 'Organization',
        name: officialGameFacts.siteName,
        url: officialGameFacts.domain,
        logo: `${officialGameFacts.domain}/mydinopark/icon.png`,
      },
      {
        '@type': 'VideoGame',
        name: officialGameFacts.name,
        gamePlatform: ['Roblox'],
        applicationCategory: 'Game',
        genre: officialGameFacts.genre,
        url: officialGameFacts.officialRobloxUrl,
        publisher: {
          '@type': 'Organization',
          name: officialGameFacts.creatorName,
        },
      },
    ],
  };

  return (
    <div className="bg-[#0C1F14] text-[#F7FFE9]">
      <JsonLd data={jsonLd} />

      <section className="relative overflow-hidden border-[#2E5B3C] border-b">
        <Image
          src="/mydinopark/hero.png"
          alt="My Dino Park Roblox dinosaur park screenshot"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(12,31,20,0.98)_0%,rgba(12,31,20,0.88)_42%,rgba(12,31,20,0.42)_72%,rgba(12,31,20,0.86)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#0C1F14] to-transparent" />

        <Container className="relative px-4 py-8 md:py-10 lg:py-12">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_360px] xl:grid-cols-[minmax(0,1fr)_420px]">
            <div className="max-w-3xl space-y-5">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#9BEA74] text-[#102114]">
                  Roblox Tycoon
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#F6C453] bg-[#0C1F14]/80 text-[#FFF4CF]"
                >
                  Eggs + Visitor Cash
                </Badge>
              </div>
              <h1 className="font-display text-4xl font-black leading-tight sm:text-5xl md:text-7xl">
                My Dino Park Wiki
              </h1>
              <p className="max-w-2xl text-[#E7F6D5] text-lg leading-8 md:text-xl">
                Codes, egg routes, hatching priorities, visitor Cash, dinosaur
                value checks, Teeth rewards, upgrades, and Roblox safety notes
                for My Dino Park players.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button
                  asChild
                  className="bg-[#9BEA74] text-[#102114] hover:bg-[#C6FF96]"
                >
                  <LocaleLink href="/guides/beginner-guide">
                    Start Guide
                    <ArrowRight className="size-4" />
                  </LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#FF8A4C] bg-[#0C1F14]/70 text-[#F7FFE9] hover:bg-[#FF8A4C] hover:text-[#102114]"
                >
                  <LocaleLink href="/codes">Codes</LocaleLink>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-[#F6C453] bg-[#0C1F14]/70 text-[#FFF4CF] hover:bg-[#F6C453] hover:text-[#102114]"
                >
                  <a
                    href={officialGameFacts.officialRobloxUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Roblox
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {keywordLinks.slice(2).map((item) => (
                  <LocaleLink
                    key={item.keyword}
                    href={item.href}
                    className="rounded-md border border-[#2E5B3C] bg-[#0C1F14]/70 px-3 py-2 font-medium text-[#C9D8BD] text-sm transition hover:border-[#9BEA74] hover:text-[#9BEA74]"
                  >
                    {item.keyword.replace('my dino park ', '')}
                  </LocaleLink>
                ))}
              </div>
            </div>

            <aside
              aria-label="My Dino Park guide video"
              className="rounded-lg border border-[#2E5B3C] bg-[#0C1F14]/85 p-4 shadow-2xl"
            >
              {featuredVideo ? (
                <div className="overflow-hidden rounded-md border border-[#2E5B3C] bg-black">
                  <iframe
                    className="aspect-video w-full"
                    src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                    title={featuredVideo.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                  <a
                    href={featuredVideo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between gap-3 bg-[#163521] px-3 py-2 text-[#C9D8BD] text-xs transition hover:text-[#9BEA74]"
                  >
                    <span className="inline-flex min-w-0 items-center gap-2">
                      <Play className="size-3 shrink-0 text-[#FF8A4C]" />
                      <span className="min-w-0 truncate">Guide video</span>
                    </span>
                    <ExternalLink className="size-3 shrink-0" />
                  </a>
                </div>
              ) : null}
            </aside>
          </div>
        </Container>
      </section>

      <Container className="px-4 py-8">
        <MyDinoParkMobileMenu currentPath="/" />
        <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
          <main className="min-w-0 space-y-10">
            <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {primaryLinks.map((link) => (
                <LocaleLink
                  key={link.title}
                  href={link.href}
                  className="group rounded-lg border border-[#2E5B3C] bg-[#163521] p-5 transition hover:border-[#9BEA74]"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[#9BEA74] text-[#102114]">
                      <link.icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <h2 className="font-display text-[#FFF4CF] text-xl font-bold">
                        {link.title}
                      </h2>
                      <p className="mt-2 text-[#C9D8BD] text-sm leading-6">
                        {link.body}
                      </p>
                    </div>
                  </div>
                </LocaleLink>
              ))}
            </section>

            <section className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-lg border border-[#2E5B3C] bg-[#163521] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#9BEA74] text-xs uppercase tracking-[0.18em]">
                      Latest Game Updates
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      Live wiki pulse
                    </h2>
                  </div>
                  <Button
                    asChild
                    variant="ghost"
                    className="text-[#E7F6D5] hover:text-[#9BEA74]"
                  >
                    <LocaleLink href="/updates">
                      All updates
                      <ArrowRight className="size-4" />
                    </LocaleLink>
                  </Button>
                </div>

                <div className="mt-6 space-y-5">
                  {latestUpdateItems.map((item) => (
                    <LocaleLink
                      key={item.title}
                      href="/updates"
                      className="group grid gap-3 rounded-md border border-transparent p-2 transition hover:border-[#2E5B3C] hover:bg-[#0C1F14]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <h3 className="font-display font-bold text-[#FFF4CF]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-[#C9D8BD] text-sm leading-6">
                            {item.body}
                          </p>
                        </div>
                        <time className="shrink-0 text-[#C9D8BD] text-xs">
                          {item.date}
                        </time>
                      </div>
                    </LocaleLink>
                  ))}
                </div>
              </div>

              <div className="rounded-lg border border-[#2E5B3C] bg-[#163521] p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-[#F6C453] text-xs uppercase tracking-[0.18em]">
                      Start Here
                    </p>
                    <h2 className="mt-2 font-display text-3xl font-black">
                      Your first park route
                    </h2>
                  </div>
                  <Coins className="size-8 text-[#F6C453]" />
                </div>
                <div className="mt-6 space-y-4">
                  {startSteps.map((step, index) => (
                    <LocaleLink
                      key={step.title}
                      href={step.href}
                      className="group flex gap-3 rounded-lg border border-transparent p-2 transition hover:border-[#2E5B3C] hover:bg-[#0C1F14]"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-full border border-[#FF8A4C] text-[#E7F6D5]">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display font-bold text-[#F7FFE9]">
                          {step.title}
                        </h3>
                        <p className="mt-1 text-[#C9D8BD] text-sm leading-6">
                          {step.body}
                        </p>
                      </div>
                      <ArrowRight className="ml-auto mt-2 size-4 shrink-0 text-[#9BEA74] transition group-hover:translate-x-0.5" />
                    </LocaleLink>
                  ))}
                </div>
              </div>
            </section>

            <section>
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <p className="font-semibold text-[#9BEA74] text-xs uppercase tracking-[0.18em]">
                    Topic Hubs
                  </p>
                  <h2 className="mt-2 font-display text-3xl font-black">
                    Core My Dino Park routes
                  </h2>
                </div>
                <Button asChild variant="outline">
                  <LocaleLink href="/guides">All guides</LocaleLink>
                </Button>
              </div>
              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {topicPageList.map((topic) => (
                  <LocaleLink
                    key={topic.route}
                    href={topic.route}
                    className="group rounded-lg border border-[#2E5B3C] bg-[#163521] p-5 transition hover:border-[#F6C453]"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="font-display text-[#FFF4CF] text-xl font-bold">
                        {topic.label}
                      </h3>
                      <ArrowRight className="size-4 shrink-0 text-[#F6C453] transition group-hover:translate-x-0.5" />
                    </div>
                    <p className="mt-3 text-[#C9D8BD] text-sm leading-6">
                      {topic.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>

            <section>
              <div>
                <p className="font-semibold text-[#9BEA74] text-xs uppercase tracking-[0.18em]">
                  Latest Guides
                </p>
                <h2 className="mt-2 font-display text-3xl font-black">
                  Player decisions covered
                </h2>
              </div>
              <div className="mt-5 grid gap-4 lg:grid-cols-2">
                {latestGuides.map((guide) => (
                  <LocaleLink
                    key={guide.slug}
                    href={`/guides/${guide.slug}`}
                    className="group rounded-lg border border-[#2E5B3C] bg-[#163521] p-5 transition hover:border-[#9BEA74]"
                  >
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-[#FF8A4C] text-[#102114]">
                        {guide.category}
                      </Badge>
                      <Badge
                        variant="outline"
                        className="border-[#2E5B3C] text-[#C9D8BD]"
                      >
                        {guide.difficulty}
                      </Badge>
                    </div>
                    <h3 className="mt-4 font-display text-[#FFF4CF] text-2xl font-bold">
                      {guide.title}
                    </h3>
                    <p className="mt-3 text-[#C9D8BD] text-sm leading-6">
                      {guide.summary}
                    </p>
                  </LocaleLink>
                ))}
              </div>
            </section>
          </main>

          <MyDinoParkRouteSidebar currentPath="/" />
        </div>
      </Container>
    </div>
  );
}
