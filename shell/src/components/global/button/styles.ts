import { styled } from '@/styles';

export const ButtonStyled = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$8',

  borderRadius: '$default',
  border: '1px solid transparent',

  fontSize: '$12',
  fontWeight: '$medium',

  transition: 'all 0.2s ease-out',

  '&:disabled': {
    cursor: 'not-allowed',
    backgroundColor: '$GR2',
  },

  padding: '$8 $16',

  textAlign: 'center',
  color: '$N0',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$G0',
        '&:hover:not(:disabled)': {
          backgroundColor: '$G1',
        },
        '&:focus:not(:disabled)': {
          outline: '2px solid $G0',
          backgroundColor: '$G1',
        },
      },
      secondary: {
        backgroundColor: '$B0',

        '&:hover:not(:disabled)': {
          backgroundColor: '$B1',
        },
        '&:focus:not(:disabled)': {
          outline: '2px solid $B2',
          backgroundColor: '$B1',
        },
      },
    },
  },
});
