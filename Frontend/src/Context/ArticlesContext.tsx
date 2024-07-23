// src/context/ArticlesContext.tsx
import React, { createContext, useEffect, useState, useContext } from "react";
import { Article } from "../app/Pages/Blog/Artikel/ArticleDetails"; // Import type Article

export const ArticlesContext = createContext<{
  articles: Article[];
  searchArticles: (query: string) => Article[];
}>({ articles: [], searchArticles: () => [] });

export const ArticlesProvider: React.FC = ({ children }) => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    fetch("http://192.168.100.2:1337/api/artikels")
      .then((response) => response.json())
      .then((data) => {
        const fetchedArticles = data.data.map((item: any) => ({
          id: item.id,
          title: item.attributes.Judul_Artikel,
          content: item.attributes.Konten_Artikel,
          author: item.attributes.NamaPenulis_Artikel,
          authorImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png', // Placeholder image
          category: 'Article', // Static category
          date: formatDate(item.attributes.publishedAt),
        }));
        setArticles(fetchedArticles);
      });
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return `${diffDays} days ago`;
  };

  const searchArticles = (query: string) => {
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.content.toLowerCase().includes(query.toLowerCase()) ||
        article.author.toLowerCase().includes(query.toLowerCase())
    );
  };

  return (
    <ArticlesContext.Provider value={{ articles, searchArticles }}>
      {children}
    </ArticlesContext.Provider>
  );
};
