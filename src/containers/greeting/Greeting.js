import React, {useContext} from "react";
import {Fade} from "../../components/reveal/Reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import HeroGraphic from "../../components/heroGraphic/HeroGraphic";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting, greetingStats, socialMediaLinks} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import useInView from "../../hooks/useInView";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  const [inViewRef, inView] = useInView();
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div
        className={`greet-main${inView ? "" : " is-paused"}`}
        id="greeting"
        ref={inViewRef}
      >
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji" aria-hidden="true">
                  {emoji("👋", {props: {alt: ""}})}
                </span>
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
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <HeroGraphic />
          </div>
        </div>
        <div className="greeting-stats" aria-label="Destaques">
          {greetingStats.map(s => (
            <div className="stat-item" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}
