import { styled } from '@/styles';

export const CharactersListWrapper = styled('div', {
  // maxWidth: '$344',
  height: '100%',
  maxHeight: '100%',

  display: 'flex',
  flexDirection: 'column',

  margin: '0 $12',

  // '@md': {
  //   maxWidth: '$720',
  // },

  '@xxlg': {
    maxWidth: '$1360',
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
    gridTemplateColumns: '235px 75px',
    gap: '20px',

    alignItems: 'center',

    marginTop: '$36',

    '@md': {
      marginTop: '$48',
    },
  },
});

export const CharactersListContent = styled('div', {
  width: '100%',
  height: 'fit-content',

  overflowY: 'auto',

  padding: '$12',

  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '$32',

  marginTop: '$36',

  // '@md': {
  //   gap: '$16',
  // },

  '@xxlg': {
    justifyContent: 'flex-start',
  },
});
