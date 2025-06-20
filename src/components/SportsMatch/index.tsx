"use client";

import React from "react";
import MatchCard from "./MatchCard";
import useOddsUpdater, { MatchOdds } from "./hooks/useOddsUpdater";

const matchData: MatchOdds[] = [
  {
    id: "1",
    league: "Premier League",
    date: "Feb 2, 00:00",
    team1: "Chelsea",
    team2: "Liverpool",
    logo1: "/assets/team-1.svg",
    logo2: "/assets/team-2.svg",
    odds: { one: 1.87, x: 1.87, two: 1.87 },
  },
  {
    id: "2",
    league: "Premier League",
    date: "Feb 2, 00:00",
    team1: "Chelsea",
    team2: "Liverpool",
    logo1: "/assets/team-1.svg",
    logo2: "/assets/team-2.svg",
    odds: { one: 1.87, x: 1.87, two: 1.87 },
  },
  {
    id: "3",
    league: "Premier League",
    date: "Feb 2, 00:00",
    team1: "Chelsea",
    team2: "Liverpool",
    logo1: "/assets/team-1.svg",
    logo2: "/assets/team-2.svg",
    odds: { one: 1.87, x: 1.87, two: 1.87 },
  },
  {
    id: "4",
    league: "Premier League",
    date: "Feb 2, 00:00",
    team1: "Chelsea",
    team2: "Liverpool",
    logo1: "/assets/team-1.svg",
    logo2: "/assets/team-2.svg",
    odds: { one: 1.87, x: 1.87, two: 1.87 },
  },
];

export default function SportsMatchWrapper() {
  const { matches, highlighted } = useOddsUpdater(matchData);
  return (
    <section className="max-w-[1280px] mx-auto relative lg:-top-13">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {matches.map((match) => {
          const baseId = match.id;
          const isHighlighted =
            highlighted?.[`${baseId}-one`] === "highlight" ||
            highlighted?.[`${baseId}-x`] === "highlight" ||
            highlighted?.[`${baseId}-two`] === "highlight";

          return (
            <MatchCard key={baseId} {...match} isHighlighted={isHighlighted} />
          );
        })}
      </div>
    </section>
  );
}
