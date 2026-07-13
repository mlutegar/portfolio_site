// Global test setup — extends Vitest's expect with jest-dom matchers
// (toBeInTheDocument, toHaveAttribute, etc.).
import "@testing-library/jest-dom";

// jsdom não implementa alguns recursos usados por componentes (Header etc.).
// Fornecemos stubs mínimos para evitar erros/ruído nos testes.
if (typeof window !== "undefined") {
  if (!window.matchMedia) {
    window.matchMedia = query => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: () => {},
      removeEventListener: () => {},
      addListener: () => {},
      removeListener: () => {},
      dispatchEvent: () => false
    });
  }
  // jsdom loga "Not implemented: window.scrollTo"; no-op silencia o ruído.
  window.scrollTo = window.scrollTo || (() => {});
}
