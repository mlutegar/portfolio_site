import {useEffect} from "react";

/**
 * Trava o scroll da página enquanto `locked` for true, PRESERVANDO a posição.
 *
 * Usa a técnica `position: fixed` no <body> (com `top: -scrollY`), que evita o
 * salto para o topo do iOS Safari. A classe `no-scroll` (em index.css) aplica o
 * `position: fixed; overflow: hidden`; aqui definimos o `top` inline e, ao
 * destravar, restauramos a posição com `window.scrollTo`.
 */
export function useScrollLock(locked) {
  useEffect(() => {
    if (!locked) return undefined;
    const body = document.body;
    const scrollPos = window.scrollY;
    body.style.top = `-${scrollPos}px`;
    body.classList.add("no-scroll");
    return () => {
      body.classList.remove("no-scroll");
      body.style.top = "";
      window.scrollTo(0, scrollPos);
    };
  }, [locked]);
}

export default useScrollLock;
