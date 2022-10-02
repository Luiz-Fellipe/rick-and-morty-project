import { styled } from 'shell/styles';

export const CharacterDetailsWrapper = styled('div', {
  maxWidth: '$720',
  margin: '0 auto',
});

export const CharacterDetailsHeader = styled('div', {
  position: 'relative',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  margin: '0 $32',

  '> a': {
    cursor: 'pointer',
    color: '$B0',

    '> svg': {
      fontSize: '$24',
    },
  },

  '> h2': {
    width: '100%',
    fontWeight: '$medium',
    fontSize: '$24',
    color: '$B0',
    textAlign: 'center',
  },
});

export const CharacterDetailsContent = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  margin: '$48 $8',

  padding: '$24',

  backgroundColor: '$N0',
  borderRadius: '$default',
  boxShadow: '0px 1.06589px 5.32946px rgba(0, 0, 0, 0.25)',

  // avatar
  '> img': {
    width: '100px',
    height: '100px',

    backgroundColor: '$GR4',
    borderRadius: '100%',

    border: '2px solid $G1',

    '@md': {
      width: '150px',
      height: '150px',
    },
  },

  '> h4': {
    marginTop: '$24',

    fontWeight: '$regular',
    fontSize: '$16',
  },

  '> h5': {
    fontWeight: '$medium',
    fontSize: '$14',

    marginBottom: '$24',
  },

  '> hr': {
    width: '100%',
    height: '1px',
    backgroundColor: '$GR1',
    margin: '$24 0',
  },
});

export const CharacterDetailsInfos = styled('div', {
  width: '100%',

  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'flex-start',

  gap: '$48',
});

export const InfoGroup = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

const spanStyles = styled('span', {
  fontWeight: '$medium',
  fontSize: '$14',
});

export const InfoTitle = styled(spanStyles, {
  color: '$GR0',
});

export const InfoText = styled(spanStyles, {
  color: '$GR1',
});

export const CharacterDetailsEpisodes = styled('div', {
  width: '100%',

  maxHeight: '150px',
  overflowY: 'auto',

  borderRadius: '$default',
  border: '1px solid $GR2',

  padding: '0 $8',

  '> span': {
    width: '100%',
    display: 'inline-block',
    textAlign: 'center',
    padding: '$8 0',

    borderBottom: '1px solid $GR2',
  },
});
