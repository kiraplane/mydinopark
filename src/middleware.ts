import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server';
import { DEFAULT_LOCALE, LOCALES, routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);
const hasSingleLocale = LOCALES.length === 1;
const defaultLocalePrefix = `/${DEFAULT_LOCALE}`;

const retiredPublicRouteRedirects: Array<{
  pattern: RegExp;
  target: string;
}> = [
  { pattern: /^\/pricing\/?$/, target: '/' },
  { pattern: /^\/ai(?:\/.*)?$/, target: '/' },
  { pattern: /^\/ai-prompts(?:\/.*)?$/, target: '/' },
  { pattern: /^\/blog(?:\/.*)?$/, target: '/guides' },
  { pattern: /^\/docs(?:\/.*)?$/, target: '/' },
  { pattern: /^\/about\/?$/, target: '/' },
  { pattern: /^\/contact\/?$/, target: '/' },
  { pattern: /^\/auth(?:\/.*)?$/, target: '/' },
  { pattern: /^\/dashboard(?:\/.*)?$/, target: '/' },
  { pattern: /^\/admin(?:\/.*)?$/, target: '/' },
  { pattern: /^\/settings(?:\/.*)?$/, target: '/' },
  { pattern: /^\/payment(?:\/.*)?$/, target: '/' },
  { pattern: /^\/eggs-guide\/?$/, target: '/guides/eggs-and-hatching-guide' },
  { pattern: /^\/hatching(?:\/.*)?$/, target: '/eggs' },
  { pattern: /^\/dinosaurs-list\/?$/, target: '/dinosaurs' },
  { pattern: /^\/dino-list\/?$/, target: '/dinosaurs' },
  { pattern: /^\/money-guide\/?$/, target: '/guides/fast-money-guide' },
  { pattern: /^\/cash(?:\/.*)?$/, target: '/money' },
  { pattern: /^\/tierlist\/?$/, target: '/tier-list' },
  {
    pattern: /^\/best-dinosaurs\/?$/,
    target: '/guides/best-dinosaurs-watch-guide',
  },
  { pattern: /^\/my-dino-park-codes\/?$/, target: '/codes' },
  { pattern: /^\/my-dino-park-code\/?$/, target: '/codes' },
  { pattern: /^\/my-dino-park-discord\/?$/, target: '/discord' },
  { pattern: /^\/discord-server\/?$/, target: '/discord' },
  { pattern: /^\/roblox\/?$/, target: '/download' },
];

function getPathnameWithoutLocale(pathname: string, locales: string[]) {
  const segments = pathname.split('/');
  const firstSegment = segments[1];

  if (firstSegment && locales.includes(firstSegment)) {
    const withoutLocale = `/${segments.slice(2).join('/')}`;
    return withoutLocale === '/'
      ? '/'
      : withoutLocale.replace(/\/$/, '') || '/';
  }

  return pathname;
}

function getLocaleFromPathname(pathname: string, locales: string[]) {
  const firstSegment = pathname.split('/')[1];
  return firstSegment && locales.includes(firstSegment) ? firstSegment : null;
}

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const hostHeader = req.headers.get('host');
  const hostname = hostHeader?.split(':')[0].toLowerCase();
  const forwardedProto = req.headers.get('x-forwarded-proto');
  const productionHosts = new Set([
    'my-dino-park.wiki',
    'www.my-dino-park.wiki',
  ]);

  if (
    hostname &&
    productionHosts.has(hostname) &&
    (forwardedProto === 'http' || nextUrl.protocol === 'http:')
  ) {
    const secureUrl = new URL(nextUrl);
    secureUrl.protocol = 'https:';
    secureUrl.port = '';
    return NextResponse.redirect(secureUrl, 308);
  }

  const pathnameWithoutLocale = getPathnameWithoutLocale(
    nextUrl.pathname,
    LOCALES
  );
  const retiredRoute = retiredPublicRouteRedirects.find(({ pattern }) =>
    pattern.test(pathnameWithoutLocale)
  );

  if (retiredRoute) {
    const locale = getLocaleFromPathname(nextUrl.pathname, LOCALES);
    const localizedTarget =
      locale && locale !== DEFAULT_LOCALE
        ? `/${locale}${retiredRoute.target}`
        : retiredRoute.target;

    return NextResponse.redirect(
      new URL(`${localizedTarget}${nextUrl.search}`, nextUrl),
      308
    );
  }

  if (hasSingleLocale) {
    const isDefaultLocalePrefixedPath =
      nextUrl.pathname === defaultLocalePrefix ||
      nextUrl.pathname.startsWith(`${defaultLocalePrefix}/`);

    if (isDefaultLocalePrefixedPath) {
      return NextResponse.next();
    }

    const localizedPath =
      nextUrl.pathname === '/'
        ? defaultLocalePrefix
        : `${defaultLocalePrefix}${nextUrl.pathname}`;
    const localizedUrl = new URL(`${localizedPath}${nextUrl.search}`, nextUrl);

    return NextResponse.rewrite(localizedUrl);
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
