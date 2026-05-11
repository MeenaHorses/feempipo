import { NextResponse } from "next/server";
import { getYawaEpisodesPage } from "../../../../lib/youtube";
import { youtubeApiYawaFetchOptions } from "../../../../lib/youtubeCache";

/**
 * Server-only: uses YOUTUBE_API_KEY. Never exposed to the browser.
 * GET ?pageToken=<optional YouTube token>
 * Uses ISR-aligned fetch cache (see youtubeCache.js) to avoid duplicate YouTube hits.
 */
export async function GET(request) {
  if (!process.env.YOUTUBE_API_KEY) {
    return NextResponse.json(
      { error: "YouTube API is not configured" },
      { status: 503 },
    );
  }

  const { searchParams } = new URL(request.url);
  const raw = searchParams.get("pageToken");
  const pageToken = raw && raw.trim() ? raw : null;

  const result = await getYawaEpisodesPage(pageToken, 8, youtubeApiYawaFetchOptions);
  if (!result) {
    return NextResponse.json(
      { error: "Failed to load episodes" },
      { status: 502 },
    );
  }

  return NextResponse.json({
    episodes: result.episodes,
    nextPageToken: result.nextPageToken,
  });
}
