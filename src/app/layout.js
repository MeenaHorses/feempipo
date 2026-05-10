import "./globals.css";
import { Inter } from "next/font/google";
import { SITE_URL } from "../lib/seo";

const inter = Inter({ subsets: ["latin"], display: "swap" });

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Feempipo",
  alternateName: "Feempipo LTD",
  url: SITE_URL,
  logo: `${SITE_URL}/images/feempipo-profile-image.png`,
  description:
    "Multimedia production company creating premium African movies, series, documentaries, and comedy for global audiences.",
  sameAs: [
    "https://www.youtube.com/@feempipo",
    "https://www.facebook.com/feempipo",
    "https://www.instagram.com/feempipo",
    "https://www.tiktok.com/@feempipo",
  ],
};

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Feempipo | Premium African Movies, Series & Comedy",
    template: "%s | Feempipo",
  },
  description:
    "Feempipo is a multimedia production company creating premium African movies, series, documentaries, and comedy content for global audiences.",
  keywords: [
    "Feempipo",
    "African movies",
    "Nigerian series",
    "Documentaries",
    "YawaSkits",
    "African comedy",
  ],
  openGraph: {
    title: "Feempipo | Premium African Movies, Series & Comedy",
    description:
      "Discover premium African storytelling through movies, documentaries, series, and comedy.",
    type: "website",
    url: SITE_URL,
    siteName: "Feempipo",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Feempipo — premium African movies, series, and comedy",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Feempipo | Premium African Movies, Series & Comedy",
    description:
      "Discover premium African storytelling through movies, documentaries, series, and comedy.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="bg-abstract-motion min-h-screen">
          <div className="blob-1" aria-hidden />
          <div className="blob-2" aria-hidden />
          <div className="relative z-[1] min-h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
