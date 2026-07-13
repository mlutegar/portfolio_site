import React from "react";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ToggleSwitch from "./ToggleSwitch";
import {StyleProvider} from "../../contexts/StyleContext";

function renderWithStyle(isDark, changeTheme = () => {}) {
  return render(
    <StyleProvider value={{isDark, changeTheme}}>
      <ToggleSwitch />
    </StyleProvider>
  );
}

it("exposes an accessible switch with a descriptive label", () => {
  renderWithStyle(false);
  const toggle = screen.getByRole("switch");
  expect(toggle).toBeInTheDocument();
  expect(toggle).toHaveAttribute("aria-label", "Ativar tema escuro");
  expect(toggle).not.toBeChecked();
});

it("reflects dark state and calls changeTheme on click", async () => {
  const changeTheme = vi.fn();
  renderWithStyle(true, changeTheme);

  const toggle = screen.getByRole("switch");
  expect(toggle).toBeChecked();
  expect(toggle).toHaveAttribute("aria-label", "Ativar tema claro");

  await userEvent.click(toggle);
  expect(changeTheme).toHaveBeenCalledTimes(1);
});
