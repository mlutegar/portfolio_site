import React from "react";
import {render, screen} from "@testing-library/react";
import Publications from "./Publications";
import {StyleProvider} from "../../contexts/StyleContext";
import {publicationsSection} from "../../portfolio";

function renderPublications() {
  return render(
    <StyleProvider value={{isDark: true, changeTheme: () => {}}}>
      <Publications />
    </StyleProvider>
  );
}

it("renders one card per publication", () => {
  const {container} = renderPublications();
  const cards = container.querySelectorAll(".publication-card");
  expect(cards.length).toBe(publicationsSection.publications.length);
});

it("renders each publication title and its DOI link", () => {
  renderPublications();
  publicationsSection.publications.forEach(pub => {
    // título presente
    expect(screen.getByText(pub.title)).toBeInTheDocument();
    // link de DOI apontando para doi.org com o DOI correto
    const doiLink = screen
      .getAllByRole("link", {name: /DOI/i})
      .find(a => a.getAttribute("href") === `https://doi.org/${pub.doi}`);
    expect(doiLink).toBeTruthy();
  });
});

it('marks English titles with lang="en"', () => {
  const {container} = renderPublications();
  const enTitles = container.querySelectorAll('.card-title[lang="en"]');
  expect(enTitles.length).toBeGreaterThan(0);
});

it("injects ScholarlyArticle JSON-LD structured data", () => {
  const {container} = renderPublications();
  const script = container.querySelector('script[type="application/ld+json"]');
  expect(script).toBeTruthy();
  const data = JSON.parse(script.textContent);
  expect(data["@graph"][0]["@type"]).toBe("ScholarlyArticle");
});

it("exposes a BibTeX cite button per card", () => {
  render(
    <StyleProvider value={{isDark: false, changeTheme: () => {}}}>
      <Publications />
    </StyleProvider>
  );
  const buttons = screen.getAllByRole("button", {
    name: /Copiar citação em BibTeX/i
  });
  expect(buttons.length).toBe(publicationsSection.publications.length);
});
