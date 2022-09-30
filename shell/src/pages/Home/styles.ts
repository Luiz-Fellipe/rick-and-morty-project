import { styled } from '@/styles';

export const Content = styled('div', {
  width: '100%',
  // header height + margin bottom header
  height: 'calc(100% - 3rem - 45px)',

  margin: '$0 auto',

  '@md': {
    maxWidth: '$720',
  },

  '@xxlg': {
    maxWidth: '$1360',
  },
});
