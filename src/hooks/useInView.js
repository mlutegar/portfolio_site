import {useState, useEffect, useRef} from "react";

/**
 * Returns [ref, inView]. Unlike useOnScreen, this toggles BOTH ways: `inView`
 * becomes false again once the element scrolls out of view. Useful to pause
 * infinite CSS animations while off-screen (saves battery/CPU on mobile and
 * avoids lingering GPU compositing layers).
 */
export default function useInView(rootMargin = "0px") {
  const ref = useRef(null);
  const [inView, setInView] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      {rootMargin, threshold: 0}
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [rootMargin]);

  return [ref, inView];
}
