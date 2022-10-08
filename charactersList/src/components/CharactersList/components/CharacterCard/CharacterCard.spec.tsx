import { render, screen } from '@/tests/test-utils';
import React from 'react';

import { CharacterCard } from '.';

describe('Character Card Component', () => {
  it('Character Card Component displayed successfully', () => {
    render(
      <CharacterCard
        name="Ricky Sanchez"
        avatarUrl="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        characterId={1}
      />
    );

    expect(screen.getByTestId('character-card'));
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    );

    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Ricky Sanchez');

    expect(screen.getByRole('button')).toBeInTheDocument();
  });
});
