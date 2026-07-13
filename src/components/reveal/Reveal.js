import React from "react";
import useOnScreen from "../../hooks/useOnScreen";

/**
 * Drop-in, dependency-free replacement for react-reveal's <Fade> / <Slide>.
 * Powered by IntersectionObserver and CSS transforms, and it automatically
 * respects `prefers-reduced-motion` via the global CSS reset in index.css.
 *
 * Supported props (compatible subset of react-reveal):
 *   top | bottom | left | right  -> direction of entry
 *   duration (ms)                -> transition duration
 *   delay (ms)                   -> transition delay
 *   distance (e.g. "40px")       -> travel distance
 *   className, style             -> forwarded to the wrapper
 */
function build(defaultDistance) {
  return function RevealComponent({
    children,
    top,
    bottom,
    left,
    right,
    duration = 700,
    delay = 0,
    distance = defaultDistance,
    className = "",
    style = {}
  }) {
    const [ref, isVisible] = useOnScreen();

    let translate = `translateY(${bottom ? "" : "-"}${distance})`;
    if (top) translate = `translateY(-${distance})`;
    if (bottom) translate = `translateY(${distance})`;
    if (left) translate = `translateX(-${distance})`;
    if (right) translate = `translateX(${distance})`;
    if (!top && !bottom && !left && !right)
      translate = `translateY(${distance})`;

    const revealStyle = {
      opacity: isVisible ? 1 : 0,
      transform: isVisible ? "none" : translate,
      transition: `opacity ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.22, 1, 0.36, 1) ${delay}ms`,
      willChange: "opacity, transform",
      ...style
    };

    return (
      <div ref={ref} className={className} style={revealStyle}>
        {children}
      </div>
    );
  };
}

export const Fade = build("28px");
export const Slide = build("60px");

export default Fade;
