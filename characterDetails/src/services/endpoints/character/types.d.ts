export interface IGetCharacterAttrs {
  image: string;
  id: string | number;
  name: string;
  location: {
    name: string;
  };
  origin: {
    name: string;
  };
  status: string;
  species: string;
  created: string;
  gender: string;
  episode: {
    episode: string;
    id: string | number;
    name: string;
  }[];
}

export interface IGetCharacterData {
  character: IGetCharacterAttrs;
}

export interface IGetCharacterVariable {
  variables: {
    characterId: string | number;
  };
}

export interface IGetCharacterProps {
  apiCall: (params: IGetCharacterVariable) => Promise<IGetCharacterData>;
}
