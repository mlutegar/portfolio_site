import React, {useContext} from "react";
// Reaproveita o CSS da seção de Conquistas (mesmas classes de layout).
import "../achievement/Achievement.scss";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import {publicationsSection} from "../../portfolio";
import {Fade} from "../../components/reveal/Reveal";
import StyleContext from "../../contexts/StyleContext";
import {toCardInfo, buildBibtex} from "../../utils";

// Structured data (schema.org) para Google Acadêmico / rich results.
function buildJsonLd(publications) {
  return {
    "@context": "https://schema.org",
    "@graph": publications.map(pub => ({
      "@type": "ScholarlyArticle",
      headline: pub.title,
      name: pub.title,
      inLanguage: pub.titleLang || "en",
      datePublished: String(pub.year || pub.date || ""),
      author: (pub.authors || []).map(name => ({
        "@type": "Person",
        name
      })),
      isPartOf: pub.venue
        ? {"@type": "PublicationEvent", name: pub.venue}
        : undefined,
      identifier: pub.doi
        ? {
            "@type": "PropertyValue",
            propertyID: "DOI",
            value: pub.doi
          }
        : undefined,
      sameAs: pub.doi ? `https://doi.org/${pub.doi}` : undefined,
      url: pub.url
    }))
  };
}

export default function Publications() {
  const {isDark} = useContext(StyleContext);
  if (!publicationsSection.display) {
    return null;
  }

  const publications = publicationsSection.publications || [];
  const count = publications.length;
  const jsonLd = buildJsonLd(publications);

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="publications">
        {/* Dados estruturados para mecanismos de busca acadêmicos */}
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        <div className="achievement-main-div">
          <div className="achievement-header">
            <h1
              className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }
            >
              {publicationsSection.title}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }
            >
              {publicationsSection.subtitle}
            </p>
            <p className="publications-count" aria-hidden="true">
              {count} {count === 1 ? "artigo publicado" : "artigos publicados"}
            </p>
          </div>
          <div className="achievement-cards-div">
            <div className="credentials-row">
              {publications.map((card, i) => (
                <AchievementCard
                  key={`pub-${i}`}
                  isDark={isDark}
                  cardInfo={toCardInfo({
                    ...card,
                    citation: buildBibtex(card)
                  })}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
