import { styled } from '@/styles';

export const CardWrapper = styled('div', {
  width: '100%',
  height: '100%',

  maxWidth: '300px',
  maxHeight: '290px',

  display: 'flex',
  flexDirection: 'column',

  alignItems: 'center',

  borderRadius: '5px',
  backgroundColor: '$N0',
  boxShadow: '0px 1.06589px 5.32946px rgba(0, 0, 0, 0.25)',

  padding: '$32',

  '> img': {
    width: '100px',
    height: '100px',

    backgroundColor: '$GR4',
    borderRadius: '100%',

    border: '2px solid $G1',
  },

  '> h2': {
    fontWeight: '$regular',
    fontSize: '$16',

    margin: '$32 0',
  },
});
