import React, { useRef, useState } from 'react';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Components
import { Input } from 'shell/components/input';
import { Button } from 'shell/components/button';
import { CharactersSkeletonLoading } from './components/CharactersSkeletonLoading';
import { CharactersNotFound } from './components/CharactersNotFound';
import { CharacterCard } from './components/CharacterCard';
import { Pagination } from './components/Pagination';

// Hooks
import { useGetCharacters } from './hooks/useGetCharacters';

// Styles
import {
  CharactersListWrapper,
  CharactersListHeader,
  CharactersListContent,
} from './styles';

export function CharactersList() {
  const [searchValue, setSearchValue] = useState('');

  const inputSearchRef = useRef(null);

  const [page, setPage] = useState(1);

  const handleSearchValue = () => {
    if (searchValue === inputSearchRef?.current?.value) return;

    setSearchValue(inputSearchRef?.current?.value);
    setPage(1);
  };

  const { data, isLoading, isSuccess } = useGetCharacters({
    page,
    searchValue,
  });

  return (
    <CharactersListWrapper>
      <CharactersListHeader>
        <h1>Characters</h1>
        <span>
          Find and view information about the rick and morty characters
        </span>

        <div>
          <Input
            type="text"
            ref={inputSearchRef}
            full
            Icon={faMagnifyingGlass}
            placeholder="Type your character here"
          />
          <Button isLoading={isLoading} onClick={handleSearchValue}>
            Search
          </Button>
        </div>
      </CharactersListHeader>

      {isLoading && <CharactersSkeletonLoading />}

      {!isLoading && !!data?.results?.length && (
        <>
          <CharactersListContent>
            {data?.results.map((character) => (
              <CharacterCard
                key={character.id}
                characterId={character.id}
                name={character.name}
                avatarUrl={character.image}
              />
            ))}
          </CharactersListContent>
          <Pagination
            hasNextPage={data?.info?.next}
            hasPrevPage={data?.info?.prev}
            handleSetPage={setPage}
            currentPage={page}
            totalPageCount={data?.info?.pages}
          />
        </>
      )}

      {!isLoading && isSuccess && data?.results?.length === 0 && (
        <CharactersNotFound message="Oops! We have searched all dimensions and have not found this character." />
      )}
    </CharactersListWrapper>
  );
}
