import React from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

// Components
import { Button } from 'shell/components/button';

// Hooks
import { usePagination } from '../../../hooks/usePagination';

// styles
import { PaginationWrapper } from './styles';

interface IPaginationProps {
  hasNextPage: number | null;
  hasPrevPage: number | null;
  currentPage: number;
  totalPageCount: number;
  handleSetPage: (value: number) => void;
}

export function Pagination({
  hasNextPage,
  hasPrevPage,
  currentPage,
  totalPageCount,
  handleSetPage,
}: IPaginationProps) {
  const pages: number[] | string[] = usePagination({
    currentPage,
    totalPageCount,
    siblingCount: 1,
  });

  return (
    <PaginationWrapper>
      <Button
        onlyIcon
        disabled={!hasPrevPage}
        onClick={() => handleSetPage(currentPage - 1)}
        Icon={faChevronLeft}
      />
      {pages.map((page) =>
        page === 'dots-1' || page === 'dots-2' ? (
          <span>...</span>
        ) : (
          <Button
            isActive={currentPage === page}
            onClick={() => handleSetPage(page)}
            key={page}
          >
            {page}
          </Button>
        )
      )}
      <Button
        onlyIcon
        disabled={!hasNextPage}
        onClick={() => handleSetPage(currentPage + 1)}
        Icon={faChevronRight}
      />
    </PaginationWrapper>
  );
}
