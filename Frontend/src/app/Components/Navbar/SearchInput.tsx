import React from 'react';

const SearchInput = () => {
  return (
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
  );
};

export default SearchInput;
