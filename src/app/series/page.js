import { buildPageMetadata } from "../../lib/seo";
import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import RevealOnScroll from "../components/RevealOnScroll";
import { getYouTubeThumb, series, toYouTubeWatchUrl } from "../../data/media";
import { getPlaylistsByIds, getYawaSeriesPlaylists } from "../../lib/youtube";

export const metadata = buildPageMetadata({
  title: "Series",
  description:
    "Binge quality Feempipo series with compelling storylines, strong characters, and cinematic African production.",
  pathname: "/series",
});

export const dynamic = "force-dynamic";

const FALLBACK_PLAYLISTS = [
  "The New Girl (Season 1)",
  "The New Girl (Season 2)",
  "The New Girl (Season 3)",
  "Officer Rambo",
  "Three Broke Friends",
  "The Ultimate Rivalry"
];

const normalizeTitle = (title) => title.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
const contains = (title, phrase) =>
  normalizeTitle(title).includes(normalizeTitle(phrase));

const REQUIRED_PLAYLIST_IDS = [
  "PL8TvvF5M4b8OFkOvMT_4uVZfTotH2Blzy", // Officer Rambo (Season1)
  "PL8TvvF5M4b8MQoZkHMvVB9tjkT8hRib-6", // 3 Broke Friends
  "PLV9fW5vCMaNLqj-Y-hkh2eSjUc1m4e2pR" // Kalistus and Son
];

const dedupePlaylists = (playlists) => {
  const seen = new Set();
  return playlists.filter((playlist) => {
    const key = normalizeTitle(playlist.title);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
};

export default async function SeriesPage() {
  const apiPlaylists = await getYawaSeriesPlaylists(40);
  const hasApi = Array.isArray(apiPlaylists) && apiPlaylists.length > 0;
  const requiredPlaylists = await getPlaylistsByIds(REQUIRED_PLAYLIST_IDS);

  const fallbackPlaylists = dedupePlaylists(
    series
      .filter((item) =>
        FALLBACK_PLAYLISTS.some((target) => normalizeTitle(item.title).includes(normalizeTitle(target)))
      )
      .map((item, index) => ({
        id: `fallback-${index}`,
        title: item.title,
        thumbnail: getYouTubeThumb(item.url),
        itemCount: Number((item.episodes.match(/\d+/) || [0])[0]),
        url: toYouTubeWatchUrl(item.url)
      }))
  );

  const removeDuplicateNewGirlS2 = (playlist) =>
    normalizeTitle(playlist.title) !== normalizeTitle("THE NEW GIRL (Season 2)");

  const apiWithoutDuplicate = (apiPlaylists || []).filter(removeDuplicateNewGirlS2);
  const season1 = apiWithoutDuplicate.find((p) =>
    contains(p.title, "THE NEW GIRL SERIES (Season 1)")
  );
  const season2 = apiWithoutDuplicate.find((p) =>
    contains(p.title, "The New Girl (Season 2, YawaSkits Series)")
  );

  const requiredByTitle = Object.fromEntries(
    (requiredPlaylists || []).map((p) => [normalizeTitle(p.title), p]),
  );

  const officer =
    requiredByTitle[normalizeTitle("OFFICER RAMBO (Season1)")] ||
    (requiredPlaylists || []).find((p) => contains(p.title, "officer rambo"));
  const brokeFriends =
    requiredByTitle[normalizeTitle("3 Broke Friends")] ||
    (requiredPlaylists || []).find((p) => contains(p.title, "broke friends"));
  const kalistus =
    requiredByTitle[normalizeTitle("KALISTUS AND SON")] ||
    (requiredPlaylists || []).find((p) => contains(p.title, "kalistus"));

  const prioritized = [season1, season2, officer, brokeFriends, kalistus].filter(Boolean);
  const usedIds = new Set(prioritized.map((p) => p.id));
  const remaining =
    hasApi
      ? apiWithoutDuplicate.filter((p) => !usedIds.has(p.id))
      : fallbackPlaylists;
  const playlists = dedupePlaylists([...prioritized, ...remaining]);

  return (
    <div className="min-h-screen cinematic-page font-display text-white">
      <SiteHeader />
      <main className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <RevealOnScroll>
        <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl">
          Series
        </h1>
        <h2 className="mt-4 max-w-5xl text-lg font-bold text-brand-gold">
          Compelling storytelling and cinematic productions.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-brand-text">
          Feempipo produces engaging and high-quality series designed to keep
          audiences coming back for more. Our series combine compelling
          storylines, strong character development, and cinematic production to
          deliver unforgettable viewing experiences.
        </p>
        </RevealOnScroll>
        <RevealOnScroll>
        <section className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {playlists.map((playlist) => (
            <article key={playlist.id || playlist.title} className="group cursor-pointer">
              <a
                href={playlist.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className="relative mb-3 aspect-video">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 rounded-xl bg-gold-glow/50" />
                  <div className="absolute inset-0 translate-x-1 translate-y-1 rounded-xl bg-gold-glow/30" />
                  <div className="absolute inset-0 overflow-hidden rounded-xl border border-brand-border">
                  <img
                    src={playlist.thumbnail}
                    alt={`${playlist.title} series playlist thumbnail`}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                    <div className="flex size-14 items-center justify-center rounded-full bg-brand-gold">
                      <span className="material-symbols-outlined text-3xl text-charcoal-900">
                        play_arrow
                      </span>
                    </div>
                  </div>
                  </div>
                </div>
                <h2 className="line-clamp-2 font-bold text-white transition-colors group-hover:text-brand-gold">
                  {playlist.title}
                </h2>
                <p className="mt-1 text-sm text-brand-muted">
                  {playlist.itemCount > 0 ? `${playlist.itemCount} episodes` : "View full playlist"}
                </p>
              </a>
            </article>
          ))}
        </section>
        </RevealOnScroll>
      </main>
      <SiteFooter />
    </div>
  );
}
