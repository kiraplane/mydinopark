import { dragons } from '@/data/dragonfire/dragons';
import { guides } from '@/data/dragonfire/guides';
import { Routes } from '@/routes';
import type { MetadataRoute } from 'next';
import { routing } from '../i18n/routing';
import { getCanonicalBaseUrl } from '../lib/urls/urls';

const coreRoutes = [
  Routes.Root,
  Routes.Codes,
  Routes.TierList,
  Routes.Dragons,
  Routes.Resources,
  Routes.Campaigns,
  Routes.CampaignResetGuide,
  Routes.Reigns,
  Routes.Alliances,
  Routes.Factions,
  Routes.Stronghold,
  Routes.Guides,
  Routes.Updates,
  Routes.Download,
  Routes.PrivacyPolicy,
  Routes.TermsOfService,
  Routes.CookiePolicy,
  Routes.Disclaimer,
];

const guideRoutes = guides.map((guide) => `/guides/${guide.slug}`);
const dragonRoutes = dragons.map((dragon) => `/dragons/${dragon.slug}`);
const stableLastModified = new Date('2026-06-05T00:00:00.000Z');

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const sitemapList: MetadataRoute.Sitemap = [];
  const baseUrl = getCanonicalBaseUrl();

  routing.locales.forEach((locale) => {
    [...coreRoutes, ...guideRoutes, ...dragonRoutes].forEach((route) => {
      const localizedRoute =
        locale === routing.defaultLocale ? route : `/${locale}${route}`;

      sitemapList.push({
        url: `${baseUrl}${localizedRoute}`,
        lastModified: stableLastModified,
        changeFrequency:
          route === Routes.Root || route === Routes.Codes ? 'daily' : 'weekly',
        priority:
          route === Routes.Root
            ? 1
            : route === Routes.Codes ||
                route === Routes.Download ||
                route === Routes.TierList
              ? 0.9
              : route.startsWith('/guides/') || route.startsWith('/dragons/')
                ? 0.85
                : 0.8,
      });
    });
  });

  return sitemapList;
}
