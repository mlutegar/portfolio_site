import React from "react";
import "./SkillDots.scss";
import useOnScreen from "../../hooks/useOnScreen";

export default function SkillDots({skillName, level}) {
  const [ref, visible] = useOnScreen();
  const pct = Math.max(0, Math.min(100, (level / 10) * 100));

  return (
    <div className="skill-bar-row" ref={ref}>
      <div className="skill-bar-head">
        <span className="skill-name">{skillName}</span>
        <span className="skill-pct">{level}/10</span>
      </div>
      <div
        className="skill-track"
        role="progressbar"
        aria-valuenow={level}
        aria-valuemin={0}
        aria-valuemax={10}
        aria-label={skillName}
      >
        <div
          className="skill-fill"
          style={{width: visible ? `${pct}%` : "0%"}}
        />
      </div>
    </div>
  );
}
