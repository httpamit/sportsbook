import React from "react";
import { render, screen } from "@testing-library/react";
import MatchCard from "./index";
import "@testing-library/jest-dom";

const mockProps = {
  id: "match-1",
  league: "Premier League",
  date: "Feb 2, 00:00",
  team1: "Chelsea",
  team2: "Liverpool",
  logo1: "/team1.png",
  logo2: "/team2.png",
  odds: { one: 1.87, x: 3.25, two: 2.1 },
};

describe("MatchCard", () => {
  it("renders league, date, teams, and odds", () => {
    render(<MatchCard {...mockProps} />);

    expect(screen.getByText("Premier League")).toBeInTheDocument();
    expect(screen.getByText("Feb 2, 00:00")).toBeInTheDocument();
    expect(screen.getByText("Chelsea")).toBeInTheDocument();
    expect(screen.getByText("Liverpool")).toBeInTheDocument();

    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("1.87")).toBeInTheDocument();
    expect(screen.getByText("X")).toBeInTheDocument();
    expect(screen.getByText("3.25")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("2.1")).toBeInTheDocument();
  });

  it("applies highlight classes when isHighlighted is true", () => {
    const { container } = render(<MatchCard {...mockProps} isHighlighted />);
    const card = container.firstChild;
    expect(card).toHaveClass("animate-pulse");
    expect(card).toHaveClass("shadow-[0_0_20px_#1BB96B]");
  });

  it("does not apply highlight classes when isHighlighted is false", () => {
    const { container } = render(
      <MatchCard {...mockProps} isHighlighted={false} />
    );
    const card = container.firstChild;
    expect(card).not.toHaveClass("animate-pulse");
    expect(card).not.toHaveClass("shadow-[0_0_20px_#1BB96B]");
  });
});
