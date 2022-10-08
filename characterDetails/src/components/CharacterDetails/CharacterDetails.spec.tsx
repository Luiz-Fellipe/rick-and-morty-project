import {
  mockQuery,
  queryExample,
  IUseGetCharacterProps,
} from '@/tests/mocks/react-query';
import { render, screen } from '@/tests/test-utils';
import { formatDate } from '@/utils/formatDate';
import React from 'react';

import { CharacterDetails } from '.';

describe('Character Details Component', () => {
  it('Character Details Component displayed successfully', () => {
    render(<CharacterDetails />);

    expect(screen.getByText('Character'));
  });

  it('should render with characters data', () => {
    mockQuery.mockReturnValueOnce(queryExample as IUseGetCharacterProps);

    const { debug } = render(<CharacterDetails />);

    const {
      data: {
        created,
        episode,
        gender,
        image,
        location,
        name,
        origin,
        species,
        status,
      },
    } = queryExample;

    debug();
    expect(screen.getByRole('img')).toHaveAttribute('src', image);
    expect(screen.getByText(formatDate(created))).toBeInTheDocument();
    expect(screen.getByText(gender)).toBeInTheDocument();
    expect(screen.getByText(name)).toBeInTheDocument();
    expect(screen.getByText(origin.name)).toBeInTheDocument();
    expect(screen.getByText(species)).toBeInTheDocument();
    expect(screen.getByText(status)).toBeInTheDocument();
    expect(screen.getByText(location.name)).toBeInTheDocument();
    expect(
      screen.getByText(`${episode[0].name} - ${episode[0].episode}`)
    ).toBeInTheDocument();
  });
  it('should render all episodes', () => {
    mockQuery.mockReturnValueOnce(queryExample as IUseGetCharacterProps);

    const { debug } = render(<CharacterDetails />);

    const {
      data: { episode },
    } = queryExample;

    debug();

    expect(screen.getAllByTestId('episode')).toHaveLength(episode.length);
  });
  it('check if the loading is being displayed on screen ', () => {
    mockQuery.mockReturnValueOnce({
      ...queryExample,
      isLoading: true,
    });

    const { debug } = render(<CharacterDetails />);

    const {
      data: { name },
    } = queryExample;

    debug();

    expect(screen.queryByText(name)).not.toBeInTheDocument();
    expect(screen.getByTestId('skeleton-loading')).toBeInTheDocument();
  });
});
