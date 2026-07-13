import React, {useEffect, useRef, useState} from "react";
import "./AchievementCard.scss";
import {copyText} from "../../utils";

// Converte a média (ex.: "9.6") em altura relativa da barra.
// Eixo começa em 9 para evidenciar a diferença entre os períodos.
function barHeight(value) {
  const v = parseFloat(String(value).replace(",", "."));
  if (Number.isNaN(v)) return "12%";
  const pct = ((v - 9) / (10 - 9)) * 100;
  return `${Math.max(12, Math.min(100, pct))}%`;
}

// Dispara `true` uma única vez quando o elemento entra na viewport.
function useInView(options) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el || inView) return undefined;
    if (typeof IntersectionObserver === "undefined") {
      setInView(true);
      return undefined;
    }
    const obs = new IntersectionObserver(entries => {
      if (entries.some(e => e.isIntersecting)) {
        setInView(true);
        obs.disconnect();
      }
    }, options || {threshold: 0.3});
    obs.observe(el);
    return () => obs.disconnect();
  }, [inView, options]);
  return [ref, inView];
}

// Anima um número de 0 até `target` quando `active` vira true.
function useCountUp(target, active, duration = 1100) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef();
  useEffect(() => {
    if (!active) return undefined;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      setDisplay(target);
      return undefined;
    }
    let start = null;
    const step = ts => {
      if (start === null) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setDisplay(target * eased);
      if (p < 1) rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);
    return () => rafRef.current && cancelAnimationFrame(rafRef.current);
  }, [target, active, duration]);
  return display;
}

function Metric({value, decimals, label, active}) {
  const n = useCountUp(value, active);
  return (
    <div className="hero-metric">
      <span className="hero-metric-value">{n.toFixed(decimals || 0)}</span>
      <span className="hero-metric-label">{label}</span>
    </div>
  );
}

function CategoryBadge({category, icon}) {
  if (!category) return null;
  return (
    <span className="certificate-category">
      {icon && (
        <span className="certificate-category-icon" aria-hidden="true">
          {icon}
        </span>
      )}
      {category}
    </span>
  );
}

// Renderiza apenas links que tenham URL válida (evita botões "mortos").
function FooterLinks({footer}) {
  const links = (footer || []).filter(l => l && l.url);
  if (links.length === 0) return null;
  return (
    <div className="certificate-card-footer">
      {links.map(v => (
        <a
          key={v.url}
          className="certificate-tag"
          href={v.url}
          target={v.url.startsWith("#") ? "_self" : "_blank"}
          rel="noopener noreferrer"
          aria-label={v.name}
        >
          {v.name}
          <span className="certificate-tag-arrow" aria-hidden="true">
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
      className={`cite-button${copied ? " copied" : ""}`}
      onClick={onClick}
      aria-label="Copiar citação em BibTeX"
    >
      <span aria-hidden="true">{copied ? "✓" : "❝"}</span>
      {copied ? "Citação copiada" : "Citar (BibTeX)"}
    </button>
  );
}

function CardLogo({className, image, imageAlt, fallbackIcon}) {
  // Sem imagem (ex.: publicações sem logo do evento): mostra um emoji no lugar
  // de uma <img> quebrada.
  if (!image) {
    return (
      <span className={`${className} card-logo-emoji`} aria-hidden="true">
        {fallbackIcon || "📄"}
      </span>
    );
  }
  return (
    <span className={className}>
      <img
        src={image}
        alt={imageAlt || "Logo"}
        loading="lazy"
        decoding="async"
      />
    </span>
  );
}

/* ---------- Card Herói (conquista em destaque) ---------- */
function AchievementHero({cardInfo, isDark}) {
  const {
    title,
    titleLang,
    category,
    categoryIcon,
    date,
    description,
    image,
    imageAlt,
    seal,
    sealLabel,
    heroMetrics,
    stats,
    footer
  } = cardInfo;
  const [ref, inView] = useInView();
  return (
    <div className={`achievement-hero${isDark ? " dark-mode" : ""}`} ref={ref}>
      {seal && (
        <span className="hero-ribbon" aria-label={sealLabel || seal}>
          <span aria-hidden="true">{seal}</span>
        </span>
      )}
      <div className="hero-info">
        <div className="certificate-top-row">
          <CategoryBadge category={category} icon={categoryIcon} />
          {date && <span className="certificate-date">{date}</span>}
        </div>
        <div className="hero-title-row">
          <CardLogo
            className="hero-logo"
            image={image}
            imageAlt={imageAlt}
            fallbackIcon={categoryIcon}
          />
          <h3 className="card-title" lang={titleLang || undefined}>
            {title}
          </h3>
        </div>
        <p className="card-subtitle">{description}</p>

        {Array.isArray(heroMetrics) && heroMetrics.length > 0 && (
          <div className="hero-metrics">
            {heroMetrics.map(m => (
              <Metric key={m.label} {...m} active={inView} />
            ))}
          </div>
        )}

        <FooterLinks footer={footer} />
      </div>

      {stats && stats.length > 0 && (
        <div className="hero-chart-panel">
          <span className="hero-chart-caption">Média (CR) por período</span>
          <div
            className="cr-chart"
            role="img"
            aria-label={`Média (CR) por período — ${stats
              .map(s => `${s.label}: ${s.value}`)
              .join("; ")}`}
          >
            {stats.map((s, i) => (
              <div className="cr-bar-col" key={s.label}>
                <span className="cr-bar-value">{s.value}</span>
                <span className="cr-bar-track">
                  <span
                    className="cr-bar-fill"
                    style={{
                      "--bar-height": inView ? barHeight(s.value) : "0%",
                      transitionDelay: `${i * 80}ms`
                    }}
                  ></span>
                </span>
                <span className="cr-bar-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ---------- Card de Credencial (compacto) ---------- */
function CredentialCard({cardInfo, isDark}) {
  const {
    title,
    titleLang,
    category,
    categoryIcon,
    date,
    description,
    image,
    imageAlt,
    tags,
    verified,
    authorRole,
    citation,
    footer
  } = cardInfo;
  return (
    <div className={`credential-card${isDark ? " dark-mode" : ""}`}>
      <div className="credential-head">
        <CardLogo
          className="credential-logo"
          image={image}
          imageAlt={imageAlt}
          fallbackIcon={categoryIcon}
        />
        {date && <span className="credential-year">{date}</span>}
      </div>
      <div className="credential-body">
        <CategoryBadge category={category} icon={categoryIcon} />
        <h4 className="card-title" lang={titleLang || undefined}>
          {title}
        </h4>
        <p className="card-subtitle">{description}</p>

        {(authorRole || (Array.isArray(tags) && tags.length > 0)) && (
          <div className="credential-tags">
            {authorRole && (
              <span
                className="credential-chip is-author"
                title="Papel de autoria"
              >
                <span aria-hidden="true">✍️</span> {authorRole}
              </span>
            )}
            {(tags || []).map(t => (
              <span className="credential-chip" key={t}>
                {t}
              </span>
            ))}
            {verified && (
              <span
                className="credential-chip is-verified"
                title="Credencial verificável"
              >
                <span aria-hidden="true">✓</span> Verificável
              </span>
            )}
          </div>
        )}
      </div>
      <div className="credential-footer-row">
        <FooterLinks footer={footer} />
        <CiteButton citation={citation} />
      </div>
    </div>
  );
}

export default function AchievementCard({cardInfo, isDark}) {
  if (cardInfo.highlight) {
    return <AchievementHero cardInfo={cardInfo} isDark={isDark} />;
  }
  return <CredentialCard cardInfo={cardInfo} isDark={isDark} />;
}
