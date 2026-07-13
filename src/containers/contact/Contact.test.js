import React from "react";
import {render, screen, fireEvent, within} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Contact from "./Contact";
import {StyleProvider} from "../../contexts/StyleContext";

function renderContact() {
  return render(
    <StyleProvider value={{isDark: true, changeTheme: () => {}}}>
      <Contact />
    </StyleProvider>
  );
}

// jsdom has no IntersectionObserver, so the intro starts immediately.
// Clicking the terminal body skips the typewriter and flushes the intro.
function skipIntro(container) {
  fireEvent.click(container.querySelector(".term-body"));
}

it("reveals the whatsapp and email channels", () => {
  const {container} = renderContact();
  skipIntro(container);

  const phone = screen.getByText("(21) 99879-5887").closest("a");
  expect(phone).toHaveAttribute("href", expect.stringContaining("wa.me"));

  const email = screen.getByText("mlutegar@gmail.com").closest("a");
  expect(email).toHaveAttribute("href", "mailto:mlutegar@gmail.com");
});

it("copies a value to the clipboard", async () => {
  const writeText = vi.fn().mockResolvedValue();
  Object.defineProperty(navigator, "clipboard", {
    value: {writeText},
    configurable: true
  });

  const {container} = renderContact();
  skipIntro(container);

  await userEvent.click(screen.getByRole("button", {name: /Copiar e-mail/i}));
  expect(writeText).toHaveBeenCalledWith("mlutegar@gmail.com");
});

it("responds to an unknown command", async () => {
  const {container} = renderContact();
  skipIntro(container);

  await userEvent.type(
    screen.getByLabelText("Digite um comando"),
    "banana{enter}"
  );

  expect(
    await screen.findByText(/comando não encontrado: banana/)
  ).toBeInTheDocument();
});

it("shows help output", async () => {
  const {container} = renderContact();
  skipIntro(container);

  await userEvent.type(
    screen.getByLabelText("Digite um comando"),
    "help{enter}"
  );
  expect(await screen.findByText(/mostra esta lista/)).toBeInTheDocument();
});

it("opens the form via `send` and builds a mailto link", async () => {
  const {container} = renderContact();
  skipIntro(container);

  await userEvent.type(
    screen.getByLabelText("Digite um comando"),
    "send{enter}"
  );

  const message = await screen.findByPlaceholderText(/Escreva sua mensagem/);
  fireEvent.change(message, {target: {value: "Ola Michel"}});

  const sendLink = screen.getByText("Enviar mensagem").closest("a");
  const href = sendLink.getAttribute("href");
  expect(href).toMatch(/^mailto:mlutegar@gmail.com\?/);
  expect(href).toContain(encodeURIComponent("Ola Michel"));
});

it("marks an invalid email", async () => {
  const {container} = renderContact();
  skipIntro(container);

  await userEvent.type(
    screen.getByLabelText("Digite um comando"),
    "send{enter}"
  );

  const form = container.querySelector(".term-form");
  fireEvent.change(within(form).getByPlaceholderText(/exemplo/), {
    target: {value: "nope"}
  });
  expect(await within(form).findByText(/inválido/)).toBeInTheDocument();
});
