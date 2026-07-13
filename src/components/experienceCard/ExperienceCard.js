import React from "react";
import "./ExperienceCard.scss";

// Extrai a primeira data MM/AAAA (ou AAAA) de um texto livre e devolve
// no formato ISO "AAAA-MM" para o atributo dateTime de <time>.
function toIsoDate(text) {
  if (!text) return undefined;
  const mm = String(text).match(/(\d{1,2})\s*\/\s*(\d{4})/);
  if (mm) return `${mm[2]}-${mm[1].padStart(2, "0")}`;
  const yy = String(text).match(/\b(19|20)\d{2}\b/);
  return yy ? yy[0] : undefined;
}

function DescBullets({descBullets, isDark}) {
  if (!descBullets || descBullets.length === 0) return null;
  return (
    <ul className="xp-bullets">
      {descBullets.map(item => (
        <li
          key={item}
          className={isDark ? "xp-bullet dark-mode-text" : "xp-bullet"}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function ExperienceCard({cardInfo, isDark, index}) {
  const num = String((index ?? 0) + 1).padStart(2, "0");
  const isoDate = toIsoDate(cardInfo.date);

  return (
    <div
      className={
        isDark ? "experience-card experience-card-dark" : "experience-card"
      }
    >
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
          <time className="xp-date" dateTime={isoDate}>
            {cardInfo.date}
          </time>
          {cardInfo.current && (
            <span className="xp-current">
              <span className="xp-current-dot" aria-hidden="true" />
              Atual
            </span>
          )}
        </div>

        <h3 className={isDark ? "xp-role dark-mode-text" : "xp-role"}>
          {cardInfo.role}
        </h3>

        <p className={isDark ? "xp-desc dark-mode-text" : "xp-desc"}>
          {cardInfo.desc}
        </p>

        <DescBullets descBullets={cardInfo.descBullets} isDark={isDark} />

        {cardInfo.tech && cardInfo.tech.length > 0 && (
          <ul className="xp-tags" aria-label="Tecnologias">
            {cardInfo.tech.map(t => (
              <li key={t} className="xp-tag">
                {t}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
