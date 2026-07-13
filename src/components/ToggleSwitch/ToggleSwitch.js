import React, {useContext} from "react";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";
import "./ToggleSwitch.scss";

const ToggleSwitch = () => {
  const {isDark, changeTheme} = useContext(StyleContext);

  return (
    <label className="switch">
      <input
        type="checkbox"
        role="switch"
        aria-checked={isDark}
        aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
        checked={isDark}
        onChange={changeTheme}
      />
      <span className="slider round" aria-hidden="true">
        <span className="emoji">{isDark ? emoji("🌜") : emoji("☀️")}</span>
      </span>
    </label>
  );
};
export default ToggleSwitch;
