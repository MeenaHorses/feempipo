import {
  youtubeApiMoviesFetchOptions,
  youtubeApiSeriesFetchOptions,
  youtubeApiYawaFetchOptions,
} from "./youtubeCache";

const YAWA_CHANNEL_ID = "UCakrXQVjsmclKHmnCIqlFMg";
const YAWA_HANDLE = "@yawaskits";
const FEEMPIPO_HANDLE = "@feempipo";

const formatViews = (views) => {
  const count = Number(views || 0);
  return `${new Intl.NumberFormat("en", { notation: "compact", maximumFractionDigits: 1 }).format(count)} views`;
};

const formatAge = (publishedAt) => {
  const now = Date.now();
  const then = new Date(publishedAt).getTime();
  if (!Number.isFinite(then)) return "recently";
  const diffDays = Math.max(
    1,
    Math.floor((now - then) / (1000 * 60 * 60 * 24)),
  );
  if (diffDays < 7) return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
  if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return `${weeks} week${weeks === 1 ? "" : "s"} ago`;
  }
  if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return `${months} month${months === 1 ? "" : "s"} ago`;
  }
  const years = Math.floor(diffDays / 365);
  return `${years} year${years === 1 ? "" : "s"} ago`;
};

const isoDurationToClock = (isoDuration) => {
  const h = Number((isoDuration.match(/(\d+)H/) || [])[1] || 0);
  const m = Number((isoDuration.match(/(\d+)M/) || [])[1] || 0);
  const s = Number((isoDuration.match(/(\d+)S/) || [])[1] || 0);
  if (h > 0) {
    return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
  }
  return `${m}:${String(s).padStart(2, "0")}`;
};

const getApiKey = () => process.env.YOUTUBE_API_KEY?.trim();
const normalizeHandle = (handle) => (handle || "").replace(/^@/, "");

const toYouTubePlaylistUrl = (playlistId) =>
  `https://www.youtube.com/playlist?list=${playlistId}`;

const fetchJson = async (url, fetchOptions) => {
  const response = await fetch(url, fetchOptions);
  if (!response.ok) return null;
  return response.json();
};

async function resolveChannelId(handle, fallbackChannelId, fetchOptions) {
  if (fallbackChannelId) return fallbackChannelId;
  const apiKey = getApiKey();
  if (!apiKey || !handle) return null;
  const clean = normalizeHandle(handle);
  if (!clean) return null;
  const url = `https://www.googleapis.com/youtube/v3/channels?part=id&forHandle=${encodeURIComponent(clean)}&key=${apiKey}`;
  const data = await fetchJson(url, fetchOptions);
  return data?.items?.[0]?.id || null;
}

async function resolveUploadsPlaylistId(channelId, fetchOptions) {
  const apiKey = getApiKey();
  if (!apiKey || !channelId) return null;
  const channelsUrl = `https://www.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${apiKey}`;
  const channelsData = await fetchJson(channelsUrl, fetchOptions);
  return (
    channelsData?.items?.[0]?.contentDetails?.relatedPlaylists?.uploads || null
  );
}

async function fetchVideosByIds(videoIds, fetchOptions) {
  const apiKey = getApiKey();
  if (!apiKey || !videoIds.length) return null;
  const videosUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics,contentDetails&id=${videoIds.join(",")}&key=${apiKey}`;
  const videosData = await fetchJson(videosUrl, fetchOptions);
  if (!videosData?.items?.length) return null;
  return Object.fromEntries(videosData.items.map((item) => [item.id, item]));
}

async function fetchRecentVideosPageByUploadsPlaylist(
  uploadsPlaylistId,
  pageToken,
  limit,
  fetchOptions,
  titleFallback,
) {
  const apiKey = getApiKey();
  if (!apiKey || !uploadsPlaylistId) return null;
  const maxResults = Math.min(Math.max(1, limit), 50);
  let playlistUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${uploadsPlaylistId}&maxResults=${maxResults}&key=${apiKey}`;
  if (pageToken) {
    playlistUrl += `&pageToken=${encodeURIComponent(pageToken)}`;
  }
  const playlistData = await fetchJson(playlistUrl, fetchOptions);
  if (!playlistData) return null;

  const items = playlistData?.items || [];
  const nextPageToken = playlistData?.nextPageToken || null;
  const videoIds = items
    .map((item) => item?.snippet?.resourceId?.videoId)
    .filter(Boolean);
  if (!videoIds.length) return null;

  const byId = await fetchVideosByIds(videoIds, fetchOptions);
  if (!byId) return null;

  const episodes = videoIds.map((id) => {
    const video = byId[id];
    const snippet = video?.snippet || {};
    const stats = video?.statistics || {};
    const content = video?.contentDetails || {};
    return {
      id,
      title: snippet.title || titleFallback,
      thumbnail:
        snippet?.thumbnails?.maxres?.url ||
        snippet?.thumbnails?.standard?.url ||
        snippet?.thumbnails?.high?.url ||
        `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
      duration: isoDurationToClock(content.duration || "PT0M0S"),
      meta: `${formatViews(stats.viewCount)} • ${formatAge(snippet.publishedAt)}`,
    };
  });
  const validEpisodes = episodes.filter((episode) => {
    const title = (episode.title || "").toLowerCase().trim();
    const badTitle =
      !title ||
      title === "video" ||
      title === "private video" ||
      title === "deleted video";
    const badThumb =
      !episode.thumbnail ||
      episode.thumbnail.includes("yt3.ggpht.com/") ||
      episode.thumbnail.includes("hqdefault.jpg") && episode.duration === "0:00";
    return !badTitle && !badThumb;
  });

  if (!validEpisodes.length) return null;
  return { episodes: validEpisodes, nextPageToken };
}

export async function getChannelRecentVideosPage({
  handle,
  channelId = null,
  pageToken = null,
  limit = 8,
  fetchOptions = youtubeApiYawaFetchOptions,
  titleFallback = "Video",
}) {
  if (!getApiKey()) return null;
  const resolvedChannelId = await resolveChannelId(
    handle,
    channelId,
    fetchOptions,
  );
  if (!resolvedChannelId) return null;
  const uploadsPlaylistId = await resolveUploadsPlaylistId(
    resolvedChannelId,
    fetchOptions,
  );
  if (!uploadsPlaylistId) return null;
  return fetchRecentVideosPageByUploadsPlaylist(
    uploadsPlaylistId,
    pageToken,
    limit,
    fetchOptions,
    titleFallback,
  );
}

/**
 * Fetches a page of uploads from the YawaSkits channel. Uses YOUTUBE_API_KEY (server-only).
 * @param {string | null} pageToken - YouTube playlistItems nextPageToken, or null for first page
 * @param {number} limit - maxResults per page (max 50 per YouTube API)
 * @param {RequestInit} fetchOptions - defaults to ISR cache via {@link ./youtubeCache.js}
 * @returns {Promise<{ episodes: object[], nextPageToken: string | null } | null>}
 */
export async function getYawaEpisodesPage(
  pageToken = null,
  limit = 8,
  fetchOptions = youtubeApiYawaFetchOptions,
) {
  return getChannelRecentVideosPage({
    handle: YAWA_HANDLE,
    channelId: YAWA_CHANNEL_ID,
    pageToken,
    limit,
    fetchOptions,
    titleFallback: "YawaSkits Episode",
  });
}

export async function getFeempipoMoviesPage(
  limit = 12,
  fetchOptions = youtubeApiMoviesFetchOptions,
) {
  return getChannelRecentVideosPage({
    handle: FEEMPIPO_HANDLE,
    pageToken: null,
    limit,
    fetchOptions,
    titleFallback: "Feempipo Movie",
  });
}

export async function getPlaylistVideosPage(
  playlistId,
  pageToken = null,
  limit = 12,
  fetchOptions = youtubeApiMoviesFetchOptions,
  titleFallback = "Video",
) {
  return fetchRecentVideosPageByUploadsPlaylist(
    playlistId,
    pageToken,
    limit,
    fetchOptions,
    titleFallback,
  );
}

export async function getChannelPlaylists({
  handle,
  channelId = null,
  limit = 25,
  fetchOptions = youtubeApiSeriesFetchOptions,
}) {
  const apiKey = getApiKey();
  if (!apiKey) return null;
  const resolvedChannelId = await resolveChannelId(
    handle,
    channelId,
    fetchOptions,
  );
  if (!resolvedChannelId) return null;
  const maxResults = Math.min(Math.max(1, limit), 50);
  const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&channelId=${resolvedChannelId}&maxResults=${maxResults}&key=${apiKey}`;
  const data = await fetchJson(url, fetchOptions);
  if (!data?.items?.length) return null;

  return data.items.map((item) => ({
    id: item.id,
    title: item?.snippet?.title || "Playlist",
    thumbnail:
      item?.snippet?.thumbnails?.maxres?.url ||
      item?.snippet?.thumbnails?.standard?.url ||
      item?.snippet?.thumbnails?.high?.url ||
      "",
    itemCount: Number(item?.contentDetails?.itemCount || 0),
    publishedAt: item?.snippet?.publishedAt || "",
    url: toYouTubePlaylistUrl(item.id),
  }));
}

export async function getPlaylistsByIds(
  ids = [],
  fetchOptions = youtubeApiSeriesFetchOptions,
) {
  const apiKey = getApiKey();
  if (!apiKey || !ids.length) return null;
  const cleaned = Array.from(new Set(ids.filter(Boolean)));
  if (!cleaned.length) return null;
  const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet,contentDetails&id=${cleaned.join(",")}&maxResults=${Math.min(cleaned.length, 50)}&key=${apiKey}`;
  const data = await fetchJson(url, fetchOptions);
  if (!data?.items?.length) return null;
  const byId = Object.fromEntries(
    data.items.map((item) => [
      item.id,
      {
        id: item.id,
        title: item?.snippet?.title || "Playlist",
        thumbnail:
          item?.snippet?.thumbnails?.maxres?.url ||
          item?.snippet?.thumbnails?.standard?.url ||
          item?.snippet?.thumbnails?.high?.url ||
          "",
        itemCount: Number(item?.contentDetails?.itemCount || 0),
        publishedAt: item?.snippet?.publishedAt || "",
        url: toYouTubePlaylistUrl(item.id),
      },
    ]),
  );
  return cleaned.map((id) => byId[id]).filter(Boolean);
}

const scoreSeriesPlaylist = (title) => {
  const t = title.toLowerCase();
  if (t.includes("new girl") && t.includes("season 1")) return 100;
  if (t.includes("new girl") && t.includes("season 2")) return 99;
  if (t.includes("new girl") && t.includes("season 3")) return 98;
  if (t.includes("officer rambo")) return 97;
  if (t.includes("three broke friends") && t.includes("season 1")) return 96;
  if (t.includes("three broke friends") && t.includes("season 2")) return 95;
  if (t.includes("three broke friends") && t.includes("season 3")) return 94;
  if (t.includes("three broke friends")) return 93;
  if (t.includes("finding mrs kali")) return 92;
  if (t.includes("tangle")) return 91;
  if (t.includes("season")) return 70;
  if (t.includes("series")) return 60;
  return 0;
};

export async function getYawaSeriesPlaylists(
  limit = 30,
  fetchOptions = youtubeApiSeriesFetchOptions,
) {
  const playlists = await getChannelPlaylists({
    handle: YAWA_HANDLE,
    channelId: YAWA_CHANNEL_ID,
    limit,
    fetchOptions,
  });
  if (!playlists?.length) return null;

  const mapped = playlists
    .map((playlist) => ({
      ...playlist,
      score: scoreSeriesPlaylist(playlist.title),
    }))
    .filter((playlist) => playlist.score > 0)
    .sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    });

  return mapped.map(({ score, ...playlist }) => playlist);
}

export const YAWA_CHANNEL_URL = "https://www.youtube.com/@yawaskits";
export const FEEMPIPO_CHANNEL_URL = "https://www.youtube.com/@feempipo";
