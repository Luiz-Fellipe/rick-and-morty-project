import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

// Services
import { getCharacters } from '@/services/endpoints/characters';

interface IUseGetCharactersProps {
  searchValue: string;
  page: number;
}

export function useGetCharacters({
  searchValue,
  page,
}: IUseGetCharactersProps) {
  const queryKey = useMemo(() => {
    return ['characters', searchValue, page];
  }, [searchValue, page]);

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

  return { data, isLoading, isSuccess };
}
