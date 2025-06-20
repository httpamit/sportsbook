import React from "react";
import MenuItems from "./MenuItems";

type Props = {
  isOpen: boolean;
  toggleMenu: () => void;
};

export default function MobileMenu({ isOpen, toggleMenu }: Props) {
  return (
    <>
      <aside
        className={`fixed top-0 left-0 h-full w-[250px] bg-[#0D0F1A] p-6 transition-transform duration-300 z-50 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ul className="flex flex-col gap-4">
          <MenuItems />
        </ul>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </>
  );
}
