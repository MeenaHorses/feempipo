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
                    backgroundImage: 'url("/images/yawaskits-channel.png")'
                  }}
                />
              </div>
              <div>
                <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
                  YawaSkits
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
              YawaSkits is Feempipo&apos;s fast-growing comedy platform on
              YouTube, delivering entertaining and relatable skits to millions
              of viewers worldwide. With over{" "}
              <span className="font-bold text-[#f5cd05]">
                1.42 million subscribers
              </span>
              , the channel has become a favorite for audiences who enjoy
              authentic African humor.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={YAWA_CHANNEL_URL}
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
                href="https://www.youtube.com/@yawaskits/playlists"
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-[#f5cd05]/30 bg-[#f5cd05]/10 px-8 py-3 text-base font-bold text-[#f5cd05] transition-all hover:bg-[#f5cd05]/20"
              >
                View Playlists
              </a>
            </div>
          </div>
          {/* <div className="md:w-72">
            <div className="flex flex-col items-center space-y-4 rounded-2xl border border-[#f5cd05]/20 bg-[#f5cd05]/5 p-6 text-center">
              <div className="rounded-full bg-[#f5cd05] p-3">
                <span className="material-symbols-outlined text-3xl text-[#23200f]">groups</span>
              </div>
              <div>
                <p className="text-sm font-medium tracking-wider text-slate-400 uppercase">Total Subscribers</p>
                <h3 className="mt-1 text-4xl font-black text-white">1.42M</h3>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-3 py-1 font-bold text-green-500">
                <span className="material-symbols-outlined text-sm">trending_up</span>
                <span>+15.4%</span>
              </div>
              <p className="text-xs text-slate-400">Growing faster than 92% of creators in the region.</p>
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
        <section className="mt-16 flex flex-col items-center justify-between gap-8 rounded-2xl bg-[#f5cd05] p-8 md:flex-row md:p-12">
          <div className="text-center md:text-left">
            <h2 className="mb-2 text-3xl font-black text-[#23200f]">
              Never miss a laugh!
            </h2>
            <p className="max-w-md font-medium text-[#23200f]/80">
              Join 50,000+ fans getting exclusive behind-the-scenes content and
              early access to new skits.
            </p>
          </div>
          <div>
            {/* <input
              className="w-full rounded-xl border-none bg-white/20 px-6 py-4 text-[#23200f] placeholder:text-[#23200f]/50 focus:ring-[#23200f] md:w-64"
              placeholder="Your email address"
              type="email"
            /> */}
            <a
              href="https://www.youtube.com/@yawaskits/community"
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
