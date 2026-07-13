import React, {useContext, useEffect, useRef} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import {Fade} from "../../components/reveal/Reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  const timelineRef = useRef(null);

  useEffect(() => {
    const el = timelineRef.current;
    if (!el) return undefined;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      el.style.setProperty("--xp-progress", "1");
      return undefined;
    }

    let ticking = false;
    const update = () => {
      ticking = false;
      const rect = el.getBoundingClientRect();
      const anchor = window.innerHeight * 0.6;
      const raw = (anchor - rect.top) / rect.height;
      const progress = Math.min(1, Math.max(0, raw));
      el.style.setProperty("--xp-progress", progress.toFixed(3));
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(update);
      }
    };

    // Só escuta o scroll enquanto a timeline está (ou esteve) visível,
    // evitando cálculos em toda a página quando a seção está fora da tela.
    let listening = false;
    const startListening = () => {
      if (listening) return;
      listening = true;
      window.addEventListener("scroll", onScroll, {passive: true});
      window.addEventListener("resize", onScroll);
    };
    const stopListening = () => {
      if (!listening) return;
      listening = false;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };

    if (typeof IntersectionObserver === "undefined") {
      update();
      startListening();
      return () => stopListening();
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            update();
            startListening();
          } else {
            stopListening();
          }
        });
      },
      {rootMargin: "0px 0px -10% 0px"}
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      stopListening();
    };
  }, []);

  if (workExperiences.display) {
    return (
      <div id="experience">
        <div className="experience-container" id="workExperience">
          <div>
            <Fade bottom duration={800} distance="20px">
              <h2 className="experience-heading">
                <span>Experiências</span>
              </h2>
            </Fade>
            <ol
              ref={timelineRef}
              aria-label="Linha do tempo de experiência profissional"
              className={
                isDark ? "xp-timeline xp-timeline--dark" : "xp-timeline"
              }
            >
              <span className="xp-timeline-fill" aria-hidden="true" />
              {workExperiences.experience.map((card, i) => {
                return (
                  <li
                    className="xp-timeline-item"
                    key={`${card.company}-${card.date}`}
                  >
                    <Fade bottom duration={800} delay={i * 120} distance="24px">
                      <ExperienceCard
                        isDark={isDark}
                        index={i}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets,
                          current: card.current,
                          tech: card.tech
                        }}
                      />
                    </Fade>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
  return null;
}
