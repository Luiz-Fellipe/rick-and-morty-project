import React from 'react';

import { HeaderStyled } from './styles';

import LogoPng from '../../assets/images/logo.png';

export function Header() {
  return (
    <HeaderStyled>
      <img src={LogoPng} alt="rick and morty logo" />
    </HeaderStyled>
  );
}
