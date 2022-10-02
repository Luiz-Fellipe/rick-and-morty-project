import { request, gql } from 'graphql-request';
import { endpoint } from 'shell/Services';
import { IGetCharacterProps } from './types';

export function getCharacter(): IGetCharacterProps {
  const GET_CHARACTERS = gql`
    query CharacterQuery($characterId: ID!) {
      character(id: $characterId) {
        id
        image
        gender
        created
        name
        origin {
          name
        }
        status
        location {
          name
        }
        species
        episode {
          episode
          id
          name
        }
      }
    }
  `;

  function apiCall({ variables }) {
    return request(endpoint, GET_CHARACTERS, variables);
  }

  return { apiCall };
}
