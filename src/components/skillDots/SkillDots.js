import React from "react";
import "./SkillDots.scss";

export default function SkillDots({ skillName, level }) {
  const totalDots = 10;
  
  return (
    <div className="skill-dots-container">
      <p className="skill-name">{skillName}</p>
      <div className="dots-container">
        {Array.from({ length: totalDots }, (_, index) => (
          <div
            key={index}
            className={`dot ${index < level ? 'filled' : 'empty'}`}
          />
        ))}
      </div>
    </div>
  );
}