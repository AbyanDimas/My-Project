import React from 'react';
import { TextField, Button } from '@mui/material';

interface CommentSectionProps {
  comment: string;
  onCommentChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onCommentSubmit: () => void;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comment, onCommentChange, onCommentSubmit }) => {
  return (
    <div className="max-w-screen-md mx-auto mt-8">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Leave a Comment</h3>
      <TextField
        fullWidth
        variant="outlined"
        multiline
        rows={4}
        value={comment}
        onChange={onCommentChange}
        placeholder="Write your comment here..."
        className="dark:text-gray-300 dark:bg-gray-800 dark:border-gray-700"
      />
      <div className="flex justify-end mt-2">
        <Button
          variant="contained"
          color="primary"
          className="mt-4 dark:bg-blue-700 dark:hover:bg-blue-600"
          onClick={onCommentSubmit}
          style={{ marginTop: '1rem' }} // Add margin-top if needed
        >
          Post Comment
        </Button>
      </div>
    </div>
  );
};

export default CommentSection;
