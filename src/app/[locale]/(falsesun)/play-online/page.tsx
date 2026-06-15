import { FalseSunPlayOnlinePage } from '@/components/falsesun/play-online-page';
import { getPlayOnlineContent } from '@/data/falsesun/localized';
import { siteFacts } from '@/data/falsesun/sources';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const content = getPlayOnlineContent(locale);

  return constructMetadata({
    title: content.metadataTitle,
    description: content.metadataDescription,
    locale,
    pathname: '/play-online',
    image: siteFacts.officialHeroImage,
  });
}

export default async function PlayOnlinePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <FalseSunPlayOnlinePage locale={locale} />;
}
