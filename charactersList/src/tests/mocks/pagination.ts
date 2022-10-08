import * as hooks from '@/hooks/usePagination';

jest.mock('@/hooks/usePagination', () => ({
  usePagination: jest.fn(),
}));

const defaultPages = [];

const pageExamples = [1, 2, 3, 4, 5, 'dots-1', 42];

const mockPagination = jest
  .spyOn(hooks, 'usePagination')
  .mockReturnValue(defaultPages as number[] | string[]);

export { mockPagination, pageExamples, defaultPages };
