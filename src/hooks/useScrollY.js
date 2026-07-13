import {useEffect, useState} from "react";

/**
 * Hook compartilhado de posição de scroll vertical.
 * Usa um único listener `passive` com throttle via requestAnimationFrame,
 * evitando múltiplos listeners espalhados (Header, ScrollProgress, Top...).
 */
export function useScrollY() {
  const [scrollY, setScrollY] = useState(
    typeof window === "undefined" ? 0 : window.scrollY
  );

  useEffect(() => {
    let frame = null;
    const onScroll = () => {
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        setScrollY(window.scrollY);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame !== null) window.cancelAnimationFrame(frame);
    };
  }, []);

  return scrollY;
}

export default useScrollY;
