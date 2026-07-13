import React from "react";
import "./Progress.scss";
import {techStack} from "../../portfolio";
import {Fade} from "../../components/reveal/Reveal";
import SkillDots from "../../components/skillDots/SkillDots";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <Fade bottom duration={1000} distance="20px">
        <div className="skills-container skills-container--full">
          <div className="skills-bar">
            <h2 className="skills-heading">Proficiência</h2>
            {techStack.experience.map((exp, i) => {
              return (
                <SkillDots key={i} skillName={exp.Stack} level={exp.level} />
              );
            })}
          </div>
        </div>
      </Fade>
    );
  }
  return null;
}
