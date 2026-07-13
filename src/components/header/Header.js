import React, {useContext, useEffect, useState} from "react";
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
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, {passive: true});
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerClass = [
    "header",
    isDark ? "dark-menu" : "",
    scrolled ? "header--scrolled" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="header-wrapper">
      <header className={headerClass}>
        <Link to="/" className="logo" aria-label="Ir para o início">
          <LogoSvg lutegar={isDark ? "white" : "black"} />
        </Link>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          aria-label="Abrir menu de navegação"
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
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
          <li className="header-toggle-li">
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
