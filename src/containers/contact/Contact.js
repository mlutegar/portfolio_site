import React, {useContext, useState} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo} from "../../portfolio";
import {Fade} from "../../components/reveal/Reveal";
import StyleContext from "../../contexts/StyleContext";

function ContactPill({icon, label, value, href, copyValue}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(copyValue);
      } else {
        const el = document.createElement("textarea");
        el.value = copyValue;
        el.style.position = "fixed";
        el.style.opacity = "0";
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch (e) {
      // silently ignore — link still works
    }
  };

  return (
    <div className="contact-pill">
      <a className="contact-pill-main" href={href}>
        <span className="contact-pill-icon" aria-hidden="true">
          <i className={icon}></i>
        </span>
        <span className="contact-pill-body">
          <span className="contact-pill-label">{label}</span>
          <span className="contact-pill-value">{value}</span>
        </span>
      </a>
      <button
        type="button"
        className={copied ? "contact-copy copied" : "contact-copy"}
        onClick={handleCopy}
        aria-label={`Copiar ${label}`}
      >
        <i className={copied ? "fas fa-check" : "far fa-copy"}></i>
        <span className="contact-copy-text">
          {copied ? "Copiado!" : "Copiar"}
        </span>
      </button>
    </div>
  );
}

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className={isDark ? "dark-mode contact-card" : "contact-card"}>
          <div className="contact-glow" aria-hidden="true"></div>
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
          </div>

          <div className="contact-pills">
            {contactInfo.number && (
              <ContactPill
                icon="fas fa-phone-alt"
                label="Telefone"
                value={contactInfo.number}
                href={"tel:" + contactInfo.number}
                copyValue={contactInfo.number}
              />
            )}
            <ContactPill
              icon="fas fa-envelope"
              label="E-mail"
              value={contactInfo.email_address}
              href={"mailto:" + contactInfo.email_address}
              copyValue={contactInfo.email_address}
            />
          </div>

          <SocialMedia />
        </div>
      </div>
    </Fade>
  );
}
