import React, {useContext} from "react";
import {useParams, Link} from "react-router-dom";
import {Helmet} from "react-helmet-async";
import "./CaseStudy.scss";
import {works} from "../../portfolio";
import caseStudies from "../../data/caseStudies";
import slugify from "../../utils/slugify";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ScrollProgress from "../../components/scrollProgress/ScrollProgress";
import ScrollToTopButton from "../topbutton/Top";
import StyleContext from "../../contexts/StyleContext";

export default function CaseStudy() {
  const {slug} = useParams();
  const {isDark} = useContext(StyleContext);

  // O reset de scroll no topo é feito globalmente pelo <ScrollToTop /> em App.js.

  const idx = works.projects.findIndex(p => slugify(p.projectName) === slug);
  const project = idx >= 0 ? works.projects[idx] : null;
  const cs = caseStudies[slug] || {};
  const prev = idx > 0 ? works.projects[idx - 1] : null;
  const next =
    idx >= 0 && idx < works.projects.length - 1
      ? works.projects[idx + 1]
      : null;

  if (!project) {
    return (
      <>
        <Helmet>
          <title>Projeto não encontrado | Michel Lutegar</title>
          <meta name="robots" content="noindex" />
        </Helmet>
        <ScrollProgress />
        <Header />
        <main id="main-content" className="case-not-found">
          <h1>Projeto não encontrado</h1>
          <Link to="/" className="case-back">
            ← Voltar para o início
          </Link>
        </main>
        <Footer />
      </>
    );
  }

  const external = project.footerLink?.[0];

  return (
    <div className={isDark ? "dark-mode" : undefined}>
      <Helmet>
        <title>{`${project.projectName} | Michel Lutegar`}</title>
        <meta
          name="description"
          content={cs.summary || project.projectDesc || project.projectName}
        />
        <meta
          property="og:title"
          content={`${project.projectName} | Michel Lutegar`}
        />
        <meta
          property="og:description"
          content={cs.summary || project.projectDesc || project.projectName}
        />
      </Helmet>
      <ScrollProgress />
      <Header />
      <main id="main-content" className="case-main">
        <Link to="/" className="case-back">
          ← Voltar aos projetos
        </Link>

        <header className="case-hero">
          <div className="case-hero-text">
            {cs.category && <span className="case-chip">{cs.category}</span>}
            <h1 className="case-title">{project.projectName}</h1>
            {cs.tagline && <p className="case-tagline">{cs.tagline}</p>}

            <dl className="case-meta">
              {cs.role && (
                <div>
                  <dt>Função</dt>
                  <dd>{cs.role}</dd>
                </div>
              )}
              {cs.year && (
                <div>
                  <dt>Contexto</dt>
                  <dd>{cs.year}</dd>
                </div>
              )}
            </dl>

            {external?.url && (
              <a
                className="case-cta"
                href={external.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {external.name || "Ver projeto"} ↗
              </a>
            )}
          </div>

          <div
            className="case-hero-image"
            role="img"
            aria-label={project.projectName}
            style={{backgroundImage: `url(${project.image})`}}
          />
        </header>

        {cs.stack?.length > 0 && (
          <ul className="case-stack" aria-label="Tecnologias">
            {cs.stack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </ul>
        )}

        <div className="case-body">
          {(cs.overview || project.projectDesc) && (
            <section className="case-section">
              <h2>Visão geral</h2>
              <p>{cs.overview || project.projectDesc}</p>
            </section>
          )}

          {cs.challenge && (
            <section className="case-section">
              <h2>Desafio</h2>
              <p>{cs.challenge}</p>
            </section>
          )}

          {cs.solution?.length > 0 && (
            <section className="case-section">
              <h2>Solução</h2>
              <ul className="case-list">
                {cs.solution.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {cs.results?.length > 0 && (
            <section className="case-section">
              <h2>Resultados</h2>
              <ul className="case-list">
                {cs.results.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        {cs.gallery?.length > 0 && (
          <section className="case-section case-gallery-section">
            <h2>Galeria</h2>
            <div className="case-gallery">
              {cs.gallery.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${project.projectName} — imagem ${i + 1}`}
                  loading="lazy"
                />
              ))}
            </div>
          </section>
        )}

        <nav className="case-prevnext" aria-label="Navegação entre projetos">
          {prev ? (
            <Link
              to={`/projeto/${slugify(prev.projectName)}`}
              className="case-prevnext-item case-prev"
            >
              <span className="case-prevnext-dir">← Projeto anterior</span>
              <span className="case-prevnext-name">{prev.projectName}</span>
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              to={`/projeto/${slugify(next.projectName)}`}
              className="case-prevnext-item case-next"
            >
              <span className="case-prevnext-dir">Próximo projeto →</span>
              <span className="case-prevnext-name">{next.projectName}</span>
            </Link>
          ) : (
            <span />
          )}
        </nav>

        <div className="case-footer-nav">
          <Link to="/" className="case-back">
            ← Ver todos os projetos
          </Link>
          {external?.url && (
            <a
              className="case-cta"
              href={external.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              {external.name || "Ver projeto"} ↗
            </a>
          )}
        </div>
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
