import React from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Components
import { Input } from 'shell/components/input';
import { Button } from 'shell/components/button';

// Styles
import {
  CharactersListWrapper,
  CharactersListHeader,
  CharactersListContent,
} from './styles';
import { CharacterCard } from './components/CharacterCard';

export function CharactersList() {
  return (
    <CharactersListWrapper>
      <CharactersListHeader>
        <h1>Characters</h1>
        <span>
          Find and view information about the ricky and morty characters
        </span>

        <div>
          <Input
            full
            Icon={faMagnifyingGlass}
            placeholder="Type your character here"
          />
          <Button>Search</Button>
        </div>
      </CharactersListHeader>

      <CharactersListContent>
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
        <CharacterCard />
      </CharactersListContent>
    </CharactersListWrapper>
    // <div>

    //   CharactersList{' '}
    //   <Input Icon={faMagnifyingGlass} placeholder="Type your character here" />
    //   <Button>Search</Button>
    // </div>
  );
}
