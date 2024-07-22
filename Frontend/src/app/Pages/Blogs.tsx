import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import Mood from '@mui/icons-material/Mood';
import ThumbUp from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import CategoryIcon from '@mui/icons-material/Category';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import { format, parseISO, compareDesc } from 'date-fns';
import CustomPagination from './CustomPagination';
import Skeleton from './Skeleton';

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  authorImage: string;
  category: string;
  date: string;
  publishedAt: string;
  imageUrl: string;
}

const Blogs: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [likedArticles, setLikedArticles] = useState<{ [key: number]: boolean }>({});
  const [likesCount, setLikesCount] = useState<{ [key: number]: number }>({});
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const articlesPerPage = 10;

  useEffect(() => {
    fetch('http://192.168.100.2:1337/api/artikels')
      .then((response) => response.json())
      .then((data) => {
        const fetchedArticles = data.data.map((item: any) => ({
          id: item.id,
          title: item.attributes.Judul_Artikel,
          content: item.attributes.Konten_Artikel,
          author: item.attributes.NamaPenulis_Artikel,
          authorImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png',
          category: item.attributes.Judul_AtasArtikel,
          date: format(parseISO(item.attributes.publishedAt), 'MMMM d, yyyy HH:mm'),
          publishedAt: item.attributes.publishedAt,
          imageUrl: 'https://via.placeholder.com/600x300', // Fixed image URL for testing
        }));

        fetchedArticles.sort((a: Article, b: Article) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));

        setArticles(fetchedArticles);

        const initialLikesCount = fetchedArticles.reduce((acc: any, article: Article) => {
          acc[article.id] = 100;
          return acc;
        }, {});
        setLikesCount(initialLikesCount);
        setLoading(false);
      });
  }, []);

  const handleLikeClick = (articleId: number) => {
    setLikedArticles((prev) => ({
      ...prev,
      [articleId]: !prev[articleId],
    }));
    setLikesCount((prev) => ({
      ...prev,
      [articleId]: prev[articleId] + (likedArticles[articleId] ? -1 : 1),
    }));
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const paginatedArticles = articles.slice((page - 1) * articlesPerPage, page * articlesPerPage);

  const categories = Array.from(new Set(articles.map(article => article.category)));
  const popularArticles = articles.slice().sort((a, b) => likesCount[b.id] - likesCount[a.id]).slice(0, 5);
  const recentArticles = articles.slice().sort((a, b) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt))).slice(0, 5);

  return (
    <section className="bg-white dark:bg-gray-900 py-8">
      <div className="relative bg-cover bg-center h-32 md:h-48 lg:h-56" style={{ backgroundImage: `url('https://via.placeholder.com/600x300')` }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white mb-4">Selamat datang di blog</h1>
          </div>
        </div>
      </div>

      <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3">
          <div className="grid gap-8 lg:grid-cols-2">
            {loading
              ? Array.from({ length: articlesPerPage }).map((_, index) => <Skeleton key={index} />)
              : paginatedArticles.map((article) => (
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
                  <div className="flex justify-start space-x-2 p-4 bg-gray-50 dark:bg-gray-700 rounded-b-lg">
                    <Mood className="text-green-500 dark:text-green-400 cursor-pointer" />
                    <ThumbUp
                      className={`cursor-pointer ${likedArticles[article.id] ? 'text-red-500' : 'text-gray-500 dark:text-gray-400'}`}
                      onClick={() => handleLikeClick(article.id)}
                    />
                    <span className="text-gray-500 dark:text-gray-400">{likesCount[article.id]}</span>
                    <CommentIcon className="text-blue-500 dark:text-blue-400 cursor-pointer" />
                    <BookmarkIcon className="text-yellow-500 dark:text-yellow-400 cursor-pointer" />
                    <ShareIcon className="text-gray-500 dark:text-gray-400 cursor-pointer" />
                  </div>
                </div>
              ))}
          </div>
          <div className="flex justify-center mt-8">
            <CustomPagination 
              page={page}
              count={Math.ceil(articles.length / articlesPerPage)}
              onChange={handlePageChange}
            />
          </div>
        </div>
        <aside className="hidden lg:block lg:w-1/3 lg:pl-8">
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
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 mb-8 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <TrendingUpIcon className="mr-2" /> Popular Articles
            </h3>
            <ul className="space-y-4">
              {popularArticles.map(article => (
                <li key={article.id}>
                  <Link to={`/articles/${article.id}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 flex items-center">
              <NewReleasesIcon className="mr-2" /> Recent Articles
            </h3>
            <ul className="space-y-4">
              {recentArticles.map(article => (
                <li key={article.id}>
                  <Link to={`/articles/${article.id}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                    {article.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Blogs;
