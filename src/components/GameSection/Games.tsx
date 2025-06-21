"use client";

import React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";

type GameSize = "sm" | "md" | "lg";

export interface GameCard {
  title: string;
  image: string;
  size?: GameSize;
}

interface GameSectionProps {
  sectionTitle: string;
  games: GameCard[];
}

const sizeClassMap = {
  lg: "w-[300] h-[200]",
  sm: "w-[200] h-[300]",
};

// Map width and height to allowed Tailwind classes
const getSizeClasses = (size: GameSize = "md") => sizeClassMap[size];

const Games: React.FC<GameSectionProps> = ({ sectionTitle, games }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true });

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  return (
    <div className="mb-11">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-bold text-white">{sectionTitle}</h2>
        <div className="flex items-center justify-center gap-2">
          <span className="bg-[#130D25] text-xs py-2 px-4 rounded cursor-pointer hover:bg-[#2A253A] transition-colors">
            All Games
          </span>

          <span
            onClick={scrollPrev}
            className="material-symbols-outlined text-[20px] bg-[#130D25] text-white w-8 h-8 flex items-center justify-center rounded cursor-pointer hover:bg-[#2A253A] transition-colors !leading-8 text-center"
          >
            chevron_left
          </span>

          <span
            onClick={scrollNext}
            className="material-symbols-outlined text-[20px] bg-[#130D25] text-white w-8 h-8 flex items-center justify-center rounded cursor-pointer hover:bg-[#2A253A] transition-colors !leading-8 text-center"
          >
            chevron_right
          </span>
        </div>
      </div>

      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4">
          {games.map((game, index) => (
            <div
              key={index}
              className={`relative rounded-xl overflow-hidden group shadow-md shrink-0 ${getSizeClasses(
                game.size
              )}`}
            >
              <Image
                src={game.image}
                alt={game.title}
                fill
                className="object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
