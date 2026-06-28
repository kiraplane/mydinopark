import Container from '@/components/layout/container';
import { FaqSection } from '@/components/nophenia/faq-section';
import { NopheniaGameFrame } from '@/components/nophenia/nophenia-game-frame';
import { MobileWikiNav } from '@/components/nophenia/wiki-navigation';
import { JsonLd } from '@/components/seo/json-ld';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { getPlayOnlineContent } from '@/data/nophenia/localized';
import { siteFacts } from '@/data/nophenia/sources';
import { LocaleLink } from '@/i18n/navigation';
import {
  ArrowRight,
  BookOpen,
  ExternalLink,
  Gamepad2,
  ShieldAlert,
  Sparkles,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import Image from 'next/image';

const gameSrc = siteFacts.browserGameUrl;
const posterSrc = siteFacts.officialHeroImage;

const guideIcons = {
  gamepad: Gamepad2,
  book: BookOpen,
  shield: ShieldAlert,
} as const;

export function NopheniaPlayOnlinePage({ locale }: { locale?: Locale }) {
  const content = getPlayOnlineContent(locale);
  const videoWatchUrl = `https://www.youtube.com/watch?v=${content.media.video.id}`;
  const videoEmbedUrl = `https://www.youtube-nocookie.com/embed/${content.media.video.id}`;
  const videoThumbnailUrl = `https://i.ytimg.com/vi/${content.media.video.id}/hq720.jpg`;
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
        genre: ['Adventure', 'Casual', 'Indie', 'Simulation'],
        gamePlatform: ['Web Browser', 'Windows'],
        url: `${siteFacts.domain}/play-online`,
        sameAs: [siteFacts.officialSteamUrl, siteFacts.officialItchUrl],
      },
      {
        '@type': 'HowTo',
        '@id': `${siteFacts.domain}/play-online#how-to-play`,
        name: content.howTitle,
        description: content.howBody,
        step: content.howCards.map((step, index) => ({
          '@type': 'HowToStep',
          position: index + 1,
          name: step.label,
          text: step.body,
        })),
      },
      {
        '@type': 'VideoObject',
        '@id': `${siteFacts.domain}/play-online#official-trailer`,
        name: content.media.video.title,
        description: content.media.body,
        thumbnailUrl: [videoThumbnailUrl],
        url: videoWatchUrl,
        embedUrl: videoEmbedUrl,
        author: {
          '@type': 'Person',
          name: siteFacts.creator,
        },
      },
    ],
  };

  return (
    <div className="bg-[#070911] text-[#F6F0EA]">
      <JsonLd data={jsonLd} />

      <section className="border-[#26384A] border-b bg-[linear-gradient(135deg,#070911_0%,#111827_52%,#251A21_100%)] py-10 md:py-14">
        <Container className="space-y-6 px-4">
          <header className="max-w-4xl space-y-4">
            <Badge className="bg-[#6DDFC4] text-[#06120F]">
              {content.badge}
            </Badge>
            <h1 className="font-display text-4xl font-black leading-tight md:text-6xl">
              {content.title}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-[#D8E8EF] md:text-lg">
              {content.intro}
            </p>
            <div className="flex flex-wrap gap-3">
              <Button
                asChild
                className="bg-[#F6D089] text-[#17100B] hover:bg-[#FFE1A8]"
              >
                <LocaleLink href="/guides/beginner-guide">
                  {content.beginnerButton}
                  <ArrowRight className="size-4" />
                </LocaleLink>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#F6D089] bg-[#070911]/50 text-[#F6F0EA] hover:bg-[#1C2936]"
              >
                <LocaleLink href="/steam">{content.steamButton}</LocaleLink>
              </Button>
            </div>
            <MobileWikiNav currentPath="/play-online" locale={locale} />
          </header>

          <NopheniaGameFrame
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

      <section className="border-[#26384A] border-b bg-[#111827] py-12">
        <Container className="grid gap-4 px-4 md:grid-cols-3">
          <div className="rounded-lg border border-[#26384A] bg-[#070911] p-5">
            <Gamepad2 className="size-7 text-[#6DDFC4]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              {content.infoCards[0]?.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#D8E8EF]">
              {content.infoCards[0]?.body}
            </p>
          </div>
          <div className="rounded-lg border border-[#26384A] bg-[#070911] p-5">
            <Sparkles className="size-7 text-[#F6D089]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              {content.infoCards[1]?.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#D8E8EF]">
              {content.infoCards[1]?.body}
            </p>
          </div>
          <div className="rounded-lg border border-[#26384A] bg-[#070911] p-5">
            <ShieldAlert className="size-7 text-[#B8A5FF]" />
            <h2 className="mt-4 font-display text-xl font-bold">
              {content.infoCards[2]?.title}
            </h2>
            <p className="mt-2 text-sm leading-7 text-[#D8E8EF]">
              {content.infoCards[2]?.body}
            </p>
            <LocaleLink
              href="/download"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[#F6D089] underline underline-offset-4"
            >
              {content.downloadGuide}
              <ArrowRight className="size-3" />
            </LocaleLink>
            <a
              href={siteFacts.officialItchUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#F6D089] underline underline-offset-4"
            >
              {content.officialItch}
              <ExternalLink className="size-3" />
            </a>
          </div>
        </Container>
      </section>

      <section className="border-[#26384A] border-b bg-[#070911] py-12">
        <Container className="grid gap-8 px-4 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#6DDFC4]">
              {content.howEyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.howTitle}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#D8E8EF]">
              {content.howBody}
            </p>
          </div>

          <ol className="grid gap-3 sm:grid-cols-2">
            {content.howCards.map((item, index) => (
              <li
                key={item.label}
                className="rounded-lg border border-[#26384A] bg-[#111827] p-5"
              >
                <div className="flex size-9 items-center justify-center rounded-lg bg-[#F6D089] text-sm font-black text-[#17100B]">
                  {index + 1}
                </div>
                <h3 className="mt-4 font-display text-xl font-bold">
                  {item.label}
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#D8E8EF]">
                  {item.body}
                </p>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section
        id="official-media"
        className="border-[#26384A] border-b bg-[#111827] py-12"
      >
        <Container className="space-y-8 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#6DDFC4]">
              {content.media.eyebrow}
            </p>
            <h2 className="mt-2 font-display text-3xl font-black">
              {content.media.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[#D8E8EF]">
              {content.media.body}
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <figure className="space-y-3">
              <div className="overflow-hidden rounded-lg border border-[#26384A] bg-[#070911] shadow-2xl shadow-black/25">
                <iframe
                  src={videoEmbedUrl}
                  title={content.media.video.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="aspect-video w-full"
                />
              </div>
              <figcaption className="text-sm leading-7 text-[#D8E8EF]">
                {content.media.video.caption}
              </figcaption>
            </figure>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {content.media.screenshots.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-lg border border-[#26384A] bg-[#070911]"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={600}
                    height={338}
                    sizes="(min-width: 1024px) 32vw, (min-width: 640px) 33vw, 100vw"
                    className="aspect-video w-full object-cover"
                  />
                  <figcaption className="p-4 text-sm leading-6 text-[#D8E8EF]">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container className="space-y-6 px-4">
          <div className="max-w-3xl">
            <p className="font-semibold uppercase tracking-[0.18em] text-[#6DDFC4]">
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
                  className="rounded-lg border border-[#26384A] bg-[#111827] p-5 transition hover:border-[#6DDFC4]"
                >
                  <Icon className="size-7 text-[#6DDFC4]" />
                  <h3 className="mt-4 font-display text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-[#D8E8EF]">
                    {item.body}
                  </p>
                </LocaleLink>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="border-[#26384A] border-t bg-[#111827] py-12">
        <Container className="px-4">
          <FaqSection items={content.faq} />
        </Container>
      </section>
    </div>
  );
}
