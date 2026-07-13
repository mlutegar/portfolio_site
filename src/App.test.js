import React from "react";
import {render} from "@testing-library/react";
import App from "./App";

beforeAll(() => {
  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn()
    }))
  });
});

it("renders without crashing", () => {
  // Match the router basename (BASE_URL = /portfolio_site/) so the app renders.
  window.history.pushState({}, "", "/portfolio_site/");
  const {unmount} = render(<App />);
  unmount();
});
