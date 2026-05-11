import { revalidatePath, revalidateTag } from "next/cache";
import { NextResponse } from "next/server";
import { YOUTUBE_CACHE_TAGS } from "../../../lib/youtubeCache";

/**
 * Clears Next.js Data Cache for all YouTube-tagged fetches (RSS + API).
 * Call once after a new upload so lists refresh without waiting for revalidate.
 *
 * POST (or GET) with secret — pick one:
 * - Header: Authorization: Bearer <REVALIDATE_SECRET>
 * - Header: x-revalidate-secret: <REVALIDATE_SECRET>
 * - Query: ?secret=<REVALIDATE_SECRET>
 *
 * Set REVALIDATE_SECRET in .env.local (server-only). No cron / polling required.
 */
function unauthorized() {
  return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
}

function getSecret(request) {
  const auth = request.headers.get("authorization");
  if (auth?.startsWith("Bearer ")) return auth.slice(7).trim();
  const header = request.headers.get("x-revalidate-secret");
  if (header?.trim()) return header.trim();
  return new URL(request.url).searchParams.get("secret")?.trim() || "";
}

export async function POST(request) {
  const expected = process.env.REVALIDATE_SECRET?.trim();
  if (!expected) {
    return NextResponse.json(
      { ok: false, error: "REVALIDATE_SECRET is not configured" },
      { status: 503 },
    );
  }
  if (getSecret(request) !== expected) return unauthorized();

  for (const tag of YOUTUBE_CACHE_TAGS) {
    revalidateTag(tag);
  }
  revalidatePath("/");
  revalidatePath("/movies");
  revalidatePath("/series");
  revalidatePath("/yawaskits");

  return NextResponse.json({
    ok: true,
    revalidatedTags: [...YOUTUBE_CACHE_TAGS],
    revalidatedPaths: ["/", "/movies", "/series", "/yawaskits"],
  });
}

export async function GET(request) {
  return POST(request);
}
