import React from 'react';
import Skeleton from '../../Components/Other/Skeleton';
import ArticleCard from './ArticleCard';

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

interface BlogListProps {
  articles: Article[];
  likedArticles: { [key: number]: boolean };
  likesCount: { [key: number]: number };
  loading: boolean;
  onLikeClick: (articleId: number) => void;
  articlesPerPage: number;
}

const BlogList: React.FC<BlogListProps> = ({ articles, likedArticles, likesCount, loading, onLikeClick, articlesPerPage }) => {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {loading
        ? Array.from({ length: articlesPerPage }).map((_, index) => <Skeleton key={index} />)
        : articles.map((article) => (
          <ArticleCard 
            key={article.id} 
            article={article} 
            liked={likedArticles[article.id]} 
            likesCount={likesCount[article.id]} 
            onLikeClick={onLikeClick}
          />
        ))}
    </div>
  );
};

export default BlogList;
