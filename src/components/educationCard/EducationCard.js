import React from "react";
import {Fade} from "../reveal/Reveal";
import "./EducationCard.scss";

export default function EducationCard({school}) {
  const GetDescBullets = ({descBullets}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li key={i} className="edu-timeline-bullet">
            {item}
          </li>
        ))
      : null;
  };

  if (!school.logo)
    console.error(
      `Image of ${school.schoolName} is missing in education section`
    );

  return (
    <Fade left duration={900} className="edu-timeline-reveal">
      <div className="edu-timeline-item">
        <div className="edu-timeline-marker">
          {school.logo && (
            <img
              className="edu-timeline-logo"
              src={school.logo}
              alt={school.schoolName}
              loading="lazy"
              decoding="async"
            />
          )}
        </div>

        <div className="edu-timeline-card">
          {school.duration && (
            <span className="edu-timeline-duration">{school.duration}</span>
          )}
          <h3 className="edu-timeline-school">{school.schoolName}</h3>
          {school.subHeader && (
            <h4 className="edu-timeline-subheader">{school.subHeader}</h4>
          )}
          {school.desc && <p className="edu-timeline-desc">{school.desc}</p>}
          {school.descBullets && (
            <ul className="edu-timeline-bullets">
              <GetDescBullets descBullets={school.descBullets} />
            </ul>
          )}
        </div>
      </div>
    </Fade>
  );
}
