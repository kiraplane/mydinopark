'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Gamepad2,
  MessageCircle,
  Route,
  Sparkles,
  Trophy,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('play.title'),
      href: Routes.Play,
      external: false,
      icon: <Gamepad2 className="size-4" />,
    },
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
    },
    {
      title: t('walkthrough.title'),
      href: Routes.Walkthrough,
      external: false,
      icon: <Route className="size-4" />,
    },
    {
      title: t('achievements.title'),
      href: Routes.Achievements,
      external: false,
      icon: <Trophy className="size-4" />,
    },
    {
      title: t('steam.title'),
      href: Routes.Steam,
      external: false,
      icon: <Sparkles className="size-4" />,
    },
    {
      title: t('community.title'),
      href: Routes.Community,
      external: false,
      icon: <MessageCircle className="size-4" />,
    },
  ];
}
