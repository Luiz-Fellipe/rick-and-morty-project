import { defaultPages, mockPagination, pageExamples } from '@/tests/mocks';
import { queryExample } from '@/tests/mocks/react-query';
import { fireEvent, render, screen } from '@/tests/test-utils';
import React from 'react';

import { Pagination } from '.';

describe('Pagination Component', () => {
  it('Pagination Component displayed successfully', () => {
    const mockFunction = jest.fn();

    render(
      <Pagination
        hasNextPage={queryExample.data.info.next}
        hasPrevPage={queryExample.data.info.prev}
        totalPageCount={queryExample.data.info.pages}
        currentPage={1}
        handleSetPage={mockFunction}
      />
    );

    expect(screen.getByTestId('pagination'));
  });

  it("Callback 'handleSetPage' is triggered correctly", () => {
    const mockFunction = jest.fn();

    mockPagination.mockReturnValueOnce(pageExamples);

    render(
      <Pagination
        hasNextPage={queryExample.data.info.next}
        hasPrevPage={queryExample.data.info.prev}
        totalPageCount={queryExample.data.info.pages}
        currentPage={1}
        handleSetPage={mockFunction}
      />
    );

    fireEvent.click(screen.getByTestId('page-1'));

    expect(mockFunction.mock.calls.length).toEqual(1);
  });

  it("checks if the page abbreviation '...' is being rendered", () => {
    const mockFunction = jest.fn();

    mockPagination.mockReturnValueOnce([1]);

    const { rerender, debug } = render(
      <Pagination
        hasNextPage={null}
        hasPrevPage={null}
        totalPageCount={1}
        currentPage={1}
        handleSetPage={mockFunction}
      />
    );

    expect(screen.queryByText('...')).not.toBeInTheDocument();

    mockPagination.mockReturnValueOnce([1, 'dots-1', 3, 4, 5, 'dots-2', 42]);

    rerender(
      <Pagination
        hasNextPage={queryExample.data.info.next}
        hasPrevPage={queryExample.data.info.prev}
        totalPageCount={queryExample.data.info.pages}
        currentPage={4}
        handleSetPage={mockFunction}
      />
    );

    debug();

    expect(screen.getByTestId('dots-1')).toBeInTheDocument();
    expect(screen.getByTestId('dots-2')).toBeInTheDocument();
  });

  it('check if the next button is locked if it is on the last page', () => {
    const mockFunction = jest.fn();

    mockPagination.mockReturnValueOnce(pageExamples);

    render(
      <Pagination
        hasNextPage={null}
        hasPrevPage={queryExample.data.info.prev}
        totalPageCount={queryExample.data.info.pages}
        currentPage={42}
        handleSetPage={mockFunction}
      />
    );

    expect(screen.getByTestId('next-button').closest('button')).toBeDisabled();
  });

  it('check if the prev button is locked if it is on the last page', () => {
    const mockFunction = jest.fn();

    mockPagination.mockReturnValueOnce(pageExamples);

    render(
      <Pagination
        hasNextPage={queryExample.data.info.next}
        hasPrevPage={null}
        totalPageCount={queryExample.data.info.pages}
        currentPage={42}
        handleSetPage={mockFunction}
      />
    );

    expect(screen.getByTestId('prev-button').closest('button')).toBeDisabled();
  });
});
