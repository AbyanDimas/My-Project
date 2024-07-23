import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { format, parseISO } from 'date-fns';
import BackButton from './BackButton';
import ArticleHeader from './ArticleHeader';
import ArticleContent from './ArticleContent';
import CommentSection from './CommentSection';
import Spinner from './Spinner'; // Import the Spinner component

interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  authorImage: string;
  category: string;
  date: string;
}

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [comment, setComment] = useState<string>('');

  useEffect(() => {
    fetch(`http://192.168.100.2:1337/api/artikels/${id}`)
      .then((response) => response.json())
      .then((data) => {
        const item = data.data;
        const fetchedArticle = {
          id: item.id,
          title: item.attributes.Judul_Artikel,
          content: item.attributes.Konten_Artikel,
          author: item.attributes.NamaPenulis_Artikel,
          authorImage: 'https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png', // Placeholder image
          category: 'Article', // Static category
          date: format(parseISO(item.attributes.publishedAt), 'MMMM d, yyyy HH:mm'), // Use date-fns to format the date
        };
        setArticle(fetchedArticle);
      });
  }, [id]);

  const handleCommentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = () => {
    // Logic to handle comment submission
    console.log('Comment submitted:', comment);
    setComment('');
  };

  if (!article) {
    return <Spinner />; // Use the Spinner component
  }

  return (
    <section className="bg-white dark:bg-gray-900 relative">
      <BackButton />
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <ArticleHeader title={article.title} author={article.author} date={article.date} />
        <div className="max-w-screen-md mx-auto">
          <img
            className="w-32 h-32 rounded-full mx-auto mb-4"
            src={article.authorImage}
            alt={`${article.author} avatar`}
          />
          <ArticleContent content={article.content} />
        </div>
        <CommentSection 
          comment={comment} 
          onCommentChange={handleCommentChange} 
          onCommentSubmit={handleCommentSubmit} 
        />
      </div>
    </section>
  );
};

export default ArticleDetail;
