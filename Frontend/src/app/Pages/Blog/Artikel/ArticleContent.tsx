import React from 'react';
import ReactMarkdown from 'react-markdown';

interface ArticleContentProps {
  content: string;
}

const ArticleContent: React.FC<ArticleContentProps> = ({ content }) => {
  return (
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
      {content}
    </ReactMarkdown>
  );
};

export default ArticleContent;
