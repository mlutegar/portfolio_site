import React, {useContext} from "react";
import "./SplashScreen.css";
import StyleContext from "../../contexts/StyleContext";
import LogoSvg from "../../assets/svg/Logo";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-brand">
        <div className="splash-ring" aria-hidden="true" />
        <div className="splash-logo">
          <LogoSvg
            circulo="#ff6b35"
            m="white"
            lutegar={isDark ? "white" : "black"}
            style={{width: "160px", height: "auto"}}
          />
        </div>
      </div>
    </div>
  );
}
