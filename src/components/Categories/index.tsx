"use client";

import React from "react";
import CategoryCard from "./CategoryCard";
import { CategoryCardProps } from "./types";

const categories: CategoryCardProps[] = [
  {
    title: "Casino",
    icon: <span className="material-symbols-outlined">casino</span>,
    image: "/assets/card-1.svg",
    description:
      "Dive in to our wide range of in-house games, live casino and slots to experience a thrilling casino adventure.",
    backgroundGradient:
      "linear-gradient(to right, rgba(19,13,37,0) 0%, rgba(19,13,37,0.8) 47%, rgba(19,13,37,1) 100%)",
    primaryButton: {
      label: "Casino",
      onClick: () => console.log("Casino Clicked"),
      icon: <span className="material-symbols-outlined">casino</span>,
      variant: "greenLight",
    },
    secondaryButton: {
      label: "Live Casino",
      onClick: () => console.log("Live Casino Clicked"),
      icon: <span className="material-symbols-outlined">live_tv</span>,
      variant: "pink",
    },
  },
  {
    title: "Sport",
    icon: <span className="material-symbols-outlined">casino</span>,
    image: "/assets/card-2.svg",
    description:
      "Dive in to our wide range of in-house games, live casino and slots to experience a thrilling casino adventure.",
    backgroundGradient:
      "linear-gradient(to right, rgba(19,13,37,0) 0%, rgba(19,13,37,0.8) 47%, rgba(19,13,37,1) 100%)",
    primaryButton: {
      label: "Sport",
      onClick: () => console.log("Sport Clicked"),
      icon: <span className="material-symbols-outlined">sports_soccer</span>,
      variant: "greenLight",
    },
    secondaryButton: {
      label: "Live",
      onClick: () => console.log("Live Sport Clicked"),
      icon: <span className="material-symbols-outlined">live_tv</span>,
      variant: "pink",
    },
  },
];

export default function Categories() {
  return (
    <section className="max-w-[1280px] mx-auto relative lg:-top-14">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {categories.slice(0, 2).map((card, idx) => (
          <CategoryCard key={idx} {...card} />
        ))}
      </div>
    </section>
  );
}
