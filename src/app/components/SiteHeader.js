"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import feemPipoLogo from "../../logos/feempipoLogo_cropped.webp";

const links = [
  { href: "/movies", label: "Movies", icon: "movie" },
  { href: "/yawaskits", label: "YawaSkits", icon: "theater_comedy" },
  { href: "/series", label: "Series", icon: "subscriptions" },
  { href: "/documentaries", label: "Documentaries", icon: "photo_library" },
  { href: "/meet-the-team", label: "Meet the Team", icon: "groups" },
  { href: "/about-us", label: "About Us", icon: "info" }
];

export default function SiteHeader() {
  const pathname = usePathname();
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const handleLogoMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - (left + width / 2)) / width) * 20;
    const y = ((e.clientY - (top + height / 2)) / height) * 20;
    setOffset({ x, y });
  };

  const resetLogoOffset = () => {
    setOffset({ x: 0, y: 0 });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-brand-border bg-charcoal-900/85 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.5)] backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between gap-1.5 px-2 sm:gap-2 sm:px-3 md:h-20 md:gap-3 md:px-4 lg:gap-4 lg:px-6">
        <Link
          href="/"
          className="flex min-w-0 flex-1 items-center pr-1 sm:pr-2"
          aria-label="Feempipo home"
        >
          <div className="w-[6.5rem] shrink-0 sm:w-32 md:w-40 lg:w-52">
            <Image
              src={feemPipoLogo}
              alt="Feempipo"
              width={464}
              height={89}
              sizes="(max-width: 640px) 104px, (max-width: 768px) 128px, (max-width: 1024px) 160px, 208px"
              priority
              className="h-auto w-full object-contain"
              style={{
                transform: `translate(${offset.x}px, ${offset.y}px)`,
                transition: "transform 0.1s ease-out"
              }}
              onMouseMove={handleLogoMouseMove}
              onMouseLeave={resetLogoOffset}
            />
          </div>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Main">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-brand-gold ${
                  active ? "text-brand-gold" : "text-brand-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex shrink-0 items-center gap-1 sm:gap-2 md:gap-3 lg:gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-lg bg-brand-gold px-2.5 py-1.5 text-[11px] font-bold leading-tight text-charcoal-900 shadow-[0_0_20px_-4px_rgba(246,166,11,0.4)] transition-all hover:bg-gold-accent sm:px-3.5 sm:py-2 sm:text-xs md:px-5 md:py-2.5 md:text-sm lg:px-6 lg:py-3"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-brand-gold/30 bg-brand-gold/5 text-brand-gold transition-all hover:border-brand-gold/50 hover:bg-brand-gold/15 hover:shadow-[0_0_20px_rgba(246,166,11,0.12)] sm:size-10 lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="material-symbols-outlined text-[22px] leading-none sm:text-2xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Drawer below lg — inline nav only from lg (1024px) and up */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-charcoal-900/85 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />
        <div
          id="mobile-nav-drawer"
          className={`absolute top-0 right-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-brand-border bg-charcoal-900 shadow-[-12px_0_40px_rgba(0,0,0,0.55)] transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex items-center justify-between border-b border-brand-border px-4 py-4">
            <span className="text-sm font-bold tracking-wide text-brand-gold uppercase">
              Menu
            </span>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-brand-gold/20 text-brand-gold transition-all hover:bg-brand-gold/10 hover:shadow-[0_0_16px_rgba(246, 166, 11,0.1)]"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <span className="material-symbols-outlined text-2xl leading-none">close</span>
            </button>
          </div>
          <nav className="flex flex-1 flex-col gap-1 overflow-y-auto p-3" aria-label="Mobile main">
            {links.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`group flex items-center gap-3 rounded-xl border px-3 py-3.5 text-sm font-semibold transition-all duration-200 ${
                    active
                      ? "border-brand-gold/35 bg-brand-gold/12 text-brand-gold shadow-[inset_0_0_0_1px_rgba(246, 166, 11,0.08)]"
                      : "border-transparent text-brand-text hover:border-brand-gold/25 hover:bg-brand-gold/8 hover:text-brand-gold hover:shadow-[0_0_24px_rgba(246, 166, 11,0.06)] active:scale-[0.98]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span
                    className={`material-symbols-outlined shrink-0 text-[22px] leading-none transition-transform duration-200 group-hover:scale-110 ${
                      active ? "text-brand-gold" : "text-brand-gold/70 group-hover:text-brand-gold"
                    }`}
                    aria-hidden
                  >
                    {link.icon}
                  </span>
                  {link.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
