import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { format, parseISO } from 'date-fns';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { IconButton, TextField, Button } from '@mui/material';

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
          <ReactMarkdown
            components={{
              h1: ({ node, ...props }) => <h1 className="text-3xl font-bold mb-4 dark:text-white" {...props} />,
              h2: ({ node, ...props }) => <h2 className="text-2xl font-bold mb-4 dark:text-white" {...props} />,
              h3: ({ node, ...props }) => <h3 className="text-xl font-bold mb-4 dark:text-white" {...props} />,
              h4: ({ node, ...props }) => <h4 className="text-lg font-bold mb-4 dark:text-white" {...props} />,
              h5: ({ node, ...props }) => <h5 className="text-base font-bold mb-4 dark:text-white" {...props} />,
              h6: ({ node, ...props }) => <h6 className="text-sm font-bold mb-4 dark:text-white" {...props} />,
              p: ({ node, ...props }) => <p className="mb-4 dark:text-gray-300" {...props} />,
              ul: ({ node, ...props }) => <ul className="list-disc list-inside mb-4 dark:text-gray-300" {...props} />,
              ol: ({ node, ...props }) => <ol className="list-decimal list-inside mb-4 dark:text-gray-300" {...props} />,
              li: ({ node, ...props }) => <li className="mb-2 dark:text-gray-300" {...props} />,
              blockquote: ({ node, ...props }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic mb-4 dark:border-gray-700 dark:text-gray-300" {...props} />,
              a: ({ node, ...props }) => <a className="text-blue-600 hover:underline dark:text-blue-400" {...props} />,
            }}
          >
            {article.content}
          </ReactMarkdown>
        </div>
        <div className="max-w-screen-md mx-auto mt-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Leave a Comment</h3>
          <TextField
            fullWidth
            variant="outlined"
            multiline
            rows={4}
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
            className="dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700"
          />
          <div className="flex justify-end mt-2">
            <Button
              variant="contained"
              color="primary"
              className="mt-4 dark:bg-blue-700 dark:hover:bg-blue-600"
              onClick={handleCommentSubmit}
              style={{ marginTop: '1rem' }} // Add margin-top if needed
            >
              Post Comment
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArticleDetail;
