import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      console.log(`URL for ${name} not found`);
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  // Spotlight que segue o cursor (efeito de vitrine iluminada)
  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    e.currentTarget.style.setProperty("--spot-x", `${x}%`);
    e.currentTarget.style.setProperty("--spot-y", `${y}%`);
  }

  const classNames = [
    "certificate-card",
    isDark ? "dark-mode" : "",
    cardInfo.highlight ? "is-highlight" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classNames} onMouseMove={handleMouseMove}>
      {/* Camadas decorativas da "vitrine" */}
      <span className="card-glow" aria-hidden="true"></span>
      <span className="card-frame" aria-hidden="true"></span>
      <span className="card-accent" aria-hidden="true"></span>

      <div className="certificate-top-row">
        {cardInfo.category && (
          <span className="certificate-category">{cardInfo.category}</span>
        )}
        {cardInfo.date && (
          <span className="certificate-date">{cardInfo.date}</span>
        )}
      </div>

      <div className="certificate-image-div">
        {cardInfo.seal && (
          <span className="certificate-seal" aria-label={cardInfo.seal}>
            <span className="certificate-seal-inner">{cardInfo.seal}</span>
          </span>
        )}
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Card Thumbnail"}
          className="card-image"
          loading="lazy"
          decoding="async"
        ></img>
      </div>

      <div className="certificate-detail-div">
        <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
          {cardInfo.title}
        </h5>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>

        {Array.isArray(cardInfo.stats) && cardInfo.stats.length > 0 && (
          <div
            className="certificate-stats"
            role="list"
            aria-label="Médias por período"
          >
            {cardInfo.stats.map((s, i) => (
              <div className="stat-seal" role="listitem" key={i}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="certificate-card-footer">
        {cardInfo.footer.map((v, i) => {
          return (
            <span
              key={i}
              className={
                isDark ? "dark-mode certificate-tag" : "certificate-tag"
              }
              onClick={() => openUrlInNewTab(v.url, v.name)}
            >
              {v.name}
              <span className="certificate-tag-arrow" aria-hidden="true">
                →
              </span>
            </span>
          );
        })}
      </div>
    </div>
  );
}
