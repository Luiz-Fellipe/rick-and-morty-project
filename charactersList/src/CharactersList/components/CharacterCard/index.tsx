import React from 'react';
import { Button } from 'shell/components/button';
// Styles
import { CardWrapper } from './styles';

export function CharacterCard() {
  return (
    <CardWrapper>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/1.jpeg"
        alt="Rick Sanchez"
      />
      <h2>Rick Sanchez</h2>

      <Button variant="secondary">See More</Button>
    </CardWrapper>
  );
}
