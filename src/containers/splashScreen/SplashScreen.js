import React, {useContext} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {splashScreen} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import LogoSvg from "../../assets/svg/Logo";

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <LogoSvg 
          circulo="#db5715" 
          m="white" 
          lutegar={isDark ? "white" : "black"}
          style={{width: "200px", height: "auto"}}
        />
      </div>
    </div>
  );
}
