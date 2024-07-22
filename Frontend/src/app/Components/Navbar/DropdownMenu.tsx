import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="text-white hover:text-blue-500 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner flex items-center"
      >
        Lainnya
        <svg
          className="w-4 h-4 inline ml-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
      {isDropdownOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-20">
          <Link
            to="/tentang-kami"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-300 ease-in-out flex items-center"
            onClick={() => setIsDropdownOpen(false)}
          >
            <InfoIcon className="mr-1" />
            Tentang Kami
          </Link>
          <Link
            to="/profil"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-300 ease-in-out flex items-center"
            onClick={() => setIsDropdownOpen(false)}
          >
            <AccountBoxIcon className="mr-1" />
            Profil
          </Link>
          <Link
            to="/fasilitas"
            className="block px-4 py-2 text-gray-800 hover:bg-blue-100 transition duration-300 ease-in-out flex items-center"
            onClick={() => setIsDropdownOpen(false)}
          >
            <LocalLibraryIcon className="mr-1" />
            Fasilitas
          </Link>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
