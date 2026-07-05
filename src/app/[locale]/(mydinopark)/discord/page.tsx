import { TopicPage } from '@/components/mydinopark/topic-page';
import { getTopicPage } from '@/data/mydinopark/topics';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const topic = getTopicPage('discord');

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: topic.seoTitle,
    description: topic.seoDescription,
    locale,
    pathname: topic.route,
    image: '/mydinopark/og-image.png',
  });
}

export default function DiscordPage() {
  return <TopicPage topic={topic} />;
}
