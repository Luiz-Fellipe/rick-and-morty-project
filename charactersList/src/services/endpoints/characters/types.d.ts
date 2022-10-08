export interface IGetCharactersAttrs {
  image: string;
  id: string | number;
  name: string;
}

export interface IApiDataProps {
  results: IGetCharactersAttrs[];
  info: {
    count: number;
    next: number | null;
    pages: number;
    prev: number | null;
  };
}

export interface IGetCharactersData {
  characters: IApiDataProps;
}

export interface IGetCharactersVariable {
  variables: {
    filter: {
      name: string;
    };
    page: number;
  };
}

export interface IGetCharactersProps {
  apiCall: (params: IGetCharactersVariable) => Promise<IGetCharactersData>;
}
