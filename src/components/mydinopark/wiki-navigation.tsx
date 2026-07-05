'use client';

import { Badge } from '@/components/ui/badge';
import { activeCodes } from '@/data/mydinopark/codes';
import { LocaleLink, useLocalePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  CircleHelp,
  Compass,
  Copy,
  Download,
  Egg,
  Landmark,
  Layers3,
  ListChecks,
  RadioTower,
  ShieldQuestion,
  Sparkles,
  Trophy,
  Wallet,
} from 'lucide-react';
import type { ReactNode } from 'react';
import { useState } from 'react';

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: WikiNavLink[];
  activePrefixes?: string[];
}

const wikiNavGroups: WikiNavGroup[] = [
  {
    title: 'Start Here',
    icon: Compass,
    links: [
      { href: '/', label: 'Home' },
      { href: '/guides/beginner-guide', label: 'Beginner Guide' },
      { href: '/codes', label: 'Codes' },
      { href: '/download', label: 'Official Roblox' },
    ],
  },
  {
    title: 'Progression',
    icon: Layers3,
    links: [
      { href: '/eggs', label: 'Eggs' },
      { href: '/dinosaurs', label: 'Dinosaurs' },
      { href: '/money', label: 'Money' },
      { href: '/upgrades', label: 'Upgrades' },
      { href: '/tier-list', label: 'Tier List Watch' },
    ],
  },
  {
    title: 'Guides',
    icon: BookOpen,
    links: [
      { href: '/guides', label: 'All Guides' },
      { href: '/guides/codes-redeem-guide', label: 'Redeem Codes' },
      { href: '/guides/eggs-and-hatching-guide', label: 'Eggs & Hatching' },
      { href: '/guides/fast-money-guide', label: 'Fast Money' },
      { href: '/guides/park-upgrades-guide', label: 'Park Upgrades' },
      { href: '/guides/best-dinosaurs-watch-guide', label: 'Best Dino Watch' },
      { href: '/guides/wrong-game-safety-guide', label: 'Wrong-Game Safety' },
    ],
    activePrefixes: ['/guides'],
  },
  {
    title: 'Live Status',
    icon: RadioTower,
    links: [
      { href: '/updates', label: 'Updates' },
      { href: '/discord', label: 'Discord & Group' },
      { href: '/guides/update-2-codes-guide', label: 'Update 2 Codes' },
      { href: '/guides/wrong-game-safety-guide', label: 'Name Confusion' },
    ],
  },
] as const;

function isCurrentPath(currentPath: string | undefined, href: string) {
  return Boolean(currentPath && currentPath === href);
}

function isGroupCurrentPath(
  currentPath: string | undefined,
  group: WikiNavGroup
) {
  if (!currentPath) {
    return false;
  }

  return (
    group.links.some((link) => isCurrentPath(currentPath, link.href)) ||
    Boolean(
      group.activePrefixes?.some(
        (prefix) =>
          currentPath === prefix || currentPath.startsWith(`${prefix}/`)
      )
    )
  );
}

function WikiNavLinkItem({
  currentPath,
  href,
  label,
}: {
  currentPath?: string;
  href: string;
  label: string;
}) {
  const isActive = isCurrentPath(currentPath, href);

  return (
    <LocaleLink
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={cn(
        'group flex min-w-0 items-center justify-between gap-3 rounded-md border px-3 py-2 text-sm leading-6 transition',
        isActive
          ? 'border-[#9BEA74] bg-[#9BEA74] font-semibold text-[#102114]'
          : 'border-[#2E5B3C] bg-[#0C1F14] text-[#C9D8BD] hover:border-[#9BEA74] hover:bg-[#24482F] hover:text-[#F7FFE9]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#102114]' : 'text-[#F6C453]'
        )}
      />
    </LocaleLink>
  );
}

function SidebarCodeCopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  return (
    <button
      type="button"
      aria-label={`Copy ${code}`}
      className="rounded-sm p-1 text-[#C9D8BD] transition hover:bg-[#24482F] hover:text-[#9BEA74]"
      onClick={async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        window.setTimeout(() => setCopied(false), 1200);
      }}
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
    </button>
  );
}

function ActiveCodesSidebarCard() {
  return (
    <div className="rounded-lg border border-[#2E5B3C] bg-[#0C1F14] p-4">
      <div className="mb-4 flex items-center justify-between gap-3">
        <h2 className="font-display font-bold text-[#F7FFE9] text-lg">
          Active Codes
        </h2>
        <Badge className="bg-[#FF8A4C] text-[#102114]">
          {activeCodes.length}
        </Badge>
      </div>
      <div className="space-y-3">
        {activeCodes.slice(0, 5).map((item) => (
          <div
            key={item.code}
            className="flex items-start justify-between gap-3"
          >
            <div className="min-w-0">
              <p className="break-all font-mono font-semibold text-[#F7FFE9] text-sm">
                {item.code}
              </p>
              <p className="mt-1 line-clamp-2 text-[#C9D8BD] text-xs leading-5">
                {item.reward}
              </p>
            </div>
            <SidebarCodeCopyButton code={item.code} />
          </div>
        ))}
      </div>
      <LocaleLink
        href="/codes"
        className="mt-4 flex items-center justify-center gap-2 border-[#2E5B3C] border-t pt-3 font-medium text-[#E7F6D5] text-sm transition hover:text-[#9BEA74]"
      >
        View all codes
        <ArrowRight className="size-4" />
      </LocaleLink>
    </div>
  );
}

export function MyDinoParkMobileMenu({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <details className="mx-4 mb-6 rounded-lg border border-[#2E5B3C] bg-[#163521] p-4 xl:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 font-semibold text-[#F7FFE9] [&::-webkit-details-marker]:hidden">
        <span className="inline-flex items-center gap-2">
          <ListChecks className="size-4 text-[#9BEA74]" />
          Wiki Menu
        </span>
        <ChevronDown className="size-4 text-[#F6C453]" />
      </summary>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {wikiNavGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-2 flex items-center gap-2 font-semibold text-[#F6C453] text-xs uppercase">
              <group.icon className="size-4" />
              {group.title}
            </p>
            <div className="grid gap-2">
              {group.links.map((link) => (
                <WikiNavLinkItem
                  key={link.href}
                  currentPath={currentPath}
                  href={link.href}
                  label={link.label}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </details>
  );
}

export function MyDinoParkRouteSidebar({
  currentPath,
}: {
  currentPath?: string;
}) {
  return (
    <aside className="hidden w-[264px] shrink-0 space-y-4 xl:block">
      <div className="sticky top-24 max-h-[calc(100vh-7rem)] space-y-4 overflow-y-auto pb-6">
        <div className="rounded-lg border border-[#2E5B3C] bg-[#163521] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="font-semibold text-[#9BEA74] text-xs uppercase tracking-[0.18em]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-[#F7FFE9] text-xl font-bold">
                Park routes
              </h2>
            </div>
            <Sparkles className="size-5 shrink-0 text-[#F6C453]" />
          </div>

          <div className="mt-4 space-y-4">
            {wikiNavGroups.map((group) => {
              const isGroupActive = isGroupCurrentPath(currentPath, group);

              return (
                <details
                  key={group.title}
                  open={isGroupActive}
                  className={cn(
                    'group rounded-md border p-3',
                    isGroupActive
                      ? 'border-[#9BEA74]/60 bg-[#245338]/45'
                      : 'border-[#2E5B3C] bg-[#0C1F14]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 font-semibold text-[#F7FFE9] text-sm [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#F6C453]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <Badge
                      variant="outline"
                      className="ml-auto border-[#2E5B3C] bg-[#163521] px-1.5 py-0.5 text-[#C9D8BD] text-[10px]"
                    >
                      {group.links.length}
                    </Badge>
                    <ChevronDown className="size-4 shrink-0 text-[#9BEA74] transition group-open:rotate-180" />
                  </summary>
                  <div className="mt-3 grid gap-2">
                    {group.links.map((link) => (
                      <WikiNavLinkItem
                        key={link.href}
                        currentPath={currentPath}
                        href={link.href}
                        label={link.label}
                      />
                    ))}
                  </div>
                </details>
              );
            })}
          </div>
        </div>
        <ActiveCodesSidebarCard />
        <div className="rounded-lg border border-[#2E5B3C] bg-[#0C1F14] p-4 text-[#C9D8BD] text-sm leading-6">
          <div className="mb-2 flex items-center gap-2 font-semibold text-[#F7FFE9]">
            <ShieldQuestion className="size-4 text-[#9BEA74]" />
            Roblox reminder
          </div>
          Verify codes and dinosaur facts against My Dino Park by Dino
          Community. Crazy Dino Park, Be Dino, and Dinosaur Park Tycoon are
          different games.
        </div>
      </div>
    </aside>
  );
}

export function MyDinoParkPageShell({
  children,
}: {
  children: ReactNode;
}) {
  const currentPath = useLocalePathname();

  if (currentPath === '/') {
    return <>{children}</>;
  }

  return (
    <div className="bg-[#0C1F14]">
      <MyDinoParkMobileMenu currentPath={currentPath} />
      <div className="mx-auto grid max-w-7xl gap-8 xl:grid-cols-[minmax(0,1fr)_264px]">
        <div className="min-w-0">{children}</div>
        <MyDinoParkRouteSidebar currentPath={currentPath} />
      </div>
    </div>
  );
}

export const navigationIcons = {
  codes: Sparkles,
  eggs: Egg,
  dinosaurs: Trophy,
  money: Wallet,
  upgrades: Landmark,
  tierList: Layers3,
  download: Download,
  safety: CircleHelp,
};
