import {useState, useEffect, useRef} from "react";

/**
 * Returns [ref, isVisible]. Once the element scrolls into view it stays
 * visible (no re-hiding), which is what scroll-reveal animations want.
 */
export default function useOnScreen(rootMargin = "0px 0px -10% 0px") {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    // Fallback for very old browsers: just show it.
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {rootMargin, threshold: 0.05}
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, isVisible];
}
