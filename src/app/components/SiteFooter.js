import Link from "next/link";
import Image from "next/image";
import feemPipoLogo from "../../logos/feempipoLogo_cropped.webp";

export default function SiteFooter() {
  return (
    <footer className="border-t border-brand-border bg-charcoal-900 pt-16 pb-8">
      <div className="mx-auto max-w-[1500px] px-2 sm:px-4 lg:px-6">
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center">
              <div className="w-40">
                <Image
                  src={feemPipoLogo}
                  alt="Feempipo"
                  width={464}
                  height={89}
                  sizes="160px"
                  className="h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="text-sm text-brand-muted">Creatives in Motion</p>
            <div className="mt-4 flex items-start gap-4">
              <a
                href="https://www.youtube.com/@feempipo"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="group relative flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold transition-all hover:bg-brand-gold hover:text-charcoal-900"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8ZM9.6 15.6V8.4L16 12l-6.4 3.6Z" />
                </svg>
                <span className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100">YouTube</span>
              </a>
              <a
                href="https://www.facebook.com/feempipo"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="group relative flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold transition-all hover:bg-brand-gold hover:text-charcoal-900"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.1V12h2.1V9.8c0-2.1 1.2-3.3 3.1-3.3.9 0 1.8.2 1.8.2v2h-1c-1 0-1.3.6-1.3 1.3V12h2.2l-.4 2.9H13v7A10 10 0 0 0 22 12Z" />
                </svg>
                <span className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100">Facebook</span>
              </a>
              <a
                href="https://www.instagram.com/feempipo?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="group relative flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold transition-all hover:bg-brand-gold hover:text-charcoal-900"
              >
                <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm9.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z" />
                </svg>
                <span className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100">Instagram</span>
              </a>
              <a
                href="https://www.tiktok.com/@feempipo"
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="group relative flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand-gold/10 text-brand-gold transition-all hover:bg-brand-gold hover:text-charcoal-900"
              >
                <span className="material-symbols-outlined text-[20px] leading-none">music_note</span>
                <span className="pointer-events-none absolute top-full left-1/2 z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-[11px] text-white opacity-0 transition-opacity group-hover:opacity-100">TikTok</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-white">Company</h4>
            <div className="space-y-2 text-sm text-brand-muted">
              <Link href="/documentaries" className="block hover:text-brand-gold">Documentaries</Link>
              <Link href="/series" className="block hover:text-brand-gold">Series</Link>
              <Link href="/contact-us" className="block hover:text-brand-gold">Contact</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-white">Content</h4>
            <div className="space-y-2 text-sm text-brand-muted">
              <Link href="/movies" className="block hover:text-brand-gold">Movies</Link>
              <Link href="/yawaskits" className="block hover:text-brand-gold">YawaSkits</Link>
            </div>
          </div>
          <div>
            <h4 className="mb-4 font-bold text-white">Support</h4>
            <div className="space-y-2 text-sm text-brand-muted">
              <Link href="/privacy-policy" className="block hover:text-brand-gold">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="block hover:text-brand-gold">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-brand-border pt-6 text-center text-sm text-brand-muted">
          © 2026 Feempipo Multimedia Production. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
