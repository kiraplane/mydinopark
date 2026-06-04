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
    title: 'Disclaimer | Universal Tower Defense X Wiki',
    description:
      'Disclaimer for the independent Universal Tower Defense X Wiki, Roblox references, guide content, and source attribution.',
    locale,
    pathname: '/disclaimer',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#060B12] py-12 text-slate-100">
      <Container className="max-w-3xl space-y-6 px-4">
        <h1 className="text-4xl font-black">Disclaimer</h1>
        <p className="leading-8 text-slate-300">
          Universal Tower Defense X Wiki is an independent fan guide. It is not
          an official Roblox website and is not endorsed by Roblox Corporation,
          Universal Tower Defense [UTD], or the game developers.
        </p>
        <p className="leading-8 text-slate-300">
          Game names, unit names, update names, gameplay systems, Roblox
          experience details, and community wiki references belong to their
          respective rights holders. This site uses text-first unit references
          unless reliable official or community-licensed assets are available.
        </p>
        <p className="leading-8 text-slate-300">
          This site does not provide Roblox executors, scripts, copied clients,
          cheats, account services, or instructions for bypassing Roblox or game
          rules.
        </p>
      </Container>
    </div>
  );
}
