import { UtdxHomePage } from '@/components/utdx/home-page';
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
    title: 'Universal Tower Defense X Wiki - Codes, Tier List & Units',
    description:
      'Universal Tower Defense X Wiki with active codes, tier list rankings, best units, traits, relics, Merciless God, Universal Fest P2 updates, and beginner guides.',
    locale,
    pathname: '',
  });
}

export default function HomePage() {
  return <UtdxHomePage />;
}
