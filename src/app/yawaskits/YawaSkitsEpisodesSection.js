"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { toYouTubeWatchUrl } from "../../data/media";

const YOUTUBE_VIDEOS_URL = "https://www.youtube.com/@yawaskits/videos";

export default function YawaSkitsEpisodesSection({
  initialEpisodes,
  initialNextPageToken,
  loadMoreEnabled,
  usedFallback
}) {
  const [episodes, setEpisodes] = useState(() => initialEpisodes ?? []);
  const [nextPageToken, setNextPageToken] = useState(initialNextPageToken);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [hydrating, setHydrating] = useState(
    () => Boolean(loadMoreEnabled && usedFallback && !initialNextPageToken)
  );

  useEffect(() => {
    if (!loadMoreEnabled || !usedFallback || initialNextPageToken) {
      setHydrating(false);
      return;
    }
    let cancelled = false;
    setHydrating(true);
    fetch("/api/yawaskits/episodes", { cache: "no-store" })
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error("fetch"))))
      .then((data) => {
        if (cancelled) return;
        if (data?.episodes?.length) setEpisodes(data.episodes);
        setNextPageToken(data?.nextPageToken ?? null);
      })
      .catch(() => {
        if (!cancelled) setNextPageToken(null);
      })
      .finally(() => {
        if (!cancelled) setHydrating(false);
      });
    return () => {
      cancelled = true;
    };
  }, [loadMoreEnabled, usedFallback, initialNextPageToken]);

  const handleLoadMore = async () => {
    if (!nextPageToken || loading || hydrating) return;
    setLoading(true);
    setError(null);
    try {
      const url = `/api/yawaskits/episodes?pageToken=${encodeURIComponent(nextPageToken)}`;
      const res = await fetch(url);
      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        setError(data.error || "Could not load more episodes.");
        return;
      }
      setEpisodes((prev) => [...prev, ...(data.episodes || [])]);
      setNextPageToken(data.nextPageToken || null);
    } catch {
      setError("Could not load more episodes.");
    } finally {
      setLoading(false);
    }
  };

  const showApiButton = loadMoreEnabled && (Boolean(nextPageToken) || hydrating);

  return (
    <section id="recent-episodes" className="space-y-6">
      <div className="flex items-center justify-between border-b border-brand-border pb-4">
        <h2 className="text-2xl font-bold text-white">Recent Episodes</h2>
        <a
          className="flex items-center gap-1 text-sm font-bold text-brand-gold hover:underline"
          href={YOUTUBE_VIDEOS_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          View All{" "}
          <span className="material-symbols-outlined text-sm" aria-hidden>chevron_right</span>
        </a>
      </div>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {(episodes ?? []).map((video, index) => (
          <article
            key={video.id ? String(video.id) : `episode-${index}`}
            className="group cursor-pointer"
          >
            <a href={toYouTubeWatchUrl(video.id)} target="_blank" rel="noopener noreferrer">
              <div className="relative mb-3 aspect-video overflow-hidden rounded-xl">
                <Image
                  src={video.thumbnail}
                  alt={`${video.title} episode thumbnail`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="flex size-14 translate-y-4 items-center justify-center rounded-full bg-brand-gold transition-transform group-hover:translate-y-0">
                    <span className="material-symbols-outlined text-3xl text-charcoal-900" aria-hidden>
                      play_arrow
                    </span>
                  </div>
                </div>
                <span className="absolute right-2 bottom-2 rounded bg-black/80 px-2 py-1 text-xs font-bold text-white">
                  {video.duration || "10:00"}
                </span>
              </div>
              <h4 className="line-clamp-2 font-bold text-white transition-colors group-hover:text-brand-gold">
                {video.title}
              </h4>
              <p className="mt-1 text-sm text-brand-muted">
                {video.meta || "1.0M views • recently"}
              </p>
            </a>
          </article>
        ))}
      </div>
      <div className="flex flex-col items-center gap-2 py-8">
        {showApiButton ? (
          <button
            type="button"
            onClick={handleLoadMore}
            disabled={loading || hydrating || !nextPageToken}
            className="rounded-full border border-brand-gold/20 bg-brand-gold/10 px-10 py-3 font-bold text-brand-gold transition-all hover:bg-brand-gold hover:text-charcoal-900 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {hydrating || loading ? "Loading…" : "Load More Episodes"}
          </button>
        ) : (
          <a
            href={YOUTUBE_VIDEOS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-brand-gold/20 bg-brand-gold/10 px-10 py-3 font-bold text-brand-gold transition-all hover:bg-brand-gold hover:text-charcoal-900"
          >
            More episodes on YouTube
          </a>
        )}
        {error ? <p className="text-sm text-red-400">{error}</p> : null}
      </div>
    </section>
  );
}
