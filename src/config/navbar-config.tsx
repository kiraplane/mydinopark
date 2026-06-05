'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Castle,
  ClipboardList,
  Download,
  Flame,
  Sparkles,
  Trophy,
  Users,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('codes.title'),
      href: Routes.Codes,
      external: false,
      icon: <ClipboardList className="size-4" />,
    },
    {
      title: t('tierList.title'),
      href: Routes.TierList,
      external: false,
      icon: <Trophy className="size-4" />,
    },
    {
      title: t('dragons.title'),
      href: Routes.Dragons,
      external: false,
      icon: <Flame className="size-4" />,
    },
    {
      title: t('resources.title'),
      href: Routes.Resources,
      external: false,
      icon: <Castle className="size-4" />,
    },
    {
      title: t('campaigns.title'),
      href: Routes.Campaigns,
      external: false,
      icon: <Sparkles className="size-4" />,
    },
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
    },
    {
      title: t('alliances.title'),
      href: Routes.Alliances,
      external: false,
      icon: <Users className="size-4" />,
    },
    {
      title: t('download.title'),
      href: Routes.Download,
      external: false,
      icon: <Download className="size-4" />,
    },
  ];
}
