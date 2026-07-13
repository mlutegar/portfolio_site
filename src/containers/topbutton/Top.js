import React from "react";
import "./Top.scss";
import {useScrollY} from "../../hooks/useScrollY";

export default function Top() {
  const scrollY = useScrollY();
  const visible = scrollY > 20;

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  };

  return (
    <button
      onClick={scrollToTop}
      id="topButton"
      title="Voltar ao topo"
      aria-label="Voltar ao topo"
      style={{visibility: visible ? "visible" : "hidden"}}
    >
      <i className="fas fa-hand-point-up" aria-hidden="true"></i>
    </button>
  );
}
