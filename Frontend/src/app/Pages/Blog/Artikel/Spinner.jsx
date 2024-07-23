import React from 'react';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="space-x-2 flex">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-400"></div>
      </div>
    </div>
  );
};

export default Spinner;
