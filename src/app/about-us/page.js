import Image from "next/image";
import { buildPageMetadata } from "../../lib/seo";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import RevealOnScroll from "../components/RevealOnScroll";

export const metadata = buildPageMetadata({
  title: "About Us",
  description:
    "Learn about Feempipo LTD, a leading media production company in Abuja focused on films, series, documentaries, and digital media.",
  pathname: "/about-us",
});

export default function AboutUsPage() {
  return (
    <div className="min-h-screen cinematic-page font-display text-white antialiased">
      <SiteHeader />
      <section className="hero-about relative min-h-[calc(100dvh-4rem)] w-full overflow-hidden md:min-h-[calc(100dvh-5rem)]">
        <div className="hero-bg-mask absolute inset-0 z-0">
          <div className="relative h-full min-h-[calc(100dvh-4rem)] w-full md:min-h-[calc(100dvh-5rem)]">
            <Image
              src="/images/about-us/hero.webp"
              alt=""
              aria-hidden
              fill
              priority
              sizes="100vw"
              quality={80}
              className="object-cover object-[62%_center] brightness-[0.78] saturate-[1.15] contrast-[1.03] sm:object-[60%_center] lg:object-center"
            />
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-r from-charcoal-900/82 via-charcoal-900/68 to-charcoal-900/12 md:to-charcoal-900/22"
            aria-hidden
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal-900/72 via-charcoal-900/18 to-charcoal-900/28"
            aria-hidden
          />
        </div>
        <div className="relative z-10 mx-auto flex min-h-[calc(100dvh-4rem)] w-full max-w-7xl flex-col justify-center px-4 py-10 sm:px-6 md:min-h-[calc(100dvh-5rem)] lg:px-8">
          <div className="w-full text-left lg:max-w-[45%]">
          <p className="mb-3 text-xs font-bold tracking-widest text-brand-gold uppercase sm:text-sm">
            About Us
          </p>
          <h1 className="mb-3 text-3xl font-black leading-[1.1] tracking-tight text-white sm:mb-4 sm:text-4xl lg:text-[2.25rem] xl:text-6xl">
            <span className="text-brand-gold">Feempipo</span> LTD
          </h1>
          <p className="mb-5 text-lg font-semibold text-brand-gold sm:mb-6 lg:text-xl xl:mb-8">
            Creatives in Motion
          </p>
          <div className="hero-about-body max-w-2xl space-y-4 text-base leading-relaxed text-brand-text lg:text-[0.9375rem] xl:space-y-6 xl:text-lg">
            <p>
              Feempipo LTD is a leading media production company based in
              Abuja, Nigeria, specializing in movie production, series,
              documentaries, and digital content creation.
            </p>
            <p>
              With over a decade of experience, we have built a reputation for
              delivering high-quality productions that resonate with audiences
              across Africa and around the world. We pride ourselves on our
              storytelling prowess and technical excellence.
            </p>
            <p>
              Our mission is to push the boundaries of African cinema,
              bringing authentic stories to life through state-of-the-art
              technology and a passion for visual storytelling.
            </p>
          </div>
          </div>
        </div>
      </section>

      <main className="mx-auto flex max-w-[1200px] flex-1 flex-col px-6 pb-24 md:px-10">
        <RevealOnScroll>
          <div className="grid grid-cols-1 gap-8 py-16 md:grid-cols-3 md:gap-10">
            <div className="brand-stat relative flex flex-col items-center text-center">
              <span className="material-symbols-outlined relative z-[1] mb-4 text-5xl text-brand-gold" aria-hidden>
                video_library
              </span>
              <h4 className="relative z-[1] mb-2 text-2xl font-bold text-white">
                100+ Productions
              </h4>
              <p className="relative z-[1] text-brand-muted">
                From indie shorts to international feature films and series.
              </p>
            </div>
            <div className="brand-stat relative flex flex-col items-center text-center">
              <span className="material-symbols-outlined relative z-[1] mb-4 text-5xl text-brand-gold" aria-hidden>
                emoji_events
              </span>
              <h4 className="relative z-[1] mb-2 text-2xl font-bold text-white">
                Award Winning
              </h4>
              <p className="relative z-[1] text-brand-muted">
                Recognized globally for storytelling and technical innovation.
              </p>
            </div>
            <div className="brand-stat relative flex flex-col items-center text-center">
              <span className="material-symbols-outlined relative z-[1] mb-4 text-5xl text-brand-gold" aria-hidden>
                public
              </span>
              <h4 className="relative z-[1] mb-2 text-2xl font-bold text-white">
                Global Reach
              </h4>
              <p className="relative z-[1] text-brand-muted">
                Content distributed across major platforms worldwide.
              </p>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="pb-24 pt-8">
            <h2 className="mb-12 text-center text-3xl font-bold text-white">
              Our Expertise
            </h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="brand-card brand-expertise-card group relative p-6">
                <div className="brand-icon-wrap relative z-[1] mb-4 h-12 w-12">
                  <span className="material-symbols-outlined text-2xl" aria-hidden>movie</span>
                </div>
                <h5 className="relative z-[1] mb-3 text-xl font-bold text-brand-gold">
                  Feature Films
                </h5>
                <p className="relative z-[1] text-sm text-brand-muted">
                  Compelling narratives designed for the big screen.
                </p>
              </div>
              <div className="brand-card brand-expertise-card group relative p-6">
                <div className="brand-icon-wrap relative z-[1] mb-4 h-12 w-12">
                  <span className="material-symbols-outlined text-2xl" aria-hidden>live_tv</span>
                </div>
                <h5 className="relative z-[1] mb-3 text-xl font-bold text-brand-gold">
                  TV Series
                </h5>
                <p className="relative z-[1] text-sm text-brand-muted">
                  Engaging episodic content for terrestrial and streaming.
                </p>
              </div>
              <div className="brand-card brand-expertise-card group relative p-6">
                <div className="brand-icon-wrap relative z-[1] mb-4 h-12 w-12">
                  <span className="material-symbols-outlined text-2xl" aria-hidden>photo_library</span>
                </div>
                <h5 className="relative z-[1] mb-3 text-xl font-bold text-brand-gold">
                  Documentaries
                </h5>
                <p className="relative z-[1] text-sm text-brand-muted">
                  Impactful real-life stories told with sensitivity.
                </p>
              </div>
              <div className="brand-card brand-expertise-card group relative p-6">
                <div className="brand-icon-wrap relative z-[1] mb-4 h-12 w-12">
                  <span className="material-symbols-outlined text-2xl" aria-hidden>devices</span>
                </div>
                <h5 className="relative z-[1] mb-3 text-xl font-bold text-brand-gold">
                  Digital Media
                </h5>
                <p className="relative z-[1] text-sm text-brand-muted">
                  Modern content optimized for the digital age.
                </p>
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
        <section className="brand-cta-banner mt-16 flex flex-col items-center justify-between gap-8 p-10 sm:p-12 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-brand-bg sm:text-4xl">
              Powerful African stories, brought to life.
            </h2>
            <p className="max-w-md font-sans font-normal text-brand-bg/80">
              We produce films, series, and documentaries that bring your story
              to life and reach global audiences.
            </p>
          </div>
          <a
            href="mailto:Feempipo@gmail.com"
            className="shrink-0 rounded-xl bg-brand-bg px-8 py-4 font-semibold tracking-tight text-brand-gold transition-transform hover:scale-105 active:scale-95"
          >
            Contact Us
          </a>
        </section>
        </RevealOnScroll>
      </main>
      <SiteFooter />
    </div>
  );
}
