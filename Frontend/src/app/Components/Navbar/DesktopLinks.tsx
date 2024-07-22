import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SchoolIcon from '@mui/icons-material/School';

const DesktopLinks = () => {
  return (
    <div className="hidden md:flex space-x-4">
      <Link
        to="/"
        className="text-white hover:text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner flex items-center"
      >
        <HomeIcon className="mr-1" />
        Home
      </Link>
      <Link
        to="/blogs"
        className="text-white hover:text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner flex items-center"
      >
        <ArticleIcon className="mr-1" />
        Blogs
      </Link>
      <Link
        to="/forms"
        className="text-white hover:text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner flex items-center"
      >
        <AssignmentIcon className="mr-1" />
        Forms
      </Link>
      <Link
        to="/gallery"
        className="text-white hover:text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner flex items-center"
      >
        <PhotoLibraryIcon className="mr-1" />
        Gallery
      </Link>
      <Link
        to="/jurusan"
        className="text-white hover:text-blue-500 hover:bg-blue-100 transition duration-300 ease-in-out p-2 rounded-full transform active:scale-95 active:shadow-inner flex items-center"
      >
        <SchoolIcon className="mr-1" />
        Jurusan
      </Link>
      <DropdownMenu />
    </div>
  );
};

export default DesktopLinks;
