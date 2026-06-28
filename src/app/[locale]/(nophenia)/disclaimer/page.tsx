import Container from '@/components/layout/container';
import { siteFacts } from '@/data/nophenia/sources';
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
    title: 'Disclaimer | Nophenia',
    description:
      'Disclaimer for Nophenia, an unofficial guide and play-online site.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#070911] py-12 text-[#F6F0EA]">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="font-display text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-[#CDEAE7]">
          Nophenia Wiki is an unofficial fan guide site. It is not affiliated
          with, endorsed by, sponsored by, or operated by lane, Valve, Steam,
          itch.io, or any official distribution platform.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          Nophenia, its name, art, music, game files, code, and official
          materials belong to lane and the respective rights holders. This site
          does not redistribute paid Steam files, modified clients, APK mirrors,
          save editors, or unsafe downloads.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          The play-online page self-hosts the official itch.io WebGL browser
          build with permission from the user&apos;s project requirements. The
          page clearly links back to the official Steam and itch.io sources.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          For the current full release, use{' '}
          <a
            href={siteFacts.officialSteamUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#6DDFC4] underline underline-offset-4"
          >
            the official Steam page
          </a>
          . For the official browser page and community links, use{' '}
          <a
            href={siteFacts.officialItchUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#6DDFC4] underline underline-offset-4"
          >
            lane&apos;s itch.io page
          </a>
          .
        </p>
      </Container>
    </div>
  );
}
