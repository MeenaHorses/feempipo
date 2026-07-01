import Image from "next/image";
import { buildPageMetadata } from "../../lib/seo";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import RevealOnScroll from "../components/RevealOnScroll";
import { extractYouTubeVideoId, getYouTubeThumb, yawaSkits } from "../../data/media";
import { getYawaEpisodesPage, YAWA_CHANNEL_URL } from "../../lib/youtube";
import YawaSkitsEpisodesSection from "./YawaSkitsEpisodesSection";

export const metadata = buildPageMetadata({
  title: "YawaSkits",
  description:
    "Watch YawaSkits by Feempipo - relatable and entertaining African comedy episodes with millions of fans.",
  pathname: "/yawaskits",
});

/** Read YOUTUBE_API_KEY at request time (not only at build) so production env works. */
export const dynamic = "force-dynamic";

export default async function YawaSkitsPage() {
  const apiPage = await getYawaEpisodesPage(null, 8);
  const fallbackDurations = ["12:45", "08:12", "15:00", "10:33", "11:20", "09:55", "07:44", "13:12"];
  const fallbackMeta = [
    "2.1M views • 2 days ago",
    "1.8M views • 5 days ago",
    "3.4M views • 1 week ago",
    "2.7M views • 2 weeks ago",
    "4.1M views • 3 weeks ago",
    "1.5M views • 1 month ago",
    "2.2M views • 1 month ago",
    "3.0M views • 2 months ago"
  ];

  const buildFallbackEpisodes = () =>
    yawaSkits.slice(0, 8).map((video, index) => {
      const id = extractYouTubeVideoId(video.url);
      return {
        id,
        title: video.title,
        thumbnail: getYouTubeThumb(video.url),
        duration: fallbackDurations[index] || "10:00",
        meta: fallbackMeta[index] || "1.0M views • recently"
      };
    });

  const hasApiEpisodes = Array.isArray(apiPage?.episodes) && apiPage.episodes.length > 0;
  const episodes = hasApiEpisodes ? apiPage.episodes : buildFallbackEpisodes();

  /** True when key is set in env (server-only). */
  const loadMoreEnabled = Boolean(process.env.YOUTUBE_API_KEY?.trim());
  /** Static list used because API failed, returned nothing, or key missing. */
  const usedFallback = !hasApiEpisodes;
  const initialNextPageToken = hasApiEpisodes ? (apiPage.nextPageToken ?? null) : null;

  return (
    <div className="min-h-screen cinematic-page font-display text-white">
      <SiteHeader />

      <main className="mx-auto w-full max-w-[1200px] flex-1 px-4 py-8 pb-24 md:px-10">
        <RevealOnScroll>
        <section className="mb-12 flex flex-col gap-8 md:flex-row">
          <div className="flex-1 space-y-6">
            <div className="flex items-center gap-4">
              <div className="rounded-full border-2 border-brand-gold bg-brand-gold/20 p-1">
                <div className="relative size-16 overflow-hidden rounded-full">
                  <Image
                    src="/images/yawaskits-channel.webp"
                    alt=""
                    aria-hidden
                    width={64}
                    height={64}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                  YawaSkits
                </h1>
                <p className="flex items-center gap-2 text-lg font-bold text-brand-gold">
                  <span className="material-symbols-outlined text-sm" aria-hidden>
                    verified
                  </span>
                  Official Channel
                </p>
              </div>
            </div>
            <p className="max-w-2xl text-lg leading-relaxed text-brand-text">
              YawaSkits is Feempipo&apos;s fast-growing comedy platform on
              YouTube, delivering entertaining and relatable skits to millions
              of viewers worldwide. With over{" "}
              <span className="font-bold text-brand-gold">
                1.42 million subscribers
              </span>
              , the channel has become a favorite for audiences who enjoy
              authentic African humor.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <a
                href={YAWA_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-brand-gold px-8 py-3 text-base font-bold text-charcoal-900 transition-transform hover:scale-105 sm:w-auto"
              >
                <span className="material-symbols-outlined" aria-hidden>
                  notifications_active
                </span>
                Subscribe
              </a>
              <a
                href="https://www.youtube.com/@yawaskits/playlists"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center rounded-xl border border-brand-gold/30 bg-brand-gold/10 px-8 py-3 text-base font-bold text-brand-gold transition-all hover:bg-brand-gold/20 sm:w-auto"
              >
                View Playlists
              </a>
            </div>
          </div>
          {/* <div className="md:w-72">
            <div className="flex flex-col items-center space-y-4 brand-card p-6 text-center">
              <div className="rounded-full bg-brand-gold p-3">
                <span className="material-symbols-outlined text-3xl text-charcoal-900">groups</span>
              </div>
              <div>
                <p className="text-sm font-medium tracking-wider text-brand-muted uppercase">Total Subscribers</p>
                <h3 className="mt-1 text-4xl font-black text-white">1.42M</h3>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 font-bold text-green-500">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span>+15.4%</span>
              </div>
              <p className="text-xs text-brand-muted">Growing faster than 92% of creators in the region.</p>
            </div>
          </div> */}
        </section>
        </RevealOnScroll>

        <RevealOnScroll>
        <YawaSkitsEpisodesSection
          initialEpisodes={episodes}
          initialNextPageToken={initialNextPageToken}
          loadMoreEnabled={loadMoreEnabled}
          usedFallback={usedFallback}
        />
        </RevealOnScroll>

        <RevealOnScroll>
        <section className="brand-cta-banner mt-16 flex flex-col items-center justify-between gap-8 p-10 sm:p-12 md:flex-row">
          <div className="text-center md:text-left">
            <h2 className="mb-4 text-3xl font-black tracking-tight text-brand-bg sm:text-4xl">
              Never miss a laugh!
            </h2>
            <p className="max-w-md font-sans font-normal text-brand-bg/80">
              Join 50,000+ fans getting exclusive behind-the-scenes content and
              early access to new skits.
            </p>
          </div>
          <a
            href="https://www.youtube.com/@yawaskits/community"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl bg-brand-bg px-8 py-4 font-semibold tracking-tight text-brand-gold transition-transform hover:scale-105 active:scale-95"
          >
            Join Community
          </a>
        </section>
        </RevealOnScroll>
      </main>

      <SiteFooter />
    </div>
  );
}
