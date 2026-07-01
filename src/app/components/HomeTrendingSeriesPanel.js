"use client";

import Image from "next/image";
import { useState } from "react";
import RevealOnScroll from "./RevealOnScroll";

function formatEpisodeTitle(title) {
  return String(title || "")
    .toLowerCase()
    .replace(/(?:^|\s|[([{"'])\S/g, (char) => char.toUpperCase());
}

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
      loading="lazy"
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
    <div className="brand-panel relative min-w-0 overflow-hidden rounded-2xl p-5 sm:rounded-3xl sm:p-8 md:p-10 lg:p-14">
      <div
        className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-brand-gold/6 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-32 -left-16 size-96 rounded-full bg-brand-gold/4 blur-3xl"
        aria-hidden
      />

      <RevealOnScroll>
        <div>
          <div className="relative mb-8 flex min-w-0 flex-col gap-5 sm:mb-12 lg:mb-14 lg:flex-row lg:items-end lg:justify-between lg:gap-8">
            <div className="min-w-0 max-w-2xl space-y-2 sm:space-y-3">
              <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl lg:text-[2.75rem] lg:leading-tight">
                <span aria-hidden="true">🔥</span> Trending Now
              </h2>
              <p className="text-base leading-relaxed text-brand-muted sm:text-lg md:text-xl">
                The series everyone is watching this week
              </p>
            </div>
            <a
              className="group hidden shrink-0 items-center gap-2 rounded-xl border border-brand-gold/30 bg-brand-gold/10 px-5 py-3 text-sm font-bold text-brand-gold transition-all hover:border-brand-gold/50 hover:bg-brand-gold/15 lg:flex lg:w-fit lg:justify-start md:text-base"
              href={viewAllHref}
              target="_blank"
              rel="noopener noreferrer"
            >
              View All
              <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1" aria-hidden>
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
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-2xl sm:mb-5">
                    <TrendingEpisodeThumb
                      candidates={ep.thumbnailCandidates?.length ? ep.thumbnailCandidates : [ep.thumbnail]}
                      alt={ep.title}
                    />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
                      <div className="flex size-[4.25rem] items-center justify-center rounded-full bg-brand-gold opacity-0 shadow-lg shadow-black/40 transition-opacity duration-300 group-hover:opacity-100 md:size-[4.75rem]">
                        <span className="material-symbols-outlined text-[2.75rem] text-charcoal-900 md:text-[3rem]" aria-hidden>
                          play_arrow
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="line-clamp-3 font-display text-base font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover:text-brand-gold md:text-lg">
                    {formatEpisodeTitle(ep.title)}
                  </h3>
                </a>
              </article>
            ))}
          </div>

          <a
            className="group mt-8 flex w-full shrink-0 items-center justify-center gap-2 rounded-xl border border-brand-gold/30 bg-brand-gold/10 px-5 py-3 text-sm font-bold text-brand-gold transition-all hover:border-brand-gold/50 hover:bg-brand-gold/15 lg:hidden md:text-base"
            href={viewAllHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            View All
            <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1" aria-hidden>
              arrow_forward
            </span>
          </a>
        </div>
      </RevealOnScroll>
    </div>
  );
}
