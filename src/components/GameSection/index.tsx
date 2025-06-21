import React from "react";
import Games, { GameCard } from "./Games";

const gamesList: GameCard[] = [
  { title: "Fruit Blaze", image: "/assets/game-2.svg", size: "sm" },
  { title: "Zulu Gold", image: "/assets/game-3.svg", size: "sm" },
  { title: "Majestic Safari", image: "/assets/game-1.svg", size: "sm" },
  { title: "Fruit Blaze", image: "/assets/game-2.svg", size: "sm" },
  { title: "Zulu Gold", image: "/assets/game-3.svg", size: "sm" },
  { title: "Greek Legends", image: "/assets/game-4.svg", size: "sm" },
  { title: "Day of Dead", image: "/assets/game-5.svg", size: "sm" },
  { title: "Zeus the Thunderer", image: "/assets/game-6.svg", size: "sm" },
  { title: "Thunderer Gold", image: "/assets/game-7.svg", size: "sm" },
  { title: "Fruit Blaze", image: "/assets/game-2.svg", size: "sm" },
  { title: "Zulu Gold", image: "/assets/game-3.svg", size: "sm" },
  { title: "Zeus the Thunderer", image: "/assets/game-6.svg", size: "sm" },
  { title: "Thunderer Gold", image: "/assets/game-7.svg", size: "sm" },
];

const liveCasinoList: GameCard[] = [
  {
    title: "Fruit Blaze",
    image: "/assets/casino-2.svg",
    size: "lg",
  },
  {
    title: "Zulu Gold",
    image: "/assets/casino-3.svg",
    size: "lg",
  },
  {
    title: "Majestic Safari",
    image: "/assets/casino-1.svg",
    size: "lg",
  },
  {
    title: "Fruit Blaze",
    image: "/assets/casino-2.svg",
    size: "lg",
  },
  {
    title: "Zulu Gold",
    image: "/assets/casino-3.svg",
    size: "lg",
  },
  {
    title: "Greek Legends",
    image: "/assets/casino-4.svg",
    size: "lg",
  },
  {
    title: "Day of Dead",
    image: "/assets/casino-1.svg",
    size: "lg",
  },
  {
    title: "Zeus the Thunderer",
    image: "/assets/casino-3.svg",
    size: "lg",
  },
  {
    title: "Thunderer Gold",
    image: "/assets/casino-4.svg",
    size: "lg",
  },
  {
    title: "Zulu Gold",
    image: "/assets/casino-3.svg",
    size: "lg",
  },
  {
    title: "Zeus the Thunderer",
    image: "/assets/casino-1.svg",
    size: "lg",
  },
  {
    title: "Thunderer Gold",
    image: "/assets/casino-2.svg",
    size: "lg",
  },
];

const GameSection = () => {
  return (
    <section className="max-w-[1280px] mx-auto relative lg:-top-15">
      <Games sectionTitle="Casino" games={gamesList} />
      <Games sectionTitle="Top Rated Games" games={gamesList} />
      <Games sectionTitle="Live Casino" games={liveCasinoList} />
    </section>
  );
};

export default GameSection;
