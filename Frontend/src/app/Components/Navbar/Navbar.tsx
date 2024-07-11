// src/app/Components/Navbar/Navbar.tsx
"use client";
import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

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

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModals();
    }
  };

  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isSearchOpen]);

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-lg font-semibold">MyWebsite</div>
        <div className="hidden md:flex space-x-4">
          <Link
            to="/"
            className="text-white hover:text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner"
          >
            Home
          </Link>
          <Link
            to="/blogs"
            className="text-white hover:text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner"
          >
            Blogs
          </Link>
          <Link
            to="/forms"
            className="text-white hover:text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner"
          >
            Forms
          </Link>
          <Link
            to="/gallery"
            className="text-white hover:text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner"
          >
            Gallery
          </Link>
        </div>

        <div className="hidden md:flex items-center relative">
          <input
            type="text"
            placeholder="Search..."
            className="px-4 py-2 pl-10 rounded-md text-black"
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
          <button
            onClick={toggleSearch}
            className="text-white focus:outline-none mr-2 transform active:scale-95 active:shadow-inner"
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
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
          <div
            ref={modalRef}
            className="relative backdrop-blur-sm bg-white/50 rounded-lg p-8 max-w-xs w-full"
          >
            <button
              onClick={closeModals}
              className="absolute top-2 right-2 text-gray-800 focus:outline-none"
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
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            </button>
            {isSearchOpen && (
              <div className="mt-4 relative">
                <svg
                  className="w-6 h-6 absolute left-3 top-2 text-gray-400"
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
                <input
                  type="text"
                  placeholder="Search..."
                  className="px-10 py-2 rounded-md text-black w-full"
                />
              </div>
            )}
            {isMenuOpen && (
              <div className="space-y-4">
                <Link
                  to="/"
                  className="block text-gray-800 hover:text-gray-600"
                  onClick={closeModals}
                >
                  Home
                </Link>
                <Link
                  to="/blogs"
                  className="block text-gray-800 hover:text-gray-600"
                  onClick={closeModals}
                >
                  Blogs
                </Link>
                <Link
                  to="/forms"
                  className="block text-gray-800 hover:text-gray-600"
                  onClick={closeModals}
                >
                  Forms
                </Link>
                <Link
                  to="/gallery"
                  className="block text-gray-800 hover:text-gray-600"
                  onClick={closeModals}
                >
                  Gallery
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
