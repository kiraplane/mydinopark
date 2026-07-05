import { AdsterraAdFrame } from '@/components/ads/adsterra-ad';
import Container from '@/components/layout/container';
import { CodeCopyButton } from '@/components/mydinopark/code-copy-button';
import { FaqSection } from '@/components/mydinopark/faq-section';
import { LastUpdated } from '@/components/mydinopark/last-updated';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  activeCodes,
  codeCheckSummary,
  expiredCodes,
  watchCodes,
} from '@/data/mydinopark/codes';
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
    title: 'My Dino Park Codes - Active Roblox Codes and Rewards',
    description:
      'Source-checked My Dino Park codes for Roblox, including UPDATE2, BESTDINOGAME, DINOSLOVESU, WELCOME, THX4PLAYING, rewards, and redeem steps.',
    locale,
    pathname: '/codes',
    image: '/mydinopark/og-image.png',
  });
}

export default function CodesPage() {
  const faqs = [
    {
      question: 'Are My Dino Park codes game-tested here?',
      answer:
        'No. Codes are source-checked from current public sources, but this site did not redeem them inside Roblox.',
    },
    {
      question: 'Where should I redeem My Dino Park codes?',
      answer:
        'Redeem codes inside the official My Dino Park Roblox experience, usually through the in-game Shop or code panel.',
    },
    {
      question: 'Why is THX4PLAYING listed with medium confidence?',
      answer:
        'Most current sources list THX4PLAYING, while one current source lists THXFORPLAYING. This page tracks the conflict instead of treating both spellings as equally verified.',
    },
  ];
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
    <div className="bg-[#0C1F14] py-12 text-[#F7FFE9]">
      <JsonLd data={jsonLd} />
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#9BEA74] text-[#102114]">Roblox Codes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            My Dino Park Codes
          </h1>
          <p className="text-[#C9D8BD] text-lg leading-8">
            {codeCheckSummary.status} Copy codes exactly, redeem them inside the
            official Roblox game, and spend Cash, Teeth, or Frozen Egg rewards
            on a real egg, placement, or upgrade plan.
          </p>
          <LastUpdated date={codeCheckSummary.checkedAt} />
        </header>

        <AdsterraAdFrame
          slot="banner-728x90"
          className="rounded-lg border border-[#2E5B3C] bg-[#163521] py-4"
          label
        />

        <section className="rounded-lg border border-[#2E5B3C] bg-[#163521] p-6">
          <h2 className="font-display text-2xl font-bold">
            Redeem active codes before a focused session
          </h2>
          <p className="mt-3 max-w-3xl text-[#C9D8BD] text-sm leading-7">
            The useful sequence is simple: open the official Roblox experience,
            redeem codes, decide whether the reward supports eggs, hatching,
            Teeth, placement, or upgrades, then spend during active play instead
            of scattering rewards across low-impact purchases.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              className="bg-[#9BEA74] text-[#102114] hover:bg-[#C6FF96]"
            >
              <a
                href={officialGameFacts.officialRobloxUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Roblox
              </a>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/codes-redeem-guide">
                Redeem Guide
              </LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/wrong-game-safety-guide">
                Avoid Wrong Codes
              </LocaleLink>
            </Button>
          </div>
        </section>

        <section className="rounded-lg border border-[#2E5B3C] bg-[#163521] shadow-sm">
          <div className="border-[#2E5B3C] border-b p-5">
            <h2 className="font-display text-2xl font-bold">
              Active / reported active codes ({activeCodes.length})
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[920px] text-left text-sm">
              <thead className="bg-[#0C1F14] text-[#9BEA74]">
                <tr>
                  <th className="px-5 py-3">Code</th>
                  <th className="px-5 py-3">Reward</th>
                  <th className="px-5 py-3">Confidence</th>
                  <th className="px-5 py-3">Notes</th>
                  <th className="px-5 py-3">Action</th>
                </tr>
              </thead>
              <tbody>
                {activeCodes.map((item) => (
                  <tr key={item.code} className="border-[#2E5B3C] border-t">
                    <td className="px-5 py-4 font-mono font-bold">
                      {item.code}
                    </td>
                    <td className="px-5 py-4 text-[#C9D8BD]">{item.reward}</td>
                    <td className="px-5 py-4 text-[#C9D8BD]">
                      {item.confidence}
                    </td>
                    <td className="px-5 py-4 text-[#C9D8BD]">{item.notes}</td>
                    <td className="px-5 py-4">
                      <CodeCopyButton code={item.code} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-lg border border-[#2E5B3C] bg-[#163521] p-6">
            <h2 className="font-display text-2xl font-bold">Watchlist</h2>
            <div className="mt-4 space-y-3">
              {watchCodes.map((item) => (
                <div
                  key={item.code}
                  className="rounded-md border border-[#2E5B3C] bg-[#0C1F14] p-4"
                >
                  <p className="font-semibold text-[#FFF4CF]">{item.code}</p>
                  <p className="mt-2 text-[#C9D8BD] text-sm leading-6">
                    {item.notes}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg border border-[#2E5B3C] bg-[#163521] p-6">
            <h2 className="font-display text-2xl font-bold">Expired codes</h2>
            <p className="mt-3 text-[#C9D8BD] text-sm leading-7">
              {expiredCodes.length === 0
                ? 'No expired My Dino Park codes are listed yet.'
                : `${expiredCodes.length} expired codes are tracked.`}
            </p>
            <h3 className="mt-6 font-display text-lg font-bold">
              Sources checked
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {codeCheckSummary.sourcesChecked.map((source) => (
                <a
                  key={source.url}
                  href={source.url}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-[#2E5B3C] bg-[#0C1F14] px-3 py-2 font-medium text-[#C9D8BD] text-sm transition hover:border-[#9BEA74] hover:text-[#9BEA74]"
                >
                  {source.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        <FaqSection items={faqs} />
      </Container>
    </div>
  );
}
