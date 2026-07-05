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
    title: 'Terms of Service | My Dino Park Wiki',
    description:
      'Terms for using the independent My Dino Park Wiki and Roblox guide site.',
    locale,
    pathname: '/terms',
  });
}

export default function TermsOfServicePage() {
  return (
    <div className="bg-[#0F1117] py-12 text-[#F8FAFC]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Terms of Service</h1>
        <p className="leading-8 text-[#CBD5E1]">
          This site provides independent My Dino Park guides, data notes, and
          strategy content. It is not affiliated with, endorsed by, sponsored
          by, or operated by Roblox, dream without the vale, or the official My
          Dino Park team.
        </p>
        <p className="leading-8 text-[#CBD5E1]">
          Game data can change quickly. Codes, card values, mutation notes,
          rewards, update markers, and strategy advice should be treated as
          guidance, not official instructions.
        </p>
        <p className="leading-8 text-[#CBD5E1]">
          Do not use this site to distribute cheats, automation scripts, copied
          clients, account services, or other content that violates game or
          platform terms.
        </p>
        <p className="leading-8 text-[#CBD5E1]">
          Questions about these terms can be sent to hello@my-dino-park.wiki.
        </p>
      </Container>
    </div>
  );
}
