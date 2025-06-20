"use client";
import { useEffect, useRef, useState } from "react";

export type MatchOdds = {
  id: string;
  league: string;
  date: string;
  team1: string;
  team2: string;
  logo1: string;
  logo2: string;
  odds: {
    one: number;
    x: number;
    two: number;
  };
};

export default function useOddsUpdater(initialData: MatchOdds[]) {
  const [matches, setMatches] = useState<MatchOdds[]>(initialData);
  const [highlighted, setHighlighted] = useState<Record<string, string>>({});
  const matchesRef = useRef(matches); // useRef to keep latest value

  // Keep ref updated
  useEffect(() => {
    matchesRef.current = matches;
  }, [matches]);

  useEffect(() => {
    const interval = setInterval(() => {
      const matches = matchesRef.current;
      const randomIndex = Math.floor(Math.random() * matches.length);
      const randomKey = ["one", "x", "two"][
        Math.floor(Math.random() * 3)
      ] as keyof MatchOdds["odds"];

      const updatedMatches = matches.map((match, index) => {
        if (index === randomIndex) {
          return {
            ...match,
            odds: {
              ...match.odds,
              [randomKey]: +(Math.random() * (3 - 1.5) + 1.5).toFixed(2),
            },
          };
        }
        return match;
      });

      const newKey = `${matches[randomIndex].id}-${randomKey}`;
      setMatches(updatedMatches);
      setHighlighted({ [newKey]: "highlight" });

      // Remove highlight after 1 second
      setTimeout(() => {
        setHighlighted({});
      }, 1000);
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return { matches, highlighted };
}
