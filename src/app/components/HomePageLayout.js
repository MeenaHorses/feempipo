"use client";

import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function HomePageLayout({ children }) {
  return (
    <div className="font-display text-slate-100 antialiased">
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
