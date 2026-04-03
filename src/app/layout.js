import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata = {
  metadataBase: new URL("https://feempipo.com"),
  title: {
    default: "Feempipo | Premium African Movies, Series & Comedy",
    template: "%s | Feempipo"
  },
  description:
    "Feempipo is a multimedia production company creating premium African movies, series, documentaries, and comedy content for global audiences.",
  keywords: [
    "Feempipo",
    "African movies",
    "Nigerian series",
    "Documentaries",
    "YawaSkits",
    "African comedy"
  ],
  openGraph: {
    title: "Feempipo | Premium African Movies, Series & Comedy",
    description:
      "Discover premium African storytelling through movies, documentaries, series, and comedy.",
    type: "website",
    url: "https://feempipo.com"
  },
  twitter: {
    card: "summary_large_image",
    title: "Feempipo | Premium African Movies, Series & Comedy",
    description:
      "Discover premium African storytelling through movies, documentaries, series, and comedy."
  },
  alternates: {
    canonical: "/"
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
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
