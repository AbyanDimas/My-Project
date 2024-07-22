// src/app/Components/Navbar/Navbar.tsx
"use client";
import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import DesktopLinks from "./DesktopLinks";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsSearchOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMenuOpen(false);
  };

  const closeModals = () => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
  };

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img 
            src="https://seeklogo.com/images/S/smk-negeri-1-adiwerna-adb-logo-440C1CFDAF-seeklogo.com.png" 
            alt="SMK 1 Adiwerna Logo" 
            className="h-10 mr-2" 
          />
          <span className="text-white text-lg font-semibold">SMK 1 Adiwerna</span>
        </div>
        <DesktopLinks />
        <div className="hidden md:flex items-center relative">
          <DarkModeToggle />
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pl-10 rounded-md text-black ml-4"
          />
          <svg
            className="w-6 h-6 absolute right-3 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-4.35-4.35m2.8-5.4a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z"
            ></path>
          </svg>
        </div>
        <div className="md:hidden flex items-center">
          <DarkModeToggle />
          <button
            onClick={toggleSearch}
            className="text-white focus:outline-none mr-2 transform active:scale-95 active:shadow-inner ml-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m2.8-5.4a8.25 8.25 0 11-16.5 0 8.25 8.25 0 0116.5 0z"
              ></path>
            </svg>
          </button>
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"
                }
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {(isMenuOpen || isSearchOpen) && (
        <MobileMenu
          isMenuOpen={isMenuOpen}
          isSearchOpen={isSearchOpen}
          closeModals={closeModals}
        />
      )}
    </nav>
  );
};

export default Navbar;
