import { globalCss } from '@/styles';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: `none`,
    boxSizing: `border-box`,

    '&::-webkit-scrollbar-track': {
      background: '$GR4',
    },

    '&::-webkit-scrollbar': {
      width: '6px',
      height: '6px',
    },

    '&::-webkit-scrollbar-thumb': {
      background: '$GR1',
    },
  },
  html: {
    width: '100%',
    height: '100%',
  },
  'body, button': {
    fontFamily: `$default`,
  },
  body: {
    background: `$N1`,
    width: '100%',
    height: '100%',
  },
  'h1, h2, h3, h4, h5, h6': {
    color: `$title`,
  },
  '#app': {
    width: '100%',
    height: '100%',
  },

  button: {
    cursor: 'pointer',
  },

  a: {
    all: 'unset',
  },
});
