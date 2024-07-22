import React from 'react';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

const Error = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-white to-gray-200">
      <div className="bg-white/30 backdrop-blur-lg p-8 rounded-xl shadow-lg text-center max-w-md mx-auto">
        <ErrorOutlineIcon style={{ fontSize: 80, color: '#ff3b30' }} />
        <h1 className="text-3xl font-semibold text-gray-800 mt-4">Something went wrong</h1>
        <p className="text-lg text-gray-600 mt-2 mb-6">
          Please try again later or refresh the page.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition duration-200"
        >
          Reload
        </button>
      </div>
    </div>
  );
};

export default Error;
