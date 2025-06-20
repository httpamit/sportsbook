"use client";

import React, { useState } from "react";
import Logo from "./Logo";
import MenuItems from "./MenuItems";
import LanguageButton from "./LanguageButton";
import AuthButtons from "./AuthButtons";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-[#130D25] text-white text-sm w-full">
      <div className="max-w-[1280px] w-full mx-auto flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden md:flex">
            <MenuItems />
          </nav>
        </div>

        <div className="flex items-center gap-2">
          <LanguageButton />
          <AuthButtons />
          <div className="md:hidden ml-2">
            <Hamburger isOpen={menuOpen} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>

      <MobileMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
}
