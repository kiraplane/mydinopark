import { MyDinoParkHomePage } from '@/components/mydinopark/home-page';
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
    title: 'My Dino Park Wiki - Codes, Eggs, Dinosaurs and Roblox Guide',
    description:
      'My Dino Park Wiki covers Roblox codes, eggs, dinosaurs, visitor Cash, Teeth rewards, upgrades, Discord links, and safe official access.',
    locale,
    pathname: '',
    image: '/mydinopark/og-image.png',
  });
}

export default function HomePage() {
  return <MyDinoParkHomePage />;
}
