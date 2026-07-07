/**
 * Full-route loading UI (brand colors). Used by route-level loading.js for async pages.
 */
export default function Loader() {
  return (
    <div
      className="flex min-h-[min(100dvh,100vh)] items-center justify-center bg-charcoal-800/95 backdrop-blur-[2px]"
      role="status"
      aria-live="polite"
      aria-label="Loading page"
    >
      <span className="sr-only">Loading…</span>

      <div className="relative h-14 w-14">
        <div
          className="absolute inset-0 rounded-full border-4 border-brand-gold/25 border-t-[#f6a60b] animate-spin"
          aria-hidden
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="h-2 w-2 animate-ping rounded-full bg-brand-gold"
            aria-hidden
          />
        </div>
      </div>
    </div>
  );
}
