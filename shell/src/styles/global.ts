import { globalCss } from '@/styles';

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    border: `none`,
    boxSizing: `border-box`,
  },
  'body, button': {
    fontFamily: `$default`,
    cursor: 'pointer',
  },
  body: {
    background: `$background`,
    color: `$text`,
  },
  'h1, h2, h3, h4, h5, h6': {
    color: `$title`,
  },
  '#root': {
    width: '100%',
    height: '100%',

    display: 'grid',
    placeItems: 'center',
  },
});
