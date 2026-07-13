import React from "react";
import "./ScrollProgress.scss";
import {useScrollY} from "../../hooks/useScrollY";

export default function ScrollProgress() {
  const scrollY = useScrollY();
  const height = document.documentElement.scrollHeight - window.innerHeight;
  const progress = height > 0 ? (scrollY / height) * 100 : 0;

  return (
    <div className="scroll-progress" aria-hidden="true">
      <div className="scroll-progress-bar" style={{width: `${progress}%`}} />
    </div>
  );
}
