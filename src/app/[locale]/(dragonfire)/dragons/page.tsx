import { DragonBrowser } from '@/components/dragonfire/dragon-browser';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { dragons } from '@/data/dragonfire/dragons';
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
    title: 'Game of Thrones Dragonfire Dragons - Profiles and Upgrade Priority',
    description:
      'Browse Game of Thrones Dragonfire dragon profiles, roles, tier status, unlock notes, commands, habits, source confidence, and upgrade priority.',
    locale,
    pathname: '/dragons',
    image: '/dragonfire/og-image.png',
  });
}

export default function DragonsPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: dragons.map((dragon, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: dragon.name,
      url: `/dragons/${dragon.slug}`,
    })),
  };

  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Dragons</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Dragons
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            Compare dragon roles, launch-stage tier status, best uses, unlock
            notes, command placeholders, habits, and source confidence before
            spending meat or relic materials.
          </p>
        </header>

        <DragonBrowser dragons={dragons} />
      </Container>
    </div>
  );
}
