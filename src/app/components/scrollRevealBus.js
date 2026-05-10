/** Single passive scroll/resize + one rAF frame for all scroll-linked reveals. */

const subscribers = new Set();
let rafId = 0;
let attached = false;

function flush() {
  rafId = 0;
  subscribers.forEach((fn) => {
    try {
      fn();
    } catch {
      /* ignore */
    }
  });
}

function schedule() {
  if (typeof window === "undefined" || rafId) return;
  rafId = window.requestAnimationFrame(flush);
}

function attach() {
  if (attached || typeof window === "undefined") return;
  window.addEventListener("scroll", schedule, { passive: true });
  window.addEventListener("resize", schedule, { passive: true });
  attached = true;
}

function detachIfIdle() {
  if (subscribers.size > 0 || !attached || typeof window === "undefined") return;
  window.removeEventListener("scroll", schedule);
  window.removeEventListener("resize", schedule);
  attached = false;
}

export function subscribeScrollReveal(fn) {
  subscribers.add(fn);
  attach();
  queueMicrotask(() => {
    fn();
    schedule();
  });
  return () => {
    subscribers.delete(fn);
    detachIfIdle();
  };
}
