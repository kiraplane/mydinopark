import { Badge } from '@/components/ui/badge';
import { getHomeContent } from '@/data/nophenia/localized';
import { LocaleLink } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  BookOpen,
  ChevronDown,
  Compass,
  Gamepad2,
  MapPinned,
  Menu,
  MessageCircle,
  ShieldAlert,
  Trophy,
} from 'lucide-react';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

interface SectionLink {
  href: string;
  label: string;
}

interface WikiNavLink {
  href: string;
  label: string;
}

interface WikiNavGroup {
  title: string;
  icon: typeof BookOpen;
  links: WikiNavLink[];
}

const wikiNavRoutes = [
  {
    title: 'Start Here',
    icon: Gamepad2,
    routes: [
      '/',
      '/play-online',
      '/guides',
      '/guides/beginner-guide',
      '/guides/controls-and-comfort',
    ],
  },
  {
    title: 'Route Help',
    icon: MapPinned,
    routes: [
      '/guides/walkthrough-ending',
      '/guides/achievements-100-percent',
      '/comfort',
    ],
  },
  {
    title: 'Game Links',
    icon: Compass,
    routes: ['/steam', '/browser-version', '/download'],
  },
  {
    title: 'Community & Safety',
    icon: ShieldAlert,
    routes: ['/community', '/comfort', '/disclaimer'],
  },
] as const;

export function getWikiNavGroups(locale?: Locale): WikiNavGroup[] {
  const routeLabels = getHomeContent(locale).routeLabels;

  return wikiNavRoutes.map((group) => ({
    title: group.title,
    icon: group.icon,
    links: group.routes.map((route) => ({
      href: route,
      label: routeLabels[route] ?? route,
    })),
  }));
}

function isCurrentPath(currentPath: string | undefined, href: string) {
  if (!currentPath) {
    return false;
  }

  return currentPath === href;
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
          ? 'border-[#6DDFC4] bg-[#6DDFC4] font-semibold text-[#06120F]'
          : 'border-[#26384A] bg-[#070911] text-[#D8E8EF] hover:border-[#F6D089] hover:bg-[#1C2936] hover:text-[#F6F0EA]'
      )}
    >
      <span className="min-w-0 break-words">{label}</span>
      <ArrowRight
        className={cn(
          'size-4 shrink-0',
          isActive ? 'text-[#06120F]' : 'text-[#F6D089]'
        )}
      />
    </LocaleLink>
  );
}

export function WikiRouteSidebar({
  children,
  currentPath,
  locale,
  sectionLinks = [],
}: {
  children?: ReactNode;
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  const groups = getWikiNavGroups(locale);

  return (
    <aside className="sticky top-24 hidden w-[264px] shrink-0 self-start space-y-4 lg:block">
      <div className="space-y-4">
        <div className="rounded-lg border border-[#26384A] bg-[#111827] p-4">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#6DDFC4]">
                Wiki Navigation
              </p>
              <h2 className="mt-1 font-display text-xl font-bold">
                nophenia routes
              </h2>
            </div>
            <Compass className="size-5 text-[#F6D089]" />
          </div>

          <div className="mt-4 space-y-4">
            {groups.map((group) => {
              const isGroupActive = group.links.some((link) =>
                isCurrentPath(currentPath, link.href)
              );

              return (
                <details
                  key={group.title}
                  open={isGroupActive}
                  className={cn(
                    'group rounded-md border p-3',
                    isGroupActive
                      ? 'border-[#6DDFC4]/65 bg-[#6DDFC4]/10'
                      : 'border-[#26384A] bg-[#070911]'
                  )}
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#F6F0EA] [&::-webkit-details-marker]:hidden">
                    <span className="flex min-w-0 items-center gap-2">
                      <group.icon className="size-4 shrink-0 text-[#6DDFC4]" />
                      <span className="min-w-0 break-words">{group.title}</span>
                    </span>
                    <span className="ml-auto rounded-full bg-white/8 px-1.5 py-0.5 text-[10px] font-medium text-[#D8E8EF]">
                      {group.links.length}
                    </span>
                    <ChevronDown className="size-4 shrink-0 text-[#F6D089] transition group-open:rotate-180" />
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

        {sectionLinks.length > 0 ? (
          <details className="group rounded-lg border border-[#26384A] bg-[#111827] p-4">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-3 [&::-webkit-details-marker]:hidden">
              <span className="flex items-center gap-2">
                <BookOpen className="size-4 text-[#6DDFC4]" />
                <span className="font-display text-lg font-bold">
                  On this page
                </span>
              </span>
              <ChevronDown className="size-4 shrink-0 text-[#F6D089] transition group-open:rotate-180" />
            </summary>
            <div className="mt-3 grid gap-2 border-[#26384A] border-t pt-3">
              {sectionLinks.slice(0, 6).map((section) => (
                <a
                  key={section.href}
                  href={section.href}
                  className="rounded-md border border-[#26384A] bg-[#070911] px-3 py-2 text-sm leading-6 text-[#D8E8EF] transition hover:border-[#F6D089] hover:bg-[#1C2936] hover:text-[#F6F0EA]"
                >
                  {section.label}
                </a>
              ))}
            </div>
          </details>
        ) : null}

        {children}
      </div>
    </aside>
  );
}

export function MobileWikiNav({
  currentPath,
  locale,
  sectionLinks = [],
}: {
  currentPath?: string;
  locale?: Locale;
  sectionLinks?: SectionLink[];
}) {
  const groups = getWikiNavGroups(locale);

  return (
    <details className="group rounded-lg border border-[#26384A] bg-[#111827] p-4 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3">
        <span className="flex min-w-0 items-center gap-2 font-display text-lg font-bold">
          <Menu className="size-5 shrink-0 text-[#6DDFC4]" />
          Wiki Menu
        </span>
        <Badge className="bg-[#6DDFC4] text-[#06120F]">
          {groups.reduce((total, group) => total + group.links.length, 0)} links
        </Badge>
      </summary>

      {sectionLinks.length > 0 ? (
        <div className="mt-4 border-[#26384A] border-t pt-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#F6D089]">
            On this page
          </p>
          <div className="mt-2 flex gap-2 overflow-x-auto pb-1">
            {sectionLinks.slice(0, 6).map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="shrink-0 rounded-md border border-[#26384A] bg-[#070911] px-3 py-2 text-sm text-[#D8E8EF]"
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-4 grid gap-4 border-[#26384A] border-t pt-4">
        {groups.map((group) => {
          const isGroupActive = group.links.some((link) =>
            isCurrentPath(currentPath, link.href)
          );

          return (
            <details
              key={group.title}
              open={isGroupActive}
              className="group rounded-md border border-[#26384A] bg-[#070911] p-3"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-2 text-sm font-semibold text-[#F6F0EA] [&::-webkit-details-marker]:hidden">
                <span className="flex min-w-0 items-center gap-2">
                  <group.icon className="size-4 shrink-0 text-[#6DDFC4]" />
                  <span className="min-w-0 break-words">{group.title}</span>
                </span>
                <span className="ml-auto rounded-full bg-white/8 px-1.5 py-0.5 text-[10px] font-medium text-[#D8E8EF]">
                  {group.links.length}
                </span>
                <ChevronDown className="size-4 shrink-0 text-[#F6D089] transition group-open:rotate-180" />
              </summary>
              <div className="mt-3 grid gap-2 sm:grid-cols-2">
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
    </details>
  );
}

export function QuickWikiLinks({ locale }: { locale?: Locale }) {
  const routeLabels = getHomeContent(locale).routeLabels;
  const quickRoutes = [
    { href: '/play-online', label: 'Play online', icon: Gamepad2 },
    { href: '/guides/beginner-guide', label: 'Beginner', icon: BookOpen },
    {
      href: '/guides/controls-and-comfort',
      label: 'Controls',
      icon: Gamepad2,
    },
    {
      href: '/guides/walkthrough-ending',
      label: 'Walkthrough',
      icon: MapPinned,
    },
    {
      href: '/guides/achievements-100-percent',
      label: '100%',
      icon: Trophy,
    },
    { href: '/community', label: 'Community', icon: MessageCircle },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {quickRoutes.map((route) => (
        <LocaleLink
          key={route.href}
          href={route.href}
          aria-label={routeLabels[route.href]}
          className="inline-flex h-auto items-center gap-1.5 rounded-md border border-[#26384A] bg-[#070911]/80 px-2.5 py-1.5 text-[#F6F0EA] text-xs transition hover:border-[#6DDFC4] hover:bg-[#1C2936] sm:text-sm"
        >
          <route.icon className="size-3.5 shrink-0 text-[#6DDFC4]" />
          {route.label}
        </LocaleLink>
      ))}
    </div>
  );
}
