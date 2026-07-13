import React from "react";
import "./HeroGraphic.scss";
import useInView from "../../hooks/useInView";

/**
 * Custom, dependency-free hero visual: an animated code-editor window with a
 * syntax-highlighted snippet, plus floating tech badges over a brand glow.
 * Fully theme-aware and respects prefers-reduced-motion (global reset).
 */
export default function HeroGraphic() {
  const [ref, inView] = useInView();
  const badges = [
    {icon: "fab fa-react", label: "React"},
    {icon: "fab fa-python", label: "Django"},
    {icon: "fab fa-js", label: "TypeScript"},
    {icon: "fab fa-docker", label: "Docker"}
  ];

  return (
    <div className="hero-graphic-wrap">
      {/* equivalente textual acessível do visual decorativo abaixo */}
      <p className="sr-only">
        Michel Lutegar, Full-Stack Developer. Stack principal:{" "}
        {badges.map(b => b.label).join(", ")}.
      </p>

      <div
        className={`hero-graphic${inView ? "" : " is-paused"}`}
        ref={ref}
        aria-hidden="true"
      >
        <div className="hero-glow" />

        <div className="code-window">
          <div className="code-window-bar">
            <span className="dot dot-red" />
            <span className="dot dot-yellow" />
            <span className="dot dot-green" />
            <span className="code-tab">michel.ts</span>
          </div>

          <pre className="code-body">
            <code>
              <span className="ln">
                <span className="tok-key">const</span>{" "}
                <span className="tok-var">dev</span>{" "}
                <span className="tok-op">=</span>{" "}
                <span className="tok-punc">{"{"}</span>
              </span>
              <span className="ln">
                {"  "}
                <span className="tok-prop">nome</span>
                <span className="tok-punc">:</span>{" "}
                <span className="tok-str">"Michel Lutegar"</span>
                <span className="tok-punc">,</span>
              </span>
              <span className="ln">
                {"  "}
                <span className="tok-prop">cargo</span>
                <span className="tok-punc">:</span>{" "}
                <span className="tok-str">"Full-Stack Developer"</span>
                <span className="tok-punc">,</span>
              </span>
              <span className="ln">
                {"  "}
                <span className="tok-prop">stack</span>
                <span className="tok-punc">:</span>{" "}
                <span className="tok-punc">[</span>
                <span className="tok-str">"React"</span>
                <span className="tok-punc">,</span>{" "}
                <span className="tok-str">"Django"</span>
                <span className="tok-punc">,</span>{" "}
                <span className="tok-str">"TypeScript"</span>
                <span className="tok-punc">],</span>
              </span>
              <span className="ln">
                {"  "}
                <span className="tok-prop">foco</span>
                <span className="tok-punc">:</span>{" "}
                <span className="tok-str">"produtos que geram resultado"</span>
                <span className="tok-punc">,</span>
              </span>
              <span className="ln">
                {"  "}
                <span className="tok-prop">disponivel</span>
                <span className="tok-punc">:</span>{" "}
                <span className="tok-bool">true</span>
                <span className="tok-punc">,</span>
                <span className="cursor" />
              </span>
              <span className="ln">
                <span className="tok-punc">{"}"}</span>
                <span className="tok-punc">;</span>
              </span>
            </code>
          </pre>
        </div>

        <div className="badge-row">
          {badges.map(b => (
            <div className="tech-badge" key={b.label}>
              <i className={b.icon} />
              <span>{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
