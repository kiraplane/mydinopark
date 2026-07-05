import { getCloudflareContext } from '@opennextjs/cloudflare';
import Script from 'next/script';

function cleanEnvValue(value: string | undefined) {
  return value?.trim().replace(/^['"]+|['"]+$/g, '') ?? '';
}

function readGoogleAnalyticsId() {
  try {
    const env = getCloudflareContext().env as Record<string, unknown>;
    const value = env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID;

    if (typeof value === 'string') {
      return cleanEnvValue(value);
    }
  } catch {}

  return cleanEnvValue(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID);
}

export default function GoogleAnalytics() {
  const GOOGLE_ANALYTICS_ID = readGoogleAnalyticsId();

  if (process.env.NODE_ENV !== 'production' || !GOOGLE_ANALYTICS_ID) {
    return null;
  }

  return (
    <>
      <Script
        id="google-tag-js"
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`}
        strategy="beforeInteractive"
      />
      <Script
        id="google-tag-init"
        strategy="beforeInteractive"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Google Analytics requires an inline bootstrap snippet.
        dangerouslySetInnerHTML={{
          __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GOOGLE_ANALYTICS_ID}');
          `.trim(),
        }}
      />
    </>
  );
}
