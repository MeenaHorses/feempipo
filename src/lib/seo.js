/** Site origin for canonical URLs, JSON-LD, and sitemap. */
export const SITE_URL = "https://feempipo.com";

export const DEFAULT_OG_IMAGE_PATH = "/og-image.jpg";
export const BRAND_LOGO_PATH = "/logo192.png";
export const ORGANIZATION_LOGO_URL = `${SITE_URL}${BRAND_LOGO_PATH}`;

/**
 * Standard page metadata for App Router (merges with root layout `metadataBase` + title template).
 */
export function buildPageMetadata({ title, description, pathname }) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  const pageUrl = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} | Feempipo`,
      description,
      url: pageUrl,
      type: "website",
      siteName: "Feempipo",
      locale: "en_US",
      images: [
        {
          url: DEFAULT_OG_IMAGE_PATH,
          width: 1200,
          height: 630,
          alt: `${title} — Feempipo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Feempipo`,
      description,
      images: [DEFAULT_OG_IMAGE_PATH],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}
