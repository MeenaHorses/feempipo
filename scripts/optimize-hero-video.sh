#!/usr/bin/env bash
# Build hero.mp4 (desktop) + hero-mobile.mp4 + poster from public/videos/hero.mp4
# Desktop: max 1280px wide, CRF 22, target ~15–20 MB
# Mobile:  max 896px wide, CRF 24, AAC 64k, target ~5–8 MB
# Requires: ffmpeg (brew install ffmpeg)
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="${ROOT}/public/videos/hero.mp4"
DESK="${ROOT}/public/videos/hero.desktop.tmp.mp4"
MOB="${ROOT}/public/videos/hero-mobile.mp4"
POSTER="${ROOT}/public/images/hero-video-poster.jpg"

if [[ ! -f "$SRC" ]]; then
  echo "Missing $SRC — place your source MP4 there first."
  exit 1
fi

echo "→ Desktop: max 1280px, CRF 22, AAC 128k, faststart → hero.desktop.tmp.mp4"
ffmpeg -y -i "$SRC" \
  -vf "scale='min(1280,iw)':-2" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -crf 22 -preset slow \
  -c:a aac -b:a 128k \
  -movflags +faststart \
  "$DESK"

echo "→ Mobile: max 896px, CRF 24, AAC 64k, faststart → hero-mobile.mp4"
ffmpeg -y -i "$SRC" \
  -vf "scale='min(896,iw)':-2" \
  -c:v libx264 -profile:v high -pix_fmt yuv420p \
  -crf 24 -preset slow \
  -c:a aac -b:a 64k \
  -movflags +faststart \
  "$MOB"

echo "→ Poster @0.25s from desktop encode"
ffmpeg -y -ss 00:00:00.25 -i "$DESK" -vframes 1 -vf "scale='min(1280,iw)':-2" -q:v 2 "$POSTER"

mv "$DESK" "$SRC"
echo "Done."
echo "  $SRC (desktop)"
echo "  $MOB (mobile)"
echo "  $POSTER"
