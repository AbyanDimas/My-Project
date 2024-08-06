import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import DescriptionIcon from '@mui/icons-material/Description';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ApartmentIcon from '@mui/icons-material/Apartment';
import EditIcon from '@mui/icons-material/Edit';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import MicIcon from '@mui/icons-material/Mic';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import SportsSoccerIcon from '@mui/icons-material/SportsSoccer';
import GroupsIcon from '@mui/icons-material/Groups';
import SchoolIcon from '@mui/icons-material/School';
import EmojiEvents from '@mui/icons-material/EmojiEvents';
import InterpreterMode from '@mui/icons-material/InterpreterMode';
import AssignmentInd from '@mui/icons-material/AssignmentInd';
import Diversity2 from '@mui/icons-material/Diversity2';
import Face5 from '@mui/icons-material/Face5';
import { motion, AnimatePresence } from 'framer-motion';

const SubDropdownMenuSiswa = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute left-full top-0 ml-2 mt-2 w-48 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg py-2 z-30"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to="/ekskul"
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
          >
            <SportsSoccerIcon className="mr-2 text-blue-600" />
            Ekskul
          </Link>
          <Link
            to="/organisasi"
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
          >
            <GroupsIcon className="mr-2 text-green-600" />
            Organisasi
          </Link>
          <Link
            to="/seragam"
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
          >
            <PersonOutlineIcon className="mr-2 text-green-600" />
            Seragam
          </Link>
          <Link
            to="/model-rambut"
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
          >
            <Face5 className="mr-2 text-purple-600" />
            Model Rambut
          </Link>
          <Link
            to="/prestasi-siswa"
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
          >
            <EmojiEvents className="mr-2 text-yellow-600" />
            Prestasi Siswa
          </Link>
          <Link
            to="/podcast"
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
          >
            <MicIcon className="mr-2 text-orange-600" />
            Podcast
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SubDropdownMenu = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute left-full top-0 ml-2 mt-2 w-48 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg py-2 z-30"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to="/lagu-lagu"
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center rounded-t-xl"
          >
            <LibraryMusicIcon className="mr-2 text-blue-600" />
            Lagu Lagu
          </Link>
          <Link
            to="/Visi-Misi"
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center rounded-t-xl"
          >
            <Diversity2 className="mr-2 text-orange-600" />
            Visi Misi
          </Link>
          <Link
            to="/sambutan-kepala-sekolah-tim"
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center rounded-b-xl"
          >
            <MicIcon className="mr-2 text-green-600" />
            Sambutan Kepala Sekolah
          </Link>
          <Link
            to="/tim-sekolah"
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center rounded-b-xl"
          >
            <GroupWorkIcon className="mr-2 text-purple-600" />
            Tim SMKN 1 Adiwerna
          </Link>
          <Link
            to="/penghargaan-sekolah"
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center rounded-b-xl"
          >
            <EmojiEvents className="mr-2 text-yellow-600" />
            Penghargaan Sekolah
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const SubDropdownMenuTentangKami = ({ isOpen, onMouseEnter, onMouseLeave }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.3 }}
          className="absolute left-full top-0 ml-2 mt-2 w-48 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg py-2 z-30"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link
            to="/informasi-sekolah"
            className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
          >
            <SchoolIcon className="mr-2 text-purple-600" />
            Informasi Sekolah
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false);
  const [isTentangKamiSubDropdownOpen, setIsTentangKamiSubDropdownOpen] = useState(false);
  const [isRuangSiswaSubDropdownOpen, setIsRuangSiswaSubDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
    setIsSubDropdownOpen(false);
    setIsTentangKamiSubDropdownOpen(false);
    setIsRuangSiswaSubDropdownOpen(false);
  };

  const handleSubMouseEnter = () => {
    setIsSubDropdownOpen(true);
  };

  const handleSubMouseLeave = () => {
    setIsSubDropdownOpen(false);
  };

  const handleTentangKamiSubMouseEnter = () => {
    setIsTentangKamiSubDropdownOpen(true);
  };

  const handleTentangKamiSubMouseLeave = () => {
    setIsTentangKamiSubDropdownOpen(false);
  };

  const handleRuangSiswaSubMouseEnter = () => {
    setIsRuangSiswaSubDropdownOpen(true);
  };

  const handleRuangSiswaSubMouseLeave = () => {
    setIsRuangSiswaSubDropdownOpen(false);
  };

  return (
    <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <button
        onClick={toggleDropdown}
        className="text-gray-900 bg-gray-100 hover:bg-gray-200 transition duration-300 ease-in-out p-2 rounded-full shadow-md transform active:scale-95 active:shadow-inner flex items-center"
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
      <AnimatePresence>
        {isDropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-56 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg py-2 z-20"
          >
            <div className="relative">
              <div
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center cursor-pointer"
                onMouseEnter={handleTentangKamiSubMouseEnter}
                onMouseLeave={handleTentangKamiSubMouseLeave}
              >
                <DescriptionIcon className="mr-2 text-blue-600" />
                Program Kami
                <svg
                  className="w-4 h-4 inline ml-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
              <SubDropdownMenuTentangKami
                isOpen={isTentangKamiSubDropdownOpen}
                onMouseEnter={handleTentangKamiSubMouseEnter}
                onMouseLeave={handleTentangKamiSubMouseLeave}
              />
            </div>
            <div className="relative">
              <div
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center cursor-pointer"
                onMouseEnter={handleSubMouseEnter}
                onMouseLeave={handleSubMouseLeave}
              >
                <PersonOutlineIcon className="mr-2 text-green-600" />
                Profil
                <svg
                  className="w-4 h-4 inline ml-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
              <SubDropdownMenu
                isOpen={isSubDropdownOpen}
                onMouseEnter={handleSubMouseEnter}
                onMouseLeave={handleSubMouseLeave}
              />
            </div>
            <div className="relative">
              <div
                className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center cursor-pointer"
                onMouseEnter={handleRuangSiswaSubMouseEnter}
                onMouseLeave={handleRuangSiswaSubMouseLeave}
              >
                <InterpreterMode className="mr-2 text-orange-600" />
                Ruang Siswa
                <svg
                  className="w-4 h-4 inline ml-auto"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 5l7 7-7 7"
                  ></path>
                </svg>
              </div>
              <SubDropdownMenuSiswa
                isOpen={isRuangSiswaSubDropdownOpen}
                onMouseEnter={handleRuangSiswaSubMouseEnter}
                onMouseLeave={handleRuangSiswaSubMouseLeave}
              />
            </div>
            <Link
              to="/fasilitas"
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
              onClick={() => setIsDropdownOpen(false)}
            >
              <ApartmentIcon className="mr-2 text-red-600" />
              Fasilitas
            </Link>
            <Link
              to="/forms"
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center rounded-b-xl"
              onClick={() => setIsDropdownOpen(false)}
            >
              <EditIcon className="mr-2 text-purple-600" />
              Kotak Saran
            </Link>
            <Link
              to="/lsp"
              className="block px-4 py-3 text-gray-800 hover:bg-gray-100 transition duration-300 ease-in-out flex items-center rounded-b-xl"
              onClick={() => setIsDropdownOpen(false)}
            >
              <AssignmentInd className="mr-2 text-yellow-600" />
              Lembaga Sertifikasi Profesi (LSP)
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DropdownMenu;
