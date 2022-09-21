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
  },

  variants: {
    variant: {
      primary: {
        backgroundColor: '$primary',

        textAlign: 'center',
        color: '$N0',

        '&:hover': {
          backgroundColor: '$B500',
        },
        '&:focus': {
          outline: '2px solid $B200',
        },
        '&:active': {
          backgroundColor: '$B600',
        },
        '&:disabled': {
          cursor: 'not-allowed',
          backgroundColor: '$B300',
        },
      },
      secondary: {
        backgroundColor: '$N0',
        border: '1px solid $N400',

        color: '$N700',

        '&:hover': {
          color: '$N800',
          borderColor: '$N600',
        },
        '&:active': {
          color: '$N800',
          backgroundColor: '$N100',
          borderColor: '$N500',
        },
        '&:focus': {
          outline: '2px solid $B200',
        },
        '&:disabled': {
          color: '$N500',
          backgroundColor: '$N0',
          borderColor: '$N300',
        },
      },
      minimal: {
        backgroundColor: 'transparent',

        color: '$N700',

        '&:hover:not(:disabled)': {
          color: '$N800',
          backgroundColor: '$N100',
        },
        '&:focus:not(:disabled)': {
          outline: '2px solid $B200',
        },
        '&:active:not(:disabled)': {
          color: '$N800',
          backgroundColor: '$N200',
        },
        '&:disabled': {
          color: '$N400',
        },
      },
      danger: {
        backgroundColor: '$danger',

        textAlign: 'center',
        color: '$N0',

        '&:hover': {
          backgroundColor: '$R500',
        },
        '&:focus': {
          backgroundColor: '$R500',
          outline: '2px solid $R100',
        },
        '&:active': {
          backgroundColor: '$R600',
        },

        '&:disabled': {
          cursor: 'not-allowed',
          backgroundColor: '$R200',
        },
      },
      link: {
        backgroundColor: 'transparent',

        textAlign: 'center',
        color: '$B400',

        '&:focus': {
          color: '$B500',
          outline: '2px solid $B200',
        },
        '&:hover': {
          color: '$B500',
        },
        '&:active': {
          color: '$B600',
        },

        '&:visited': {
          color: '$V400',
        },

        '&:disabled': {
          color: '$N500',
          cursor: 'not-allowed',
          backgroundColor: '$R200',
        },
      },
    },
    size: {
      small: {
        padding: '$8 $16',
      },
      medium: {
        padding: '$12 $24',
        fontSize: '$14',
      },
      large: {
        padding: '$16 $32',
        fontSize: '$16',
      },
    },
    full: {
      true: {
        width: '100%',
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

    onlyIcon: {
      true: {},
    },
  },

  compoundVariants: [
    {
      size: 'small',
      onlyIcon: true,
      css: {
        padding: '$8 $8',
      },
    },
    {
      size: 'medium',
      onlyIcon: true,
      css: {
        padding: '$12 $12',
      },
    },
    {
      size: 'large',
      onlyIcon: true,
      css: {
        padding: '$16 $16',
      },
    },
  ],
});
