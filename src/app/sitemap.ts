import { guides } from '@/data/nophenia/guides';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  Routes.Root,
  Routes.Play,
  Routes.Guides,
  Routes.Steam,
  Routes.Demo,
  Routes.Download,
  Routes.BrowserVersion,
  Routes.Community,
  Routes.Comfort,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  Routes.Disclaimer,
];

const guideRoutes = guides
  .map((guide) => guide.path)
  .filter((path) => !coreRoutes.includes(path as Routes));

const stableLastModified = new Date('2026-06-28T00:00:00.000Z');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapList: MetadataRoute.Sitemap = [];
  const baseUrl = getCanonicalBaseUrl();
  const allRoutes = [...coreRoutes, ...guideRoutes];

  routing.locales.forEach((locale) => {
    allRoutes.forEach((route) => {
      const localizedRoute =
        locale === routing.defaultLocale ? route : `/${locale}${route}`;

      sitemapList.push({
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency:
          route === Routes.Root ||
          route === Routes.Play ||
          route === Routes.Guides ||
          route === Routes.Steam
            ? 'daily'
            : 'weekly',
        priority:
          route === Routes.Root
            ? 1
            : route === Routes.Play
              ? 0.95
              : route === Routes.Guides ||
                  route === Routes.Steam ||
                  route === Routes.Demo ||
                  route === Routes.Download ||
                  route === Routes.Community ||
                  route === Routes.Comfort
                ? 0.9
                : 0.8,
      });
    });
  });

  return sitemapList;
}
