import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';

// Services
import { getCharacter } from '@/services/endpoints/character';

interface IUseGetCharacterProps {
  characterId: string | number;
}

export function useGetCharacter({ characterId }: IUseGetCharacterProps) {
  const queryKey = useMemo(() => {
    return ['character-details', characterId];
  }, [characterId]);

  const handleGetCharacterDetails = async () => {
    const { apiCall } = getCharacter();

    const { character } = await apiCall({
      variables: {
        characterId,
      },
    });

    return character;
  };

  const { data, isLoading, isSuccess } = useQuery(
    queryKey,
    handleGetCharacterDetails,
    {
      staleTime: 1000 * 5, // 5 seconds
      keepPreviousData: true,
      retry: 0,
    }
  );

  return { data, isLoading, isSuccess };
}
