import React from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default function Hamburger({ isOpen, toggleMenu }: Props) {
  const Icon = isOpen ? XMarkIcon : Bars3Icon;

  return (
    <button
      onClick={toggleMenu}
      aria-label="Toggle menu"
      className="p-2 rounded-md hover:bg-white/10 transition"
    >
      <Icon className="h-6 w-6 text-white" />
    </button>
  );
}
