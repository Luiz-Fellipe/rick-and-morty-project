// Libs
import React from 'react';

// Components
import { SkeletonLoading } from 'shell/components/styles/SkeletonLoading';

function SkeletonStyled() {
  return (
    <SkeletonLoading
      data-testid="skeleton-loading"
      css={{
        margin: '$48 $8',
        borderRadius: '$default',
        height: '640px',
      }}
    />
  );
}

export function CharacterSkeletonLoading() {
  return <SkeletonStyled />;
}
