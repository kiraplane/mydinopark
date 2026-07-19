'use client';

import { Routes } from '@/routes';
import type { NestedMenuItem } from '@/types';
import {
  BookOpen,
  Download,
  Egg,
  Landmark,
  Layers3,
  RadioTower,
  Sparkles,
  Trophy,
  Wallet,
} from 'lucide-react';
import { useTranslations } from 'next-intl';

export function useNavbarLinks(): NestedMenuItem[] {
  const t = useTranslations('Marketing.navbar');

  return [
    {
      title: t('guides.title'),
      href: Routes.Guides,
      external: false,
      icon: <BookOpen className="size-4" />,
      items: [
        {
          title: 'All Guides',
          description: 'Beginner, codes, eggs, money, upgrades, and safety.',
          href: Routes.Guides,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Beginner Guide',
          description: 'First route for codes, eggs, visitors, and upgrades.',
          href: Routes.BeginnerGuide,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Fast Money',
          description: 'Turn visitors and code rewards into faster Cash.',
          href: Routes.FastMoneyGuide,
          external: false,
          icon: <Wallet className="size-4" />,
        },
        {
          title: 'Wrong-Game Safety',
          description: 'Keep Roblox My Dino Park separate from similar games.',
          href: Routes.WrongGameGuide,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
    {
      title: t('eggs.title'),
      href: Routes.Eggs,
      external: false,
      icon: <Egg className="size-4" />,
      items: [
        {
          title: 'Eggs',
          description: 'Egg tiers, hatching, Frozen Egg, and ROI signals.',
          href: Routes.Eggs,
          external: false,
          icon: <Egg className="size-4" />,
        },
        {
          title: 'Eggs Guide',
          description: 'When to hatch, when to save, and when to move tiers.',
          href: Routes.EggsGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
      ],
    },
    {
      title: t('dinosaurs.title'),
      href: Routes.Dinosaurs,
      external: false,
      icon: <Layers3 className="size-4" />,
      items: [
        {
          title: 'Dinosaurs',
          description: 'Income, rarity, placement, and best-dino signals.',
          href: Routes.Dinosaurs,
          external: false,
          icon: <Layers3 className="size-4" />,
        },
        {
          title: 'Best Dinosaurs Watch',
          description: 'Safe tier-list alternative while stats are thin.',
          href: Routes.BestDinosaursGuide,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
        {
          title: 'Tier List Watch',
          description: 'Codes, eggs, upgrades, and dinosaur ranking status.',
          href: Routes.TierList,
          external: false,
          icon: <Trophy className="size-4" />,
        },
      ],
    },
    {
      title: t('upgrades.title'),
      href: Routes.Upgrades,
      external: false,
      icon: <Landmark className="size-4" />,
      items: [
        {
          title: 'Upgrades',
          description: 'Land, pens, capacity, and visitor-income bottlenecks.',
          href: Routes.Upgrades,
          external: false,
          icon: <Landmark className="size-4" />,
        },
        {
          title: 'Upgrade Guide',
          description: 'When an upgrade beats another egg purchase.',
          href: Routes.UpgradesGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Money Guide',
          description: 'Spend Cash where visitor income actually improves.',
          href: Routes.FastMoneyGuide,
          external: false,
          icon: <Wallet className="size-4" />,
        },
      ],
    },
    {
      title: t('codes.title'),
      href: Routes.Codes,
      external: false,
      icon: <Sparkles className="size-4" />,
      items: [
        {
          title: 'Codes',
          description: 'UPDATE2, Teeth, Frozen Egg, and reward planning.',
          href: Routes.Codes,
          external: false,
          icon: <Sparkles className="size-4" />,
        },
        {
          title: 'Redeem Guide',
          description: 'Use codes safely inside the official game.',
          href: Routes.CodesGuide,
          external: false,
          icon: <BookOpen className="size-4" />,
        },
        {
          title: 'Updates',
          description: 'Update 4 status, code freshness, and watch items.',
          href: Routes.Updates,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
    {
      title: t('download.title'),
      href: Routes.Download,
      external: false,
      icon: <Download className="size-4" />,
      items: [
        {
          title: 'Official Roblox',
          description: 'Open the correct My Dino Park Roblox page.',
          href: Routes.Download,
          external: false,
          icon: <Download className="size-4" />,
        },
        {
          title: 'Discord',
          description: 'Dino Community links and source-check safety.',
          href: Routes.Discord,
          external: false,
          icon: <RadioTower className="size-4" />,
        },
      ],
    },
  ];
}
