import { renderHook, act } from "@testing-library/react";
import useOddsUpdater, { MatchOdds } from "./useOddsUpdater";

jest.useFakeTimers();

const mockData: MatchOdds[] = [
  {
    id: "1",
    league: "Premier League",
    date: "Feb 2, 00:00",
    team1: "Chelsea",
    team2: "Liverpool",
    logo1: "chelsea.png",
    logo2: "liverpool.png",
    odds: { one: 1.87, x: 1.87, two: 1.87 },
  },
];

describe("useOddsUpdater hook", () => {
  it("should initialize with initial match data", () => {
    const { result } = renderHook(() => useOddsUpdater(mockData));
    expect(result.current.matches.length).toBe(1);
    expect(result.current.matches[0].team1).toBe("Chelsea");
    expect(result.current.highlighted).toEqual({});
  });

  it("should update one odds value and highlight it every 5 seconds", () => {
    const { result } = renderHook(() => useOddsUpdater(mockData));

    act(() => {
      jest.advanceTimersByTime(5000); // trigger update
    });

    const updatedOdds = result.current.matches[0].odds;
    const changed = Object.values(updatedOdds).some((value) => value !== 1.87);
    expect(changed).toBe(true); // odds should have changed

    const highlightKeys = Object.keys(result.current.highlighted);
    expect(highlightKeys.length).toBe(1); // one highlighted key

    act(() => {
      jest.advanceTimersByTime(1000); // highlight should disappear
    });

    expect(result.current.highlighted).toEqual({});
  });

  it("cleans up the interval on unmount", () => {
    const clearSpy = jest.spyOn(global, "clearInterval");
    const { unmount } = renderHook(() => useOddsUpdater(mockData));

    unmount();
    expect(clearSpy).toHaveBeenCalled();
  });
});
