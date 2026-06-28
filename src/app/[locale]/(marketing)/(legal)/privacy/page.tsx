import Container from '@/components/layout/container';
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
    title: 'Privacy Policy | Nophenia Wiki',
    description:
      'Privacy policy for Nophenia Wiki, an unofficial guide and play-online site.',
    locale,
    pathname: '/privacy',
  });
}

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-[#070911] py-12 text-[#F6F0EA]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Privacy Policy</h1>
        <p className="leading-8 text-[#CDEAE7]">
          Nophenia Wiki is an unofficial fan guide and browser play site. We do
          not require accounts for browsing the wiki, guide pages, official-link
          pages, or the play-online page.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          Standard analytics or hosting logs may record aggregate traffic data
          such as page views, referrers, device type, and approximate region. We
          use this to improve guides and fix broken pages.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          Remote media may be loaded from Steam, itch.io, or YouTube when a page
          embeds official artwork, store links, or guide videos.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          Privacy questions can be sent to hello@nophenia.wiki.
        </p>
      </Container>
    </div>
  );
}
