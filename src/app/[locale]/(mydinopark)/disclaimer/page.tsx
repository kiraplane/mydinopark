import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { officialGameFacts } from '@/data/mydinopark/sources';
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
    title: 'My Dino Park Wiki Disclaimer',
    description:
      'My Dino Park Wiki disclaimer covering independent guide status, Roblox source handling, codes, dinosaurs, updates, and wrong-game safety.',
    locale,
    pathname: '/disclaimer',
    image: '/mydinopark/og-image.png',
  });
}

export default function DisclaimerPage() {
  return (
    <div className="bg-[#0C1F14] py-12 text-[#F7FFE9]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#9BEA74] text-[#102114]">Disclaimer</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            My Dino Park Wiki Disclaimer
          </h1>
          <p className="text-[#C9D8BD] text-lg leading-8">
            My Dino Park Wiki is an independent guide site for Roblox players.
            It is not created, endorsed, or operated by Roblox, the group{' '}
            {officialGameFacts.creatorName}, or the My Dino Park developer team.
          </p>
        </header>

        <section className="rounded-lg border border-[#2E5B3C] bg-[#163521] p-6 text-[#C9D8BD] leading-8">
          <h2 className="font-display text-2xl font-bold text-[#F7FFE9]">
            Source handling
          </h2>
          <p className="mt-3">
            Official facts come from the Roblox game page and Roblox API
            snapshots. Codes, dinosaur advice, and progression routes are
            cross-checked from current public sources when available, but the
            site does not claim every code or mechanic has been game-tested.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#F7FFE9]">
            Codes and game changes
          </h2>
          <p className="mt-3">
            My Dino Park can change without notice. Codes can expire, rewards
            can change, and Roblox UI labels can move after updates. Use the
            official Roblox experience and official community links when
            checking time-sensitive rewards.
          </p>
          <h2 className="mt-8 font-display text-2xl font-bold text-[#F7FFE9]">
            Safety boundary
          </h2>
          <p className="mt-3">
            This site does not provide scripts, exploits, modified clients, APK
            mirrors, private-server instructions, or account-risk shortcuts. It
            also avoids copying Crazy Dino Park, Be Dino, Dinosaur Park Tycoon,
            or other game facts into My Dino Park pages unless sources clearly
            match this exact Roblox experience.
          </p>
        </section>

        <div className="flex flex-wrap gap-3">
          <Button
            asChild
            className="bg-[#9BEA74] text-[#102114] hover:bg-[#C6FF96]"
          >
            <LocaleLink href="/guides/beginner-guide">Start Guide</LocaleLink>
          </Button>
          <Button asChild variant="outline">
            <LocaleLink href="/download">Official Links</LocaleLink>
          </Button>
        </div>
      </Container>
    </div>
  );
}
