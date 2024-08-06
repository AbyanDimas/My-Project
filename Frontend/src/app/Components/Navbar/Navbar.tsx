import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import Newspaper from '@mui/icons-material/Newspaper';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AssignmentIcon from '@mui/icons-material/Assignment';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import DarkModeToggle from './DarkModeToggle';
import DesktopLinks from './DesktopLinks';
import MobileMenu from './MobileMenu';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const location = useLocation();

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

  const isBlogPage = location.pathname === '/blogs';

  return (
    <nav className="bg-gray-800 p-4 fixed w-full z-50 top-0">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="https://seeklogo.com/images/S/smk-negeri-1-adiwerna-adb-logo-440C1CFDAF-seeklogo.com.png" 
              alt="SMK 1 Adiwerna Logo" 
              className="h-10 mr-2 cursor-pointer" 
            />
            <span className="text-white text-lg font-semibold cursor-pointer">SMK 1 Adiwerna</span>
          </Link>
        </div>
        <DesktopLinks />
        <div className="hidden md:flex items-center relative">
          <div className="flex items-center space-x-1 bg-gray-700 p-1 rounded-full">
            <a
              href="https://wa.me/your-whatsapp-number"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-green-500 transition duration-300 ease-in-out p-2 rounded-full flex items-center"
            >
              <WhatsAppIcon />
            </a>
            <a
              href="https://www.instagram.com/your-instagram-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition duration-300 ease-in-out p-2 rounded-full flex items-center"
            >
              <InstagramIcon />
            </a>
            <a
              href="tel:+your-phone-number"
              className="text-white hover:text-blue-500 transition duration-300 ease-in-out p-2 rounded-full flex items-center"
            >
              <PhoneIcon />
            </a>
          </div>
          <DarkModeToggle />
          <Link
            to="/blogs"
            className={`text-white transition duration-300 ease-in-out p-2 rounded-full flex items-center ${isBlogPage ? 'bg-blue-600' : 'hover:text-blue-500'}`}
          >
            <Newspaper />
          </Link>
          <div className="flex items-center ml-4 relative">
            <svg
              className="w-6 h-6 absolute left-2 text-gray-400"
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
              className="px-4 py-2 pl-10 rounded-md text-black w-48"
            />
          </div>
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
              viewBox="0 24 24"
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
