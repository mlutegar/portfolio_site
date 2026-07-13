import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";

export default function SoftwareSkill() {
  const skills = skillsSection.softwareSkills;
  // Duas metades para as duas faixas do marquee (mobile)
  const rowA = skills.filter((_, i) => i % 2 === 0);
  const rowB = skills.filter((_, i) => i % 2 === 1);

  const renderPill = (skill, i) => (
    <li key={i} className="skill-pill" name={skill.skillName}>
      <i className={skill.fontAwesomeClassname}></i>
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
              <i className={skill.fontAwesomeClassname}></i>
              <p>{skill.skillName}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile: marquee animado de pills */}
      <div className="skills-marquee" aria-hidden="true">
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
