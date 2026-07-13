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
import {useScrollLock} from "../../hooks/useScrollLock";
import {useScrollSpy} from "../../hooks/useScrollSpy";

const MENU_ID = "primary-navigation";

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
  // Guarda o elemento que abriu o menu, para devolver o foco ao fechar.
  const openerRef = useRef(null);

  const navItems = NAV_ITEMS.filter(item => item.show);
  const navIds = navItems.map(item => item.href.slice(1));

  // Item de navegação da seção atualmente visível (scrollspy).
  const activeId = useScrollSpy(navIds);

  // Mede a altura real do header e a expõe em --header-h (no :root, para que
  // tanto o menu mobile quanto o `scroll-padding-top` do <html> a enxerguem).
  //
  // Usa ResizeObserver para remedir sempre que a altura muda por QUALQUER motivo
  // — em especial a carga da webfont "Agustina Regular" (que aumenta a barra
  // depois do primeiro render). Sem isso, --header-h ficava desatualizada e o
  // menu subia por baixo da logo, sobrepondo o 1º item.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return undefined;
    let frame = null;
    const setVar = () => {
      // Agrupa no próximo frame: evita o warning "ResizeObserver loop" e
      // arredonda para px inteiro (menos reflows por frações).
      if (frame !== null) return;
      frame = window.requestAnimationFrame(() => {
        frame = null;
        const h = Math.round(el.getBoundingClientRect().height);
        document.documentElement.style.setProperty("--header-h", `${h}px`);
      });
    };
    setVar();

    // Reforço: remede quando as fontes terminam de carregar.
    if (typeof document !== "undefined" && document.fonts && document.fonts.ready) {
      document.fonts.ready.then(setVar).catch(() => {});
    }

    let ro;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(setVar);
      ro.observe(el);
    } else {
      window.addEventListener("resize", setVar);
    }
    return () => {
      if (frame !== null) window.cancelAnimationFrame(frame);
      if (ro) ro.disconnect();
      else window.removeEventListener("resize", setVar);
    };
  }, []);

  // Trava o scroll de fundo (preservando a posição) enquanto o menu está aberto.
  useScrollLock(menuOpen);

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
    // Lembra quem tinha o foco (o botão do menu) para devolvê-lo ao fechar.
    openerRef.current =
      document.activeElement instanceof HTMLElement
        ? document.activeElement
        : null;
    const panel = menuRef.current;
    const focusables = panel
      ? panel.querySelectorAll(
          'a[href], button, input, [tabindex]:not([tabindex="-1"])'
        )
      : [];
    const first = focusables[0];
    const last = focusables[focusables.length - 1];
    if (first) first.focus({preventScroll: true});

    const onKeyDown = e => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus({preventScroll: true});
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus({preventScroll: true});
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      // Devolve o foco ao elemento que abriu o menu (acessibilidade).
      const opener = openerRef.current;
      if (opener && typeof opener.focus === "function") {
        opener.focus({preventScroll: true});
      }
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  // Navegação por âncora que fecha o menu ANTES de rolar. Necessário porque o
  // scroll-lock (body position:fixed) engoliria o pulo nativo do href no iOS:
  // esperamos o desbloqueio (2x rAF) e então rolamos até a seção.
  const handleNavClick = (e, href) => {
    if (!href || !href.startsWith("#")) return;
    const target = document.getElementById(href.slice(1));
    if (!target) {
      // Seção inexistente: mantém o comportamento padrão, mas fecha o menu.
      setMenuOpen(false);
      return;
    }
    e.preventDefault();
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setMenuOpen(false);
    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({behavior: reduce ? "auto" : "smooth"});
        if (window.history && window.history.replaceState) {
          window.history.replaceState(null, "", href);
        }
      });
    });
  };

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
          aria-controls={MENU_ID}
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
          id={MENU_ID}
          className={isDark ? "dark-menu menu" : "menu"}
          role={menuOpen ? "dialog" : undefined}
          aria-modal={menuOpen ? "true" : undefined}
          aria-label={menuOpen ? "Menu de navegação" : undefined}
        >
          {navItems.map((item, i) => {
            const isActive = activeId === item.href.slice(1);
            return (
              <li key={item.href} style={{"--i": i}}>
                <a
                  href={item.href}
                  className={isActive ? "is-active" : undefined}
                  aria-current={isActive ? "true" : undefined}
                  onClick={e => handleNavClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li
            className="header-toggle-li"
            style={{"--i": navItems.length}}
            onClick={e => e.stopPropagation()}
          >
            <ToggleSwitch />
          </li>
        </ul>
      </header>
    </div>
  );
}
export default Header;
