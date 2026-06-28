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
    title: 'Terms of Service | Nophenia Wiki',
    description:
      'Terms for using Nophenia Wiki, an unofficial Nophenia guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#070911] py-12 text-[#F6F0EA]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#CDEAE7]">
          This site provides unofficial Nophenia guides, browser play access,
          source notes, and official-link guidance. It is not affiliated with,
          endorsed by, sponsored by, or operated by lane, Valve, Steam, or
          itch.io.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          Routes, interactions, achievements, and ending details can change
          after game updates. Treat guide pages as community-oriented guidance
          and verify important details in your current game version.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          Do not use this site to distribute unauthorized game files, unsafe
          APKs, modified clients, save editors, copied paid Steam files, or
          automation scripts.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          Questions about these terms can be sent to hello@nophenia.wiki.
        </p>
      </Container>
    </div>
  );
}
