import React, {useContext} from "react";
import {Fade} from "../../components/reveal/Reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import HeroGraphic from "../../components/heroGraphic/HeroGraphic";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

const stats = [
  {value: "8+", label: "Projetos entregues"},
  {value: "4", label: "Empresas"},
  {value: "6", label: "Períodos Top-3 (CR)"},
  {value: "3+", label: "Anos de experiência"}
];

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Entre em contato" href="#contact" />
                {socialMediaLinks.linkedin && (
                  <Button
                    text="LinkedIn"
                    href={socialMediaLinks.linkedin}
                    newTab
                    variant="outline"
                  />
                )}
                {greeting.resumeLink && (
                  <a
                    href={new URL("./resume.pdf", import.meta.url).href}
                    download="Michel-Lutegar-CV.pdf"
                    className="download-link-button"
                  >
                    <Button text="Baixar CV" variant="outline" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <HeroGraphic />
          </div>
        </div>
        <div className="greeting-stats" aria-label="Destaques">
          {stats.map((s, i) => (
            <div className="stat-item" key={i}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
