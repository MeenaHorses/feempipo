import HomePageLayout from "./components/HomePageLayout";
import HomeHeroSections from "./components/HomeHeroSections";
import HomeTrendingSeries from "./components/HomeTrendingSeries";
import { SITE_URL } from "../lib/seo";

/** Matches `HOME_PAGE_REVALIDATE_SECONDS` / RSS in `src/lib/youtubeCache.js`. */
export const revalidate = 172800;

export const metadata = {
  title: "Premium African Movies, Series & Comedy",
  description:
    "Explore premium African movies, series, documentaries, and comedy by Feempipo. Stream engaging stories from Africa to the world.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Feempipo | Premium African Movies, Series & Comedy",
    description:
      "Premium African movies, series, documentaries, and comedy from Feempipo.",
    type: "website",
    url: SITE_URL,
    locale: "en_US",
    siteName: "Feempipo",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Feempipo — premium African movies, series, and comedy",
      },
    ],
    videos: [
      {
        url: `${SITE_URL}/videos/hero.mp4`,
        width: 1280,
        height: 720,
        type: "video/mp4",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feempipo | Premium African Movies, Series & Comedy",
    description:
      "Premium African movies, series, documentaries, and comedy from Feempipo.",
    images: ["/og-image.jpg"],
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

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Feempipo",
      description:
        "Multimedia production company creating premium African movies, series, documentaries, and comedy.",
      inLanguage: "en",
    },
    {
      "@type": "VideoObject",
      "@id": `${SITE_URL}/#hero-video`,
      name: "Feempipo showreel",
      description: "Feempipo cinematic production highlight reel.",
      thumbnailUrl: `${SITE_URL}/images/hero-video-poster.webp`,
      contentUrl: `${SITE_URL}/videos/hero.mp4`,
      embedUrl: SITE_URL,
      uploadDate: "2025-01-01T12:00:00+00:00",
      isFamilyFriendly: true,
      publisher: { "@id": `${SITE_URL}/#website` },
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeJsonLd),
        }}
      />
      <HomePageLayout>
        <HomeHeroSections />
        <HomeTrendingSeries />
      </HomePageLayout>
    </>
  );
}
