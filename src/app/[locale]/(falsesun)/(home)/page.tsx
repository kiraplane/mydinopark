import { FalseSunHomePage } from '@/components/falsesun/home-page';
import {
  getHomeContent,
  getLocalizedSiteDescription,
} from '@/data/falsesun/localized';
import { siteFacts } from '@/data/falsesun/sources';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata | undefined> {
  const { locale } = await params;
  const content = getHomeContent(locale);

  return constructMetadata({
    title: content.title,
    description: getLocalizedSiteDescription(locale),
    locale,
    pathname: '/',
    image: siteFacts.officialCoverImage,
  });
}

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return <FalseSunHomePage locale={locale} />;
}
