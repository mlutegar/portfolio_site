import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "../../components/reveal/Reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <div id="experience">
        <div className="experience-container" id="workExperience">
          <div>
            <Fade bottom duration={800} distance="20px">
              <h2 className="experience-heading">
                <span>Experiências</span>
              </h2>
            </Fade>
            <ol className={isDark ? "xp-timeline xp-timeline--dark" : "xp-timeline"}>
              {workExperiences.experience.map((card, i) => {
                return (
                  <li className="xp-timeline-item" key={i}>
                    <Fade bottom duration={800} delay={i * 120} distance="24px">
                      <ExperienceCard
                        isDark={isDark}
                        index={i}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets,
                          current: card.current,
                          tech: card.tech
                        }}
                      />
                    </Fade>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
