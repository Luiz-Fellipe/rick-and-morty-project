import { keyframes } from '@stitches/react';
import { styled } from '@/styles';

const skeleton = keyframes({
  '100%': {
    backgroundPositionX: '-200%',
  },
});

export const SkeletonLoading = styled('div', {
  background: 'linear-gradient(110deg, $GR4 8%, #f7f6f6 18%, $GR4 33%)',
  backgroundSize: '500% 200%',
  animation: `2.5s ${skeleton} linear infinite`,
});
