import { FaqSection } from '@/components/dragonfire/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getGuide, guides } from '@/data/dragonfire/guides';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const relatedRouteLabels: Record<string, string> = {
  '/alliances': 'Alliances',
  '/campaigns': 'Campaigns',
  '/codes': 'Codes',
  '/download': 'Download',
  '/dragons': 'Dragons',
  '/factions': 'Factions',
  '/guides/beginner-guide': 'Beginner Guide',
  '/reigns': 'Reigns',
  '/resources': 'Resources',
  '/stronghold': 'Stronghold',
  '/tier-list': 'Tier List',
};

function getRelatedRouteLabel(route: string) {
  return (
    relatedRouteLabels[route] ??
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

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    return {};
  }

  return constructMetadata({
    title: guide.seoTitle,
    description: guide.seoDescription,
    locale,
    pathname: `/guides/${slug}`,
    image: '/dragonfire/og-image.png',
  });
}

export default async function GuidePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guide = getGuide(slug);

  if (!guide) {
    notFound();
  }

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: guide.title,
    description: guide.summary,
    datePublished: guide.publishedAt,
    dateModified: guide.updatedAt,
  };

  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <JsonLd data={jsonLd} />
      <Container className="grid gap-8 px-4 lg:grid-cols-[1fr_300px]">
        <article className="rounded-lg border border-[#3A2721] bg-[#15110F] p-6 md:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-[#B91C1C] text-[#F7EFE3]">
              {guide.category}
            </Badge>
            <Badge variant="outline" className="border-[#4A4039] text-white">
              {guide.difficulty}
            </Badge>
            {guide.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-[#4A4039] text-white"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-5 font-display text-4xl font-black md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-[#B8A99A]">
            {guide.summary}
          </p>

          <div className="relative mt-8 aspect-video overflow-hidden rounded-lg border border-[#3A2721]">
            <Image
              src={guide.coverImageUrl}
              alt={`${guide.title} cover`}
              fill
              priority
              sizes="(min-width: 1024px) 820px, 100vw"
              className="object-cover"
            />
          </div>

          {guide.video ? (
            <div className="mt-8 overflow-hidden rounded-lg border border-[#3A2721] bg-black">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${guide.video.id}`}
                title={guide.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="bg-[#0E0B0A] px-4 py-3 text-sm text-[#B8A99A]">
                Video reference:{' '}
                <a
                  href={guide.video.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#D6A03D] underline underline-offset-4"
                >
                  {guide.video.title}
                </a>{' '}
                by {guide.video.channel}
              </div>
            </div>
          ) : (
            <section className="mt-8 rounded-lg border border-[#3A2721] bg-[#0E0B0A] p-5">
              <h2 className="font-display text-2xl font-bold">
                Video reference
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#B8A99A]">
                No reliable guide video has been selected for this page yet.
                When a trustworthy walkthrough is chosen, this section will
                embed it and the article will be updated around the video.
              </p>
            </section>
          )}

          <div className="mt-8 space-y-8">
            {guide.body.map((section) => (
              <section key={section.heading}>
                <h2 className="font-display text-2xl font-bold">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4 text-base leading-8 text-[#B8A99A]">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-[#B8A99A]">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>- {bullet}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}
          </div>

          <div className="mt-10">
            <FaqSection items={guide.faq} />
          </div>
        </article>

        <aside className="space-y-4">
          <div className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5">
            <h2 className="font-display text-xl font-bold">Related pages</h2>
            <div className="mt-4 grid gap-2">
              {guide.relatedRoutes.map((route) => (
                <Button
                  key={route}
                  asChild
                  variant="outline"
                  className="justify-start"
                >
                  <LocaleLink href={route}>
                    {getRelatedRouteLabel(route)}
                  </LocaleLink>
                </Button>
              ))}
            </div>
          </div>
        </aside>
      </Container>
    </div>
  );
}
