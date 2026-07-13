import React, {useEffect, useRef, useState} from "react";
import "./PublicationCard.scss";
import {copyText} from "../../utils";

// Destaca o próprio autor (Michel) na lista de coautores.
function AuthorList({authors}) {
  const list = Array.isArray(authors) ? authors.filter(Boolean) : [];
  if (list.length === 0) return null;
  return (
    <p className="pub-authors">
      {list.map((name, i) => {
        const isSelf = /michel/i.test(name);
        return (
          <span key={name}>
            <span className={isSelf ? "pub-author is-self" : "pub-author"}>
              {name}
            </span>
            {i < list.length - 1 && <span className="pub-author-sep">, </span>}
          </span>
        );
      })}
    </p>
  );
}

// Renderiza apenas links com URL válida, com seta animada no hover.
function PubLinks({footer}) {
  const links = (footer || []).filter(l => l && l.url);
  if (links.length === 0) return null;
  return (
    <div className="pub-links">
      {links.map(v => (
        <a
          key={v.url}
          className="pub-link"
          href={v.url}
          target={v.url.startsWith("#") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          aria-label={v.name}
        >
          {v.name}
          <span className="pub-link-arrow" aria-hidden="true">
            →
          </span>
        </a>
      ))}
    </div>
  );
}

// Botão "Citar (BibTeX)": copia a referência para a área de transferência.
function CiteButton({citation}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  if (!citation) return null;
  const onClick = async () => {
    const ok = await copyText(citation);
    if (!ok) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      type="button"
      className={`pub-cite-button${copied ? " copied" : ""}`}
      onClick={onClick}
      aria-label="Copiar citação em BibTeX"
    >
      <span aria-hidden="true">{copied ? "✓" : "❝"}</span>
      {copied ? "Citação copiada" : "Citar (BibTeX)"}
    </button>
  );
}

export default function PublicationCard({pub, index, isDark}) {
  const {
    title,
    titleLang,
    category,
    categoryIcon,
    date,
    year,
    subtitle,
    authors,
    authorRole,
    tags,
    verified,
    footerLink,
    citation
  } = pub;

  const ordinal = String((index ?? 0) + 1).padStart(2, "0");

  return (
    <article className={`publication-card${isDark ? " dark-mode" : ""}`}>
      {/* Trilho lateral: ordinal + ano sobre faixa de marca */}
      <div className="pub-rail" aria-hidden="true">
        <span className="pub-rail-watermark">❝</span>
        <span className="pub-ordinal">{ordinal}</span>
        {(date || year) && <span className="pub-year">{date || year}</span>}
      </div>

      <div className="pub-body">
        {category && (
          <span className="pub-eyebrow">
            {categoryIcon && (
              <span className="pub-eyebrow-icon" aria-hidden="true">
                {categoryIcon}
              </span>
            )}
            {category}
          </span>
        )}

        <h4 className="card-title" lang={titleLang || undefined}>
          {title}
        </h4>

        <AuthorList authors={authors} />

        {subtitle && <p className="pub-abstract">{subtitle}</p>}

        {(authorRole || (Array.isArray(tags) && tags.length > 0) || verified) && (
          <div className="pub-chips">
            {authorRole && (
              <span className="pub-chip is-author" title="Papel de autoria">
                <span aria-hidden="true">✍️</span> {authorRole}
              </span>
            )}
            {(tags || []).map(t => (
              <span className="pub-chip" key={t}>
                {t}
              </span>
            ))}
            {verified && (
              <span className="pub-chip is-verified" title="Revisado por pares">
                <span aria-hidden="true">✓</span> Verificável
              </span>
            )}
          </div>
        )}

        <div className="pub-actions">
          <PubLinks footer={footerLink} />
          <CiteButton citation={citation} />
        </div>
      </div>
    </article>
  );
}
