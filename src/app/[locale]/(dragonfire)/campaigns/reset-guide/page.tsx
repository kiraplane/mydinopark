import { FaqSection } from '@/components/dragonfire/faq-section';
import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { campaignResetItems } from '@/data/dragonfire/campaigns';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faqs = [
  {
    question: 'What carries over between Reigns?',
    answer:
      'Official guidance confirms alliance identity persists across Reigns. Exact carry-over rules for some resources and dragon progression still need direct verification.',
  },
  {
    question: 'Do factions stay the same?',
    answer:
      'No. Factions can fluctuate across Reigns, and alliance leaders help choose the next faction direction.',
  },
  {
    question: 'Should I finish Campaign objectives before reset?',
    answer:
      'Yes. Treat stage objectives and territory goals as time-bound unless an official in-game message says otherwise.',
  },
  {
    question: 'What should I screenshot?',
    answer:
      'Screenshot reset warnings, carry-over notices, dragon progression messages, and any end-of-campaign reward screens.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title:
      'Game of Thrones Dragonfire Campaign Reset Guide - What Carries Over',
    description:
      'Track Game of Thrones Dragonfire campaign reset rules, Reign carry-over, faction changes, alliance persistence, and end-of-campaign checklist.',
    locale,
    pathname: '/campaigns/reset-guide',
    image: '/dragonfire/og-image.png',
  });
}

export default function CampaignResetGuidePage() {
  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Reset Guide</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Campaign Reset Guide
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            Use this table to decide what to finish, what to save, and what
            still needs direct in-game confirmation before a Campaign or Reign
            window changes.
          </p>
        </header>

        <section className="overflow-hidden rounded-lg border border-[#3A2721] bg-[#15110F]">
          <div className="overflow-x-auto">
            <table className="w-full min-w-[880px] text-left text-sm">
              <thead className="bg-[#0E0B0A] text-[#D6A03D]">
                <tr>
                  <th className="px-5 py-3">System</th>
                  <th className="px-5 py-3">Likely status</th>
                  <th className="px-5 py-3">Player action</th>
                  <th className="px-5 py-3">Notes</th>
                  <th className="px-5 py-3">Confidence</th>
                </tr>
              </thead>
              <tbody>
                {campaignResetItems.map((item) => (
                  <tr key={item.system} className="border-[#3A2721] border-t">
                    <td className="px-5 py-4 font-semibold text-[#F7EFE3]">
                      {item.system}
                    </td>
                    <td className="px-5 py-4 text-[#F7EFE3]">
                      {item.likelyStatus}
                    </td>
                    <td className="whitespace-normal px-5 py-4 leading-6 text-[#B8A99A]">
                      {item.playerAction}
                    </td>
                    <td className="whitespace-normal px-5 py-4 leading-6 text-[#B8A99A]">
                      {item.notes}
                    </td>
                    <td className="px-5 py-4 text-[#B8A99A]">
                      {item.confidence}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
