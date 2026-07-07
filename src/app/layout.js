import "./globals.css";
import { Montserrat, Source_Sans_3 } from "next/font/google";
import { ORGANIZATION_LOGO_URL, SITE_URL } from "../lib/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "800", "900"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
  weight: ["400", "600", "700"],
});

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Feempipo",
  alternateName: "Feempipo LTD",
  url: SITE_URL,
  logo: ORGANIZATION_LOGO_URL,
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
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    title: "Feempipo",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "48x48", type: "image/x-icon" },
      { url: "/favicon.png?v=2", type: "image/png", sizes: "128x128" },
      { url: "/logo192.png?v=2", type: "image/png", sizes: "192x192" },
      { url: "/logo512.png?v=2", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/logo192.png?v=2", sizes: "192x192", type: "image/png" }],
  },
};

export const viewport = {
  themeColor: "#0d0d0d",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="shortcut icon" href="/favicon.ico?v=2" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${sourceSans.variable} font-sans antialiased`}
      >
        <div className="bg-abstract-motion min-h-screen">
          <div className="blob-1" aria-hidden />
          <div className="blob-2" aria-hidden />
          <div className="relative z-[1] min-h-screen">{children}</div>
        </div>
      </body>
    </html>
  );
}
