import React, {useContext, useEffect, useMemo, useRef, useState} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {contactInfo, socialMediaLinks} from "../../portfolio";
import {Fade} from "../../components/reveal/Reveal";
import StyleContext from "../../contexts/StyleContext";

const prefersReducedMotion =
  typeof window !== "undefined" &&
  typeof window.matchMedia === "function" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Copy-to-clipboard helper (with legacy fallback) */
async function copyText(value) {
  try {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      await navigator.clipboard.writeText(value);
      return true;
    }
    const el = document.createElement("textarea");
    el.value = value;
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    return true;
  } catch (e) {
    return false;
  }
}

function CopyButton({value, label, announce}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);

  const onClick = async () => {
    const ok = await copyText(value);
    if (!ok) return;
    setCopied(true);
    announce(`${label || value} copiado para a área de transferência`);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1600);
  };

  return (
    <button
      type="button"
      className={copied ? "term-copy copied" : "term-copy"}
      onClick={onClick}
      aria-label={`Copiar ${label || value}`}
    >
      <i
        className={copied ? "fas fa-check" : "far fa-copy"}
        aria-hidden="true"
      />
      {copied ? "copiado" : "copiar"}
    </button>
  );
}

/* Syntax-highlighted command echo: program / --flags / args */
function CmdText({text}) {
  const parts = text.split(" ");
  return (
    <span className="term-cmd">
      {parts.map((p, i) => {
        const cls =
          i === 0
            ? "term-program"
            : p.startsWith("--")
            ? "term-flag"
            : "term-arg";
        return (
          <span key={i} className={cls}>
            {p}
            {i < parts.length - 1 ? " " : ""}
          </span>
        );
      })}
    </span>
  );
}

const Prompt = () => (
  <span className="term-prompt">
    <span className="term-user">visitante</span>
    <span className="term-at">@</span>
    <span className="term-host">portfolio</span>
    <span className="term-path">:~$</span>
  </span>
);

export default function Contact() {
  const {isDark} = useContext(StyleContext);

  const [started, setStarted] = useState(false);
  const [history, setHistory] = useState([]); // {id, kind:'cmd'|'out', text?, node?}
  const [autoStep, setAutoStep] = useState(0);
  const [typed, setTyped] = useState("");
  const [autoDone, setAutoDone] = useState(false);
  const [input, setInput] = useState("");
  const [formOpen, setFormOpen] = useState(false);
  const [form, setForm] = useState({name: "", email: "", message: ""});
  const [soundOn, setSoundOn] = useState(false);
  const [live, setLive] = useState("");

  const idRef = useRef(0);
  const rootRef = useRef(null);
  const bodyRef = useRef(null);
  const inputRef = useRef(null);
  const audioRef = useRef(null);
  const skipRef = useRef(false);

  const nextId = () => {
    idRef.current += 1;
    return idRef.current;
  };
  const announce = msg => setLive(msg);

  const hasPhone = Boolean(contactInfo.number);
  const waHref = `https://wa.me/${socialMediaLinks.whatsapp}`;

  /* ---- small typing beep (opt-in) ------------------------------------- */
  const beep = () => {
    if (!soundOn) return;
    try {
      const Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return;
      if (!audioRef.current) audioRef.current = new Ctx();
      const ctx = audioRef.current;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.value = 620;
      gain.gain.value = 0.015;
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.015);
    } catch (e) {
      /* ignore */
    }
  };

  /* ---- output node builders ------------------------------------------- */
  const whatsappOut = () => (
    <div className="term-output">
      <i
        className="fab fa-whatsapp term-out-icon whatsapp"
        aria-hidden="true"
      />
      <a
        className="term-value"
        href={waHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        {contactInfo.number}
      </a>
      <CopyButton
        value={contactInfo.number}
        label="telefone"
        announce={announce}
      />
    </div>
  );

  const emailOut = () => (
    <div className="term-output">
      <i className="fas fa-envelope term-out-icon email" aria-hidden="true" />
      <a className="term-value" href={`mailto:${contactInfo.email_address}`}>
        {contactInfo.email_address}
      </a>
      <CopyButton
        value={contactInfo.email_address}
        label="e-mail"
        announce={announce}
      />
    </div>
  );

  const socialOut = () => (
    <div className="term-output term-social">
      <SocialMedia />
    </div>
  );

  const helpOut = () => (
    <div className="term-output term-help">
      <ul>
        <li>
          <b>help</b> — mostra esta lista
        </li>
        <li>
          <b>whoami</b> — quem sou eu
        </li>
        {hasPhone && (
          <li>
            <b>whatsapp</b> — número de telefone / WhatsApp
          </li>
        )}
        <li>
          <b>email</b> — endereço de e-mail
        </li>
        <li>
          <b>social</b> — redes sociais
        </li>
        <li>
          <b>send</b> — abrir formulário de mensagem
        </li>
        <li>
          <b>clear</b> — limpar o terminal
        </li>
      </ul>
    </div>
  );

  const textOut = content => (
    <div className="term-output term-text">{content}</div>
  );

  const pushOut = node =>
    setHistory(h => [...h, {id: nextId(), kind: "out", node}]);
  const pushCmd = text =>
    setHistory(h => [...h, {id: nextId(), kind: "cmd", text}]);

  /* ---- command resolver ------------------------------------------------ */
  // returns {outputs: [nodes], action?: 'clear'|'form'}
  const resolve = raw => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return {outputs: []};
    const program = cmd.split(/\s+/)[0];

    switch (program) {
      case "help":
      case "ajuda":
        return {outputs: [helpOut()]};
      case "whoami":
        return {
          outputs: [textOut("Michel Lutegar — desenvolvedor de software 👋")]
        };
      case "whatsapp":
      case "tel":
      case "telefone":
        return hasPhone
          ? {outputs: [whatsappOut()]}
          : {outputs: [textOut("Sem número cadastrado. Tente 'email'.")]};
      case "email":
      case "mail":
      case "e-mail":
        return {outputs: [emailOut()]};
      case "social":
      case "redes":
        return {outputs: [socialOut()]};
      case "contact":
      case "contato": {
        const outs = [];
        if (hasPhone) outs.push(whatsappOut());
        outs.push(emailOut());
        outs.push(socialOut());
        return {outputs: outs};
      }
      case "send":
      case "message":
      case "mensagem":
      case "enviar":
        return {outputs: [], action: "form"};
      case "clear":
      case "cls":
      case "limpar":
        return {outputs: [], action: "clear"};
      case "sudo":
        return {
          outputs: [textOut("visitante não está no arquivo sudoers. 😏")]
        };
      default:
        return {
          outputs: [
            textOut(
              `comando não encontrado: ${program} — digite 'help' para ver as opções.`
            )
          ]
        };
    }
  };

  const applyResult = res => {
    if (res.action === "clear") {
      setHistory([]);
      setFormOpen(false);
      return;
    }
    (res.outputs || []).forEach(pushOut);
    if (res.action === "form") {
      setFormOpen(true);
      announce("Formulário de mensagem aberto");
    }
  };

  /* ---- in-view trigger ------------------------------------------------- */
  useEffect(() => {
    if (started) return undefined;
    if (
      typeof window === "undefined" ||
      typeof window.IntersectionObserver !== "function"
    ) {
      setStarted(true);
      return undefined;
    }
    const el = rootRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      entries => {
        if (entries.some(e => e.isIntersecting)) {
          setStarted(true);
          obs.disconnect();
        }
      },
      {threshold: 0.25}
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [started]);

  /* ---- intro auto-typing ---------------------------------------------- */
  const INTRO = useMemo(
    () => [
      {cmd: "whoami"},
      {cmd: hasPhone ? "contact --list" : "contact --email"}
    ],
    [hasPhone]
  );

  const introOutputs = cmd => resolve(cmd === "whoami" ? "whoami" : "contact");

  const finishIntro = () => {
    setTyped("");
    pushOut(
      textOut(
        <>
          Dica: digite <b>help</b> e pressione <b>Enter</b> para explorar. ⌨️
        </>
      )
    );
    setAutoDone(true);
  };

  // flush everything instantly (skip / reduced motion)
  const flushIntro = fromStep => {
    const entries = [];
    for (let i = fromStep; i < INTRO.length; i += 1) {
      entries.push({id: nextId(), kind: "cmd", text: INTRO[i].cmd});
      introOutputs(INTRO[i].cmd).outputs.forEach(node => {
        entries.push({id: nextId(), kind: "out", node});
      });
    }
    setHistory(h => [...h, ...entries]);
    setAutoStep(INTRO.length);
  };

  useEffect(() => {
    if (!started || autoDone) return undefined;

    if (prefersReducedMotion) {
      flushIntro(0);
      finishIntro();
      return undefined;
    }

    if (autoStep >= INTRO.length) {
      finishIntro();
      return undefined;
    }

    const full = INTRO[autoStep].cmd;
    let i = 0;
    let advance = null;
    const typing = setInterval(() => {
      if (skipRef.current) {
        clearInterval(typing);
        return;
      }
      i += 1;
      setTyped(full.slice(0, i));
      beep();
      if (i >= full.length) {
        clearInterval(typing);
        advance = setTimeout(() => {
          pushCmd(full);
          introOutputs(full).outputs.forEach(pushOut);
          setTyped("");
          setAutoStep(s => s + 1);
        }, 380);
      }
    }, 45);

    return () => {
      clearInterval(typing);
      clearTimeout(advance);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [started, autoStep, autoDone]);

  const handleSkip = () => {
    if (autoDone) {
      if (inputRef.current) inputRef.current.focus();
      return;
    }
    skipRef.current = true;
    flushIntro(autoStep);
    finishIntro();
  };

  /* ---- autoscroll + focus --------------------------------------------- */
  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history, formOpen, typed]);

  useEffect(() => {
    if (autoDone && inputRef.current) inputRef.current.focus();
  }, [autoDone]);

  /* ---- interactive input ---------------------------------------------- */
  const submitInput = e => {
    e.preventDefault();
    pushCmd(input.trim());
    applyResult(resolve(input));
    setInput("");
  };

  /* ---- message form (mailto) ------------------------------------------ */
  const emailValid = !form.email || EMAIL_RE.test(form.email);
  const canSend = form.message.trim().length > 0 && emailValid;

  const composed = useMemo(() => {
    const subject = `Contato do portfólio${form.name ? ` — ${form.name}` : ""}`;
    const bodyLines = [
      form.message,
      "",
      "—",
      form.name && `Nome: ${form.name}`,
      form.email && `E-mail: ${form.email}`
    ].filter(Boolean);
    return {subject, body: bodyLines.join("\n")};
  }, [form]);

  const mailtoHref = `mailto:${
    contactInfo.email_address
  }?subject=${encodeURIComponent(composed.subject)}&body=${encodeURIComponent(
    composed.body
  )}`;

  const onSend = e => {
    if (!canSend) {
      e.preventDefault();
      announce("Preencha uma mensagem e um e-mail válido antes de enviar.");
      return;
    }
    pushOut(
      textOut(
        <>
          ✓ Abrindo seu cliente de e-mail… Se nada acontecer, use{" "}
          <b>copiar mensagem</b> e cole em {contactInfo.email_address}.
        </>
      )
    );
    announce("Abrindo cliente de e-mail");
  };

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact" ref={rootRef}>
        <div className="contact-header-txt">
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

        <div
          className={isDark ? "dark-mode term-window" : "term-window"}
          role="group"
          aria-label="Terminal de contato interativo"
        >
          <div className="term-bar">
            <span className="term-dot term-red" />
            <span className="term-dot term-yellow" />
            <span className="term-dot term-green" />
            <span className="term-bar-title">contato — zsh</span>
            <button
              type="button"
              className="term-sound"
              onClick={() => setSoundOn(s => !s)}
              aria-pressed={soundOn}
              aria-label={
                soundOn ? "Desligar som de digitação" : "Ligar som de digitação"
              }
              title={soundOn ? "Som: ligado" : "Som: desligado"}
            >
              <i
                className={soundOn ? "fas fa-volume-up" : "fas fa-volume-mute"}
                aria-hidden="true"
              />
            </button>
          </div>

          {/* clicking the body skips the intro / focuses the prompt */}
          <div
            className="term-body"
            ref={bodyRef}
            onClick={handleSkip}
            role="presentation"
          >
            {history.map(entry =>
              entry.kind === "cmd" ? (
                <div className="term-line" key={entry.id}>
                  <Prompt /> <CmdText text={entry.text} />
                </div>
              ) : (
                <div className="term-out-block" key={entry.id}>
                  {entry.node}
                </div>
              )
            )}

            {/* line currently being typed by the intro */}
            {!autoDone && started && (
              <div className="term-line">
                <Prompt /> <CmdText text={typed} />
                <span className="term-caret" />
              </div>
            )}

            {/* message form, toggled via `send` */}
            {formOpen && (
              <form className="term-form" onSubmit={e => e.preventDefault()}>
                <label className="term-field">
                  <span className="term-field-label">$ nome</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    onKeyDown={beep}
                    placeholder="Seu nome"
                    autoComplete="name"
                  />
                </label>
                <label className="term-field">
                  <span className="term-field-label">$ email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    onKeyDown={beep}
                    placeholder="voce@exemplo.com"
                    autoComplete="email"
                    aria-invalid={!emailValid}
                  />
                  {!emailValid && (
                    <span className="term-error">e-mail inválido</span>
                  )}
                </label>
                <label className="term-field">
                  <span className="term-field-label">$ mensagem</span>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    onKeyDown={beep}
                    placeholder="Escreva sua mensagem…"
                    required
                  />
                </label>
                <div className="term-actions">
                  <a
                    className={canSend ? "term-send" : "term-send is-disabled"}
                    href={canSend ? mailtoHref : undefined}
                    aria-disabled={!canSend}
                    onClick={onSend}
                  >
                    <i className="fas fa-paper-plane" aria-hidden="true" />
                    Enviar mensagem
                  </a>
                  <button
                    type="button"
                    className="term-send term-send-ghost"
                    onClick={async () => {
                      const ok = await copyText(
                        `${composed.subject}\n\n${composed.body}`
                      );
                      if (ok) announce("Mensagem copiada");
                    }}
                  >
                    <i className="far fa-copy" aria-hidden="true" />
                    Copiar mensagem
                  </button>
                  <a
                    className="term-send term-send-alt"
                    href={waHref}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-whatsapp" aria-hidden="true" />
                    WhatsApp
                  </a>
                </div>
              </form>
            )}

            {/* interactive prompt */}
            {autoDone && (
              <form
                className="term-line term-input-line"
                onSubmit={submitInput}
              >
                <Prompt />{" "}
                <input
                  ref={inputRef}
                  className="term-input"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={beep}
                  aria-label="Digite um comando"
                  autoComplete="off"
                  autoCapitalize="off"
                  spellCheck={false}
                />
              </form>
            )}
          </div>
        </div>

        <div className="visually-hidden" role="status" aria-live="polite">
          {live}
        </div>
      </div>
    </Fade>
  );
}
