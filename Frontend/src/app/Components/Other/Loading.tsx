import React from 'react';

const Loading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-400"></div>
      </div>
      <div className="text-lg font-semibold">
        <span className="animate-pulse">Loading</span>
        <span className="animate-pulse delay-200">.</span>
        <span className="animate-pulse delay-400">.</span>
        <span className="animate-pulse delay-600">.</span>
      </div>
    </div>
  );
};

export default Loading;
