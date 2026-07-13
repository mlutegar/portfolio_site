import React from "react";
import {render, screen} from "@testing-library/react";
import EducationCard from "./EducationCard";

const school = {
  schoolName: "IBMEC",
  logo: "/logo.webp",
  subHeader: "Engenharia da Computação",
  duration: "2022 - 2026 (Previsão)",
  desc: "Descrição de teste.",
  descBullets: ["Bullet A", "Bullet B"]
};

it("renders the full school name (no clipping) and its details", () => {
  render(<EducationCard school={school} />);

  // Heading carries the complete institution name.
  const heading = screen.getByRole("heading", {name: "IBMEC"});
  expect(heading).toBeInTheDocument();

  expect(screen.getByText("Engenharia da Computação")).toBeInTheDocument();
  expect(screen.getByText("2022 - 2026 (Previsão)")).toBeInTheDocument();
  expect(screen.getByText("Bullet A")).toBeInTheDocument();
  expect(screen.getByText("Bullet B")).toBeInTheDocument();
});

it("renders the institution logo with alt text", () => {
  render(<EducationCard school={school} />);
  expect(screen.getByAltText("IBMEC")).toHaveAttribute("loading", "lazy");
});
