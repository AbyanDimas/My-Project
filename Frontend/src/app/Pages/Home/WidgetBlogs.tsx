import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ShareIcon from '@mui/icons-material/Share';
import Mood from '@mui/icons-material/Mood';
import ThumbUp from '@mui/icons-material/ThumbUp';
import { format, parseISO, compareDesc } from 'date-fns';
import Skeleton from '../../Components/Other/Skeleton'; // Import komponen Skeleton

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

const WidgetBlogs: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [likedArticles, setLikedArticles] = useState<{ [key: number]: boolean }>({});
  const [likesCount, setLikesCount] = useState<{ [key: number]: number }>({});
  const [loading, setLoading] = useState(true);
  const articlesToShow = 5;

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
        }));

        fetchedArticles.sort((a: Article, b: Article) => compareDesc(new Date(a.publishedAt), new Date(b.publishedAt)));
        
        setArticles(fetchedArticles.slice(0, articlesToShow));

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

  return (
    <section className="bg-gray-100 dark:bg-gray-900 py-8">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Latest Articles
          </h2>
        </div>
        <div className="flex overflow-x-auto space-x-6">
          {loading
            ? Array.from({ length: articlesToShow }).map((_, index) => <Skeleton key={index} />)
            : articles.map((article) => (
              <div key={article.id} className="flex-shrink-0 w-64">
                <div className="flex flex-col h-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                  <div className="p-4 flex-grow">
                    <div className="flex justify-between items-center mb-3 text-gray-500">
                      <span className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                        #{article.category}
                      </span>
                      <span className="text-sm">{article.date}</span>
                    </div>
                    <h2 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                      <Link to={`/articles/${article.id}`}>{article.title}</Link>
                    </h2>
                    <div className="flex items-center space-x-2 mt-2">
                      <img
                        className="w-8 h-8 rounded-full"
                        src={article.authorImage}
                        alt={`${article.author} avatar`}
                      />
                      <span className="font-medium dark:text-white">{article.author}</span>
                    </div>
                  </div>
                  <div className="flex justify-start space-x-3 p-4 bg-gray-100 dark:bg-gray-700">
                    <Mood className="text-gray-500 cursor-pointer" />
                    <ThumbUp
                      className={`cursor-pointer ${likedArticles[article.id] ? 'text-red-500' : 'text-gray-500'}`}
                      onClick={() => handleLikeClick(article.id)}
                    />
                    <span className="text-gray-500">{likesCount[article.id]}</span>
                    <ShareIcon className="text-gray-500 cursor-pointer" />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WidgetBlogs;
