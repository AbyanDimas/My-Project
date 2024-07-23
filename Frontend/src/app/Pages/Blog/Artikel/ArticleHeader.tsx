import React from 'react';

interface ArticleHeaderProps {
  title: string;
  author: string;
  date: string;
}

const ArticleHeader: React.FC<ArticleHeaderProps> = ({ title, author, date }) => {
  return (
    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
      <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        {title}
      </h2>
      <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
        By {author}
      </p>
      <p className="text-sm text-gray-500 dark:text-gray-400">{date}</p>
    </div>
  );
};

export default ArticleHeader;
