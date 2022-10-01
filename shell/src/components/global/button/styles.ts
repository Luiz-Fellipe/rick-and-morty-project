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

  transition: 'border,outline 0.1s ease',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: '0.6',
  },

  padding: '$8 $16',

  textAlign: 'center',
  // color: '$N0',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$G0',
        '&:hover:not(:disabled)': {
          backgroundColor: '$G1',
        },
        '&:focus:not(:disabled)': {
          outline: '2px solid $G1A',
          backgroundColor: '$G1',
        },
      },
      secondary: {
        backgroundColor: '$B0',
        color: '$N0',

        '&:hover:not(:disabled)': {
          backgroundColor: '$B1',
        },
        '&:focus:not(:disabled)': {
          outline: '2px solid $B2',
          backgroundColor: '$B1',
        },
      },
    },
    iconSide: {
      left: {
        flexDirection: 'row',
      },
      right: {
        flexDirection: 'row-reverse',
      },
    },

    isActive: {
      true: {},
    },
  },

  compoundVariants: [
    {
      variant: 'primary',
      isActive: true,
      css: {
        outline: '2px solid $G1A',
        backgroundColor: '$G2 !important',
      },
    },
    {
      variant: 'secondary',
      isActive: true,
      css: {
        outline: '2px solid $B2',
        backgroundColor: '$B1 !important',
      },
    },
  ],
});
