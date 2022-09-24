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
    backgroundColor: '$B300',
  },

  padding: '$8 $16',

  backgroundColor: '$G0',

  textAlign: 'center',
  color: '$N0',

  '&:hover': {
    backgroundColor: '$G1',
  },

  '&:focus': {
    outline: '2px solid $G0',
  },
  '&:active': {
    backgroundColor: '$B600',
  },
});
