import React from 'react';
import { Button } from 'shell/components/button';
// Styles
import { CardWrapper } from './styles';

interface ICharacterProps {
  name: string;
  avatarUrl: string;
  characterId: string | number;
}

export function CharacterCard({
  name,
  avatarUrl,
  characterId,
}: ICharacterProps) {
  return (
    <CardWrapper>
      <img src={avatarUrl} alt={name} />
      <h2>{name}</h2>

      <Button variant="secondary" onClick={() => console.log(characterId)}>
        See More
      </Button>
    </CardWrapper>
  );
}
