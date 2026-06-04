import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaqSection } from '@/components/utdx/faq-section';
import { getGuide, guides } from '@/data/utdx/guides';
import { LocaleLink } from '@/i18n/navigation';
import { routing } from '@/i18n/routing';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';
import { notFound } from 'next/navigation';

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

  const coverImageUrl = guide.coverImageUrl || guide.video?.thumbnailUrl;

  return (
    <div className="bg-[#060B12] py-12 text-slate-100">
      <Container className="grid gap-8 px-4 lg:grid-cols-[1fr_300px]">
        <article className="rounded-lg border border-cyan-300/20 bg-slate-950/70 p-6 shadow-sm md:p-8">
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-cyan-300 text-slate-950">
              {guide.category}
            </Badge>
            <Badge className="border border-cyan-300/40 bg-cyan-300/10 text-cyan-100">
              {guide.difficulty}
            </Badge>
            {guide.tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-slate-600 text-slate-200"
              >
                {tag}
              </Badge>
            ))}
          </div>

          <h1 className="mt-5 text-4xl font-black md:text-6xl">
            {guide.title}
          </h1>
          <p className="mt-5 text-lg leading-8 text-slate-300">
            {guide.summary}
          </p>

          <div className="mt-8 overflow-hidden rounded-lg border border-cyan-300/20 bg-slate-900">
            <div className="relative aspect-video bg-slate-950">
              {coverImageUrl ? (
                <Image
                  src={coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  priority
                  sizes="(min-width: 1024px) 780px, 100vw"
                  className="object-cover"
                />
              ) : (
                <div className="flex h-full flex-col justify-end p-6">
                  <span className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    UTDX Guide
                  </span>
                  <span className="mt-3 text-3xl font-black text-white">
                    {guide.category}
                  </span>
                </div>
              )}
            </div>
            {guide.video ? (
              <div className="space-y-2 bg-slate-950 px-4 py-4 text-sm text-slate-300">
                <p>
                  Source video:{' '}
                  {guide.video.url ? (
                    <a
                      href={guide.video.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-cyan-200 underline underline-offset-4"
                    >
                      {guide.video.title}
                    </a>
                  ) : (
                    guide.video.title
                  )}
                  {guide.video.channel ? ` by ${guide.video.channel}` : null}
                </p>
                <p className="text-xs text-slate-400">
                  {[guide.video.publishedAt, guide.video.viewCountLabel]
                    .filter(Boolean)
                    .join(' · ')}
                </p>
              </div>
            ) : null}
          </div>

          {guide.video ? (
            <div className="mt-8 overflow-hidden rounded-lg border border-cyan-300/20 bg-black">
              <iframe
                className="aspect-video w-full"
                src={`https://www.youtube.com/embed/${guide.video.id}`}
                title={guide.video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
              <div className="bg-slate-950 px-4 py-3 text-sm text-slate-300">
                Source video:{' '}
                {guide.video.url ? (
                  <a
                    href={guide.video.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cyan-200 underline underline-offset-4"
                  >
                    {guide.video.title}
                  </a>
                ) : (
                  guide.video.title
                )}
                {guide.video.channel ? ` by ${guide.video.channel}` : null}
              </div>
            </div>
          ) : null}

          <div className="mt-8 space-y-8">
            {guide.body.map((section) => (
              <section key={section.heading}>
                <h2 className="text-2xl font-bold text-white">
                  {section.heading}
                </h2>
                <div className="mt-3 space-y-4 text-base leading-8 text-slate-300">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                {section.bullets ? (
                  <ul className="mt-4 space-y-2 text-sm leading-6 text-slate-300">
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
          <div className="rounded-lg border border-cyan-300/20 bg-slate-950/70 p-5 shadow-sm">
            <h2 className="text-xl font-bold">Related UTDX pages</h2>
            <div className="mt-4 grid gap-2">
              {guide.relatedRoutes.map((route) => (
                <Button
                  key={route}
                  asChild
                  variant="outline"
                  className="justify-start border-slate-700 bg-slate-900/80 text-slate-100 hover:bg-slate-800"
                >
                  <LocaleLink href={route}>{route}</LocaleLink>
                </Button>
              ))}
            </div>
          </div>
        </aside>
      </Container>
    </div>
  );
}
