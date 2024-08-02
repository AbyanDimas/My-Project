import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Mood from '@mui/icons-material/Mood';
import ThumbUp from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import ShareIcon from '@mui/icons-material/Share';
import SentimentSatisfied from '@mui/icons-material/SentimentSatisfied';
import SentimentVerySatisfied from '@mui/icons-material/SentimentVerySatisfied';
import SentimentDissatisfied from '@mui/icons-material/SentimentDissatisfied';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import RedditIcon from '@mui/icons-material/Reddit';
import TelegramIcon from '@mui/icons-material/Telegram';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ExpandLess from '@mui/icons-material/ExpandLess';
import { motion } from 'framer-motion';
import { Collapse, IconButton, Tooltip } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

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
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [copySuccess, setCopySuccess] = useState('');

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
      icon: <FacebookIcon className="text-blue-600" style={{ fontSize: 40 }} />
    },
    {
      platform: 'Twitter',
      url: `https://twitter.com/intent/tweet?url=${window.location.href}articles/${article.id}&text=${article.title}`,
      icon: <TwitterIcon className="text-blue-400" style={{ fontSize: 40 }} />
    },
    {
      platform: 'LinkedIn',
      url: `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}articles/${article.id}&title=${article.title}`,
      icon: <LinkedInIcon className="text-blue-700" style={{ fontSize: 40 }} />
    },
    {
      platform: 'WhatsApp',
      url: `https://api.whatsapp.com/send?text=${article.title} ${window.location.href}articles/${article.id}`,
      icon: <WhatsAppIcon className="text-green-600" style={{ fontSize: 40 }} />
    },
    {
      platform: 'Instagram',
      url: `https://www.instagram.com/`,
      icon: <InstagramIcon className="text-pink-500" style={{ fontSize: 40 }} />
    },
    {
      platform: 'Pinterest',
      url: `https://www.pinterest.com/pin/create/button/?url=${window.location.href}articles/${article.id}&media=${article.imageUrl}&description=${article.title}`,
      icon: <PinterestIcon className="text-red-600" style={{ fontSize: 40 }} />
    },
    {
      platform: 'Reddit',
      url: `https://www.reddit.com/submit?url=${window.location.href}articles/${article.id}&title=${article.title}`,
      icon: <RedditIcon className="text-orange-500" style={{ fontSize: 40 }} />
    },
    {
      platform: 'Telegram',
      url: `https://telegram.me/share/url?url=${window.location.href}articles/${article.id}&text=${article.title}`,
      icon: <TelegramIcon className="text-blue-500" style={{ fontSize: 40 }} />
    },
  ];

  const copyToClipboard = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(`${window.location.href}articles/${article.id}`)
        .then(() => {
          setCopySuccess('Link copied!');
          setTimeout(() => setCopySuccess(''), 2000);
        })
        .catch((err) => {
          setCopySuccess('Failed to copy');
        });
    } else {
      setCopySuccess('Clipboard API not supported');
      setTimeout(() => setCopySuccess(''), 2000);
    }
  };
  

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
            <motion.div
              initial={{ scale: 1 }}
              animate={{ scale: isClicked ? 1.5 : 1 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleClick(onLikeClick, article.id)}
            >
              <ThumbUp
                className={`cursor-pointer ${liked ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'} hover:text-red-600 dark:hover:text-red-500`}
              />
            </motion.div>
            <span className="text-gray-500 dark:text-gray-400">{likesCount}</span>
          </div>
          <div className="relative">
            <ShareIcon
              className="text-gray-500 dark:text-gray-400 cursor-pointer hover:text-gray-600 dark:hover:text-gray-500"
              onClick={() => setIsShareMenuOpen(true)}
            />
            {isShareMenuOpen && (
              <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
                <div className="absolute inset-0 bg-black opacity-50" onClick={() => setIsShareMenuOpen(false)}></div>
                <div className="relative z-10 w-full max-w-2xl mx-auto p-8 bg-white bg-opacity-80 backdrop-blur-md rounded-lg shadow-lg">
                  <div className="grid grid-cols-4 gap-4">
                    {shareOptions.slice(0, 4).map((option) => (
                      <a
                        key={option.platform}
                        href={option.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex flex-col items-center text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        {option.icon}
                        <span className="text-xs">{option.platform}</span>
                      </a>
                    ))}
                  </div>
                  {showMoreOptions && (
                    <Collapse in={showMoreOptions}>
                      <div className="grid grid-cols-4 gap-4 mt-4">
                        {shareOptions.slice(4).map((option) => (
                          <a
                            key={option.platform}
                            href={option.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex flex-col items-center text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                          >
                            {option.icon}
                            <span className="text-xs">{option.platform}</span>
                          </a>
                        ))}
                      </div>
                    </Collapse>
                  )}
                  {!showMoreOptions ? (
                    <div className="flex justify-center mt-4">
                      <button
                        onClick={() => setShowMoreOptions(true)}
                        className="flex items-center text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        <ExpandMore style={{ fontSize: 40 }} />
                        <span className="ml-2 text-xs">Lihat Lainnya</span>
                      </button>
                    </div>
                  ) : (
                    <div className="flex justify-center mt-4">
                      <button
                        onClick={() => setShowMoreOptions(false)}
                        className="flex items-center text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300"
                      >
                        <ExpandLess style={{ fontSize: 40 }} />
                        <span className="ml-2 text-xs">Sembunyikan Lagi</span>
                      </button>
                    </div>
                  )}
                  <div className="flex justify-center items-center mt-4 space-x-2">
                    <Tooltip title="Copy link to clipboard">
                      <IconButton onClick={copyToClipboard}>
                        <ContentCopyIcon className="text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300" />
                      </IconButton>
                    </Tooltip>
                    <span className="text-xs text-gray-500 dark:text-gray-400">{copySuccess}</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {`${window.location.href}articles/${article.id}`}
                    </span>
                  </div>
                </div>
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
