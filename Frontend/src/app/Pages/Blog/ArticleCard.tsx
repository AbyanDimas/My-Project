import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mood from '@mui/icons-material/Mood';
import ThumbUp from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SentimentSatisfied from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfied from '@mui/icons-material/SentimentVerySatisfied';
import SentimentDissatisfied from '@mui/icons-material/SentimentDissatisfied';

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  authorImage: string;
  category: string;
  date: string;
  imageUrl: string;
}

interface ArticleCardProps {
  article: Article;
  liked: boolean;
  likesCount: number;
  onLikeClick: (articleId: number) => void;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article, liked, likesCount, onLikeClick }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [emojiIndex, setEmojiIndex] = useState(0);
  const [isShareMenuOpen, setIsShareMenuOpen] = useState(false);
  const emojis = [<Mood />, <SentimentSatisfied />, <SentimentVerySatisfied />, <SentimentDissatisfied />];

  const handleClick = (callback: (articleId: number) => void, articleId: number) => {
    setIsClicked(true);
    callback(articleId);
    setTimeout(() => setIsClicked(false), 200);
  };

  const handleEmojiClick = () => {
    setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
  };

  const shareOptions = [
    {
      platform: 'Facebook',
      url: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}articles/${article.id}`,
    },
    {
      platform: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${window.location.href}articles/${article.id}&text=${article.title}`,
    },
    {
      platform: 'LinkedIn',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}articles/${article.id}&title=${article.title}`,
    },
    {
      platform: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=${article.title} ${window.location.href}articles/${article.id}`,
    },
  ];

  return (
    <div key={article.id} className="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      <img 
        src={article.imageUrl} 
        alt={article.title} 
        className="w-full h-48 object-cover rounded-t-lg" 
      />
      <div className="p-4">
        <div className="flex justify-between items-center mb-3 text-gray-500 dark:text-gray-400">
          <span className="text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:text-primary-800">
            #{article.category}
          </span>
          <span className="text-xs">{article.date}</span>
        </div>
        <h2 className="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          <Link to={`/articles/${article.id}`}>{article.title}</Link>
        </h2>
        <p className="mb-3 font-light text-gray-500 dark:text-gray-400">
          {article.content.substring(0, 60)}...
        </p>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img
              className="w-6 h-6 rounded-full"
              src={article.authorImage}
              alt={`${article.author} avatar`}
            />
            <span className="font-medium text-gray-900 dark:text-white text-sm">{article.author}</span>
          </div>
          <Link
            to={`/articles/${article.id}`}
            className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline text-sm"
          >
            Read more
            <svg
              className="ml-2 w-3 h-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </div>
      </div>
      <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
        <div className="flex space-x-4">
          <div onClick={handleEmojiClick} className="cursor-pointer">
            {emojis[emojiIndex]}
          </div>
          <div className="flex items-center space-x-1">
            <ThumbUp
              className={`cursor-pointer ${liked ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'} hover:text-red-600 dark:hover:text-red-500`}
              onClick={() => handleClick(onLikeClick, article.id)}
            />
            <span className="text-gray-500 dark:text-gray-400">{likesCount}</span>
          </div>
          <div className="relative">
            <ShareIcon
              className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-500"
              onClick={() => setIsShareMenuOpen(!isShareMenuOpen)}
            />
            {isShareMenuOpen && (
              <div className="absolute top-0 left-10 mt-8 p-2 bg-white border rounded shadow-md flex flex-col space-y-2 z-10">
                {shareOptions.map((option) => (
                  <a
                    key={option.platform}
                    href={option.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                  >
                    {option.platform}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
        <CommentIcon className="text-blue-500 dark:text-blue-400 cursor-pointer hover:text-blue-600 dark:hover:text-blue-500" />
      </div>
    </div>
  );
};

export default ArticleCard;
