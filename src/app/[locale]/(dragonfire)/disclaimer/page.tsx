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
    title: 'Disclaimer | Game of Thrones Dragonfire Wiki',
    description:
      'Unofficial fan-made site disclaimer for Game of Thrones Dragonfire Wiki.',
    locale,
    pathname: '/disclaimer',
    image: '/dragonfire/og-image.png',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-[#B8A99A]">
          Game of Thrones Dragonfire Wiki is an unofficial fan-made guide site.
          It is not affiliated with, endorsed by, sponsored by, or operated by
          Warner Bros. Games, HBO, Warner Bros. Discovery, or any official Game
          of Thrones: Dragonfire team.
        </p>
        <p className="leading-8 text-[#B8A99A]">
          Game of Thrones, House of the Dragon, related names, characters,
          dragons, artwork, and trademarks belong to their respective owners.
          This site uses original generated site artwork and text-based guide
          data for commentary, strategy, and informational purposes.
        </p>
        <p className="leading-8 text-[#B8A99A]">
          Game data can change after updates, Campaigns, Reigns, balance
          changes, store updates, or official announcements. Treat guides,
          rankings, code status, and reset notes as practical help rather than
          official instructions.
        </p>
      </Container>
    </div>
  );
}
