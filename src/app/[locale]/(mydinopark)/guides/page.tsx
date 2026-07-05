import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { FaqSection } from '@/components/mydinopark/faq-section';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guideCategoryIntro, guides } from '@/data/mydinopark/guides';
import { officialGameFacts } from '@/data/mydinopark/sources';
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
  return constructMetadata({
    title: 'My Dino Park Guides - Codes, Eggs, Money and Upgrades',
    description:
      'Read My Dino Park guides for Roblox codes, beginner routes, eggs, hatching, money, upgrades, dinosaurs, tier-list watch, and wrong-game safety.',
    locale,
    pathname: '/guides',
    image: '/mydinopark/og-image.png',
  });
}

export default function GuidesPage() {
  const categories = Array.from(new Set(guides.map((guide) => guide.category)));
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'My Dino Park Guides',
    itemListElement: guides.map((guide, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      url: `${officialGameFacts.domain}/guides/${guide.slug}`,
      name: guide.title,
    })),
  };

  return (
    <div className="bg-[#0C1F14] py-12 text-[#F7FFE9]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#9BEA74] text-[#102114]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            My Dino Park Guides
          </h1>
          <p className="text-[#C9D8BD] text-lg leading-8">
            Decision-first Roblox guides for codes, eggs, hatching, visitor
            Cash, park upgrades, dinosaur value checks, official links, and
            avoiding wrong-game advice.
          </p>
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#2E5B3C] bg-[#163521] py-4"
          label
        />

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-[#2E5B3C] bg-[#163521] p-5"
            >
              <h2 className="font-display text-xl font-bold">{category}</h2>
              <p className="mt-2 text-[#C9D8BD] text-sm leading-6">
                {guideCategoryIntro[category]}
              </p>
            </div>
          ))}
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#2E5B3C] bg-[#163521]"
            >
              <div className="relative aspect-video border-[#2E5B3C] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C1F14]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#FF8A4C] text-[#102114]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#2E5B3C] text-[#C9D8BD]"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#2E5B3C] text-[#C9D8BD]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-[#C9D8BD] text-sm leading-6">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#9BEA74] text-[#102114] hover:bg-[#C6FF96]"
                >
                  <LocaleLink href={`/guides/${guide.slug}`}>
                    Read guide
                  </LocaleLink>
                </Button>
              </div>
            </article>
          ))}
        </div>

        <FaqSection
          items={[
            {
              question: 'Which My Dino Park guide should I read first?',
              answer:
                'Start with the beginner guide, then read codes, eggs and hatching, fast money, and park upgrades once you understand the Roblox loop.',
            },
            {
              question: 'Why is there no full dinosaur database yet?',
              answer:
                'Reliable My Dino Park-specific dinosaur stats are still thin. The site uses decision guides first and avoids copying wrong-game tier tables.',
            },
            {
              question: 'Are guide facts official?',
              answer:
                'Official facts come from Roblox and Roblox API data. Codes and strategies are cross-checked from current public sources and marked conservatively.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
