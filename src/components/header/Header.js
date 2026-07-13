import React, {useContext, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  publicationsSection,
  resumeSection
} from "../../portfolio";
import LogoSvg from "../../assets/svg/Logo";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewPublications = publicationsSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Trava o scroll de fundo enquanto o menu mobile está aberto
  useEffect(() => {
    document.body.classList.toggle("no-scroll", menuOpen);
    return () => document.body.classList.remove("no-scroll");
  }, [menuOpen]);

  // Mede a altura real do header e a expõe em --header-h, para o painel mobile
  // (position: fixed) ancorar exatamente abaixo da barra, independente do tema
  // ou do tamanho da fonte.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return undefined;
    const setVar = () =>
      el.style.setProperty("--header-h", `${el.offsetHeight}px`);
    setVar();
    window.addEventListener("resize", setVar);
    return () => window.removeEventListener("resize", setVar);
  }, [scrolled]);

  // Fecha o menu ao voltar para o layout desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 48em)");
    const onChange = (e) => e.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const headerClass = [
    "header",
    isDark ? "dark-menu" : "",
    scrolled ? "header--scrolled" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="header-wrapper">
      <header className={headerClass} ref={headerRef}>
        <Link
          to="/"
          className="logo"
          aria-label="Ir para o início"
          onClick={closeMenu}
        >
          <LogoSvg lutegar={isDark ? "white" : "black"} />
        </Link>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={menuOpen}
          onChange={(e) => setMenuOpen(e.target.checked)}
        />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={menuOpen}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"} onClick={closeMenu}>
          {viewSkills && (
            <li>
              <a href="#skills">Habilidades</a>
            </li>
          )}
          {viewExperience && (
            <li>
              <a href="#experience">Experiência</a>
            </li>
          )}
          {viewOpenSource && (
            <li>
              <a href="#opensource">Código Aberto</a>
            </li>
          )}
          {viewAchievement && (
            <li>
              <a href="#achievements">Conquistas</a>
            </li>
          )}
          {viewPublications && (
            <li>
              <a href="#publications">Publicações</a>
            </li>
          )}
          {viewBlog && (
            <li>
              <a href="#blogs">Blog</a>
            </li>
          )}
          {viewTalks && (
            <li>
              <a href="#talks">Palestras</a>
            </li>
          )}
          {viewResume && (
            <li>
              <a href="#resume">Currículo</a>
            </li>
          )}
          <li>
            <a href="#contact">Contato</a>
          </li>
          <li
            className="header-toggle-li"
            onClick={(e) => e.stopPropagation()}
          >
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
