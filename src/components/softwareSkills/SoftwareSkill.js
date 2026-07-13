import React, {useState} from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

// Config do marquee (mobile)
const MARQUEE_DURATION = "30s";

// Cores de marca por tecnologia (fallback: undefined -> cor padrão do tema)
const BRAND_COLORS = {
  "html-5": "#E34F26",
  css3: "#1572B6",
  JavaScript: "#F7DF1E",
  TypeScript: "#3178C6",
  reactjs: "#61DAFB",
  python: "#3776AB",
  django: "#44B78B",
  "sql-database": "#00758F",
  docker: "#2496ED",
  git: "#F05032",
  linux: "#FCC624",
  java: "#007396",
  php: "#777BB4",
  bootstrap: "#7952B3",
  go: "#00ADD8",
  c: "#A8B9CC",
  construct3: "#00B4D8",
  orange: "#FF7900"
};

export default function SoftwareSkill() {
  const [paused, setPaused] = useState(false);
  const skills = skillsSection.softwareSkills;

  // Duas metades para as duas faixas do marquee
  const rowA = skills.filter((_, i) => i % 2 === 0);
  const rowB = skills.filter((_, i) => i % 2 === 1);

  const iconStyle = (skillName) => ({color: BRAND_COLORS[skillName]});

  const renderPill = (skill, i) => (
    <li key={i} className="skill-pill" name={skill.skillName}>
      <i className={skill.fontAwesomeClassname} style={iconStyle(skill.skillName)}></i>
      <p>{skill.skillName}</p>
    </li>
  );

  return (
    <div>
      {/* Desktop / tablet: grid original */}
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skills.map((skill, i) => (
            <li
              key={i}
              className="software-skill-inline"
              name={skill.skillName}
            >
              <i
                className={skill.fontAwesomeClassname}
                style={iconStyle(skill.skillName)}
              ></i>
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile: marquee animado de pills. Toque pausa/retoma. */}
      <div
        className={`skills-marquee${paused ? " is-paused" : ""}`}
        style={{"--marquee-duration": MARQUEE_DURATION}}
        onClick={() => setPaused((p) => !p)}
        aria-hidden="true"
      >
        <div className="marquee-row">
          <ul className="marquee-track">
            {[...rowA, ...rowA].map(renderPill)}
          </ul>
        </div>
        <div className="marquee-row marquee-row--reverse">
          <ul className="marquee-track">
            {[...rowB, ...rowB].map(renderPill)}
          </ul>
        </div>
      </div>
    </div>
  );
}
