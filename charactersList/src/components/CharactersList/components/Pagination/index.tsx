import React from 'react';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';

// Components
import { Button } from 'shell/components/button';

// Hooks
import { usePagination } from '@/hooks/usePagination';

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
    <PaginationWrapper data-testid="pagination">
      <Button
        data-testid="prev-button"
        onlyIcon
        disabled={!hasPrevPage}
        onClick={() => handleSetPage(currentPage - 1)}
        Icon={faChevronLeft}
      />
      {pages.map((page) =>
        page === 'dots-1' || page === 'dots-2' ? (
          <span data-testid={page} key={page}>
            ...
          </span>
        ) : (
          <Button
            data-testid={`page-${page}`}
            isActive={currentPage === page}
            onClick={() => handleSetPage(page)}
            key={page}
          >
            {page}
          </Button>
        )
      )}
      <Button
        data-testid="next-button"
        onlyIcon
        disabled={!hasNextPage}
        onClick={() => handleSetPage(currentPage + 1)}
        Icon={faChevronRight}
      />
    </PaginationWrapper>
  );
}
