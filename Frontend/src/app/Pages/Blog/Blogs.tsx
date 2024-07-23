import React, { useState, useEffect } from 'react';
import { format, parseISO, compareDesc } from 'date-fns';
import CustomPagination from './CustomPagination';
import Categories from './Categories';
import PopularArticles from './PopularArticles';
import RecentArticles from './RecentArticles';
import BlogList from './BlogList';
import HeroSection from './HeroSection';

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
          imageUrl: 'https://via.placeholder.com/600x300',
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
      <HeroSection />
      <div className="px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/3">
          <BlogList 
            articles={paginatedArticles} 
            likedArticles={likedArticles} 
            likesCount={likesCount} 
            loading={loading} 
            onLikeClick={handleLikeClick} 
            articlesPerPage={articlesPerPage}
          />
          <div className="flex justify-center mt-8">
            <CustomPagination 
              page={page}
              count={Math.ceil(articles.length / articlesPerPage)}
              onChange={handlePageChange}
            />
          </div>
        </div>
        <aside className="hidden lg:block lg:w-1/3 lg:pl-8">
          <Categories categories={categories} />
          <PopularArticles articles={popularArticles} />
          <RecentArticles articles={recentArticles} />
        </aside>
      </div>
    </section>
  );
};

export default Blogs;
