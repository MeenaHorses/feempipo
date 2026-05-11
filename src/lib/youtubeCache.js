/**
 * Next.js Data Cache for YouTube RSS + Data API.
 *
 * YouTube does not notify this site when a video goes live without extra setup
 * (webhooks / PubSub). So we use long time-based revalidate that matches how
 * often each surface changes, plus optional on-demand revalidation (see
 * `/api/revalidate-youtube`) after you upload — no background polling.
 *
 * Video links on the site are plain youtube.com URLs; they always open in
 * YouTube regardless of our server cache.
 */

/** Young, Dumb and Reckless RSS — often ~2×/week. */
export const YOUTUBE_RSS_REVALIDATE_SECONDS = 172800; // 48h

/** Feempipo movies playlist — new uploads are rare. */
export const YOUTUBE_API_MOVIES_REVALIDATE_SECONDS = 1209600; // 14d

/** YawaSkits uploads — often ~weekly. */
export const YOUTUBE_API_YAWA_REVALIDATE_SECONDS = 604800; // 7d

/** Series / playlist catalogue — changes slowly. */
export const YOUTUBE_API_SERIES_REVALIDATE_SECONDS = 604800; // 7d

/** Keep in sync with `export const revalidate` in `src/app/page.js`. */
export const HOME_PAGE_REVALIDATE_SECONDS = YOUTUBE_RSS_REVALIDATE_SECONDS;

/** All cache tags invalidated by `/api/revalidate-youtube`. */
export const YOUTUBE_CACHE_TAGS = [
  "youtube-rss-ydr",
  "youtube-movies",
  "youtube-yawa",
  "youtube-series",
];

export const youtubeRssFetchOptions = {
  next: {
    revalidate: YOUTUBE_RSS_REVALIDATE_SECONDS,
    tags: ["youtube-rss-ydr"],
  },
};

export const youtubeApiMoviesFetchOptions = {
  next: {
    revalidate: YOUTUBE_API_MOVIES_REVALIDATE_SECONDS,
    tags: ["youtube-movies"],
  },
};

export const youtubeApiYawaFetchOptions = {
  next: {
    revalidate: YOUTUBE_API_YAWA_REVALIDATE_SECONDS,
    tags: ["youtube-yawa"],
  },
};

export const youtubeApiSeriesFetchOptions = {
  next: {
    revalidate: YOUTUBE_API_SERIES_REVALIDATE_SECONDS,
    tags: ["youtube-series"],
  },
};
