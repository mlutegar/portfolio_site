import React, {Suspense, lazy, useEffect, useLayoutEffect} from "react";
import {BrowserRouter, Routes, Route, useLocation} from "react-router-dom";
import {HelmetProvider} from "react-helmet-async";
import "./App.scss";
import Main from "./containers/Main";
import {StyleProvider} from "./contexts/StyleContext";
import {useLocalStorage} from "./hooks/useLocalStorage";

// Code-split the case-study route so it isn't part of the initial bundle.
const CaseStudy = lazy(() => import("./containers/caseStudy/CaseStudy"));

// Reseta o scroll para o topo a cada mudança de rota. useLayoutEffect roda
// antes do paint, evitando o "flash" na posição antiga; scrollRestoration
// manual impede o browser de restaurar a posição anterior no mobile.
function ScrollToTop() {
  const {pathname} = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "auto"});
  }, [pathname]);
  return null;
}

function App() {
  const [isDark, setIsDark] = useLocalStorage("isDark", true);
  const changeTheme = () => setIsDark(!isDark);

  // Keep <html> (used by the anti-flash script) and the mobile browser UI bar
  // in sync with the active theme.
  // Impede a restauração automática de scroll do browser entre navegações
  // (principal causa de páginas abrindo "no fim" no mobile).
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark-mode", isDark);
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) {
      themeColor.setAttribute("content", isDark ? "#0f172a" : "#ffffff");
    }
  }, [isDark]);

  return (
    <div className={isDark ? "dark-mode" : undefined}>
      <HelmetProvider>
        <StyleProvider value={{isDark: isDark, changeTheme: changeTheme}}>
          <BrowserRouter
            basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}
            future={{v7_startTransition: true, v7_relativeSplatPath: true}}
          >
            <ScrollToTop />
            <Suspense fallback={null}>
              <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/projeto/:slug" element={<CaseStudy />} />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </StyleProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
