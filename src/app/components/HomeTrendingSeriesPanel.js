"use client";

import Image from "next/image";
import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

function TrendingEpisodeThumb({ candidates, alt }) {
  const [index, setIndex] = useState(0);
  const safe = candidates?.length ? candidates : [];
  const src = safe[Math.min(index, safe.length - 1)];

  if (!src) return null;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      sizes="(max-width: 480px) 100vw, (max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
      quality={88}
      className="origin-center object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
      onError={() =>
        setIndex((i) => {
          const next = i + 1;
          return next < safe.length ? next : i;
        })
      }
    />
  );
}

export default function HomeTrendingSeriesPanel({ episodes, gridClass, viewAllHref }) {
  return (
    <div className="relative min-w-0 overflow-hidden rounded-2xl border border-[#f5cd05]/20 bg-gradient-to-br from-[#1a160b] via-[#23200f] to-[#0f0e08] p-5 shadow-[0_0_80px_-20px_rgba(245,205,5,0.18)] sm:rounded-3xl sm:p-8 md:p-10 lg:p-14">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-[#f5cd05]/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 size-96 rounded-full bg-[#f5cd05]/[0.04] blur-3xl"
        aria-hidden
      />

      <RevealOnScroll>
        <div>
          <div className="relative mb-8 flex min-w-0 flex-col gap-5 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="min-w-0 max-w-2xl space-y-2 sm:space-y-3">
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-tight">
                <span aria-hidden="true">🔥</span> Trending Now
              </h2>
              <p className="text-base leading-relaxed text-slate-400 sm:text-lg md:text-xl">
                The series everyone is watching this week
              </p>
            </div>
            <a
              className="group flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-[#f5cd05]/30 bg-[#f5cd05]/10 px-5 py-3 text-sm font-bold text-[#f5cd05] transition-all hover:border-[#f5cd05]/50 hover:bg-[#f5cd05]/15 sm:w-fit sm:justify-start md:text-base"
              href={viewAllHref}
              target="_blank"
              rel="noreferrer"
            >
              View All
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1">
                arrow_forward
              </span>
            </a>
          </div>

          <div className={`relative ${gridClass}`}>
            {episodes.map((ep) => (
              <article key={ep.videoId} className="min-w-0">
                <a
                  href={ep.watchUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="group block"
                >
                  <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-2xl sm:mb-5">
                    <TrendingEpisodeThumb
                      candidates={ep.thumbnailCandidates?.length ? ep.thumbnailCandidates : [ep.thumbnail]}
                      alt={ep.title}
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="flex size-[4.25rem] items-center justify-center rounded-full bg-[#f5cd05] opacity-0 shadow-lg shadow-black/40 transition-opacity duration-300 group-hover:opacity-100 md:size-[4.75rem]">
                        <span className="material-symbols-outlined text-[2.75rem] text-[#23200f] md:text-[3rem]">
                          play_arrow
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="line-clamp-3 origin-top-left px-0.5 text-xl font-bold leading-snug text-[#f5cd05] transition-transform duration-500 ease-out group-hover:scale-[1.03] md:text-2xl lg:text-[1.65rem] lg:leading-snug">
                    {ep.title}
                  </h3>
                </a>
              </article>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </div>
  );
}
