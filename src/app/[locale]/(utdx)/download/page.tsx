import Container from '@/components/layout/container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { FaqSection } from '@/components/utdx/faq-section';
import { LocaleLink } from '@/i18n/navigation';
import { constructMetadata } from '@/lib/metadata';
import { AlertTriangle, Gamepad2, ShieldCheck } from 'lucide-react';
import type { Metadata } from 'next';
import type { Locale } from 'next-intl';

const robloxUrl =
  'https://www.roblox.com/games/133410800847665/Universal-Tower-Defense-X';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return constructMetadata({
    title: 'Play Universal Tower Defense X on Roblox - Safety Notes',
    description:
      'Use the official Roblox Universal Tower Defense X experience link and avoid fake downloads, copied clients, or unsafe third-party pages.',
    locale,
    pathname: '/download',
  });
}

export default function DownloadPage() {
  return (
    <div className="bg-[#060B12] py-12 text-slate-100">
      <Container className="space-y-8 px-4">
        <header className="max-w-3xl space-y-4">
          <Badge className="bg-cyan-300 text-slate-950">Roblox safety</Badge>
          <h1 className="text-4xl font-black md:text-6xl">
            Play Universal Tower Defense X on Roblox
          </h1>
          <p className="text-lg leading-8 text-slate-300">
            Universal Tower Defense X is a Roblox experience. This fan wiki
            links to the official Roblox page and does not provide copied game
            clients, private builds, executor downloads, or bypass tools.
          </p>
        </header>

        <section className="grid gap-5 md:grid-cols-[1fr_0.9fr]">
          <div className="rounded-lg border border-cyan-300/20 bg-slate-950/70 p-6 shadow-sm">
            <ShieldCheck className="mb-4 size-9 text-cyan-200" />
            <h2 className="text-2xl font-bold">Official Roblox experience</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              Open UTDX from its Roblox experience page whenever possible. That
              keeps play, account login, and update access inside Roblox instead
              of an untrusted download flow.
            </p>
            <Button asChild className="mt-5 bg-cyan-300 text-slate-950">
              <a href={robloxUrl} target="_blank" rel="noreferrer">
                <Gamepad2 className="size-4" />
                Open Roblox
              </a>
            </Button>
          </div>

          <div className="rounded-lg border border-rose-300/30 bg-rose-950/20 p-6 shadow-sm">
            <AlertTriangle className="mb-4 size-9 text-rose-200" />
            <h2 className="text-2xl font-bold">Avoid fake downloads</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-300">
              <li>- Fake download pages can steal account credentials.</li>
              <li>- Copied clients or executors can break Roblox terms.</li>
              <li>
                - Unofficial pages may show outdated codes, wrong unit names, or
                unsafe ads.
              </li>
              <li>
                - This wiki does not host scripts, clients, or exploit tools.
              </li>
            </ul>
          </div>
        </section>

        <section className="rounded-lg border border-cyan-300/20 bg-slate-950/70 p-6 shadow-sm">
          <h2 className="text-2xl font-bold">Safer ways to progress</h2>
          <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-3">
            <p>1. Redeem active Universal Tower Defense X codes first.</p>
            <p>
              2. Compare the tier list before spending scarce upgrade items.
            </p>
            <p>3. Save premium trait rerolls for units you expect to keep.</p>
          </div>
          <div className="mt-5 flex flex-wrap gap-3">
            <Button
              asChild
              variant="outline"
              className="border-slate-700 bg-slate-900/80 text-slate-100 hover:bg-slate-800"
            >
              <LocaleLink href="/codes">Check codes</LocaleLink>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-700 bg-slate-900/80 text-slate-100 hover:bg-slate-800"
            >
              <LocaleLink href="/guides/beginner-guide">
                Beginner guide
              </LocaleLink>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-slate-700 bg-slate-900/80 text-slate-100 hover:bg-slate-800"
            >
              <LocaleLink href="/traits">Trait priorities</LocaleLink>
            </Button>
          </div>
        </section>

        <FaqSection
          items={[
            {
              question: 'Is Universal Tower Defense X a standalone download?',
              answer:
                'No. Universal Tower Defense X is played through Roblox, so use the official Roblox experience page.',
            },
            {
              question: 'Does this site provide UTDX scripts or executors?',
              answer:
                'No. This site only provides wiki data, codes, tier notes, and strategy guides.',
            },
            {
              question: 'Are third-party UTDX downloads safe?',
              answer:
                'Treat them as unsafe. Use Roblox for the actual game and avoid pages asking for account details or script installs.',
            },
            {
              question: 'Where should I start after opening Roblox?',
              answer:
                'Claim current codes, then read the beginner guide and tier list before spending rerolls.',
            },
          ]}
        />
      </Container>
    </div>
  );
}
