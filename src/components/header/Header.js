import React, {useContext, useEffect, useRef, useState} from "react";
import {Link} from "react-router-dom";
import "./Header.scss";
import StyleContext from "../../contexts/StyleContext";
import {
  workExperiences,
  skillsSection,
  openSource,
  blogSection,
  talkSection,
  achievementSection,
  publicationsSection,
  resumeSection
} from "../../portfolio";
import LogoSvg from "../../assets/svg/Logo";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import {useScrollY} from "../../hooks/useScrollY";

// Navegação orientada a dados: cada item aparece só se a seção estiver visível.
const NAV_ITEMS = [
  {show: skillsSection.display, href: "#skills", label: "Habilidades"},
  {show: workExperiences.display, href: "#experience", label: "Experiência"},
  {show: openSource.display, href: "#opensource", label: "Código Aberto"},
  {
    show: achievementSection.display,
    href: "#achievements",
    label: "Conquistas"
  },
  {
    show: publicationsSection.display,
    href: "#publications",
    label: "Publicações"
  },
  {show: blogSection.display, href: "#blogs", label: "Blog"},
  {show: talkSection.display, href: "#talks", label: "Palestras"},
  {show: resumeSection.display, href: "#resume", label: "Currículo"},
  {show: true, href: "#contact", label: "Contato"}
];

function Header() {
  const {isDark} = useContext(StyleContext);

  const scrollY = useScrollY();
  const scrolled = scrollY > 8;
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const navItems = NAV_ITEMS.filter(item => item.show);

  // Mede a altura real do header e a expõe em --header-h, para o painel mobile
  // (position: fixed) ancorar exatamente abaixo da barra, independente do tema
  // ou do tamanho da fonte.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return undefined;
    const setVar = () =>
      el.style.setProperty("--header-h", `${el.offsetHeight}px`);
    setVar();
    window.addEventListener("resize", setVar);
    return () => window.removeEventListener("resize", setVar);
  }, [scrolled]);

  // Trava o scroll de fundo enquanto o menu mobile está aberto, PRESERVANDO a
  // posição. position:fixed no body evita o salto para o topo do iOS Safari; a
  // barra do header também vira fixed (classe no wrapper) para seguir visível.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const body = document.body;
    const scrollPos = window.scrollY;
    body.style.top = `-${scrollPos}px`;
    body.classList.add("no-scroll");
    return () => {
      body.classList.remove("no-scroll");
      body.style.top = "";
      window.scrollTo(0, scrollPos);
    };
  }, [menuOpen]);

  // Fecha o menu ao voltar para o layout desktop
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 48em)");
    const onChange = e => e.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  // Acessibilidade do menu aberto: Esc fecha, foco vai para o 1º item e o Tab
  // fica preso dentro do painel (focus trap) — o fundo não é alcançável.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const panel = menuRef.current;
    const focusables = panel
      ? panel.querySelectorAll(
          'a[href], button, input, [tabindex]:not([tabindex="-1"])'
        )
      : [];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (first) first.focus();

    const onKeyDown = e => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  const headerClass = [
    "header",
    isDark ? "dark-menu" : "",
    scrolled ? "header--scrolled" : ""
  ]
    .filter(Boolean)
    .join(" ");

  const wrapperClass = [
    "header-wrapper",
    menuOpen ? "header-wrapper--menu-open" : ""
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={wrapperClass}>
      <header className={headerClass} ref={headerRef}>
        <Link
          to="/"
          className="logo"
          aria-label="Ir para o início"
          onClick={closeMenu}
        >
          <LogoSvg lutegar={isDark ? "white" : "black"} />
        </Link>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          checked={menuOpen}
          onChange={e => setMenuOpen(e.target.checked)}
        />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          aria-label={
            menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"
          }
          aria-expanded={menuOpen}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <div
          className={`menu-backdrop${menuOpen ? " is-open" : ""}`}
          onClick={closeMenu}
          aria-hidden="true"
        />
        <ul
          ref={menuRef}
          className={isDark ? "dark-menu menu" : "menu"}
          onClick={closeMenu}
        >
          {navItems.map(item => (
            <li key={item.href}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
          <li className="header-toggle-li" onClick={e => e.stopPropagation()}>
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
