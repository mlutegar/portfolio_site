import {useEffect, useState} from "react";

/**
 * Observa uma lista de ids de seção e devolve o id da seção atualmente ativa
 * (a primeira visível na ordem da página). Usa IntersectionObserver com uma
 * linha de disparo logo abaixo da barra fixa.
 *
 * @param {string[]} ids       ids das seções, na ordem em que aparecem.
 * @param {object}   [options]
 * @param {string}   [options.rootMargin]  margem do observer (default compensa a barra).
 * @returns {string} id da seção ativa ("" enquanto nada foi determinado).
 */
export function useScrollSpy(ids, options = {}) {
  const {rootMargin = "-88px 0px -55% 0px"} = options;
  const [activeId, setActiveId] = useState("");
  // Chave estável para deps (a lista pode ter identidade nova a cada render).
  const key = ids.join(",");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return undefined;
    const idList = key ? key.split(",") : [];
    const els = idList
      .map(id => document.getElementById(id))
      .filter(Boolean);
    if (els.length === 0) return undefined;

    const visible = new Set();
    const pickActive = () => {
      const current = idList.find(id => visible.has(id));
      if (current) setActiveId(current);
    };
    const obs = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        pickActive();
      },
      {rootMargin, threshold: [0, 0.25, 0.6]}
    );
    els.forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, [key, rootMargin]);

  return activeId;
}

export default useScrollSpy;
