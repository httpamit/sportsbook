import React from "react";
import Image from "next/image";
import OddButton from "./OddButton";

type Props = {
  id: string;
  league: string;
  date: string;
  team1: string;
  team2: string;
  logo1: string;
  logo2: string;
  odds: { one: number; x: number; two: number };
  isHighlighted?: boolean;
};

export default function MatchCard({
  league,
  date,
  team1,
  team2,
  logo1,
  logo2,
  odds,
  isHighlighted,
}: Props) {
  const { one, x, two } = odds;
  return (
    <div
      className={`bg-[#130825] hover:bg-[#0F0A1F] p-6 rounded-lg text-white w-full max-w-sm transition-all duration-300 ${
        isHighlighted ? "shadow-[0_0_20px_#1BB96B] animate-pulse" : ""
      }`}
    >
      {/* League & Date */}
      <div className="flex justify-between text-sm text-gray-400 mb-5">
        <span className="flex items-center gap-1">
          <span className="material-symbols-outlined">sports_soccer</span>
          <span>{league}</span>
        </span>
        <span>{date}</span>
      </div>

      {/* Teams */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col gap-2 items-start">
          <Image src={logo1} alt={team1} width={40} height={40} />
          <span className="font-semibold">{team1}</span>
        </div>
        <span className="text-gray-400 font-medium">VS</span>
        <div className="flex flex-col gap-2 items-end">
          <Image src={logo2} alt={team2} width={40} height={40} />
          <span className="font-semibold">{team2}</span>
        </div>
      </div>

      {/* Odds buttons */}
      <div className="flex justify-between gap-4 text-sm font-medium">
        <OddButton label="1" value={one} />
        <OddButton label="X" value={x} />
        <OddButton label="2" value={two} />
      </div>
    </div>
  );
}
