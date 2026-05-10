import {
  getFeempipoTrendingEpisodes,
  getFeempipoYdrPlaylistWatchUrl,
} from "../../lib/feempipoTrendingRss";
import HomeTrendingSeriesPanel from "./HomeTrendingSeriesPanel";

export default async function HomeTrendingSeries() {
  const episodes = await getFeempipoTrendingEpisodes({ limit: 3 });
  if (!episodes.length) return null;

  const viewAllHref = getFeempipoYdrPlaylistWatchUrl();
  const count = episodes.length;

  const gridClass =
    count <= 1
      ? "grid grid-cols-1 gap-6 sm:gap-8 lg:mx-auto lg:max-w-4xl lg:gap-10"
      : count === 2
        ? "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 lg:gap-12"
        : "grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3 lg:gap-10";

  return (
    <section className="overflow-hidden px-3 py-12 sm:px-6 sm:py-20 md:py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <HomeTrendingSeriesPanel
          episodes={episodes}
          gridClass={gridClass}
          viewAllHref={viewAllHref}
        />
      </div>
    </section>
  );
}
