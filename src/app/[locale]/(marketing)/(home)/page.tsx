import { DragonfireHomePage } from '@/components/dragonfire/home-page';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;

  return constructMetadata({
    title: 'Game of Thrones Dragonfire Wiki - Codes, Tier List & Guides',
    description:
      'Game of Thrones Dragonfire Wiki with codes, tier list rankings, dragon profiles, campaign reset help, resources, alliances, Reigns, and beginner guides.',
    locale,
    pathname: '',
    image: '/dragonfire/og-image.png',
  });
}

export default function HomePage() {
  return <DragonfireHomePage />;
}
