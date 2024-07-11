import React from 'react';
import { Pagination, PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

interface PaginationProps {
  page: number;
  count: number;
  onChange: (event: React.ChangeEvent<unknown>, value: number) => void;
}

const CustomPagination: React.FC<PaginationProps> = ({ page, count, onChange }) => {
  return (
    <Pagination
      count={count}
      page={page}
      onChange={onChange}
      variant="outlined"
      shape="rounded"
      renderItem={(item) => (
        <PaginationItem
          components={{ previous: ArrowBack, next: ArrowForward }}
          {...item}
        />
      )}
    />
  );
};

export default CustomPagination;
