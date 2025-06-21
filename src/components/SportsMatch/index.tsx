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
    <section className="w-full relative lg:-top-13">
      <div className="max-w-[1280px] w-full mx-auto px-4 sm:px-6 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {matches.map((match) => {
            const baseId = match.id;
            const isHighlighted =
              highlighted?.[`${baseId}-one`] === "highlight" ||
              highlighted?.[`${baseId}-x`] === "highlight" ||
              highlighted?.[`${baseId}-two`] === "highlight";

            return (
              <MatchCard
                key={baseId}
                {...match}
                isHighlighted={isHighlighted}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
