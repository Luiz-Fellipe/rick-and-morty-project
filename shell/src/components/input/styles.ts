import { styled } from '@/styles';

export const InputContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',

  width: '261px',

  variants: {
    full: {
      true: {
        width: '100%',
      },
    },
  },
});

export const InputStyled = styled('input', {
  width: '100%',
  height: '32px',

  border: '1px solid $N400',
  borderRadius: '$default',

  padding: '$8 $12',

  fontSize: '$12',
  fontFamily: '$default',
  transition: 'all 0.2s ease-out',

  color: '$N700',

  '&::placeholder': {
    color: '$N600',
  },

  '&:hover': {
    '&::placeholder': {
      color: '$N700',
    },
  },

  '&:focus': {
    borderColor: '$B300',
    outline: '2px solid #D6E0FF',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    borderColor: '$N300',
    backgroundColor: '$N100',
    '&::placeholder': {
      color: '$N600',
    },
  },

  variants: {
    error: {
      true: {
        borderColor: '$R400',
      },
    },
  },
});

export const ErrorMessage = styled('span', {
  width: '100%',

  display: 'inline-block',
  marginTop: '$1',

  fontWeight: '$regular',
  fontSize: '$12',
  color: '$R400',

  textAlign: 'left',

  wordBreak: 'break-all',
});

export const Label = styled('h4', {
  fontWeight: '$medium',
  fontSize: '$14',
  color: '$N800',

  lineHeight: '$24',

  marginBottom: '$4',
});

export const Description = styled('span', {
  fontWeight: '$regular',
  fontSize: '$12',
  color: '$N700',

  lineHeight: '$16',
  marginBottom: '$8',

  wordBreak: 'break-all',
});
