import { useEffect, useState } from "react";

export interface ScrollPosition {
  isScrolled: boolean;
  showBackToTop: boolean;
}

export function useScrollPosition(): ScrollPosition {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        ticking = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return { isScrolled: scrollY > 40, showBackToTop: scrollY > 600 };
}
