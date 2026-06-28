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
    description: 'Rights and site-use note for Nophenia guide pages.',
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
          Nophenia Wiki is a guide and play-online help site for players who
          want controls, walkthrough notes, route help, and Steam release
          context.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          Nophenia, its name, art, music, game files, code, and materials belong
          to lane and the respective rights holders. This site does not provide
          paid Steam files, modified clients, APK mirrors, save editors, or
          unsafe downloads.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          The play-online page exists so readers can try nophenia in the browser
          while keeping the guide hub nearby for controls, comfort notes, and
          route decisions.
        </p>
        <p className="leading-8 text-[#CDEAE7]">
          For the current full release, use{' '}
          <a
            href={siteFacts.officialSteamUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[#6DDFC4] underline underline-offset-4"
          >
            the Steam store page
          </a>
          .
        </p>
      </Container>
    </div>
  );
}
