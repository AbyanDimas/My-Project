import React from 'react';
import { Link } from 'react-router-dom';
import NewReleasesIcon from '@mui/icons-material/NewReleases';

interface Article {
  id: number;
  title: string;
}

interface RecentArticlesProps {
  articles: Article[];
}

const RecentArticles: React.FC<RecentArticlesProps> = ({ articles }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
        <NewReleasesIcon className="mr-2" /> Recent Articles
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

export default RecentArticles;
