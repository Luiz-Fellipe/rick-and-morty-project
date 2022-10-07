import { styled } from '@/styles';

export const CharactersNotFoundWrapper = styled('div', {
  width: '100%',

  margin: 'auto',

  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  gap: '$24',

  '> img': {
    width: '80%',
  },

  '> span': {
    fontWeight: '$medium',
    textAlign: 'center',
    fontSize: '$18',
    color: '$B0',
  },
  '@md': {
    '> span': {
      fontSize: '$24',
    },

    '> img': {
      width: '30%',
    },
  },
});
