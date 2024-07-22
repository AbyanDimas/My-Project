import React, { useState } from 'react';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface Category {
  name: string;
  description: string;
}

const categoriesSet1: Category[] = [
  { name: 'Ceremonies', description: 'School ceremonies and formal events.' },
  { name: 'School Activities', description: 'Day-to-day school activities and special programs.' },
  { name: 'Orientation (MPLS)', description: 'Introduction and orientation activities for new students.' },
  { name: 'Competitions', description: 'Various competitions and contests held at school.' },
];

const categoriesSet2: Category[] = [
  { name: 'Workshops', description: 'Educational and extracurricular workshops.' },
  { name: 'Field Trips', description: 'Educational trips and excursions.' },
  { name: 'Sports Events', description: 'Various sports activities and tournaments.' },
  { name: 'Cultural Fests', description: 'Celebration of different cultures and traditions.' },
];

const CategoriesSection: React.FC = () => {
  const [currentSet, setCurrentSet] = useState<number>(1);
  const [expanded, setExpanded] = useState<boolean>(false);

  const categories = expanded ? [...categoriesSet1, ...categoriesSet2] : currentSet === 1 ? categoriesSet1 : categoriesSet2;

  const handlePrev = () => {
    setCurrentSet(currentSet === 1 ? 2 : 1);
  };

  const handleNext = () => {
    setCurrentSet(currentSet === 1 ? 2 : 1);
  };

  const handleExpand = () => {
    setExpanded(true);
  };

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Categories</h2>
      <div className="flex justify-center items-center mb-4 space-x-4">
        <button
          onClick={handlePrev}
          className="hidden lg:flex bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-300 items-center"
        >
          <ArrowBackIosIcon />
        </button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-4">
          {categories.map((category, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-4">{category.name}</h3>
              <p className="text-gray-700">{category.description}</p>
            </div>
          ))}
        </div>
        <button
          onClick={handleNext}
          className="hidden lg:flex bg-blue-500 text-white p-3 rounded-full hover:bg-blue-600 transition duration-300 items-center"
        >
          <ArrowForwardIosIcon />
        </button>
      </div>
      <div className="flex justify-center mt-12 hidden lg:flex">
        <div className="flex space-x-2">
          <span
            className={`h-3 w-3 rounded-full ${currentSet === 1 ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></span>
          <span
            className={`h-3 w-3 rounded-full ${currentSet === 2 ? 'bg-blue-500' : 'bg-gray-300'}`}
          ></span>
        </div>
      </div>
      {!expanded && (
        <div className="flex justify-center mt-4 lg:hidden">
          <button
            onClick={handleExpand}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition duration-300"
          >
            Perluas
          </button>
        </div>
      )}
    </div>
  );
};

export default CategoriesSection;
