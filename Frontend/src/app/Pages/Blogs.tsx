import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import Mood from '@mui/icons-material/Mood';
import ThumbUp from '@mui/icons-material/ThumbUp';
import { format, parseISO, compareDesc } from 'date-fns';
import CustomPagination from './CustomPagination'; // Import komponen pagination

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  authorImage: string;
  category: string;
  date: string;
  publishedAt: string;
}

const Blogs: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [expandedArticles, setExpandedArticles] = useState<number[]>([]);
  const [likedArticles, setLikedArticles] = useState<{ [key: number]: boolean }>({});
  const [likesCount, setLikesCount] = useState<{ [key: number]: number }>({});
  const [page, setPage] = useState(1);
  const articlesPerPage = 5; // Jumlah artikel per halaman

  useEffect(() => {
    fetch('http://192.168.100.2:1337/api/artikels')
      .then((response) => response.json())
      .then((data) => {
        const fetchedArticles = data.data.map((item: any) => ({
          id: item.id,
          title: item.attributes.Judul_Artikel,
          content: item.attributes.Konten_Artikel,
          author: item.attributes.NamaPenulis_Artikel,
          authorImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png', // Placeholder image
          category: item.attributes.Judul_AtasArtikel,
          date: format(parseISO(item.attributes.publishedAt), 'MMMM d, yyyy HH:mm'), // Use date-fns to format the date
          publishedAt: item.attributes.publishedAt,
        }));

        // Urutkan artikel berdasarkan tanggal rilis terbaru
        fetchedArticles.sort((a: Article, b: Article) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));
        
        setArticles(fetchedArticles);

        // Initialize likes count
        const initialLikesCount = fetchedArticles.reduce((acc: any, article: Article) => {
          acc[article.id] = 100; // Initial likes count can be fetched from server if available
          return acc;
        }, {});
        setLikesCount(initialLikesCount);
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

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            Our Blog
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            We use an agile approach to test assumptions and connect with the needs of your audience early and often.
          </p>
        </div>
        <div className="grid gap-8 lg:grid-cols-2">
          {paginatedArticles.map((article) => (
            <div key={article.id}>
              <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                <div className="flex justify-between items-center mb-5 text-gray-500">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg
                      className="mr-1 w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                    </svg>
                    {article.category}
                  </span>
                  <span className="text-sm">{article.date}</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  <Link to={`/articles/${article.id}`}>{article.title}</Link>
                </h2>
                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
                  {article.content.substring(0, 100)}...
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <img
                      className="w-7 h-7 rounded-full"
                      src={article.authorImage}
                      alt={`${article.author} avatar`}
                    />
                    <span className="font-medium dark:text-white">{article.author}</span>
                  </div>
                  <Link
                    to={`/articles/${article.id}`}
                    className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
                  >
                    Read more
                    <svg
                      className="ml-2 w-4 h-4"
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
              </article>
              <div className="flex justify-start space-x-4 mt-4">
                <Mood className="text-gray-500 cursor-pointer" />
                <ThumbUp 
                  className={`cursor-pointer ${likedArticles[article.id] ? 'text-red-500' : 'text-gray-500'}`} 
                  onClick={() => handleLikeClick(article.id)} 
                />
                <span className="text-gray-500">{likesCount[article.id]}</span>
                <ShareIcon className="text-gray-500 cursor-pointer" />
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
    </section>
  );
};

export default Blogs;
