import { useEffect, useRef, useState, type RefObject } from "react";

export interface ScrollPosition {
  isScrolled: boolean;
  showBackToTop: boolean;
  navSentinelRef: RefObject<HTMLDivElement | null>;
  backToTopSentinelRef: RefObject<HTMLDivElement | null>;
}

function useCrossedSentinel(): [RefObject<HTMLDivElement | null>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
  const [crossed, setCrossed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setCrossed(!entry.isIntersecting && entry.boundingClientRect.top < 0);
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, crossed];
}

/** Tracks two document-position thresholds via IntersectionObserver sentinels
 * instead of a raw scroll listener (avoids re-rendering on every scroll frame). */
export function useScrollPosition(): ScrollPosition {
  const [navSentinelRef, isScrolled] = useCrossedSentinel();
  const [backToTopSentinelRef, showBackToTop] = useCrossedSentinel();

  return { isScrolled, showBackToTop, navSentinelRef, backToTopSentinelRef };
}
