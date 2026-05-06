"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";

export default function HomePageContent() {
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
    <div className="font-display text-slate-100 antialiased">
      <SiteHeader />

      <main>
        <section
          id="hero"
          className="relative flex min-h-[720px] items-center overflow-hidden py-12"
        >
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#23200f] via-[#23200f]/90 to-[#23200f]/40" />
            <Image
              alt="Cinematic production background"
              className="h-full w-full object-cover opacity-40"
              src="/images/hero-video-poster.jpg"
              fill
              priority
              sizes="100vw"
            />
          </div>
          <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
              <div className="w-full text-left lg:w-[45%]">
                <span className="mb-4 inline-block rounded-full bg-[#f5cd05]/20 px-4 py-1.5 text-xs font-bold tracking-wider text-[#f5cd05] uppercase md:text-sm">
                  Streaming Quality Stories
                </span>
                <h1 className="mb-4 text-4xl leading-[1.1] font-black tracking-tight text-white md:text-6xl">
                  Premium Movies, Series, and Comedy Content from{" "}
                  <span className="text-[#f5cd05]">Africa</span>
                </h1>
                <p className="mb-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
                  Feempipo is a leading multimedia production company creating
                  high-quality movies, series, documentaries, and digital
                  content for global audiences. We produce engaging stories that
                  resonate across Africa and beyond.
                </p>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="/movies"
                    className="group flex items-center justify-center gap-2 rounded-xl bg-[#f5cd05] px-7 py-3 text-base font-bold text-[#23200f] transition-all hover:scale-105"
                  >
                    <span className="material-symbols-outlined">
                      play_circle
                    </span>
                    Watch Now
                  </Link>
                  <Link
                    href="/documentaries"
                    className="flex items-center justify-center gap-2 rounded-xl border-2 border-white/20 px-7 py-3 text-base font-bold text-white transition-all hover:bg-white/10"
                  >
                    Explore Catalog
                  </Link>
                </div>
              </div>
              <div className="w-full lg:w-[55%]">
                <div
                  ref={videoContainerRef}
                  className="group relative aspect-video overflow-hidden rounded-2xl border border-white/10 bg-slate-900 shadow-2xl"
                >
                  {shouldLoadVideo ? (
                    <video
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                      <source src="/videos/hero-mobile.mp4" type="video/mp4" />
                    </video>
                  ) : (
                    <Image
                      src="/images/hero-video-poster.jpg"
                      alt="Hero video poster"
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      loading="eager"
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16">
              <h2 className="mb-4 text-sm font-bold tracking-widest text-[#f5cd05] uppercase">
                Our Expertise
              </h2>
              <div className="flex flex-col gap-3">
                <h3 className="text-4xl font-black text-white md:text-5xl">
                  Creatives in Motion
                </h3>
                <p className="max-w-xl text-lg text-slate-400">
                  We bridge the gap between local narratives and global
                  standards, delivering cinematic excellence through every
                  frame.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div
                id="storytelling"
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 transition-all hover:bg-[#f5cd05]/10"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#f5cd05]/20 text-[#f5cd05] transition-all group-hover:bg-[#f5cd05] group-hover:text-[#23200f]">
                  <span className="material-symbols-outlined text-3xl">
                    auto_stories
                  </span>
                </div>
                <h4 className="mb-4 text-2xl font-bold text-white">
                  Storytelling
                </h4>
                <p className="leading-relaxed text-slate-400">
                  High-quality narratives that capture the essence of African
                  culture. We tell stories that matter, from the heart of the
                  continent to the world.
                </p>
              </div>
              <div
                id="global-reach"
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 transition-all hover:bg-[#f5cd05]/10"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#f5cd05]/20 text-[#f5cd05] transition-all group-hover:bg-[#f5cd05] group-hover:text-[#23200f]">
                  <span className="material-symbols-outlined text-3xl">
                    public
                  </span>
                </div>
                <h4 className="mb-4 text-2xl font-bold text-white">
                  Global Reach
                </h4>
                <p className="leading-relaxed text-slate-400">
                  Connecting local talent with global audiences through digital
                  platforms. Our content travels across borders, breaking
                  cultural barriers.
                </p>
              </div>
              <div
                id="yawaskits-feature"
                className="group relative overflow-hidden rounded-2xl bg-white/5 p-8 transition-all hover:bg-[#f5cd05]/10"
              >
                <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-[#f5cd05]/20 text-[#f5cd05] transition-all group-hover:bg-[#f5cd05] group-hover:text-[#23200f]">
                  <span className="material-symbols-outlined text-3xl">
                    handshake
                  </span>
                </div>
                <h4 className="mb-4 text-2xl font-bold text-white">
                  Brand Collaborations
                </h4>
                <p className="leading-relaxed text-slate-400">
                  We collaborate with brands to craft compelling, story-driven
                  content that connects with audiences in a meaningful way.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
