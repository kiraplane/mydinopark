import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  campaignChecklist,
  campaignResetItems,
} from '@/data/dragonfire/campaigns';
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
    title: 'Game of Thrones Dragonfire Campaigns - Reset and Stage Guide',
    description:
      'Understand Game of Thrones Dragonfire Campaigns, stage objectives, reset planning, Reigns, alliance goals, and what to finish first.',
    locale,
    pathname: '/campaigns',
    image: '/dragonfire/og-image.png',
  });
}

export default function CampaignsPage() {
  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Campaigns</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Campaigns
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            Campaigns are where personal progression, alliance plans, faction
            goals, and Reign timing collide. Finish stage objectives before the
            window closes.
          </p>
          <Button
            asChild
            className="bg-[#B91C1C] text-[#F7EFE3] hover:bg-[#DC2626]"
          >
            <LocaleLink href="/campaigns/reset-guide">
              Open reset guide
            </LocaleLink>
          </Button>
        </header>

        <section className="rounded-lg border border-[#3A2721] bg-[#15110F] p-6">
          <h2 className="font-display text-2xl font-bold">
            Campaign checklist
          </h2>
          <ul className="mt-4 space-y-3 text-sm leading-7 text-[#B8A99A]">
            {campaignChecklist.map((item) => (
              <li key={item}>- {item}</li>
            ))}
          </ul>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {campaignResetItems.slice(0, 4).map((item) => (
            <article
              key={item.system}
              className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5"
            >
              <Badge className="bg-[#B91C1C] text-[#F7EFE3]">
                {item.likelyStatus}
              </Badge>
              <h2 className="mt-4 font-display text-2xl font-bold">
                {item.system}
              </h2>
              <p className="mt-3 text-sm leading-7 text-[#B8A99A]">
                {item.playerAction}
              </p>
            </article>
          ))}
        </section>
      </Container>
    </div>
  );
}
