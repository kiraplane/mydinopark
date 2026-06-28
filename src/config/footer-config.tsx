'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import { useTranslations } from 'next-intl';

export function useFooterLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.footer');

  return [
    {
      title: t('play.title'),
      items: [
        {
          title: t('play.items.online'),
          href: Routes.Play,
          external: false,
        },
        {
          title: t('play.items.steam'),
          href: Routes.Steam,
          external: false,
        },
        {
          title: t('play.items.browserVersion'),
          href: Routes.BrowserVersion,
          external: false,
        },
        {
          title: t('play.items.download'),
          href: Routes.Download,
          external: false,
        },
      ],
    },
    {
      title: t('guides.title'),
      items: [
        {
          title: t('guides.items.all'),
          href: Routes.Guides,
          external: false,
        },
        {
          title: t('guides.items.beginner'),
          href: Routes.BeginnerGuide,
          external: false,
        },
        {
          title: t('guides.items.controls'),
          href: Routes.Controls,
          external: false,
        },
        {
          title: t('guides.items.walkthrough'),
          href: Routes.Walkthrough,
          external: false,
        },
        {
          title: t('guides.items.achievements'),
          href: Routes.Achievements,
          external: false,
        },
      ],
    },
    {
      title: t('links.title'),
      items: [
        {
          title: t('links.items.community'),
          href: Routes.Community,
          external: false,
        },
        {
          title: t('links.items.comfort'),
          href: Routes.Comfort,
          external: false,
        },
        {
          title: t('links.items.disclaimer'),
          href: Routes.Disclaimer,
          external: false,
        },
      ],
    },
    {
      title: t('legal.title'),
      items: [
        {
          title: t('legal.items.privacyPolicy'),
          href: Routes.PrivacyPolicy,
          external: false,
        },
        {
          title: t('legal.items.termsOfService'),
          href: Routes.TermsOfService,
          external: false,
        },
        {
          title: t('legal.items.cookiePolicy'),
          href: Routes.CookiePolicy,
          external: false,
        },
      ],
    },
  ];
}
