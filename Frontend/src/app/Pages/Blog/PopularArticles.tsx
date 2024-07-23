import React from 'react';
import { Link } from 'react-router-dom';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

interface Article {
  id: number;
  title: string;
}

interface PopularArticlesProps {
  articles: Article[];
}

const PopularArticles: React.FC<PopularArticlesProps> = ({ articles }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <TrendingUpIcon className="mr-2" /> Popular Articles
      </h3>
      <ul className="space-y-4">
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`} className="text-primary-600 dark:text-primary-400 hover:underline">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularArticles;
