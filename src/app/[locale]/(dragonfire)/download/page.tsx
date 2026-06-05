import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/dragonfire/sources';
import { LocaleLink } from '@/i18n/navigation';
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
    title: 'Game of Thrones Dragonfire Download - Android, iOS, Official Links',
    description:
      'Download Game of Thrones Dragonfire safely with official Android, iOS, Google Play, and official site links. Avoid untrusted APK mirrors.',
    locale,
    pathname: '/download',
    image: '/dragonfire/og-image.png',
  });
}

export default function DownloadPage() {
  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Download</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Download
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            Use official store and publisher links first. Do not install random
            APK files or copied clients that use the Dragonfire name.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          <a
            href={officialGameFacts.googlePlayUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5 transition hover:border-[#D6A03D]"
          >
            <Badge className="bg-[#B91C1C] text-[#F7EFE3]">Android</Badge>
            <h2 className="mt-4 font-display text-2xl font-bold">
              Google Play
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#B8A99A]">
              Official Android listing for Game of Thrones: Dragonfire.
            </p>
          </a>
          <a
            href={officialGameFacts.officialWebsiteUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5 transition hover:border-[#D6A03D]"
          >
            <Badge className="bg-[#B91C1C] text-[#F7EFE3]">Official</Badge>
            <h2 className="mt-4 font-display text-2xl font-bold">
              Official website
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#B8A99A]">
              Check official news, gameplay, and support links from the
              publisher ecosystem.
            </p>
          </a>
          <div className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5">
            <Badge className="bg-[#B91C1C] text-[#F7EFE3]">Safety</Badge>
            <h2 className="mt-4 font-display text-2xl font-bold">
              Avoid APK mirrors
            </h2>
            <p className="mt-3 text-sm leading-7 text-[#B8A99A]">
              If a page offers codes, downloads, and account rewards together,
              treat it as unsafe until verified by official channels.
            </p>
          </div>
        </section>

        <Button
          asChild
          className="bg-[#B91C1C] text-[#F7EFE3] hover:bg-[#DC2626]"
        >
          <LocaleLink href="/guides/beginner-guide">
            Read first-day guide
          </LocaleLink>
        </Button>
      </Container>
    </div>
  );
}
