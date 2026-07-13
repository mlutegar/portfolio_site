import React from "react";
import {render, screen, fireEvent, within} from "@testing-library/react";
import {MemoryRouter} from "react-router-dom";
import Header from "./Header";
import {StyleProvider} from "../../contexts/StyleContext";

// jsdom não implementa matchMedia; o Header o usa (breakpoint desktop + reduce).
beforeAll(() => {
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
});

function renderHeader() {
  const utils = render(
    <MemoryRouter>
      <StyleProvider value={{isDark: true, changeTheme: () => {}}}>
        <Header />
      </StyleProvider>
    </MemoryRouter>
  );
  const checkbox = utils.container.querySelector("#menu-btn");
  const toggle = utils.container.querySelector(".menu-icon");
  const open = () => fireEvent.click(checkbox);
  return {...utils, checkbox, toggle, open};
}

it("renderiza os links de navegação (ex.: Contato)", () => {
  renderHeader();
  expect(screen.getByRole("link", {name: "Contato"})).toBeInTheDocument();
});

it("o botão do menu aponta para o painel via aria-controls", () => {
  const {toggle} = renderHeader();
  const menuId = toggle.getAttribute("aria-controls");
  expect(menuId).toBeTruthy();
  expect(document.getElementById(menuId)).toBeTruthy();
  expect(toggle).toHaveAttribute("aria-expanded", "false");
});

it("abrir o menu marca o painel como dialog modal", () => {
  const {open, toggle} = renderHeader();
  open();
  const dialog = screen.getByRole("dialog");
  expect(dialog).toHaveAttribute("aria-modal", "true");
  expect(toggle).toHaveAttribute("aria-expanded", "true");
});

it("clicar num item fecha o menu", () => {
  const {open} = renderHeader();
  open();
  const dialog = screen.getByRole("dialog");
  fireEvent.click(within(dialog).getByRole("link", {name: "Contato"}));
  // Sem seção alvo no DOM de teste, o handler apenas fecha o menu.
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

it("Esc fecha o menu aberto", () => {
  const {open} = renderHeader();
  open();
  expect(screen.getByRole("dialog")).toBeInTheDocument();
  fireEvent.keyDown(document, {key: "Escape"});
  expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});
