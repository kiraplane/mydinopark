import { CodeCopyButton } from '@/components/dragonfire/code-copy-button';
import { FaqSection } from '@/components/dragonfire/faq-section';
import { LastUpdated } from '@/components/dragonfire/last-updated';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  activeCodes,
  codeCheckSummary,
  expiredCodes,
} from '@/data/dragonfire/codes';
import { officialGameFacts } from '@/data/dragonfire/sources';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const faqs = [
  {
    question: 'Are there active Game of Thrones Dragonfire codes?',
    answer:
      'No verified active codes were confirmed during the June 5, 2026 check. Public searches show code demand, but not a reliable working code for this game.',
  },
  {
    question: 'Does Dragonfire need a codes page if there are no codes?',
    answer:
      'Yes. Players search for codes, and search results already mix this game with unrelated games and similarly named code pages. A cautious page prevents bad copies and unsafe downloads.',
  },
  {
    question: 'Why not list unverified Dragonfire codes?',
    answer:
      'Fake code pages waste player time and can push unsafe downloads. This wiki keeps unverified code rumors out of the active table.',
  },
  {
    question: 'Where should I check for official codes?',
    answer:
      'Check official Game of Thrones: Dragonfire news, in-game mail, official social channels, and the app store pages first.',
  },
  {
    question: 'What should I do after redeeming a real code?',
    answer:
      'Open the tier list and beginner guide before spending rewards on dragons, timers, troop queues, or premium resources.',
  },
];

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Game of Thrones Dragonfire Codes - Active Redeem Status',
    description:
      'Track Game of Thrones Dragonfire codes, active reward status, checked sources, redeem notes, expired code history, and safe code advice.',
    locale,
    pathname: '/codes',
    image: '/dragonfire/og-image.png',
  });
}

export default function CodesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <div className="bg-[#080707] py-12 text-[#F7EFE3]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#D6A03D] text-[#110D0B]">Codes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Game of Thrones Dragonfire Codes
          </h1>
          <p className="text-lg leading-8 text-[#B8A99A]">
            Track active Dragonfire redeem codes without falling for fake code
            lists or unrelated games. The current status is based on sources
            checked on {codeCheckSummary.checkedAt}.
          </p>
          <LastUpdated date={codeCheckSummary.checkedAt} />
        </header>

        <section className="rounded-lg border border-[#3A2721] bg-[#15110F] p-6">
          <h2 className="font-display text-2xl font-bold">
            {codeCheckSummary.status}
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-[#B8A99A]">
            We checked official launch information, the Google Play listing,
            official gameplay pages, support-facing guide pages, YouTube and web
            search results, and code-search demand pages. No active code was
            reliable enough to list as working. That will change here as soon as
            a code is verified.
          </p>
          <div className="mt-5 rounded-lg border border-[#3A2721] bg-[#0E0B0A] p-4">
            <h3 className="font-display text-lg font-bold">
              Why this page still matters
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-7 text-[#B8A99A]">
              {codeCheckSummary.reviewNotes.map((note) => (
                <li key={note}>- {note}</li>
              ))}
            </ul>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#B91C1C] text-[#F7EFE3] hover:bg-[#DC2626]"
            >
              <a
                href={officialGameFacts.officialWebsiteUrl}
                target="_blank"
                rel="noreferrer"
              >
                Official site
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/beginner-guide">
                Beginner guide
              </LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#3A2721] bg-[#15110F] shadow-sm">
          <div className="border-[#3A2721] border-b p-5">
            <h2 className="font-display text-2xl font-bold">
              Active codes ({activeCodes.length})
            </h2>
          </div>
          {activeCodes.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[760px] text-left text-sm">
                <thead className="bg-[#0E0B0A] text-[#D6A03D]">
                  <tr>
                    <th className="px-5 py-3">Code</th>
                    <th className="px-5 py-3">Reward</th>
                    <th className="px-5 py-3">Last checked</th>
                    <th className="px-5 py-3">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {activeCodes.map((item) => (
                    <tr key={item.code} className="border-[#3A2721] border-t">
                      <td className="px-5 py-4 font-mono font-bold">
                        {item.code}
                      </td>
                      <td className="px-5 py-4 text-[#B8A99A]">
                        {item.reward}
                      </td>
                      <td className="px-5 py-4 text-[#B8A99A]">
                        {item.lastChecked}
                      </td>
                      <td className="px-5 py-4">
                        <CodeCopyButton code={item.code} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-5 text-sm leading-7 text-[#B8A99A]">
              No verified active codes are available at this check time.
            </div>
          )}
        </section>

        <section className="rounded-lg border border-[#3A2721] bg-[#15110F] p-6">
          <h2 className="font-display text-2xl font-bold">Expired codes</h2>
          <p className="mt-3 text-sm leading-7 text-[#B8A99A]">
            {expiredCodes.length === 0
              ? 'No expired Dragonfire codes are tracked yet.'
              : `${expiredCodes.length} expired codes are tracked.`}
          </p>
        </section>

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
