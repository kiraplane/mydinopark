import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/nophenia/faq-section';
import {
  MobileWikiNav,
  WikiRouteSidebar,
} from '@/components/nophenia/wiki-navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getGuideArticleUi,
  getGuidesIndexContent,
  getLocalizedGuides,
} from '@/data/nophenia/localized';
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
    <div className="bg-[#070911] py-12 text-[#F6F0EA]">
      <Container className="px-4">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_264px]">
          <div className="min-w-0 space-y-8">
            <header className="max-w-3xl space-y-4">
              <Badge className="bg-[#F6D089] text-[#17100B]">
                {content.badge}
              </Badge>
              <h1 className="font-display text-4xl font-black md:text-6xl">
                {content.title}
              </h1>
              <p className="text-lg leading-8 text-[#D8E8EF]">
                {content.intro}
              </p>
              <MobileWikiNav currentPath="/guides" locale={locale} />
            </header>

            <AdsterraAdFrame
              slot="banner-728x90"
              className="rounded-lg border border-[#26384A] bg-[#111827] py-4"
              label
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {guides.map((guide) => (
                <article
                  key={guide.slug}
                  className="overflow-hidden rounded-lg border border-[#26384A] bg-[#111827]"
                >
                  <div className="relative aspect-video border-[#26384A] border-b">
                    <Image
                      src={guide.coverImageUrl}
                      alt={`${guide.title} cover`}
                      fill
                      sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#070911]/80 to-transparent" />
                    <Badge className="absolute top-4 left-4 bg-[#F6D089] text-[#17100B]">
                      {guideUi.categoryLabels[guide.category]}
                    </Badge>
                  </div>
                  <div className="p-5">
                    <div className="flex flex-wrap gap-2">
                      <Badge
                        variant="outline"
                        className="border-[#F6D089]/50 text-[#F6F0EA]"
                      >
                        {guideUi.difficultyLabels[guide.difficulty]}
                      </Badge>
                      {guide.tags.slice(0, 2).map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-[#26384A] text-[#F6F0EA]"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <h2 className="mt-4 font-display text-2xl font-bold">
                      {guide.title}
                    </h2>
                    <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#D8E8EF]">
                      {guide.summary}
                    </p>
                    <Button
                      asChild
                      className="mt-5 bg-[#F6D089] text-[#17100B] hover:bg-[#FFE1A8]"
                    >
                      <LocaleLink href={guide.path}>
                        {content.readGuide}
                      </LocaleLink>
                    </Button>
                  </div>
                </article>
              ))}
            </div>

            <FaqSection items={content.faq} title={guideUi.faqTitle} />
          </div>

          <WikiRouteSidebar currentPath="/guides" locale={locale}>
            <AdsterraAdFrame slot="sidebar-160x600" label />
          </WikiRouteSidebar>
        </div>
      </Container>
    </div>
  );
}
