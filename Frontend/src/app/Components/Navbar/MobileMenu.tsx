import React, { useRef, useEffect } from 'react';
import MenuLinks from './MenuLinks';
import SearchInput from './SearchInput';

const MobileMenu = ({ isMenuOpen, isSearchOpen, closeModals }: { isMenuOpen: boolean, isSearchOpen: boolean, closeModals: () => void }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModals();
    }
  };

  useEffect(() => {
    if (isMenuOpen || isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen, isSearchOpen]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
      <div
        ref={modalRef}
        className="relative backdrop-blur-sm bg-white/50 dark:bg-black/50 rounded-lg p-8 max-w-xs w-full"
      >
        <button
          onClick={closeModals}
          className="absolute top-2 right-2 text-gray-800 dark:text-white focus:outline-none"
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
        {isSearchOpen && <SearchInput />}
        {isMenuOpen && <MenuLinks closeModals={closeModals} />}
      </div>
    </div>
  );
};

export default MobileMenu;
