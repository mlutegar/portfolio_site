import React from "react";
import {render, screen, waitFor} from "@testing-library/react";
import Profile from "./Profile";
import {openSource} from "../../portfolio";
import {StyleProvider} from "../../contexts/StyleContext";

function renderProfile() {
  return render(
    <StyleProvider value={{isDark: true, changeTheme: () => {}}}>
      <Profile />
    </StyleProvider>
  );
}

// Profile renders the terminal-style <Contact /> whenever the GitHub card
// isn't shown. The contact heading renders immediately (unlike the terminal
// input, which only appears after the typewriter intro), so use it as proof.
const contactRendered = () => screen.queryByText(/Entre em Contato/i);

// openSource is a shared object; snapshot and restore it around each test so
// mutations inside Profile (it flips showGithubProfile to "false" on failure)
// don't leak between tests.
let saved;
beforeEach(() => {
  saved = {...openSource};
});
afterEach(() => {
  Object.assign(openSource, saved);
  vi.restoreAllMocks();
});

it("renders Contact and never fetches when the section is hidden", () => {
  openSource.display = false;
  const fetchSpy = vi.spyOn(global, "fetch");

  renderProfile();

  expect(contactRendered()).toBeInTheDocument();
  expect(fetchSpy).not.toHaveBeenCalled();
});

it("falls back to Contact without throwing when profile.json is missing", async () => {
  openSource.display = true;
  openSource.showGithubProfile = "true";
  vi.spyOn(global, "fetch").mockResolvedValue({ok: false, status: 404});
  vi.spyOn(console, "error").mockImplementation(() => {});

  renderProfile();

  await waitFor(() => expect(contactRendered()).toBeInTheDocument());
  expect(console.error).toHaveBeenCalled();
});
