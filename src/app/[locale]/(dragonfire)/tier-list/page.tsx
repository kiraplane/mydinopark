import { FaqSection } from '@/components/dragonfire/faq-section';
import { TierListTable } from '@/components/dragonfire/tier-list-table';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { tierEntriesWithDragons } from '@/data/dragonfire/tier-list';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faqs = [
  {
    question: 'What is the best dragon in Game of Thrones Dragonfire?',
    answer:
      'Syrax and Caraxes are the safest early recommendations because they support broad progression. Vhagar and other famous dragons need more verified unlock and command data before they become rush targets.',
  },
  {
    question: 'Why does this tier list use Recommended instead of S tier?',
    answer:
      'The game is newly launched, so precise S/A/B math would be misleading. Recommended, Situational, and Data Pending better match the current evidence.',
  },
  {
    question: 'How should beginners use the tier list?',
    answer:
      'Pick one main dragon, check resource cost, then build around campaign or alliance needs instead of feeding every dragon evenly.',
  },
  {
    question: 'How often will the Dragonfire tier list change?',
    answer:
      'It should change whenever commands, habits, unlock paths, alliance-war results, or campaign performance are verified.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Game of Thrones Dragonfire Tier List - Best Dragons to Build',
    description:
      'Launch-stage Game of Thrones Dragonfire tier list with best dragons, upgrade priority, combat roles, resource cost, and data confidence.',
    locale,
    pathname: '/tier-list',
    image: '/dragonfire/og-image.png',
  });
}

export default function TierListPage() {
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: tierEntriesWithDragons
      .filter((entry) => entry.dragon)
      .map((entry, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: entry.dragon?.name,
        url: `/dragons/${entry.dragon?.slug}`,
      })),
  };

  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <JsonLd data={itemList} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Tier List</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Tier List
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            A launch-stage ranking for which dragons deserve early resources,
            which ones are situational, and which famous names still need data
            before serious investment.
          </p>
        </header>

        <section className="rounded-lg border border-[#3A2721] bg-[#15110F] p-6">
          <h2 className="font-display text-2xl font-bold">Ranking rules</h2>
          <div className="mt-4 grid gap-4 text-sm leading-7 text-[#B8A99A] md:grid-cols-3">
            <p>
              <strong className="text-[#F7EFE3]">Early value:</strong> whether
              the dragon helps campaign and first-week growth.
            </p>
            <p>
              <strong className="text-[#F7EFE3]">Combat role:</strong> whether
              the dragon solves offense, defense, siege, or alliance pressure.
            </p>
            <p>
              <strong className="text-[#F7EFE3]">Confidence:</strong> whether
              commands, habits, and unlock paths have been verified.
            </p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B91C1C] text-[#F7EFE3] hover:bg-[#DC2626]"
            >
              <LocaleLink href="/dragons">Open dragon database</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/resources">Plan resources</LocaleLink>
            </Button>
          </div>
        </section>

        <TierListTable />

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
