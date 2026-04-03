"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import feemPipoLogo from "../../logos/feempipoLogo_cropped.png";

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
    <header className="sticky top-0 z-50 w-full border-b border-[#f5cd05]/20 bg-[#23200f]">
      <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between gap-4 px-2 sm:px-4 lg:px-6">
        <Link href="/" className="flex items-center" aria-label="Feempipo home">
          <img
            src={feemPipoLogo.src}
            alt="feem pipo"
            className="h-auto w-44 object-contain sm:w-52"
            style={{
              transform: `translate(${offset.x}px, ${offset.y}px)`,
              transition: "transform 0.1s ease-out"
            }}
            onMouseMove={handleLogoMouseMove}
            onMouseLeave={resetLogoOffset}
          />
        </Link>

        <nav className="hidden items-center gap-5 md:flex" aria-label="Main">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-semibold transition-colors hover:text-[#f5cd05] ${
                  active ? "text-[#f5cd05]" : "text-slate-200"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-4">
          <Link
            href="/contact-us"
            className="inline-flex items-center justify-center rounded-lg bg-[#f5cd05] px-6 py-3 text-sm font-bold text-[#23200f] transition-all hover:bg-[#f5cd05]/90"
          >
            Contact Us
          </Link>
          <button
            type="button"
            className="inline-flex size-11 shrink-0 items-center justify-center rounded-lg border border-[#f5cd05]/30 bg-[#f5cd05]/5 text-[#f5cd05] transition-all hover:border-[#f5cd05]/50 hover:bg-[#f5cd05]/15 hover:shadow-[0_0_20px_rgba(245,205,5,0.12)] md:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className="material-symbols-outlined text-[26px] leading-none">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile drawer — md+ uses unchanged desktop nav above */}
      <div
        className={`fixed inset-0 z-[60] md:hidden ${menuOpen ? "pointer-events-auto" : "pointer-events-none"}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen ? true : undefined}
      >
        <button
          type="button"
          className={`absolute inset-0 bg-[#0f0e08]/80 backdrop-blur-sm transition-opacity duration-300 ${
            menuOpen ? "opacity-100" : "opacity-0"
          }`}
          aria-label="Close menu"
          tabIndex={menuOpen ? 0 : -1}
          onClick={() => setMenuOpen(false)}
        />
        <div
          id="mobile-nav-drawer"
          className={`absolute top-0 right-0 flex h-full w-[min(100%,20rem)] flex-col border-l border-[#f5cd05]/15 bg-[#1a160b] shadow-[-12px_0_40px_rgba(0,0,0,0.45)] transition-transform duration-300 ease-out ${
            menuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="dialog"
          aria-modal="true"
          aria-label="Site navigation"
        >
          <div className="flex items-center justify-between border-b border-[#f5cd05]/10 px-4 py-4">
            <span className="text-sm font-bold tracking-wide text-[#f5cd05] uppercase">
              Menu
            </span>
            <button
              type="button"
              className="inline-flex size-10 items-center justify-center rounded-lg border border-[#f5cd05]/20 text-[#f5cd05] transition-all hover:bg-[#f5cd05]/10 hover:shadow-[0_0_16px_rgba(245,205,5,0.1)]"
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
                      ? "border-[#f5cd05]/35 bg-[#f5cd05]/12 text-[#f5cd05] shadow-[inset_0_0_0_1px_rgba(245,205,5,0.08)]"
                      : "border-transparent text-slate-200 hover:border-[#f5cd05]/25 hover:bg-[#f5cd05]/8 hover:text-[#f5cd05] hover:shadow-[0_0_24px_rgba(245,205,5,0.06)] active:scale-[0.98]"
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  <span
                    className={`material-symbols-outlined shrink-0 text-[22px] leading-none transition-transform duration-200 group-hover:scale-110 ${
                      active ? "text-[#f5cd05]" : "text-[#f5cd05]/70 group-hover:text-[#f5cd05]"
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
