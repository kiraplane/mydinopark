import { getGuide, guides } from '@/data/falsesun/guides';
import { routing } from '@/i18n/routing';
import type { Locale } from 'next-intl';
import { redirect } from 'next/navigation';

export function generateStaticParams() {
  return routing.locales.flatMap((locale) =>
    guides.map((guide) => ({ locale, slug: guide.slug }))
  );
}

export default async function GuideSlugPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const guide = getGuide(slug);
  const path = guide?.path ?? '/guides';
  const localizedPath =
    locale === routing.defaultLocale ? path : `/${locale}${path}`;

  redirect(localizedPath);
}
