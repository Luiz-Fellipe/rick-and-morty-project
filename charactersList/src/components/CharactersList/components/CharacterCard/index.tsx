import React from 'react';
import { Link } from 'react-router-dom';

// Components
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
    <CardWrapper data-testid="character-card">
      <img src={avatarUrl} alt={name} />
      <h2>{name}</h2>

      <Link to={`details/${characterId}`}>
        <Button variant="secondary">See More</Button>
      </Link>
    </CardWrapper>
  );
}
