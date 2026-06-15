import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import { FaqSection } from '@/components/falsesun/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getGuideArticleUi,
  getGuidesIndexContent,
  getLocalizedGuides,
} from '@/data/falsesun/localized';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import Image from 'next/image';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getGuidesIndexContent(locale);
  const guides = getLocalizedGuides(locale);

  return constructMetadata({
    title: content.title,
    description: content.intro,
    locale,
    pathname: '/guides',
    image: guides[0]?.coverImageUrl,
  });
}

export default async function GuidesPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const content = getGuidesIndexContent(locale);
  const guideUi = getGuideArticleUi(locale);
  const guides = getLocalizedGuides(locale);

  return (
    <div className="bg-[#0A0F0C] py-12 text-[#F7E8C9]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D9B56A] text-[#15110B]">{content.badge}</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            {content.title}
          </h1>
          <p className="text-lg leading-8 text-[#C7BAA7]">{content.intro}</p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#493A34] bg-[#111612] py-4"
          label
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#493A34] bg-[#111612]"
            >
              <div className="relative aspect-video border-[#493A34] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0C]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#D9B56A] text-[#15110B]">
                  {guideUi.categoryLabels[guide.category]}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#D9B56A]/50 text-[#F7E8C9]"
                  >
                    {guideUi.difficultyLabels[guide.difficulty]}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#493A34] text-[#F7E8C9]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#C7BAA7]">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#D9B56A] text-[#15110B] hover:bg-[#E7C77C]"
                >
                  <LocaleLink href={guide.path}>{content.readGuide}</LocaleLink>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <FaqSection items={content.faq} title={guideUi.faqTitle} />
      </Container>
    </div>
  );
}
