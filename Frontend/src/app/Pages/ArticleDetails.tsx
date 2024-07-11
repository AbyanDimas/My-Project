import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { format, parseISO } from 'date-fns';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton } from '@mui/material';

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

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <section className="bg-white dark:bg-gray-900 relative">
      <IconButton
        style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          borderRadius: '50%',
          padding: '0.5rem',
        }}
        onClick={() => window.history.back()} // Go back to the previous page
      >
        <ArrowBackIcon style={{ color: 'white' }} />
      </IconButton>
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
            {article.title}
          </h2>
          <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
            By {article.author}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">{article.date}</p>
        </div>
        <div className="max-w-screen-md mx-auto">
          <img
            className="w-32 h-32 rounded-full mx-auto mb-4"
            src={article.authorImage}
            alt={`${article.author} avatar`}
          />
          <ReactMarkdown className="prose prose-lg dark:prose-dark">
            {article.content}
          </ReactMarkdown>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
