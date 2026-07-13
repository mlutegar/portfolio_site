import React, {useContext} from "react";
import "./Publications.scss";
import PublicationCard from "../../components/publicationCard/PublicationCard";
import {publicationsSection} from "../../portfolio";
import {Fade} from "../../components/reveal/Reveal";
import StyleContext from "../../contexts/StyleContext";
import {buildBibtex} from "../../utils";

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
          dangerouslySetInnerHTML={{__html: JSON.stringify(jsonLd)}}
        />
        <div className="publications-main-div">
          <div className="publications-header">
            <h2
              className={
                isDark
                  ? "dark-mode heading publications-heading"
                  : "heading publications-heading"
              }
            >
              {publicationsSection.title}
            </h2>
            <p
              className={
                isDark
                  ? "dark-mode subTitle publications-subtitle"
                  : "subTitle publications-subtitle"
              }
            >
              {publicationsSection.subtitle}
            </p>
            <p className="publications-count" aria-hidden="true">
              {count} {count === 1 ? "artigo publicado" : "artigos publicados"}
            </p>
          </div>
          <div className="publications-list">
            {publications.map((pub, i) => (
              <PublicationCard
                key={`pub-${i}`}
                index={i}
                isDark={isDark}
                pub={{...pub, citation: buildBibtex(pub)}}
              />
            ))}
          </div>
        </div>
      </div>
    </Fade>
  );
}
