import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
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
    title: 'Game of Thrones Dragonfire Reigns - Seasonal Planning Guide',
    description:
      'Plan Game of Thrones Dragonfire Reigns, faction shifts, alliance persistence, campaign objectives, and pre-reset decisions.',
    locale,
    pathname: '/reigns',
    image: '/dragonfire/og-image.png',
  });
}

export default function ReignsPage() {
  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Reigns</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Reigns
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            Reigns are the seasonal wrapper for faction conflict. Your alliance
            identity persists, but faction direction and campaign goals can
            change, so planning matters before the window moves.
          </p>
        </header>

        <section className="grid gap-4 md:grid-cols-3">
          {[
            [
              'Alliance first',
              'Stay aligned with your Alliance Leader before the next Reign begins.',
            ],
            [
              'Faction pressure',
              'Faction assignment can change, so do not assume the same map context forever.',
            ],
            [
              'Claim rewards',
              'Finish and claim time-bound Campaign Stage Objectives before reset risk.',
            ],
          ].map(([title, body]) => (
            <article
              key={title}
              className="rounded-lg border border-[#3A2721] bg-[#15110F] p-5"
            >
              <h2 className="font-display text-2xl font-bold">{title}</h2>
              <p className="mt-3 text-sm leading-7 text-[#B8A99A]">{body}</p>
            </article>
          ))}
        </section>

        <Button
          asChild
          className="bg-[#B91C1C] text-[#F7EFE3] hover:bg-[#DC2626]"
        >
          <LocaleLink href="/campaigns/reset-guide">
            Open reset checklist
          </LocaleLink>
        </Button>
      </Container>
    </div>
  );
}
