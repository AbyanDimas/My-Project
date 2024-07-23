import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import ArticleIcon from '@mui/icons-material/Article';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const HeroSection: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-32 md:h-48 lg:h-56">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="text-center px-4">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">Selamat datang di blog</h1>
        </div>
        <div className="flex space-x-4 mt-4">
          <Link to="/">
            <HomeIcon className="text-white hover:text-gray-300 cursor-pointer" fontSize="large" />
          </Link>
          <Link to="/info">
            <InfoIcon className="text-white hover:text-gray-300 cursor-pointer" fontSize="large" />
          </Link>
          <Link to="/contact">
            <ContactMailIcon className="text-white hover:text-gray-300 cursor-pointer" fontSize="large" />
          </Link>
          <Link to="/blogs">
            <ArticleIcon className="text-white hover:text-gray-300 cursor-pointer" fontSize="large" />
          </Link>
          <Link to="/profile">
            <AccountCircleIcon className="text-white hover:text-gray-300 cursor-pointer" fontSize="large" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
