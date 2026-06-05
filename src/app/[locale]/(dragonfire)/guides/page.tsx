import { FaqSection } from '@/components/dragonfire/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { guides } from '@/data/dragonfire/guides';
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
    title: 'Game of Thrones Dragonfire Guides - Beginner, Dragons, Resources',
    description:
      'Read Game of Thrones Dragonfire guides for beginner progression, tier list decisions, resources, campaigns, alliances, Reigns, downloads, and stronghold upgrades.',
    locale,
    pathname: '/guides',
    image: '/dragonfire/og-image.png',
  });
}

export default function GuidesPage() {
  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Guides
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            Decision-first guides for codes, tier list checks, beginner routes,
            dragon upgrades, resources, campaigns, alliances, and Reigns.
          </p>
        </header>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#3A2721] bg-[#15110F]"
            >
              <div className="relative aspect-video border-[#3A2721] border-b">
                <Image
                  src={guide.coverImageUrl}
                  alt={`${guide.title} cover`}
                  fill
                  sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080707]/80 to-transparent" />
                <Badge className="absolute top-4 left-4 bg-[#B91C1C] text-[#F7EFE3]">
                  {guide.category}
                </Badge>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="border-[#4A4039] text-white"
                  >
                    {guide.difficulty}
                  </Badge>
                  {guide.tags.slice(0, 2).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#4A4039] text-white"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold">
                  {guide.title}
                </h2>
                <p className="mt-3 line-clamp-3 text-sm leading-6 text-[#B8A99A]">
                  {guide.summary}
                </p>
                <Button
                  asChild
                  className="mt-5 bg-[#D6A03D] text-[#110D0B] hover:bg-[#F0B64A]"
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
              question: 'Which Dragonfire guide should I read first?',
              answer:
                'Start with the beginner guide, then open codes, tier list, resources, and campaign reset pages before spending premium resources.',
            },
            {
              question: 'Do guides replace dragon profiles?',
              answer:
                'No. Guides explain decisions; dragon profiles hold role, tier, source confidence, commands, and habit notes.',
            },
            {
              question: 'Will guides include YouTube videos?',
              answer:
                'Yes. Video fields are built into the guide system and should be used when reliable walkthrough videos are selected.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
