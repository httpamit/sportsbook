"use client";
import { useEffect, useRef, useState } from "react";
import { getRandomIndex, getRandomOddKey, getUpdatedMatches } from "./utils";

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

const HIGHLIGHT_DURATION = 1000;
const DEFAULT_INTERVAL = 5000;

export default function useOddsUpdater(
  initialData: MatchOdds[],
  intervalMs: number = DEFAULT_INTERVAL
) {
  const [matches, setMatches] = useState<MatchOdds[]>(initialData);
  const [highlighted, setHighlighted] = useState<Record<string, string>>({});
  const matchesRef = useRef(matches);

  useEffect(() => {
    matchesRef.current = matches;
  }, [matches]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentMatches = matchesRef.current;
      const index = getRandomIndex(currentMatches.length);
      const key = getRandomOddKey();

      const updated = getUpdatedMatches(currentMatches, index, key);
      const highlightKey = `${updated[index].id}-${key}`;

      setMatches(updated);
      setHighlighted({ [highlightKey]: "highlight" });

      setTimeout(() => {
        setHighlighted({});
      }, HIGHLIGHT_DURATION);
    }, intervalMs);

    return () => clearInterval(interval);
  }, [intervalMs]);

  return { matches, highlighted };
}
