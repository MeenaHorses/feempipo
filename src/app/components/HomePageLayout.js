"use client";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function HomePageLayout({ children }) {
  return (
    <div className="cinematic-page font-display text-white antialiased">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
