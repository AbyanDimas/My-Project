import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import SchoolIcon from '@mui/icons-material/School';
import InfoIcon from '@mui/icons-material/Info';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import AssignmentIcon from '@mui/icons-material/Assignment';

const MenuLinks = ({ closeModals }: { closeModals: () => void }) => {
  return (
    <div className="space-y-4">
      <Link
        to="/"
        className="block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center"
        onClick={closeModals}
      >
        <HomeIcon className="mr-1" />
        Home
      </Link>
      <Link
        to="/blogs"
        className="block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center"
        onClick={closeModals}
      >
        <ArticleIcon className="mr-1" />
        Blogs
      </Link>
      <Link
        to="/gallery"
        className="block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center"
        onClick={closeModals}
      >
        <PhotoLibraryIcon className="mr-1" />
        Gallery
      </Link>
      <Link
        to="/jurusan"
        className="block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center"
        onClick={closeModals}
      >
        <SchoolIcon className="mr-1" />
        Jurusan
      </Link>
      <Link
        to="/tentang-kami"
        className="block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center"
        onClick={closeModals}
      >
        <InfoIcon className="mr-1" />
        Tentang Kami
      </Link>
      <Link
        to="/profil"
        className="block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center"
        onClick={closeModals}
      >
        <AccountBoxIcon className="mr-1" />
        Profil
      </Link>
      <Link
        to="/fasilitas"
        className="block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center"
        onClick={closeModals}
      >
        <LocalLibraryIcon className="mr-1" />
        Fasilitas
      </Link>
      <Link
        to="/forms"
        className="block text-gray-800 hover:text-gray-600 dark:text-white dark:hover:text-gray-300 flex items-center"
        onClick={closeModals}
      >
        <AssignmentIcon className="mr-1" />
        Forms
      </Link>
    </div>
  );
};

export default MenuLinks;
