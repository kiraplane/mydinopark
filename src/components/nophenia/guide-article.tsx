import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/nophenia/faq-section';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/nophenia/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getGuideArticleUi, getHomeContent } from '@/data/nophenia/localized';
import { siteFacts } from '@/data/nophenia/sources';
import type { Guide } from '@/data/nophenia/types';
import { LocaleLink } from '@/i18n/navigation';
import { ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

function toSectionId(heading: string) {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

function getRelatedRouteLabel(
  route: string,
  routeLabels: Record<string, string>
) {
  return (
    routeLabels[route] ??
    route
      .replace(/^\/+/, '')
      .split('/')
      .filter(Boolean)
      .map((segment) =>
        segment
          .split('-')
          .map((word) => `${word.charAt(0).toUpperCase()}${word.slice(1)}`)
          .join(' ')
      )
      .join(' ')
  );
}

export function GuideArticle({
  guide,
  locale,
  pathname,
}: {
  guide: Guide;
  locale?: Locale;
  pathname: string;
}) {
  const ui = getGuideArticleUi(locale);
  const routeLabels = {
    ...getHomeContent(locale).routeLabels,
    '/disclaimer': 'Disclaimer',
  };
  const canonicalUrl = `${siteFacts.domain}${pathname}`;
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Article',
        headline: guide.title,
        description: guide.summary,
        datePublished: guide.publishedAt,
        dateModified: guide.updatedAt,
        image: guide.coverImageUrl.startsWith('http')
          ? guide.coverImageUrl
          : `${siteFacts.domain}${guide.coverImageUrl}`,
        mainEntityOfPage: canonicalUrl,
        isPartOf: {
          '@type': 'WebSite',
          name: siteFacts.siteName,
          url: siteFacts.domain,
        },
        author: {
          '@type': 'Organization',
          name: siteFacts.siteName,
        },
      },
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: siteFacts.siteName,
            item: siteFacts.domain,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Guides',
            item: `${siteFacts.domain}/guides`,
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: guide.title,
            item: canonicalUrl,
          },
        ],
      },
    ],
  };
  const sectionLinks = guide.body.map((section) => ({
    href: `#${toSectionId(section.heading)}`,
    label: section.heading,
  }));
  const nextRoutes = guide.relatedRoutes.slice(0, 4);
  const showPlayOnlineCta = guide.path === '/demo';

  return (
    <div className="bg-[#070911] py-10 text-[#F6F0EA]">
      <JsonLd data={jsonLd} />
      <Container className="px-4">
        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <article className="min-w-0 space-y-6">
            <header className="rounded-lg border border-[#26384A] bg-[#111827] p-5 md:p-7">
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#F6D089] text-[#17100B]">
                  {ui.categoryLabels[guide.category]}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#F6D089]/60 bg-[#070911]/60 text-[#F6F0EA]"
                >
                  {ui.difficultyLabels[guide.difficulty]}
                </Badge>
                {guide.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="outline"
                    className="border-[#F6D089]/40 bg-[#070911]/50 text-[#F6F0EA]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="mt-4 max-w-4xl font-display text-4xl font-black leading-tight md:text-5xl">
                {guide.title}
              </h1>
              <p className="mt-4 max-w-3xl text-base leading-8 text-[#D8E8EF] md:text-lg">
                {guide.summary}
              </p>

              {showPlayOnlineCta ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-[#6DDFC4] font-semibold text-[#06120F] hover:bg-[#8FF5DE]"
                  >
                    <LocaleLink href="/play-online">
                      Play nophenia Online
                      <ArrowRight className="size-4" />
                    </LocaleLink>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-[#26384A] bg-[#070911] text-[#F6F0EA] hover:border-[#F6D089] hover:bg-[#1C2936]"
                  >
                    <LocaleLink href="/browser-version">
                      Compare Browser Version
                    </LocaleLink>
                  </Button>
                </div>
              ) : null}

              <div className="mt-5">
                <MobileWikiNav
                  currentPath={pathname}
                  locale={locale}
                  sectionLinks={sectionLinks}
                />
              </div>
            </header>

            <div className="overflow-hidden rounded-lg border border-[#26384A] bg-[#111827]">
              <div className="relative aspect-[16/7] min-h-[180px] border-[#26384A] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 860px, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(17,25,21,0.02)_0%,rgba(17,25,21,0.58)_100%)]" />
              </div>

              <div className="p-5 md:p-8">
                <section className="mb-8 rounded-lg border border-[#26384A] bg-[#070911] p-4">
                  <h2 className="font-display text-xl font-bold">
                    {ui.sourceTitle}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-[#D8E8EF]">
                    {ui.sourceBody}
                  </p>
                </section>

                {guide.video ? (
                  <section className="mb-8 overflow-hidden rounded-lg border border-[#26384A] bg-black">
                    <iframe
                      className="aspect-video w-full"
                      src={`https://www.youtube.com/embed/${guide.video.id}`}
                      title={guide.video.title}
                      loading="lazy"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                    <div className="bg-[#070911] px-4 py-3 text-sm leading-6 text-[#D8E8EF]">
                      {ui.videoPrefix}{' '}
                      <a
                        href={guide.video.url}
                        target="_blank"
                        rel="noreferrer"
                        className="text-[#F6D089] underline underline-offset-4"
                      >
                        {guide.video.title}
                      </a>{' '}
                      by {guide.video.channel}, {ui.videoSuffix}
                    </div>
                  </section>
                ) : null}

                <div className="space-y-8">
                  <AdsterraAdFrame
                    slot="banner-300x250"
                    className="mb-8"
                    label
                  />

                  {guide.body.map((section) => (
                    <section
                      key={section.heading}
                      id={toSectionId(section.heading)}
                    >
                      <h2 className="font-display text-2xl font-bold text-[#F6F0EA]">
                        {section.heading}
                      </h2>
                      <div className="mt-3 space-y-4 text-base leading-8 text-[#D8E8EF]">
                        {section.paragraphs.map((paragraph, index) => (
                          <p key={`${section.heading}-${index}`}>{paragraph}</p>
                        ))}
                      </div>
                      {section.bullets ? (
                        <ul className="mt-4 grid gap-2 text-sm leading-7 text-[#D8E8EF]">
                          {section.bullets.map((bullet, index) => (
                            <li
                              key={`${section.heading}-bullet-${index}`}
                              className="rounded-md border border-[#26384A] bg-[#070911] px-3 py-2"
                            >
                              {bullet}
                            </li>
                          ))}
                        </ul>
                      ) : null}
                    </section>
                  ))}
                </div>

                <section className="mt-10 rounded-lg border border-[#26384A] bg-[#070911] p-5">
                  <div className="flex gap-3">
                    <ShieldCheck className="mt-1 size-5 shrink-0 text-[#6DDFC4]" />
                    <div>
                      <h2 className="font-display text-xl font-bold">
                        {ui.officialTitle}
                      </h2>
                      <p className="mt-2 text-sm leading-7 text-[#D8E8EF]">
                        {ui.officialBody}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[#D8E8EF]">
                        <a
                          href={siteFacts.officialSteamUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-[#F6D089] underline underline-offset-4"
                        >
                          {ui.officialLinkLabel}
                          <ExternalLink className="size-3" />
                        </a>
                      </p>
                    </div>
                  </div>
                </section>

                <section className="mt-10 rounded-lg border border-[#26384A] bg-[#070911] p-5">
                  <div className="flex flex-wrap items-end justify-between gap-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F6D089]">
                        Next steps
                      </p>
                      <h2 className="mt-1 font-display text-xl font-bold">
                        Keep moving through the wiki
                      </h2>
                    </div>
                    <Badge
                      variant="outline"
                      className="border-[#F6D089]/50 text-[#F6F0EA]"
                    >
                      {nextRoutes.length} recommended
                    </Badge>
                  </div>
                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {nextRoutes.map((route) => (
                      <Button
                        key={route}
                        asChild
                        variant="outline"
                        className="h-auto min-w-0 justify-between gap-3 whitespace-normal border-[#26384A] bg-[#111827] px-3 py-3 text-left text-[#F6F0EA] hover:bg-[#1C2936]"
                      >
                        <LocaleLink href={route}>
                          <span className="min-w-0 break-words">
                            {getRelatedRouteLabel(route, routeLabels)}
                          </span>
                          <ArrowRight className="size-4 shrink-0" />
                        </LocaleLink>
                      </Button>
                    ))}
                  </div>
                </section>

                <section className="mt-10">
                  <FaqSection items={guide.faq} title={ui.faqTitle} />
                </section>
              </div>
            </div>
          </article>

          <WikiRouteSidebar
            currentPath={pathname}
            locale={locale}
            sectionLinks={sectionLinks}
          >
            <AdsterraAdFrame slot="sidebar-160x600" label />
          </WikiRouteSidebar>
        </div>
      </Container>
    </div>
  );
}
