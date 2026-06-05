import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { resources } from '@/data/dragonfire/resources';
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
    title: 'Game of Thrones Dragonfire Resources - Wood, Iron, Stone, Grain',
    description:
      'Plan Game of Thrones Dragonfire resources including wood, stone, iron, grain, meat, gold, and Dragonfire Gems.',
    locale,
    pathname: '/resources',
    image: '/dragonfire/og-image.png',
  });
}

export default function ResourcesPage() {
  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Resources</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Resources
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            Keep the economy moving: spend basic resources on real breakpoints,
            protect premium resources, and feed one main dragon before spreading
            materials everywhere.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {resources.map((resource) => (
            <article
              key={resource.slug}
              className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5"
            >
              <div className="flex flex-wrap gap-2">
                <Badge className="bg-[#B91C1C] text-[#F7EFE3]">
                  {resource.type}
                </Badge>
                <Badge
                  variant="outline"
                  className="border-[#4A4039] text-white"
                >
                  {resource.priority}
                </Badge>
              </div>
              <h2 className="mt-4 font-display text-2xl font-bold">
                {resource.name}
              </h2>
              <div className="mt-4 space-y-4 text-sm leading-7 text-[#B8A99A]">
                <p>
                  <strong className="text-[#F7EFE3]">Best sources:</strong>{' '}
                  {resource.bestSources.join(', ')}
                </p>
                <p>
                  <strong className="text-[#F7EFE3]">Best uses:</strong>{' '}
                  {resource.bestUses.join(', ')}
                </p>
                <p>
                  <strong className="text-[#F7EFE3]">Avoid:</strong>{' '}
                  {resource.avoid}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </div>
  );
}
