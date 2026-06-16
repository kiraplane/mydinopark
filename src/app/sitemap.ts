import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  Routes.Root,
  Routes.Play,
  Routes.AllEndings,
  Routes.SavePoints,
  Routes.Ending20,
  Routes.SilasRoute,
  Routes.HeLetYouGo,
  Routes.KyleRoute,
  Routes.MiniGames,
  Routes.ContentWarnings,
  Routes.VisualNovel,
  Routes.Bakker,
  Routes.ItchIoDownload,
  Routes.Guides,
  Routes.Download,
  Routes.ItchIo,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  Routes.Disclaimer,
];

const stableLastModified = new Date('2026-06-15T00:00:00.000Z');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapList: MetadataRoute.Sitemap = [];
  const baseUrl = getCanonicalBaseUrl();

  routing.locales.forEach((locale) => {
    coreRoutes.forEach((route) => {
      const localizedRoute =
        locale === routing.defaultLocale ? route : `/${locale}${route}`;

      sitemapList.push({
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency:
          route === Routes.Root ||
          route === Routes.Play ||
          route === Routes.AllEndings
            ? 'daily'
            : 'weekly',
        priority:
          route === Routes.Root
            ? 1
            : route === Routes.Play
              ? 0.95
              : route === Routes.AllEndings ||
                  route === Routes.SavePoints ||
                  route === Routes.Ending20 ||
                  route === Routes.HeLetYouGo ||
                  route === Routes.Download ||
                  route === Routes.ItchIo
                ? 0.9
                : 0.8,
      });
    });
  });

  return sitemapList;
}
