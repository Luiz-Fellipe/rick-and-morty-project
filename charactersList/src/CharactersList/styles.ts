import { styled } from 'shell/styles';

export const CharactersListWrapper = styled('div', {
  maxWidth: '$344',

  '@md': {
    maxWidth: '$720',
  },
});

export const CharactersListHeader = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  '> h1': {
    fontSize: '$24',
    fontWeight: '$medium',

    color: '$B0',
  },

  '> span': {
    display: 'inline-block',

    fontSize: '$16',
    fontWeight: '$regular',

    marginTop: '$4',

    color: '$GR1',
  },

  '> div': {
    display: 'grid',
    gridTemplateColumns: '1fr 75px',
    gap: '20px',

    alignItems: 'center',

    marginTop: '$36',

    '@md': {
      marginTop: '$48',
      gridTemplateColumns: '235px 75px',
    },
  },
});

export const CharactersListContent = styled('div', {
  width: '100%',

  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '$36',

  marginTop: '$48',

  '@md': {
    marginTop: '$80',
    justifyContent: 'flex-start',
  },
});
