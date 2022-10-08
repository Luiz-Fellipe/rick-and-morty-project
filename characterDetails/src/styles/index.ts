import { createStitches, ScaleValue } from '@stitches/react';

export const { styled, getCssText } = createStitches({
  prefix: 'character-details',
  theme: {
    colors: {
      N0: '#FFFFFF',
      N1: '#FFFCF9',
      B0: '#42B4CA',
      B1: '#3885B3',
      B2: '#2E5B9B',
      B3: '#59D3D0',
      G0: '#BFDE42',
      G1: '#8BC537',
      G1A: 'RGBA(139,197,55,0.49)',
      G2: '#628c27',
      GR0: '#333333',
      GR1: '#828282',
      GR2: '#D8DAE5',
      GR3: '#8F95B2',
      GR4: '#DADADA',
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
      '36': '2.25rem',
      '48': '3rem',
      '80': '5rem',
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
      '1360': '85rem',
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
      default: '0px -3px 8px rgba(0, 0, 0, 0.25)',
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
