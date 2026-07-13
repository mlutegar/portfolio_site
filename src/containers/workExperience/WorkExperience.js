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
              <h2 className="experience-heading">Experiências</h2>
            </Fade>
            <div className="experience-cards-div">
              {workExperiences.experience.map((card, i) => {
                return (
                  <Fade key={i} bottom duration={800} delay={i * 120} distance="24px">
                    <ExperienceCard
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  </Fade>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
