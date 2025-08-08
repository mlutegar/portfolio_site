import React, {useContext} from "react";
import Headroom from "react-headroom";
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

function Header() {
  const {isDark} = useContext(StyleContext);
  const viewExperience = workExperiences.display;
  const viewOpenSource = openSource.display;
  const viewSkills = skillsSection.display;
  const viewAchievement = achievementSection.display;
  const viewBlog = blogSection.display;
  const viewTalks = talkSection.display;
  const viewResume = resumeSection.display;

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <a href="/" className="logo">
          <LogoSvg
            lutegar={isDark ? "white" : "black"}
          />
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
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
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
