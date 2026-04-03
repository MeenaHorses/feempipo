import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us",
  description:
    "Contact Feempipo for partnerships, collaborations, and production inquiries via phone, email, or contact form.",
  alternates: { canonical: "/contact-us" },
};

export default function ContactUsPage() {
  return (
    <div className="min-h-screen font-display text-slate-100">
      <SiteHeader />
      <main className="flex flex-1 flex-col items-center">
        <div className="w-full max-w-[1200px] px-6 py-12 md:px-20 md:py-20">
          <div className="mb-16">
            <h1 className="mb-6 text-4xl font-black leading-tight tracking-tight md:text-6xl">
              Contact Us
            </h1>
            <p className="max-w-3xl text-lg leading-relaxed text-slate-400 md:text-xl">
              Get in touch with Feempipo for inquiries, collaborations, or partnerships. Whether you
              are interested in our productions, want to work with us, or have a general question, we
              would love to hear from you.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <div className="flex flex-col gap-8">
              <div>
                <h2 className="mb-8 text-2xl font-bold">Contact Details</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-5 rounded-xl border border-[#f5cd05]/10 bg-[#f5cd05]/5 p-4">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-[#f5cd05]/20 text-[#f5cd05]">
                      <span className="material-symbols-outlined text-[32px] leading-none">call</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#f5cd05]/70">
                        Telephone
                      </p>
                      <p className="text-xl font-bold text-white">+234 802 930 0776</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-5 rounded-xl border border-[#f5cd05]/10 bg-[#f5cd05]/5 p-4">
                    <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-[#f5cd05]/20 text-[#f5cd05]">
                      <span className="material-symbols-outlined text-[32px] leading-none">mail</span>
                    </div>
                    <div className="flex flex-col justify-center">
                      <p className="mb-1 text-sm font-semibold uppercase tracking-wider text-[#f5cd05]/70">
                        Email
                      </p>
                      <p className="text-xl font-bold text-white">Feempipo@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <section className="rounded-2xl border border-[#f5cd05]/10 bg-[#23200f]/50 p-8 shadow-xl md:p-10">
              <div className="mb-8">
                <h3 className="mb-3 text-2xl font-bold">Send us a message</h3>
                <p className="text-slate-400">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
              </div>
              <ContactForm />
            </section>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
