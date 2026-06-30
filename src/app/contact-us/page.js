import { buildPageMetadata } from "../../lib/seo";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import RevealOnScroll from "../components/RevealOnScroll";
import ContactForm from "./ContactForm";

export const metadata = buildPageMetadata({
  title: "Contact Us",
  description:
    "Contact Feempipo for partnerships, collaborations, and production inquiries via phone, email, or contact form.",
  pathname: "/contact-us",
});

export default function ContactUsPage() {
  return (
    <div className="cinematic-page min-h-screen font-display text-white">
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center">
        <div className="w-full max-w-[1200px] px-6 py-12 md:px-20 md:py-20">
          <RevealOnScroll>
          <div className="mb-16">
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Contact Us
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-brand-muted md:text-xl">
              Get in touch with Feempipo for inquiries, collaborations, or partnerships. Whether you
              are interested in our productions, want to work with us, or have a general question, we
              would love to hear from you.
            </p>
          </div>
          </RevealOnScroll>

          <RevealOnScroll>
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="mb-8 text-2xl font-bold">Contact Details</h2>
                <div className="space-y-6">
                  <div className="brand-info-card flex items-start gap-5 p-4">
                    <div className="brand-icon-wrap size-14 shrink-0">
                      <span className="material-symbols-outlined text-[32px] leading-none">call</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-brand-gold/70">
                        Telephone
                      </p>
                      <p className="text-xl font-bold text-white">+234 802 930 0776</p>
                    </div>
                  </div>
                  <div className="brand-info-card flex items-start gap-5 p-4">
                    <div className="brand-icon-wrap size-14 shrink-0">
                      <span className="material-symbols-outlined text-[32px] leading-none">mail</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-brand-gold/70">
                        Email
                      </p>
                      <p className="text-xl font-bold text-white">Feempipo@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="brand-card p-8 md:p-10">
              <div className="mb-8">
                <h3 className="mb-3 text-2xl font-bold">Send us a message</h3>
                <p className="text-brand-muted">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </section>
          </div>
          </RevealOnScroll>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
