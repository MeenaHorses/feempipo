import Link from "next/link";
import { buildPageMetadata } from "../../lib/seo";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "Feempipo Privacy Policy — how we collect, use, and protect your information on our website and channels.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen font-display text-[#eae2d0]">
      <SiteHeader />
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-24 md:px-12">
        <RevealOnScroll>
        <header className="mb-16">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#f5cd05]/20 px-3 py-1 text-[0.875rem] font-bold tracking-wide text-[#f5cd05] uppercase">
              Legal Center
            </span>
            <span className="text-sm text-slate-500">Last updated: March 30, 2026</span>
          </div>
          <h1 className="mb-6 text-4xl font-black tracking-tight text-white md:text-6xl">
            Privacy Policy
          </h1>
          <p className="max-w-2xl text-xl font-medium text-[#d0c6ab]">
            At Feempipo, we value your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and safeguard your data
            when you visit our website or interact with our content on YouTube and other platforms.
          </p>
        </header>
        </RevealOnScroll>

        <RevealOnScroll>
        <div className="mb-20 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="flex flex-col justify-between rounded-xl bg-gradient-to-br from-[#2e2a1e] to-[#23200f] p-8 md:col-span-2">
            <div>
              <span className="material-symbols-outlined mb-4 text-4xl text-[#f5cd05]">
                security
              </span>
              <h3 className="mb-3 text-2xl font-extrabold text-white">Data protection</h3>
              <p className="text-[#d0c6ab]">
                We take reasonable measures to help protect the information you share with us and to
                keep our digital channels secure.
              </p>
            </div>
            <div className="mt-6 border-t border-white/5 pt-4">
              <span className="text-xs font-bold tracking-widest text-[#f5cd05] uppercase">
                Your trust matters
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-between rounded-xl border border-white/5 bg-[#2e2a1e] p-8">
            <div>
              <span className="material-symbols-outlined mb-4 text-4xl text-[#f5cd05]">
                visibility_off
              </span>
              <h3 className="mb-3 text-2xl font-extrabold text-white">No selling your data</h3>
              <p className="text-[#d0c6ab]">
                We do not sell or rent your personal information to third parties for their
                marketing.
              </p>
            </div>
          </div>
        </div>
        </RevealOnScroll>

        <RevealOnScroll>
        <section className="space-y-12">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2
                id="information-we-collect"
                className="sticky top-28 text-2xl font-extrabold tracking-tight text-[#f5cd05] uppercase"
              >
                Information we collect
              </h2>
            </div>
            <div className="space-y-6 leading-relaxed text-[#d0c6ab] md:col-span-8">
              <p className="text-lg">
                We collect information that you provide directly to us when you contact us, subscribe
                to updates, or otherwise interact with Feempipo. This may include:
              </p>
              <ul className="space-y-4">
                <li className="flex gap-4">
                  <span className="material-symbols-outlined shrink-0 text-[#f5cd05]">
                    check_circle
                  </span>
                  <span>
                    <strong className="text-[#eae2d0]">Personal information:</strong> When you
                    contact us, subscribe to newsletters, or use our services, we may collect your
                    name, email address, and other relevant details.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined shrink-0 text-[#f5cd05]">
                    check_circle
                  </span>
                  <span>
                    <strong className="text-[#eae2d0]">Usage data:</strong> We automatically collect
                    information about your interaction with our website and content, including IP
                    addresses, browser type, pages visited, and video engagement metrics.
                  </span>
                </li>
                <li className="flex gap-4">
                  <span className="material-symbols-outlined shrink-0 text-[#f5cd05]">
                    check_circle
                  </span>
                  <span>
                    <strong className="text-[#eae2d0]">Cookies &amp; tracking:</strong> Our website
                    may use cookies and analytics tools to improve user experience and monitor
                    website performance.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative my-16 overflow-hidden rounded-xl border border-white/5 bg-[#2e2a1e] py-16">
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse at 70% 30%, rgba(245,205,5,0.15) 0%, transparent 55%)",
              }}
            />
            <p className="relative z-10 px-8 text-2xl font-black italic tracking-tight text-white md:px-12 md:text-3xl">
              &quot;Your privacy is part of how we respect our audience.&quot;
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="sticky top-28 text-2xl font-extrabold tracking-tight text-[#f5cd05] uppercase">
                How we use your information
              </h2>
            </div>
            <div className="space-y-6 text-lg leading-relaxed text-[#d0c6ab] md:col-span-8">
              <ul className="list-inside list-disc space-y-2">
                <li>To provide and improve our services and content.</li>
                <li>To communicate updates, promotions, or announcements.</li>
                <li>To analyze trends and understand how users interact with our content.</li>
              </ul>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="sticky top-28 text-2xl font-extrabold tracking-tight text-[#f5cd05] uppercase">
                Sharing your information
              </h2>
            </div>
            <div className="leading-relaxed text-[#d0c6ab] md:col-span-8">
              <p className="text-lg">
                We do not sell or rent your personal information. We may share information with
                trusted service providers to operate our website or support our content, but only
                as necessary and under strict confidentiality agreements.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="sticky top-28 text-2xl font-extrabold tracking-tight text-[#f5cd05] uppercase">
                Your rights
              </h2>
            </div>
            <div className="space-y-6 md:col-span-8">
              <p className="text-lg leading-relaxed text-[#d0c6ab]">
                You have the right to access, correct, or request deletion of your personal
                information. For any privacy-related inquiries, contact us at:{" "}
                <a
                  href="mailto:Feempipo@gmail.com"
                  className="font-bold text-[#f5cd05] underline-offset-2 hover:underline"
                >
                  Feempipo@gmail.com
                </a>
                .
              </p>
              <div className="space-y-4">
                <details className="group overflow-hidden rounded-xl border border-white/5 bg-[#2e2a1e] transition-all">
                  <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-[#eae2d0]">
                    Access and updates
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm text-[#d0c6ab]">
                    You may request a copy of the personal data we hold about you or ask us to
                    correct inaccurate information.
                  </div>
                </details>
                <details className="group overflow-hidden rounded-xl border border-white/5 bg-[#2e2a1e] transition-all">
                  <summary className="flex cursor-pointer items-center justify-between p-6 font-bold text-[#eae2d0]">
                    Deletion requests
                    <span className="material-symbols-outlined transition-transform group-open:rotate-180">
                      expand_more
                    </span>
                  </summary>
                  <div className="px-6 pb-6 text-sm text-[#d0c6ab]">
                    You may request deletion of your information where applicable law allows,
                    subject to any records we must retain for legal or operational reasons.
                  </div>
                </details>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="sticky top-28 text-2xl font-extrabold tracking-tight text-[#f5cd05] uppercase">
                Third-party links
              </h2>
            </div>
            <div className="leading-relaxed text-[#d0c6ab] md:col-span-8">
              <p className="text-lg">
                Our website and YouTube channels may contain links to third-party sites. We are not
                responsible for the privacy practices of these external websites.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div className="md:col-span-4">
              <h2 className="sticky top-28 text-2xl font-extrabold tracking-tight text-[#f5cd05] uppercase">
                Updates to this policy
              </h2>
            </div>
            <div className="leading-relaxed text-[#d0c6ab] md:col-span-8">
              <p className="text-lg">
                We may update this Privacy Policy from time to time. We encourage you to check this
                page periodically for any changes.
              </p>
            </div>
          </div>

          <div className="mt-20 rounded-xl border border-[#f5cd05]/20 bg-[#f5cd05]/5 p-10 text-center">
            <h3 className="mb-4 text-2xl font-black text-white md:text-3xl">
              Questions about your privacy?
            </h3>
            <p className="mx-auto mb-8 max-w-xl text-[#d0c6ab]">
              Reach out if you have questions about how we handle your information.
            </p>
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-2 rounded-xl bg-[#f5cd05] px-8 py-4 font-black tracking-widest text-[#23200f] uppercase transition-transform hover:scale-[1.02]"
            >
              Contact us
              <span className="material-symbols-outlined text-[#23200f]">mail</span>
            </Link>
          </div>
        </section>
        </RevealOnScroll>
      </main>
      <SiteFooter />
    </div>
  );
}
