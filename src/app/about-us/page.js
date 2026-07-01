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
      <main className="mx-auto flex max-w-[1200px] flex-1 flex-col px-6 md:px-10">
        <RevealOnScroll>
          <div className="relative mt-8 flex h-80 w-full flex-col justify-end overflow-hidden rounded-xl border border-brand-border bg-charcoal-900 md:mt-10 md:h-[450px]">
            <Image
              src="/images/about-us/hero.jpg"
              alt="Feempipo film production studio with professional cinema camera and lighting"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 1200px"
              className="object-contain object-center scale-[0.82]"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/55 to-charcoal-900/40"
              aria-hidden
            />
            <div className="absolute inset-0 bg-charcoal-900/30" aria-hidden />
            <div className="relative z-10 p-8">
              <h1 className="text-4xl font-black leading-tight tracking-tight text-white md:text-6xl">
                About Us
              </h1>
              <div className="mt-4 h-1 w-24 bg-brand-gold" />
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="flex flex-col gap-12 py-16 md:flex-row">
            <div className="flex-1">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-brand-gold uppercase">
                The Studio
              </h2>
              <h3 className="mb-6 text-3xl font-black text-white md:text-5xl">
                Feempipo LTD
              </h3>
              <p className="mb-8 text-xl font-semibold text-brand-gold">
                Creatives in Motion
              </p>
              <div className="space-y-6 text-lg leading-relaxed text-brand-text">
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
            <div className="grid flex-1 grid-cols-2 gap-4">
              <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-brand-border bg-charcoal-800">
                <Image
                  src="/images/about-us/studio-1.jpg"
                  alt="Feempipo production team at work in the studio"
                  fill
                  sizes="(max-width: 768px) 45vw, 280px"
                  className="object-cover object-center"
                />
              </div>
              <div className="relative mt-12 aspect-[4/5] overflow-hidden rounded-xl border border-brand-border bg-charcoal-800">
                <Image
                  src="/images/about-us/studio-2.jpg"
                  alt="Behind the scenes on a Feempipo film set"
                  fill
                  sizes="(max-width: 768px) 45vw, 280px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </RevealOnScroll>

        <RevealOnScroll>
          <div className="grid grid-cols-1 gap-8 py-8 md:grid-cols-3 md:gap-10">
            <div className="brand-stat relative flex flex-col items-center text-center">
              <span className="material-symbols-outlined relative z-[1] mb-4 text-5xl text-brand-gold">
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
              <span className="material-symbols-outlined relative z-[1] mb-4 text-5xl text-brand-gold">
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
              <span className="material-symbols-outlined relative z-[1] mb-4 text-5xl text-brand-gold">
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
              <div className="brand-card brand-expertise-card relative p-6">
                <h5 className="relative z-[1] mb-3 text-xl font-bold text-brand-gold">
                  Feature Films
                </h5>
                <p className="relative z-[1] text-sm text-brand-muted">
                  Compelling narratives designed for the big screen.
                </p>
              </div>
              <div className="brand-card brand-expertise-card relative p-6">
                <h5 className="relative z-[1] mb-3 text-xl font-bold text-brand-gold">
                  TV Series
                </h5>
                <p className="relative z-[1] text-sm text-brand-muted">
                  Engaging episodic content for terrestrial and streaming.
                </p>
              </div>
              <div className="brand-card brand-expertise-card relative p-6">
                <h5 className="relative z-[1] mb-3 text-xl font-bold text-brand-gold">
                  Documentaries
                </h5>
                <p className="relative z-[1] text-sm text-brand-muted">
                  Impactful real-life stories told with sensitivity.
                </p>
              </div>
              <div className="brand-card brand-expertise-card relative p-6">
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
      </main>
      <SiteFooter />
    </div>
  );
}
