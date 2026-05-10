const FEEMPIPO_YDR_PLAYLIST_ID = "PL8TvvF5M4b8MgURrUL5RhTtXgIEMUqokq";
const RSS_URL = `https://www.youtube.com/feeds/videos.xml?playlist_id=${FEEMPIPO_YDR_PLAYLIST_ID}`;

const defaultFetchOptions = { next: { revalidate: 1800 } };

/** Prefer i.ytimg.com — matches YouTube CDN; order: max → SD (16:9) → HQ. */
function getYouTubePosterCandidates(videoId) {
  const id = String(videoId || "").trim();
  if (!id) return [];
  const base = `https://i.ytimg.com/vi/${id}`;
  return [`${base}/maxresdefault.jpg`, `${base}/sddefault.jpg`, `${base}/hqdefault.jpg`];
}

/** Oldest first (Episode 1 before Episode 2). Used if RSS fetch fails. */
const FALLBACK_EPISODES_RAW = [
  {
    videoId: "m6G6wDJ3-7A",
    title: "YOUNG, DUMB AND RECKLESS (Episode 1)",
  },
  {
    videoId: "-ZfunTKgTZY",
    title: "YOUNG, DUMB AND RECKLESS (Episode 2)",
  },
];

function withWatchUrl(episodes) {
  return episodes.map((e) => {
    const candidates = getYouTubePosterCandidates(e.videoId);
    return {
      ...e,
      thumbnail: candidates[0] || e.thumbnail,
      thumbnailCandidates: candidates.length ? candidates : e.thumbnail ? [e.thumbnail] : [],
      watchUrl: `https://www.youtube.com/watch?v=${e.videoId}&list=${FEEMPIPO_YDR_PLAYLIST_ID}`,
    };
  });
}

/**
 * Fetches "Young, Dumb and Reckless" playlist entries via public RSS (no API key).
 * Sorted oldest-first so Episode 1 appears before Episode 2.
 */
export async function getFeempipoTrendingEpisodes({ limit = 4, fetchOptions = defaultFetchOptions } = {}) {
  let xml;
  try {
    const res = await fetch(RSS_URL, fetchOptions);
    if (!res.ok) {
      return withWatchUrl(FALLBACK_EPISODES_RAW).slice(0, limit);
    }
    xml = await res.text();
  } catch {
    return withWatchUrl(FALLBACK_EPISODES_RAW).slice(0, limit);
  }

  const entryRegex = /<entry>([\s\S]*?)<\/entry>/g;
  const episodes = [];
  let m;
  while ((m = entryRegex.exec(xml)) !== null) {
    const block = m[1];
    const videoId = block.match(/<yt:videoId>([^<]+)<\/yt:videoId>/)?.[1]?.trim();
    const title = block.match(/<title>([^<]+)<\/title>/)?.[1]?.trim();
    const published = block.match(/<published>([^<]+)<\/published>/)?.[1]?.trim();
    if (videoId && title) {
      episodes.push({
        videoId,
        title,
        publishedAt: published || "",
      });
    }
  }

  episodes.sort((a, b) => {
    const ta = Date.parse(a.publishedAt) || 0;
    const tb = Date.parse(b.publishedAt) || 0;
    return ta - tb;
  });

  const sliced = episodes.slice(0, Math.min(Math.max(1, limit), 50));
  if (sliced.length) return withWatchUrl(sliced);

  return withWatchUrl(FALLBACK_EPISODES_RAW).slice(0, limit);
}


export function getFeempipoYdrPlaylistWatchUrl() {
  return `https://www.youtube.com/watch?v=-ZfunTKgTZY&list=${FEEMPIPO_YDR_PLAYLIST_ID}`;
}

export { FEEMPIPO_YDR_PLAYLIST_ID };
