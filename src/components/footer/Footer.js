import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "../reveal/Reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Feito com <span className="footer-heart">{emoji("❤️")}</span> por
          Michel Lutegar © 2026
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Baseado no template{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>{" "}
          da equipe DeveloperFolio
        </p>
      </div>
    </Fade>
  );
}
