import React, { useMemo, useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// Components
import { Input } from 'shell/components/input';
import { Button } from 'shell/components/button';
import { CharactersSkeletonLoading } from './components/CharactersSkeletonLoading';
import { CharactersNotFound } from './components/CharactersNotFound';
import { CharacterCard } from './components/CharacterCard';
import { Pagination } from './components/Pagination';

// Services
import { getCharacters } from '../services/endpoints/characters';

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

  const queryKey = useMemo(() => {
    return ['characters', searchValue, page];
  }, [searchValue, page]);

  const handleSearchValue = () => {
    if (searchValue === inputSearchRef?.current?.value) return;

    setSearchValue(inputSearchRef?.current?.value);
    setPage(1);
  };

  const handleGetCharacters = async () => {
    const { apiCall } = getCharacters();

    const { characters } = await apiCall({
      variables: {
        page,
        filter: {
          name: searchValue,
        },
      },
    });

    return characters;
  };

  const { data, isLoading, isSuccess } = useQuery(
    queryKey,
    handleGetCharacters,
    {
      staleTime: 1000 * 5, // 5 seconds
      keepPreviousData: true,
      retry: 0,
    }
  );

  return (
    <CharactersListWrapper>
      <CharactersListHeader>
        <h1>Characters</h1>
        <span>
          Find and view information about the ricky and morty characters
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
