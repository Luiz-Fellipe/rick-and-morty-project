import * as hooks from '@/components/CharacterDetails/hooks/useGetCharacterDetail';
import { IGetCharacterAttrs } from '@/services/endpoints/character/types';

// TYPES
export type IUseGetCharacterProps = {
  data: IGetCharacterAttrs;
  isLoading: boolean;
  isSuccess: boolean;
};

jest.mock('@/components/CharacterDetails/hooks/useGetCharacterDetail', () => ({
  useGetCharacter: jest.fn(),
}));

const defaultQuery = {
  data: {},
  isLoading: false,
  isSuccess: false,
};

const queryExample = {
  data: {
    id: '1',
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
    gender: 'Male',
    created: '2017-11-04T18:48:46.250Z',
    name: 'Rick Sanchez',
    origin: { name: 'Earth (C-137)' },
    status: 'Alive',
    location: { name: 'Citadel of Ricks' },
    species: 'Human',
    episode: [
      { episode: 'S01E01', id: '1', name: 'Pilot' },
      { episode: 'S01E02', id: '2', name: 'Lawnmower Dog' },
      { episode: 'S01E03', id: '3', name: 'Anatomy Park' },
      { episode: 'S01E04', id: '4', name: 'M. Night Shaym-Aliens!' },
      { episode: 'S01E05', id: '5', name: 'Meeseeks and Destroy' },
      { episode: 'S01E06', id: '6', name: 'Rick Potion #9' },
      { episode: 'S01E07', id: '7', name: 'Raising Gazorpazorp' },
      { episode: 'S01E08', id: '8', name: 'Rixty Minutes' },
      { episode: 'S01E09', id: '9', name: 'Something Ricked This Way Comes' },
      {
        episode: 'S01E10',
        id: '10',
        name: 'Close Rick-counters of the Rick Kind',
      },
      { episode: 'S01E11', id: '11', name: 'Ricksy Business' },
      { episode: 'S02E01', id: '12', name: 'A Rickle in Time' },
      { episode: 'S02E02', id: '13', name: 'Mortynight Run' },
      { episode: 'S02E03', id: '14', name: 'Auto Erotic Assimilation' },
      { episode: 'S02E04', id: '15', name: 'Total Rickall' },
      { episode: 'S02E05', id: '16', name: 'Get Schwifty' },
      { episode: 'S02E06', id: '17', name: 'The Ricks Must Be Crazy' },
      { episode: 'S02E07', id: '18', name: 'Big Trouble in Little Sanchez' },
      {
        episode: 'S02E08',
        id: '19',
        name: 'Interdimensional Cable 2: Tempting Fate',
      },
      { episode: 'S02E09', id: '20', name: "Look Who's Purging Now" },
      { episode: 'S02E10', id: '21', name: 'The Wedding Squanchers' },
      { episode: 'S03E01', id: '22', name: 'The Rickshank Rickdemption' },
      { episode: 'S03E02', id: '23', name: 'Rickmancing the Stone' },
      { episode: 'S03E03', id: '24', name: 'Pickle Rick' },
      {
        episode: 'S03E04',
        id: '25',
        name: 'Vindicators 3: The Return of Worldender',
      },
      { episode: 'S03E05', id: '26', name: 'The Whirly Dirly Conspiracy' },
      { episode: 'S03E06', id: '27', name: 'Rest and Ricklaxation' },
      { episode: 'S03E07', id: '28', name: 'The Ricklantis Mixup' },
      { episode: 'S03E08', id: '29', name: "Morty's Mind Blowers" },
      { episode: 'S03E09', id: '30', name: "The ABC's of Beth" },
      { episode: 'S03E10', id: '31', name: 'The Rickchurian Mortydate' },
      {
        episode: 'S04E01',
        id: '32',
        name: 'Edge of Tomorty: Rick, Die, Rickpeat',
      },
      { episode: 'S04E02', id: '33', name: 'The Old Man and the Seat' },
      { episode: 'S04E03', id: '34', name: "One Crew Over the Crewcoo's Morty" },
      {
        episode: 'S04E04',
        id: '35',
        name: "Claw and Hoarder: Special Ricktim's Morty",
      },
      { episode: 'S04E05', id: '36', name: 'Rattlestar Ricklactica' },
      { episode: 'S04E06', id: '37', name: 'Never Ricking Morty' },
      { episode: 'S04E07', id: '38', name: 'Promortyus' },
      { episode: 'S04E08', id: '39', name: 'The Vat of Acid Episode' },
      { episode: 'S04E09', id: '40', name: 'Childrick of Mort' },
      { episode: 'S04E10', id: '41', name: 'Star Mort: Rickturn of the Jerri' },
      { episode: 'S05E01', id: '42', name: 'Mort Dinner Rick Andre' },
      { episode: 'S05E02', id: '43', name: 'Mortyplicity' },
      { episode: 'S05E03', id: '44', name: 'A Rickconvenient Mort' },
      { episode: 'S05E04', id: '45', name: 'Rickdependence Spray' },
      { episode: 'S05E05', id: '46', name: 'Amortycan Grickfitti' },
      {
        episode: 'S05E06',
        id: '47',
        name: "Rick & Morty's Thanksploitation Spectacular",
      },
      { episode: 'S05E07', id: '48', name: 'Gotron Jerrysis Rickvangelion' },
      {
        episode: 'S05E08',
        id: '49',
        name: 'Rickternal Friendshine of the Spotless Mort',
      },
      { episode: 'S05E09', id: '50', name: 'Forgetting Sarick Mortshall' },
      { episode: 'S05E10', id: '51', name: 'Rickmurai Jack' },
    ],
  },
  isSuccess: true,
  isLoading: false,
};

const mockQuery = jest
  .spyOn(hooks, 'useGetCharacter')
  .mockReturnValue(defaultQuery as IUseGetCharacterProps);

export { mockQuery, defaultQuery, queryExample };
