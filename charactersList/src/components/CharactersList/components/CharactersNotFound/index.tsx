import React from 'react';

// Assets
import notFoundWebp from '@/assets/notFound.webp';

// Styles
import { CharactersNotFoundWrapper } from './styles';

interface ICharacterNotFoundProps {
  message: string;
}

export function CharactersNotFound({ message }: ICharacterNotFoundProps) {
  return (
    <CharactersNotFoundWrapper>
      <img src={notFoundWebp} alt={message} />
      <span>{message}</span>
    </CharactersNotFoundWrapper>
  );
}
