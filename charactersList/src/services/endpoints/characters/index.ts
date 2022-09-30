import { request, gql } from 'graphql-request';
import { endpoint } from 'shell/Services';
import { IGetCharactersProps } from './types';

export function getCharacters(): IGetCharactersProps {
  const GET_CHARACTERS = gql`
    query CharactersQuery($filter: FilterCharacter, $page: Int) {
      characters(filter: $filter, page: $page) {
        results {
          image
          id
          name
        }
        info {
          count
          next
          pages
          prev
        }
      }
    }
  `;

  function apiCall({ variables }) {
    return request(endpoint, GET_CHARACTERS, variables);
  }

  return { apiCall };
}
