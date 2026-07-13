import React from "react";
import "./ExperienceCard.scss";

export default function ExperienceCard({cardInfo, isDark, index}) {
  const GetDescBullets = ({descBullets, isDark}) => {
    return descBullets
      ? descBullets.map((item, i) => (
          <li
            key={i}
            className={isDark ? "xp-bullet dark-mode-text" : "xp-bullet"}
          >
            {item}
          </li>
        ))
      : null;
  };

  const num = String((index ?? 0) + 1).padStart(2, "0");

  return (
    <div className={isDark ? "experience-card experience-card-dark" : "experience-card"}>
      <span className="xp-node" aria-hidden="true">
        <img
          className="xp-node-img"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          loading="lazy"
          decoding="async"
        />
      </span>

      <div className="xp-card-inner">
        <span className="xp-index" aria-hidden="true">
          {num}
        </span>

        <div className="xp-head">
          <span className="xp-company">{cardInfo.company}</span>
          <span className="xp-date">{cardInfo.date}</span>
          {cardInfo.current && (
            <span className="xp-current">
              <span className="xp-current-dot" aria-hidden="true" />
              Atual
            </span>
          )}
        </div>

        <h3
          className={
            isDark ? "xp-role dark-mode-text" : "xp-role"
          }
        >
          {cardInfo.role}
        </h3>

        <p
          className={
            isDark ? "xp-desc dark-mode-text" : "xp-desc"
          }
        >
          {cardInfo.desc}
        </p>

        {cardInfo.descBullets && cardInfo.descBullets.length > 0 && (
          <ul className="xp-bullets">
            <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
          </ul>
        )}

        {cardInfo.tech && cardInfo.tech.length > 0 && (
          <ul className="xp-tags" aria-label="Tecnologias">
            {cardInfo.tech.map((t, i) => (
              <li key={i} className="xp-tag">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
