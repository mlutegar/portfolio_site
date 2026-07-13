import React from "react";
import "./HeroGraphic.scss";

/**
 * Custom, dependency-free hero visual: an animated code-editor window with a
 * syntax-highlighted snippet, plus floating tech badges over a brand glow.
 * Fully theme-aware and respects prefers-reduced-motion (global reset).
 */
export default function HeroGraphic() {
  const badges = [
    {icon: "fab fa-react", label: "React", cls: "badge-1"},
    {icon: "fab fa-python", label: "Django", cls: "badge-2"},
    {icon: "fab fa-js", label: "TypeScript", cls: "badge-3"},
    {icon: "fab fa-docker", label: "Docker", cls: "badge-4"}
  ];

  return (
    <div className="hero-graphic" aria-hidden="true">
      <div className="hero-glow" />

      <div className="code-window">
        <div className="code-window-bar">
          <span className="dot dot-red" />
          <span className="dot dot-yellow" />
          <span className="dot dot-green" />
          <span className="code-tab">michel.js</span>
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

      {badges.map(b => (
        <div className={`tech-badge ${b.cls}`} key={b.label}>
          <i className={b.icon} />
          <span>{b.label}</span>
        </div>
      ))}
    </div>
  );
}
