// Skeleton.tsx
import React from 'react';

const Skeleton: React.FC = () => {
  return (
    <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 animate-pulse">
      <div className="flex justify-between items-center mb-5">
        <div className="bg-gray-300 dark:bg-gray-600 h-6 w-24 rounded"></div>
        <div className="bg-gray-300 dark:bg-gray-600 h-6 w-16 rounded"></div>
      </div>
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-3/4 mb-4"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-5/6 mb-4"></div>
      <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-2/3 mb-4"></div>
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center space-x-4">
          <div className="w-10 h-10 bg-gray-300 dark:bg-gray-600 rounded-full"></div>
          <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-24"></div>
        </div>
        <div className="h-6 bg-gray-300 dark:bg-gray-600 rounded w-16"></div>
      </div>
    </div>
  );
};

export default Skeleton;
