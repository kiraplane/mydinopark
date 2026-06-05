import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { updates } from '@/data/dragonfire/updates';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Game of Thrones Dragonfire Updates - Launch and Official News',
    description:
      'Track Game of Thrones Dragonfire launch notes, official news, Stronghold updates, Factions, Alliances, and guide changes.',
    locale,
    pathname: '/updates',
    image: '/dragonfire/og-image.png',
  });
}

export default function UpdatesPage() {
  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Updates</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Updates
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            Official launch and guide-source updates that affect wiki pages,
            strategy assumptions, and data confidence.
          </p>
        </header>

        <div className="grid gap-4">
          {updates.map((update) => (
            <article
              key={update.slug}
              className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5"
            >
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#B91C1C] text-[#F7EFE3]">
                  {update.publishedAt}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#4A4039] text-white"
                >
                  {update.source.confidence} confidence
                </Badge>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">
                {update.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#B8A99A]">
                {update.summary}
              </p>
              <a
                href={update.source.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex text-sm font-semibold text-[#D6A03D] underline underline-offset-4"
              >
                Source: {update.source.label}
              </a>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
