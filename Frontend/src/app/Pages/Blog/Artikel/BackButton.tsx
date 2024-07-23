import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const BackButton: React.FC = () => {
  return (
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
  );
};

export default BackButton;
