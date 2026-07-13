import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, variant}) {
  const btnClass =
    variant === "outline" ? "main-button main-button--outline" : "main-button";
  return (
    <div className={className}>
      <a
        className={btnClass}
        href={href}
        target={newTab ? "_blank" : undefined}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {text}
      </a>
    </div>
  );
}
