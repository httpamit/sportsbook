import { MatchOdds } from "./useOddsUpdater";

export const ODDS_KEYS: (keyof MatchOdds["odds"])[] = ["one", "x", "two"];

/**
 * Returns a random index based on array length
 */
export const getRandomIndex = (length: number): number =>
  Math.floor(Math.random() * length);

/**
 * Returns a random key from odds keys
 */
export const getRandomOddKey = (): keyof MatchOdds["odds"] =>
  ODDS_KEYS[Math.floor(Math.random() * ODDS_KEYS.length)];

/**
 * Generates a new odds value between 1.5 and 3.0 (2 decimal places)
 */
export const generateRandomOdd = (): number =>
  +(Math.random() * (3 - 1.5) + 1.5).toFixed(2);

/**
 * Updates odds for a single match at a given index and key
 */
export const getUpdatedMatches = (
  matches: MatchOdds[],
  indexToUpdate: number,
  key: keyof MatchOdds["odds"]
): MatchOdds[] =>
  matches.map((match, index) =>
    index === indexToUpdate
      ? {
          ...match,
          odds: {
            ...match.odds,
            [key]: generateRandomOdd(),
          },
        }
      : match
  );
