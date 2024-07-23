import React from 'react';
import { Link } from 'react-router-dom';
import CategoryIcon from '@mui/icons-material/Category';

interface CategoriesProps {
  categories: string[];
}

const Categories: React.FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <CategoryIcon className="mr-2" /> Categories
      </h3>
      <ul className="space-y-2">
        {categories.map(category => (
          <li key={category}>
            <Link to={`/categories/${category}`} className="text-primary-600 dark:text-primary-400 hover:underline">
              #{category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
