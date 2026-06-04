import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaqSection } from '@/components/utdx/faq-section';
import { guides } from '@/data/utdx/guides';
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
    title: 'Universal Tower Defense X Guides - Codes, Units, Traits and Events',
    description:
      'Universal Tower Defense X guides for beginner progression, Merciless God, best units, trait rerolls, story mode, Universal Fest P2, relics, and codes.',
    locale,
    pathname: '/guides',
  });
}

export default function GuidesPage() {
  return (
    <div className="bg-[#0F1117] py-12 text-[#F8FAFC]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#22D3EE] text-[#07111F]">Guides</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Universal Tower Defense X Guides
          </h1>
          <p className="text-lg leading-8 text-[#D7DCE7]">
            Start with short-answer UTDX guides for codes, beginner progression,
            Merciless God, best units, trait rerolls, story mode, and current
            update decisions.
          </p>
        </header>

        <section className="rounded-lg border border-[#2A3242] bg-[#171B25] p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-white">
            How to use these guides
          </h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-[#AAB2C0] md:grid-cols-3">
            <p>1. Read the short answer before changing your lineup.</p>
            <p>2. Match advice to your blocker: unit, trait, relic, or mode.</p>
            <p>3. Use links to compare codes, tier list, units, and traits.</p>
          </div>
        </section>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => (
            <article
              key={guide.slug}
              className="overflow-hidden rounded-lg border border-[#2A3242] bg-[#171B25] shadow-sm"
            >
              <div className="relative aspect-video border-[#2A3242] border-b bg-[#10131A]">
                {guide.coverImageUrl || guide.video?.thumbnailUrl ? (
                  <Image
                    src={guide.coverImageUrl || guide.video?.thumbnailUrl || ''}
                    alt={`${guide.title} cover`}
                    fill
                    sizes="(min-width: 1280px) 400px, (min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col justify-end p-5">
                    <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#27D8B8]">
                      UTDX Guide
                    </span>
                    <span className="mt-2 text-2xl font-black text-white">
                      {guide.category}
                    </span>
                  </div>
                )}
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  <Badge className="bg-[#27D8B8] text-[#07111F]">
                    {guide.video ? 'Video Guide' : 'Guide'}
                  </Badge>
                </div>
              </div>
              <div className="p-5">
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-[#27D8B8] text-[#07111F]">
                    {guide.category}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="border-[#485366] text-white"
                  >
                    {guide.difficulty}
                  </Badge>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold text-white">
                  {guide.title}
                </h2>
                <p className="mt-3 text-sm leading-6 text-[#AAB2C0]">
                  {guide.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {guide.tags.slice(0, 3).map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-[#485366] text-[#D7DCE7]"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button asChild className="mt-5 bg-[#22D3EE] text-[#07111F]">
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
              question: 'Which UTDX guide should beginners read first?',
              answer:
                'Start with the beginner guide, then open codes, tier list, units, and traits before spending early rewards.',
            },
            {
              question: 'Which guide covers Merciless God?',
              answer:
                'Open the Merciless God guide for Universal Fest P2 investment, trait, relic, and build notes.',
            },
            {
              question: 'Which guide helps with rerolls?',
              answer:
                'Read Trait Reroll Strategy before using premium Trait Rerolls on a unit you may not keep.',
            },
            {
              question: 'Do guides replace the unit database?',
              answer:
                'No. Guides explain decisions; unit pages hold structured role, trait, relic, and priority notes.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
