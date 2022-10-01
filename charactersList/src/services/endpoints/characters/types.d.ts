export interface IGetCharactersAttrs {
  image: string;
  id: string | number;
  name: string;
}

export interface IGetCharactersData {
  characters: {
    results: IGetCharactersAttrs[];
    info: {
      count: number;
      next: number | null;
      pages: number;
      prev: number | null;
    };
  };
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
