import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowBack, ArrowForward } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

interface PaginationProps {
  page: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({ page, count, onChange }) => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      variant="outlined"
      shape="rounded"
      classes={{
        ul: `flex justify-center ${isDarkMode ? 'dark' : ''}`,
      }}
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: ArrowBack, next: ArrowForward }}
          {...item}
          classes={{
            root: `text-gray-900 dark:text-white border-gray-200 dark:border-gray-700`,
            selected: `bg-primary-600 text-white dark:bg-primary-500`,
          }}
        />
      )}
    />
  );
};

export default CustomPagination;
