"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import RevealOnScroll from "./RevealOnScroll";

const expertiseCards = [
  {
    id: "storytelling",
    icon: "auto_stories",
    title: "Storytelling",
    body: "High-quality narratives that capture the essence of African culture. We tell stories that matter, from the heart of the continent to the world.",
  },
  {
    id: "global-reach",
    icon: "public",
    title: "Global Reach",
    body: "Connecting local talent with global audiences through digital platforms. Our content travels across borders, breaking cultural barriers.",
  },
  {
    id: "yawaskits-feature",
    icon: "handshake",
    title: "Brand Collaborations",
    body: "We collaborate with brands to craft compelling, story-driven content that connects with audiences in a meaningful way.",
  },
];

export default function HomeHeroSections() {
  const videoContainerRef = useRef(null);
  const [shouldLoadVideo, setShouldLoadVideo] = useState(false);

  useEffect(() => {
    if (!videoContainerRef.current || shouldLoadVideo) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoadVideo(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px" },
    );

    observer.observe(videoContainerRef.current);

    return () => observer.disconnect();
  }, [shouldLoadVideo]);

  return (
    <>
      <section
        id="hero"
        className="relative flex min-h-[720px] items-center overflow-hidden py-12"
      >
        <div className="absolute inset-0 z-0">
          <Image
            alt="Cinematic production background"
            className="h-full w-full object-cover brightness-[0.72] saturate-[1.25] contrast-[1.05]"
            src="/images/hero-video-poster.jpg"
            fill
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 z-10 bg-amber-950/25 mix-blend-soft-light" />
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-charcoal-900/95 via-charcoal-900/55 to-charcoal-900/15" />
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-charcoal-900/90 via-charcoal-900/25 to-charcoal-900/35" />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "radial-gradient(ellipse 75% 60% at 72% 48%, rgba(246, 166, 11, 0.22), transparent 68%)",
            }}
          />
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "radial-gradient(ellipse 50% 40% at 20% 60%, rgba(255, 200, 87, 0.08), transparent 70%)",
            }}
          />
        </div>
        <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
            <div className="w-full text-left lg:w-[45%]">
              <span className="mb-4 inline-block rounded-full border border-brand-gold/25 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold tracking-wider text-brand-gold uppercase md:text-sm">
                Streaming Quality Stories
              </span>
              <h1 className="mb-4 text-4xl leading-[1.1] font-black tracking-tight text-white md:text-6xl">
                Premium Movies, Series, and Comedy Content from{" "}
                <span className="text-brand-gold">Africa</span>
              </h1>
              <p className="mb-6 max-w-2xl text-base leading-relaxed text-brand-text md:text-lg">
                Feempipo is a leading multimedia production company creating
                high-quality movies, series, documentaries, and digital content
                for global audiences. We produce engaging stories that resonate
                across Africa and beyond.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/series"
                  className="brand-btn-primary rounded-full px-7 py-3 text-base"
                >
                  <span className="material-symbols-outlined">play_circle</span>
                  Watch Featured Series
                </Link>
                <Link
                  href="/movies"
                  className="brand-btn-secondary rounded-full border-2 px-7 py-3 text-base text-brand-gold"
                >
                  Explore Movies
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-[55%]">
              <div
                ref={videoContainerRef}
                className="group relative aspect-video overflow-hidden rounded-2xl bg-charcoal-800 shadow-[0_24px_64px_-16px_rgba(0,0,0,0.75)] ring-1 ring-brand-gold/20"
              >
                <div className="absolute inset-0 overflow-hidden rounded-[inherit] bg-charcoal-800">
                  {shouldLoadVideo ? (
                    <div className="absolute inset-0 origin-center transition-transform duration-700 group-hover:scale-[1.02]">
                      <video
                        className="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 bg-charcoal-800 object-cover"
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="/images/hero-video-poster.jpg"
                      >
                        <source
                          src="/videos/hero.mp4"
                          type="video/mp4"
                          media="(min-width: 768px)"
                        />
                        <source
                          src="/videos/hero-mobile.mp4"
                          type="video/mp4"
                        />
                      </video>
                    </div>
                  ) : (
                    <div className="absolute inset-0 origin-center transition-transform duration-700 group-hover:scale-[1.02]">
                      <Image
                        src="/images/hero-video-poster.jpg"
                        alt="Hero video poster"
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 55vw, 100vw"
                        loading="eager"
                        style={{
                          objectFit: "cover",
                          transform: "scale(1.04)",
                          transformOrigin: "center",
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <RevealOnScroll>
            <div className="mb-16">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-brand-gold uppercase">
                Our Expertise
              </h2>
              <div className="flex flex-col gap-3">
                <h3 className="text-4xl font-black text-white md:text-5xl">
                  Creatives in Motion
                </h3>
                <p className="max-w-xl text-lg text-brand-muted">
                  We bridge the gap between local narratives and global
                  standards, delivering cinematic excellence through every
                  frame.
                </p>
              </div>
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {expertiseCards.map((card) => (
                <div
                  key={card.id}
                  id={card.id}
                  className="brand-card group relative h-full overflow-hidden p-8"
                >
                  <div className="brand-icon-wrap mb-6 h-14 w-14">
                    <span className="material-symbols-outlined text-3xl">
                      {card.icon}
                    </span>
                  </div>
                  <h4 className="mb-4 text-2xl font-bold text-white">
                    {card.title}
                  </h4>
                  <p className="leading-relaxed text-brand-muted">{card.body}</p>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
