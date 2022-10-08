import {
  mockQuery,
  queryExample,
  IUseGetCharacterSProps,
} from '@/tests/mocks/react-query';
import { render, screen } from '@/tests/test-utils';
import React from 'react';

import { CharactersList } from '.';

describe('Character List Component', () => {
  it('Character List Component displayed successfully', () => {
    render(<CharactersList />);

    expect(screen.getByText('Characters'));
  });

  it('should render with characters data', () => {
    mockQuery.mockReturnValueOnce(queryExample as IUseGetCharacterSProps);

    render(<CharactersList />);

    expect(screen.getAllByTestId('character-card')).toHaveLength(20);

    expect(screen.getByText('Rick Sanchez'));
    expect(screen.getByText('Morty Smith'));
  });

  it('check if the loading is being displayed on screen ', () => {
    mockQuery.mockReturnValueOnce({
      ...queryExample,
      isLoading: true,
    });

    render(<CharactersList />);

    expect(screen.queryByText('Rick Sanchez')).not.toBeInTheDocument();
    expect(screen.getByTestId('skeleton-loading')).toBeInTheDocument();
  });
});
