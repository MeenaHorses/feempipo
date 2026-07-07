import Link from "next/link";
import { buildPageMetadata } from "../../lib/seo";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata = buildPageMetadata({
  title: "Terms of Service",
  description:
    "Feempipo Terms of Service — rules for using our website, YouTube channels, and content.",
  pathname: "/terms-of-service",
});

const navItems = [
  { href: "#use-of-content", label: "Use of Content" },
  { href: "#user-conduct", label: "User Conduct" },
  { href: "#submissions", label: "Submissions & Collaborations" },
  { href: "#third-party-links", label: "Third-Party Links" },
  { href: "#disclaimer", label: "Disclaimer" },
  { href: "#changes", label: "Changes to Terms" },
];

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen cinematic-page font-display text-brand-text">
      <SiteHeader />
      <main>
        <section className="relative flex min-h-[280px] items-center overflow-hidden md:min-h-[360px]">
          <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#2a2a2a] via-[#2a2a2a]/95 to-[#2a2a2a]" />
          <div
            className="absolute inset-0 z-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(ellipse at 30% 20%, rgba(246, 166, 11,0.12) 0%, transparent 50%)",
            }}
          />
          <RevealOnScroll className="relative z-10 mx-auto w-full max-w-[1200px] px-6 py-16 md:px-12">
            <span className="mb-4 block text-sm font-bold tracking-[0.2em] text-brand-gold uppercase">
              Legal
            </span>
            <h1 className="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl">
              Terms of Service
            </h1>
            <p className="max-w-xl text-lg text-brand-text md:text-xl">
              Feempipo Terms of Service — guidelines for using our website, YouTube channels, and
              related services.
            </p>
          </RevealOnScroll>
        </section>

        <section className="mx-auto max-w-[1200px] px-6 py-16 md:px-12 md:py-24">
          <RevealOnScroll>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-16">
            <aside className="hidden lg:col-span-3 lg:block">
              <div className="sticky top-28 space-y-6">
                <h4 className="mb-8 text-xs font-bold tracking-widest text-brand-gold/60 uppercase">
                  On this page
                </h4>
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item, i) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`border-l-2 pl-4 transition-colors ${
                        i === 0
                          ? "border-brand-gold font-bold text-brand-gold"
                          : "border-transparent text-brand-text hover:border-brand-gold/40 hover:text-brand-gold"
                      }`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-12 rounded-xl border border-brand-border brand-card p-6">
                  <p className="text-xs leading-relaxed text-brand-text">
                    Last updated: <span className="text-brand-text">March 30, 2026</span>
                  </p>
                </div>
              </div>
            </aside>

            <div className="space-y-16 lg:col-span-9">
              <p className="text-lg leading-relaxed text-brand-text">
                Welcome to the Feempipo website and our YouTube channels. By accessing our content or
                services, you agree to the following terms:
              </p>

              <article id="use-of-content" className="scroll-mt-28">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                    <span className="material-symbols-outlined" aria-hidden>movie_filter</span>
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    1. Use of Content
                  </h2>
                </div>
                <div className="rounded-xl border-l-4 border-brand-gold brand-card p-8">
                  <ul className="list-inside list-disc space-y-3 text-lg leading-relaxed text-brand-text">
                    <li>
                      All content on Feempipo platforms, including videos, images, text, and
                      graphics, is owned by Feempipo or its licensors.
                    </li>
                    <li>
                      You may view and share our content for personal, non-commercial purposes only.
                    </li>
                  </ul>
                </div>
              </article>

              <article id="user-conduct" className="scroll-mt-28">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                    <span className="material-symbols-outlined" aria-hidden>shield_person</span>
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    2. User Conduct
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-brand-text">
                  <p>
                    You agree not to misuse our website or channels, including posting harmful,
                    illegal, or infringing material.
                  </p>
                  <p>
                    Harassment, spamming, or violating other users&apos; rights is strictly
                    prohibited.
                  </p>
                </div>
              </article>

              <article id="submissions" className="scroll-mt-28">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                    <span className="material-symbols-outlined" aria-hidden>upload_file</span>
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    3. Submissions &amp; Collaborations
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-brand-text">
                  <p>
                    Any content submitted to Feempipo (e.g., scripts, ideas, collaborations) may be
                    reviewed but will not automatically be used.
                  </p>
                  <p>
                    By submitting content, you grant Feempipo the right to review and contact you
                    regarding potential collaboration.
                  </p>
                </div>
              </article>

              <article id="third-party-links" className="scroll-mt-28">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                    <span className="material-symbols-outlined" aria-hidden>link</span>
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    4. Third-Party Links
                  </h2>
                </div>
                <p className="leading-relaxed text-brand-text">
                  Our website or YouTube channels may include links to third-party websites. Feempipo
                  is not responsible for the content or privacy practices of these external sites.
                </p>
              </article>

              <article id="disclaimer" className="scroll-mt-28">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                    <span className="material-symbols-outlined" aria-hidden>gavel</span>
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    5. Disclaimer
                  </h2>
                </div>
                <div className="space-y-4 leading-relaxed text-brand-text">
                  <p>Content is provided &quot;as is&quot; without warranties of any kind.</p>
                  <p>
                    Feempipo is not liable for any direct, indirect, or incidental damages arising
                    from use of our website or content.
                  </p>
                </div>
              </article>

              <article id="changes" className="scroll-mt-28">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex size-12 items-center justify-center rounded-xl bg-brand-gold/10 text-brand-gold">
                    <span className="material-symbols-outlined" aria-hidden>update</span>
                  </div>
                  <h2 className="text-3xl font-extrabold tracking-tight text-white">
                    6. Changes to Terms
                  </h2>
                </div>
                <p className="leading-relaxed text-brand-text">
                  We may update these terms at any time. Continued use of our website or channels
                  constitutes acceptance of updated terms.
                </p>
              </article>
            </div>
          </div>
          </RevealOnScroll>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
