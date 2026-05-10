import { buildPageMetadata } from "../../lib/seo";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import RevealOnScroll from "../components/RevealOnScroll";
import {
  extractYouTubeVideoId,
  getYouTubeThumb,
  movies,
  toYouTubeWatchUrl,
} from "../../data/media";
import { FEEMPIPO_CHANNEL_URL, getPlaylistVideosPage } from "../../lib/youtube";

export const metadata = buildPageMetadata({
  title: "Movies",
  description:
    "Watch premium Nigerian and African movies from Feempipo with powerful storytelling and top production quality.",
  pathname: "/movies",
});

export const dynamic = "force-dynamic";
const FEEMPIPO_MOVIES_PLAYLIST_ID = "PL8TvvF5M4b8NvDATYmZSuHpGlxGOjKGZO";

export default async function MoviesPage() {
  const apiPage = await getPlaylistVideosPage(
    FEEMPIPO_MOVIES_PLAYLIST_ID,
    null,
    12,
  );
  const fallbackDurations = [
    "12:11",
    "09:48",
    "11:55",
    "10:29",
    "13:02",
    "08:54",
    "10:07",
    "12:36",
  ];
  const fallbackMeta = [
    "2.1M views • 2 days ago",
    "1.4M views • 6 days ago",
    "3.0M views • 1 week ago",
    "2.6M views • 2 weeks ago",
    "3.9M views • 3 weeks ago",
    "1.8M views • 1 month ago",
    "2.4M views • 1 month ago",
    "1.1M views • 2 months ago",
  ];
  const fallbackMovies = movies.slice(0, 12).map((movie, index) => ({
    id: extractYouTubeVideoId(movie.url),
    title: movie.title,
    thumbnail: getYouTubeThumb(movie.url),
    duration: fallbackDurations[index] || "10:00",
    meta: fallbackMeta[index] || `${movie.genre} • ${movie.year}`,
  }));
  const hasApiMovies =
    Array.isArray(apiPage?.episodes) && apiPage.episodes.length > 0;
  const displayedMovies = hasApiMovies ? apiPage.episodes : fallbackMovies;

  return (
    <div className="min-h-screen font-display text-slate-100">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-8 md:px-10">
        <RevealOnScroll>
        <section className="mb-12 flex flex-col gap-8 md:flex-row">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full border-2 border-[#f5cd05] bg-[#f5cd05]/20 p-1">
                <div
                  className="size-16 aspect-square rounded-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      'url("/images/feempipo-profile-image.png")',
                  }}
                />
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                  Feempipo
                </h1>
                <p className="flex items-center gap-2 text-lg font-bold text-[#f5cd05]">
                  <span className="material-symbols-outlined text-sm">
                    verified
                  </span>
                  Official Channel
                </p>
              </div>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-slate-300">
              Feempipo is a fast-rising film platform on YouTube, known for
              producing captivating, story-driven movies that stand out from
              typical online content. With over{" "}
              <span className="font-bold text-[#f5cd05]">
                285,000 subscribers
              </span>
              , the channel has built a loyal audience through powerful
              storytelling, top-tier editing, and cinematic visuals. Each
              release delivers a unique viewing experience, blending emotion,
              creativity, and high production quality that sets Feempipo apart
              from the standard YouTube movie format.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={FEEMPIPO_CHANNEL_URL}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-[#f5cd05] px-8 py-3 text-base font-bold text-[#23200f] transition-transform hover:scale-105"
              >
                <span className="material-symbols-outlined">
                  notifications_active
                </span>
                Subscribe
              </a>
              <a
                href="https://www.youtube.com/@feempipo/playlists"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#f5cd05]/30 bg-[#f5cd05]/10 px-8 py-3 text-base font-bold text-[#f5cd05] transition-all hover:bg-[#f5cd05]/20"
              >
                View Playlists
              </a>
            </div>
          </div>
        </section>
        </RevealOnScroll>

        <RevealOnScroll>
        <section id="recent-movies" className="space-y-6">
          <div className="border-b border-[#f5cd05]/10 pb-4">
            <h2 className="text-2xl font-bold text-white">Feature Films</h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {displayedMovies.map((movie) => (
              <article
                key={movie.id || movie.title}
                className="group cursor-pointer"
              >
                <a
                  href={toYouTubeWatchUrl(movie.id || "")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="relative mb-4 aspect-video overflow-hidden rounded-xl">
                    <img
                      src={movie.thumbnail}
                      alt={`${movie.title} movie thumbnail`}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <div className="flex size-14 translate-y-4 items-center justify-center rounded-full bg-[#f5cd05] transition-transform group-hover:translate-y-0">
                        <span className="material-symbols-outlined text-3xl text-[#23200f]">
                          play_arrow
                        </span>
                      </div>
                    </div>
                    <span className="absolute right-2 bottom-2 rounded bg-black/80 px-2 py-1 text-xs font-bold text-white">
                      {movie.duration || "10:00"}
                    </span>
                  </div>
                  <h3 className="line-clamp-2 font-bold text-white transition-colors group-hover:text-[#f5cd05]">
                    {movie.title}
                  </h3>
                  <p className="mt-1 text-sm text-slate-400">
                    {movie.meta || "recently uploaded"}
                  </p>
                </a>
              </article>
            ))}
          </div>
          <div className="flex justify-center py-8">
            <a
              href="https://www.youtube.com/playlist?list=PL8TvvF5M4b8NvDATYmZSuHpGlxGOjKGZO"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#f5cd05]/20 bg-[#f5cd05]/10 px-10 py-3 font-bold text-[#f5cd05] transition-all hover:bg-[#f5cd05] hover:text-[#23200f]"
            >
              More Movies on YouTube
            </a>
          </div>
        </section>
        </RevealOnScroll>

        <RevealOnScroll>
        <section className="mt-16 flex flex-col items-center justify-between gap-8 rounded-2xl bg-[#f5cd05] p-8 md:flex-row md:p-12">
          <div className="text-center md:text-left">
            <h2 className="mb-2 text-3xl font-black text-[#23200f]">
              Stay in the loop!
            </h2>
            <p className="max-w-md font-medium text-[#23200f]/80">
              Join the Feempipo community for behind-the-scenes updates and
              first access to new releases.
            </p>
          </div>
          <div>
            <a
              href="https://www.youtube.com/@feempipo/community"
              target="_blank"
              rel="noreferrer"
              className="whitespace-nowrap rounded-xl bg-[#23200f] px-8 py-4 font-bold text-[#f5cd05] transition-transform hover:scale-105"
            >
              Join Community
            </a>
          </div>
        </section>
        </RevealOnScroll>
      </main>
      <SiteFooter />
    </div>
  );
}
