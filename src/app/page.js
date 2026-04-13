import HomePageContent from "./components/HomePageContent";

const SITE = "https://feempipo.com";

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
    url: SITE,
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
        url: `${SITE}/videos/hero.mp4`,
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
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      url: SITE,
      name: "Feempipo",
      description:
        "Multimedia production company creating premium African movies, series, documentaries, and comedy.",
      inLanguage: "en",
    },
    {
      "@type": "VideoObject",
      "@id": `${SITE}/#hero-video`,
      name: "Feempipo showreel",
      description: "Feempipo cinematic production highlight reel.",
      thumbnailUrl: `${SITE}/images/hero-video-poster.jpg`,
      contentUrl: `${SITE}/videos/hero.mp4`,
      embedUrl: `${SITE}/`,
      uploadDate: "2025-01-01T12:00:00+00:00",
      isFamilyFriendly: true,
      publisher: { "@id": `${SITE}/#website` },
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
      <HomePageContent />
    </>
  );
}
