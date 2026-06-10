import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { buildGuideMetadata, renderGuidePage } from '../guide-page';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildGuideMetadata('he-let-you-go', locale, '/he-let-you-go');
}

export default function HeLetYouGoPage() {
  return renderGuidePage('he-let-you-go', '/he-let-you-go');
}
