import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { CodeCopyButton } from '@/components/utdx/code-copy-button';
import { FaqSection } from '@/components/utdx/faq-section';
import { activeCodes, eventCodes, expiredCodes } from '@/data/utdx/codes';
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
    title: 'Universal Tower Defense X Codes - Active Rewards and Redeem Guide',
    description:
      'Active Universal Tower Defense X codes with rewards, Universal Fest P2 event codes, copy buttons, redeem steps, and help for UTDX codes that do not work.',
    locale,
    pathname: '/codes',
  });
}

function CodesTable({
  title,
  codes,
}: {
  title: string;
  codes: typeof activeCodes;
}) {
  return (
    <section className="rounded-lg border border-[#2A3242] bg-[#171B25] shadow-sm">
      <div className="border-[#2A3242] border-b p-5">
        <h2 className="font-display text-2xl font-bold text-white">
          {title} ({codes.length})
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full min-w-[820px] text-left text-sm">
          <thead className="bg-[#10131A] text-[#AAB2C0]">
            <tr>
              <th className="px-5 py-3">Code</th>
              <th className="px-5 py-3">Reward</th>
              <th className="px-5 py-3">Event</th>
              <th className="px-5 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {codes.map((item) => (
              <tr key={item.code} className="border-[#2A3242] border-t">
                <td className="px-5 py-4 font-mono font-bold text-white">
                  {item.code}
                </td>
                <td className="px-5 py-4 text-[#D7DCE7]">{item.reward}</td>
                <td className="px-5 py-4">
                  <Badge
                    className={
                      item.event === 'universal-fest-p2'
                        ? 'bg-[#8B5CF6] text-white'
                        : 'bg-[#27D8B8] text-[#07111F]'
                    }
                  >
                    {item.event === 'universal-fest-p2'
                      ? 'Universal Fest P2'
                      : 'General'}
                  </Badge>
                </td>
                <td className="px-5 py-4">
                  <CodeCopyButton code={item.code} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default function CodesPage() {
  return (
    <div className="bg-[#0F1117] py-12 text-[#F8FAFC]">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-[#22D3EE] text-[#07111F]">Codes</Badge>
          <h1 className="font-display text-4xl font-black md:text-6xl">
            Universal Tower Defense X Codes
          </h1>
          <p className="text-lg leading-8 text-[#D7DCE7]">
            Copy active UTDX codes, including Universal Fest P2 codes, before
            you summon, reroll traits, or commit relic resources. Rewards can
            include Gems, Gold, Trait Rerolls, Relic Rerolls, fragments, keys,
            and event currency.
          </p>
        </header>

        <section className="rounded-lg border border-[#2A3242] bg-[#171B25] p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-white">
            How to redeem Universal Tower Defense X codes
          </h2>
          <ol className="mt-4 grid gap-3 text-sm leading-6 text-[#AAB2C0] md:grid-cols-3">
            <li>1. Open Universal Tower Defense X on Roblox.</li>
            <li>2. Find the in-game Codes button or code menu.</li>
            <li>3. Paste the code exactly and press Redeem.</li>
          </ol>
        </section>

        <CodesTable title="Universal Fest P2 event codes" codes={eventCodes} />
        <CodesTable title="All active UTDX codes" codes={activeCodes} />

        <section className="grid gap-5 md:grid-cols-2">
          <div className="rounded-lg border border-[#2A3242] bg-[#171B25] p-5">
            <h2 className="font-display text-2xl font-bold text-white">
              Code notes
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-[#AAB2C0]">
              {activeCodes.slice(0, 8).map((item) => (
                <li key={item.code}>
                  <strong className="text-white">{item.code}:</strong>{' '}
                  {item.notes}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-lg border border-[#2A3242] bg-[#171B25] p-5">
            <h2 className="font-display text-2xl font-bold text-white">
              Expired UTDX codes
            </h2>
            {expiredCodes.length === 0 ? (
              <p className="mt-4 text-sm leading-6 text-[#AAB2C0]">
                No expired codes are tracked in this MVP list yet. Once a code
                stops working, it should move here so the active table stays
                clean.
              </p>
            ) : null}
          </div>
        </section>

        <section className="rounded-lg border border-[#2A3242] bg-[#171B25] p-6 shadow-sm">
          <h2 className="font-display text-2xl font-bold text-white">
            After redeeming UTDX codes
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-6 text-[#AAB2C0]">
            Code rewards are easiest to waste right after claiming them. Check
            the tier list first, compare traits, then decide whether the unit
            deserves relic farming or premium rerolls.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button asChild className="bg-[#22D3EE] text-[#07111F]">
              <LocaleLink href="/tier-list">UTDX tier list</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/traits">Traits</LocaleLink>
            </Button>
            <Button asChild variant="outline">
              <LocaleLink href="/guides/beginner-guide">
                Beginner guide
              </LocaleLink>
            </Button>
          </div>
        </section>

        <FaqSection
          items={[
            {
              question: 'Why does a Universal Tower Defense X code fail?',
              answer:
                'Most failures come from typos, missing punctuation, previous redemption, expired campaigns, server rollout timing, or level/account requirements.',
            },
            {
              question: 'Are UTDX codes case-sensitive?',
              answer:
                'Yes. Copy the code exactly, including capitalization and exclamation marks.',
            },
            {
              question: 'What are Universal Fest P2 codes?',
              answer:
                'They are event-related codes tied to the current Universal Fest P2 update, including Merciless God and delay-compensation code batches.',
            },
            {
              question: 'Should beginners redeem UTDX codes first?',
              answer:
                'Yes. Free rewards are most useful before you summon heavily, reroll traits, or commit to a relic path.',
            },
            {
              question: 'Where should I go after redeeming codes?',
              answer:
                'Open the beginner guide, tier list, units, and traits pages before spending Gems, Gold, Trait Rerolls, Relic Rerolls, or fragments.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
