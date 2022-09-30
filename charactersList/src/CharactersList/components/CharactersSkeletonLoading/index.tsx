// Libs
import React from 'react';

// Components
import { SkeletonLoading } from 'shell/components/styles/SkeletonLoading';

// Styles
import { CharactersListContent } from '../../styles';

function SkeletonStyled() {
  return (
    <SkeletonLoading
      css={{
        borderRadius: '$default',
        height: '290px',
        width: '300px',
      }}
    />
  );
}

export function CharactersSkeletonLoading() {
  return (
    <CharactersListContent>
      <SkeletonStyled />
      <SkeletonStyled />
      <SkeletonStyled />
      <SkeletonStyled />
      <SkeletonStyled />
      <SkeletonStyled />
      <SkeletonStyled />
      <SkeletonStyled />
    </CharactersListContent>
  );
}
