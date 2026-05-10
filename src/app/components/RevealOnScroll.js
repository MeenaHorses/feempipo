"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import { subscribeScrollReveal } from "./scrollRevealBus";

/** 0 = element not yet “arriving”; 1 = settled in final position (scrubs with scroll). */
function rawScrollProgress(el) {
  const rect = el.getBoundingClientRect();
  const h = window.innerHeight || 1;
  const top = rect.top;
  // Longer band = more pixels of scroll tied to the motion (feels like riding the scroll).
  const start = h * 0.98;
  const end = h * 0.22;
  if (top >= start) return 0;
  if (top <= end) return 1;
  return (start - top) / (start - end);
}

function applyStagger(p, delayMs) {
  const s = Math.min(0.72, delayMs / 400);
  if (p <= s) return 0;
  return (p - s) / (1 - s);
}

const MAX_SHIFT_PX = 88;

/** Opacity scrubs from MIN (off-screen) to 1 — softer than the old 0.06 floor. */
const REVEAL_OPACITY_MIN = 0.72;
const REVEAL_OPACITY_RANGE = 1 - REVEAL_OPACITY_MIN;

/**
 * Scroll-scrubbed slide-up + soft opacity (no heavy “film” over content).
 * When you scroll back up, motion reverses; scrolling down again replays.
 */
export default function RevealOnScroll({ children, className = "", delayMs = 0 }) {
  const ref = useRef(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      return;
    }
    const raw = rawScrollProgress(el);
    const p = applyStagger(raw, delayMs);
    const ty = (1 - p) * MAX_SHIFT_PX;
    el.style.opacity = String(REVEAL_OPACITY_MIN + p * REVEAL_OPACITY_RANGE);
    el.style.transform = `translate3d(0, ${ty}px, 0)`;
  }, [delayMs]);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.transform = "none";
      el.style.willChange = "auto";
      return;
    }

    const update = () => {
      const raw = rawScrollProgress(el);
      const p = applyStagger(raw, delayMs);
      const ty = (1 - p) * MAX_SHIFT_PX;
      el.style.opacity = String(REVEAL_OPACITY_MIN + p * REVEAL_OPACITY_RANGE);
      el.style.transform = `translate3d(0, ${ty}px, 0)`;
    };

    el.style.willChange = "transform, opacity";
    return subscribeScrollReveal(update);
  }, [delayMs]);

  return (
    <div ref={ref} className={`transform-gpu ${className}`.trim()}>
      {children}
    </div>
  );
}
