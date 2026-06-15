import { betterFetch } from '@better-fetch/fetch';
import createMiddleware from 'next-intl/middleware';
import { type NextRequest, NextResponse } from 'next/server';
import {
  DEFAULT_LOCALE,
  LOCALES,
  LOCALE_COOKIE_NAME,
  routing,
} from './i18n/routing';
import type { Session } from './lib/auth-types';
import { getBaseUrl } from './lib/urls/urls';
import {
  DEFAULT_LOGIN_REDIRECT,
  protectedRoutes,
  routesNotAllowedByLoggedInUsers,
} from './routes';

const intlMiddleware = createMiddleware(routing);
const hasSingleLocale = LOCALES.length === 1;
const defaultLocalePrefix = `/${DEFAULT_LOCALE}`;

const authRelatedRoutes = [
  ...protectedRoutes,
  ...routesNotAllowedByLoggedInUsers,
];

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
  { pattern: /^\/codes(?:\/.*)?$/, target: '/' },
  { pattern: /^\/tier-list(?:\/.*)?$/, target: '/all-endings' },
  { pattern: /^\/dragons(?:\/.*)?$/, target: '/all-endings' },
  { pattern: /^\/resources(?:\/.*)?$/, target: '/mini-games' },
  { pattern: /^\/campaigns(?:\/.*)?$/, target: '/all-endings' },
  { pattern: /^\/alliances(?:\/.*)?$/, target: '/' },
  { pattern: /^\/updates(?:\/.*)?$/, target: '/guides' },
  { pattern: /^\/itchio\/?$/, target: '/itch-io' },
  { pattern: /^\/itch-io-the-false-sun\/?$/, target: '/itch-io' },
  { pattern: /^\/the-false-sun-itch-io\/?$/, target: '/itch-io' },
  { pattern: /^\/oniray-itch-io\/?$/, target: '/itch-io' },
  { pattern: /^\/download-the-false-sun\/?$/, target: '/download' },
  { pattern: /^\/the-false-sun-download\/?$/, target: '/download' },
  { pattern: /^\/the-false-sun-apk\/?$/, target: '/download' },
  { pattern: /^\/android-download\/?$/, target: '/download' },
  { pattern: /^\/ending20\/?$/, target: '/ending-20' },
  { pattern: /^\/ending-20-guide\/?$/, target: '/ending-20' },
  { pattern: /^\/the-false-sun-ending-20\/?$/, target: '/ending-20' },
  { pattern: /^\/silas\/?$/, target: '/silas-route' },
  { pattern: /^\/silas-the-false-sun\/?$/, target: '/silas-route' },
  { pattern: /^\/the-false-sun-silas\/?$/, target: '/silas-route' },
];

export default async function middleware(req: NextRequest) {
  const { nextUrl } = req;
  const hostHeader = req.headers.get('host');
  const hostname = hostHeader?.split(':')[0].toLowerCase();
  const forwardedProto = req.headers.get('x-forwarded-proto');
  const productionHosts = new Set(['thefalsesun.wiki', 'www.thefalsesun.wiki']);
  const canonicalHost = 'www.thefalsesun.wiki';

  if (
    hostname &&
    productionHosts.has(hostname) &&
    (hostname !== canonicalHost ||
      forwardedProto === 'http' ||
      nextUrl.protocol === 'http:')
  ) {
    const canonicalUrl = new URL(nextUrl);
    canonicalUrl.protocol = 'https:';
    canonicalUrl.hostname = canonicalHost;
    canonicalUrl.port = '';
    return NextResponse.redirect(canonicalUrl, 308);
  }

  const isDefaultLocalePrefixedPath =
    nextUrl.pathname === defaultLocalePrefix ||
    nextUrl.pathname.startsWith(`${defaultLocalePrefix}/`);

  if (
    !hasSingleLocale &&
    (nextUrl.pathname.startsWith('/docs/') || nextUrl.pathname === '/docs')
  ) {
    const localeCookie = req.cookies.get(LOCALE_COOKIE_NAME);
    const preferredLocale = localeCookie?.value;

    if (
      preferredLocale &&
      preferredLocale !== DEFAULT_LOCALE &&
      LOCALES.includes(preferredLocale)
    ) {
      const localizedPath = `/${preferredLocale}${nextUrl.pathname}${nextUrl.search}${nextUrl.hash}`;
      return NextResponse.redirect(new URL(localizedPath, nextUrl));
    }
  }

  const pathnameWithoutLocale = getPathnameWithoutLocale(
    nextUrl.pathname,
    LOCALES
  );
  const normalizedPathnameWithoutLocale =
    pathnameWithoutLocale.length > 1
      ? pathnameWithoutLocale.replace(/\/$/, '')
      : pathnameWithoutLocale;

  const guideSlugRoute = normalizedPathnameWithoutLocale.match(
    /^\/guides\/([a-z0-9-]+)$/
  );

  if (guideSlugRoute) {
    const locale = getLocaleFromPathname(nextUrl.pathname, LOCALES);
    const target = `/${guideSlugRoute[1]}`;
    const localizedTarget =
      locale && locale !== DEFAULT_LOCALE ? `/${locale}${target}` : target;

    return NextResponse.redirect(
      new URL(`${localizedTarget}${nextUrl.search}`, nextUrl),
      308
    );
  }

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

  const needsAuthCheck = authRelatedRoutes.some((route) =>
    new RegExp(`^${route}$`).test(pathnameWithoutLocale)
  );

  if (!needsAuthCheck) {
    if (hasSingleLocale) {
      if (isDefaultLocalePrefixedPath) {
        return NextResponse.next();
      }

      const localizedPath =
        nextUrl.pathname === '/'
          ? defaultLocalePrefix
          : `${defaultLocalePrefix}${nextUrl.pathname}`;
      const localizedUrl = new URL(
        `${localizedPath}${nextUrl.search}`,
        nextUrl
      );

      return NextResponse.rewrite(localizedUrl);
    }

    return intlMiddleware(req);
  }

  let session: Session | null = null;
  try {
    const result = await betterFetch<Session>('/api/auth/get-session', {
      baseURL: getBaseUrl(),
      headers: {
        cookie: req.headers.get('cookie') || '',
      },
    });
    session = result.data;
  } catch (error) {
    session = null;
  }
  const isLoggedIn = !!session;

  if (isLoggedIn) {
    const isNotAllowedRoute = routesNotAllowedByLoggedInUsers.some((route) =>
      new RegExp(`^${route}$`).test(pathnameWithoutLocale)
    );
    if (isNotAllowedRoute) {
      return NextResponse.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
  }

  const isProtectedRoute = protectedRoutes.some((route) =>
    new RegExp(`^${route}$`).test(pathnameWithoutLocale)
  );

  if (!isLoggedIn && isProtectedRoute) {
    let callbackUrl = nextUrl.pathname;
    if (nextUrl.search) {
      callbackUrl += nextUrl.search;
    }
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return NextResponse.redirect(
      new URL(`/auth/login?callbackUrl=${encodedCallbackUrl}`, nextUrl)
    );
  }

  if (hasSingleLocale) {
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

function getPathnameWithoutLocale(pathname: string, locales: string[]): string {
  const localePattern = new RegExp(`^/(${locales.join('|')})/`);
  return pathname.replace(localePattern, '/');
}

function getLocaleFromPathname(
  pathname: string,
  locales: string[]
): string | undefined {
  const localePattern = new RegExp(`^/(${locales.join('|')})(?:/|$)`);
  return pathname.match(localePattern)?.[1];
}

export const config = {
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
