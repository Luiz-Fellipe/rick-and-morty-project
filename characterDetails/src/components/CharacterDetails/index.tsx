// Libs
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useParams, Link } from 'react-router-dom';

// utils
import { formatDate } from '@/utils/formatDate';

// Hooks
import { useGetCharacter } from './hooks/useGetCharacterDetail';

// Components
import { CharacterSkeletonLoading } from './components/CharacterSkeletonLoading';

// Styles
import {
  CharacterDetailsContent,
  CharacterDetailsEpisodes,
  CharacterDetailsHeader,
  CharacterDetailsInfos,
  CharacterDetailsWrapper,
  InfoGroup,
  InfoText,
  InfoTitle,
} from './styles';

export function CharacterDetails() {
  const { characterId } = useParams();

  const { data, isLoading, isSuccess } = useGetCharacter({ characterId });

  return (
    <CharacterDetailsWrapper>
      <CharacterDetailsHeader>
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} />
        </Link>

        <h2>Character</h2>
      </CharacterDetailsHeader>

      {!isLoading && isSuccess && !!data && (
        <CharacterDetailsContent>
          <img src={data?.image} alt={data?.name} />

          <h4>{data?.name}</h4>

          <hr />

          <CharacterDetailsInfos>
            <InfoGroup>
              <InfoTitle>Gender</InfoTitle>
              <InfoText>{data?.gender}</InfoText>
            </InfoGroup>
            <InfoGroup>
              <InfoTitle>Created at</InfoTitle>
              <InfoText>{formatDate(data?.created)}</InfoText>
            </InfoGroup>
            <InfoGroup>
              <InfoTitle>Species</InfoTitle>
              <InfoText>{data?.species}</InfoText>
            </InfoGroup>
            <InfoGroup>
              <InfoTitle>Status</InfoTitle>
              <InfoText>{data?.status}</InfoText>
            </InfoGroup>
            <InfoGroup>
              <InfoTitle>Location</InfoTitle>
              <InfoText>{data?.location?.name}</InfoText>
            </InfoGroup>
            <InfoGroup>
              <InfoTitle>Origin</InfoTitle>
              <InfoText>{data?.origin?.name}</InfoText>
            </InfoGroup>
          </CharacterDetailsInfos>

          <hr />

          <h5>Episodes</h5>

          <CharacterDetailsEpisodes>
            {data?.episode?.map((eps) => (
              <span key={eps.id}>{`${eps.name} - ${eps.episode}`}</span>
            ))}
          </CharacterDetailsEpisodes>
        </CharacterDetailsContent>
      )}

      {isLoading && <CharacterSkeletonLoading />}
    </CharacterDetailsWrapper>
  );
}
