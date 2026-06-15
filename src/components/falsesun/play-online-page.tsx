import { FalseSunGameFrame } from '@/components/falsesun/false-sun-game-frame';
import { FaqSection } from '@/components/falsesun/faq-section';
import Container from '@/components/layout/container';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  getLocalizedContentWarnings,
  getPlayOnlineContent,
} from '@/data/falsesun/localized';
import { siteFacts } from '@/data/falsesun/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  Download,
  ExternalLink,
  Gamepad2,
  ListChecks,
  ShieldAlert,
} from 'lucide-react';
import type { Locale } from 'next-intl';

const gameSrc = siteFacts.browserGameUrl;
const posterSrc = siteFacts.officialHeroImage;

const guideIcons = {
  list: ListChecks,
  gamepad: Gamepad2,
  book: BookOpen,
} as const;

export function FalseSunPlayOnlinePage({ locale }: { locale?: Locale }) {
  const content = getPlayOnlineContent(locale);
  const localizedWarnings = getLocalizedContentWarnings(locale);
  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${siteFacts.domain}/play-online#webpage`,
        name: content.title,
        url: `${siteFacts.domain}/play-online`,
        description: content.metadataDescription,
        isPartOf: {
          '@id': `${siteFacts.domain}/#website`,
        },
      },
      {
        '@type': 'VideoGame',
        name: siteFacts.gameName,
        author: {
          '@type': 'Person',
          name: siteFacts.creator,
        },
        applicationCategory: 'Game',
        genre: ['Visual Novel', 'Horror', 'Romance'],
        gamePlatform: ['Web Browser', 'Windows', 'macOS', 'Linux', 'Android'],
        url: `${siteFacts.domain}/play-online`,
        sameAs: siteFacts.officialItchUrl,
      },
    ],
  };

  return (
    <div className="bg-[#0A0F0C] text-[#F7E8C9]">
      <JsonLd data={jsonLd} />

      <section className="border-[#493A34] border-b bg-[linear-gradient(135deg,#0A0F0C_0%,#111612_54%,#201418_100%)] py-10 md:py-14">
        <Container className="space-y-6 px-4">
          <header className="max-w-4xl space-y-4">
            <Badge className="bg-[#D9B56A] text-[#15110B]">
              {content.badge}
            </Badge>
            <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
              {content.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[#D5C5AF] md:text-lg">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#D9B56A] text-[#15110B] hover:bg-[#E7C77C]"
              >
                <LocaleLink href="/all-endings">
                  {content.allEndingsButton}
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#E7C77C] bg-[#0A0F0C]/50 text-[#F7E8C9] hover:bg-[#1B231D]"
              >
                <LocaleLink href="/content-warnings">
                  {content.warningsButton}
                </LocaleLink>
              </Button>
            </div>
          </header>

          <FalseSunGameFrame
            src={gameSrc}
            posterSrc={posterSrc}
            labels={{
              title: content.frameLabels.title,
              loading: content.frameLabels.loading,
              start: content.frameLabels.start,
              reset: content.frameLabels.reset,
              fullscreen: content.frameLabels.fullscreen,
              exitFullscreen: content.frameLabels.exitFullscreen,
              open: content.frameLabels.open,
            }}
          />
        </Container>
      </section>

      <section className="border-[#493A34] border-b bg-[#111612] py-12">
        <Container className="grid gap-4 px-4 md:grid-cols-3">
          <div className="rounded-lg border border-[#493A34] bg-[#0D1310] p-5">
            <ShieldAlert className="size-7 text-[#D9B56A]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              {content.infoCards[0]?.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#C7BAA7]">
              {content.infoCards[0]?.body}
            </p>
          </div>
          <div className="rounded-lg border border-[#493A34] bg-[#0D1310] p-5">
            <Gamepad2 className="size-7 text-[#6EA69A]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              {content.infoCards[1]?.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#C7BAA7]">
              {content.infoCards[1]?.body}
            </p>
          </div>
          <div className="rounded-lg border border-[#493A34] bg-[#0D1310] p-5">
            <Download className="size-7 text-[#D9B56A]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              {content.infoCards[2]?.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#C7BAA7]">
              {content.infoCards[2]?.body}
            </p>
            <LocaleLink
              href="/download"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#E7C77C] underline underline-offset-4"
            >
              {content.downloadGuide}
              <ArrowRight className="size-3" />
            </LocaleLink>
            <a
              href={siteFacts.officialItchUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#E7C77C] underline underline-offset-4"
            >
              {content.officialItch}
              <ExternalLink className="size-3" />
            </a>
          </div>
        </Container>
      </section>

      <section className="border-[#493A34] border-b bg-[#0A0F0C] py-12">
        <Container className="grid gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#D9B56A]">
              {content.howEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.howTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#C7BAA7]">
              {content.howBody}
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            {content.howCards.map((item) => (
              <div
                key={item.label}
                className="rounded-lg border border-[#493A34] bg-[#111612] p-5"
              >
                <h3 className="font-display text-xl font-bold">{item.label}</h3>
                <p className="mt-2 text-sm leading-7 text-[#C7BAA7]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#D9B56A]">
              {content.afterEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.afterTitle}
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {content.guideLinks.map((item) => {
              const Icon = guideIcons[item.icon];

              return (
                <LocaleLink
                  key={item.href}
                  href={item.href}
                  className="rounded-lg border border-[#493A34] bg-[#111612] p-5 transition hover:border-[#D9B56A]"
                >
                  <Icon className="size-7 text-[#D9B56A]" />
                  <h3 className="mt-4 font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#C7BAA7]">
                    {item.body}
                  </p>
                </LocaleLink>
              );
            })}
          </div>

          <div className="rounded-lg border border-[#6F3A42] bg-[#201418] p-5">
            <h2 className="font-display text-xl font-bold">
              {content.warningsTitle}
            </h2>
            <div className="mt-4 flex flex-wrap gap-2">
              {localizedWarnings.map((warning) => (
                <Badge
                  key={warning}
                  variant="outline"
                  className="border-[#E7C77C]/50 text-[#F7E8C9]"
                >
                  {warning}
                </Badge>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="border-[#493A34] border-t bg-[#111612] py-12">
        <Container className="px-4">
          <FaqSection items={content.faq} />
        </Container>
      </section>
    </div>
  );
}
