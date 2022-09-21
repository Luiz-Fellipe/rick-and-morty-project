import { createStitches, ScaleValue } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      N0: '#FFFFFF',
      N1: '#FFFCF9',
      B0: '#42B4CA',
      G0: '#BFDE42',
    },
    space: {
      '0': `0px`,
      '1': `1px`,
      '4': `0.25rem`,
      '8': `0.5rem`,
      '10': '0.625rem',
      '12': `0.75rem`,
      '16': `1rem`,
      '24': `1.5rem`,
      '32': `2rem`,
      '48': '3rem',
    },
    radii: {
      full: `99999px`,
      default: `4px`,
      '8': '8px',
    },
    fonts: {
      default: `Poppins, sans-serif`,
    },
    sizes: {
      '344': '21.5rem',
      '720': '45rem',
    },
    fontSizes: {
      '8': `0.5rem`,
      '12': `0.75rem`,
      '14': `0.875rem`,
      '16': `1rem`,
      '18': '1.125rem',
      '24': `1.5rem`,
      '32': `2rem`,
    },
    fontWeights: {
      regular: '400',
      medium: '500',
      'semi-bold': '600',
      bold: '900',
    },
    lineHeights: {
      '16': '1rem',
      '20': '1.25rem',
      '24': '1.5rem',
      '32': '2rem',
      '40': '2.5rem',
    },
    zIndices: {
      overlay: '999',
      modal: '1000',
    },
    shadows: {
      default: '0px 4px 8px rgba(16, 24, 64, 0.08)',
    },
  },
  media: {
    sm: '(min-width: 576px)',
    md: '(min-width: 768px)',
    lg: '(min-width: 992px)',
    xxlg: '(min-width: 1400px)',
  },
  utils: {
    paddingX: (value: ScaleValue<'space'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: ScaleValue<'space'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  },
});
