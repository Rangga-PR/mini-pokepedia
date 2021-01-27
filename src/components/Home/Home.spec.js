import { act, cleanup, fireEvent, render } from '@testing-library/react';

import { GET_POKEMONS } from '@/graphql/query';
import Home from './Home';
import { MockedProvider } from '@apollo/client/testing';
import React from 'react';
import { TrainerProvider } from '@/context/trainerContext';

beforeEach(() => {
  jest.useFakeTimers();
  cleanup();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

window.scrollTo = jest.fn;

const mocks = [
  {
    request: {
      query: GET_POKEMONS,
      notifyOnNetworkStatusChange: true,
      variables: {
        offset: 0,
        limit: 50,
      },
    },
    result: {
      data: {
        pokemons: {
          count: 2,
          results: [
            {
              id: 1,
              image: '/image/pokemon.webp',
              name: 'bobasaur',
            },
            {
              id: 2,
              image: '/image/pokemon.webp',
              name: 'squidward',
            },
          ],
        },
      },
    },
  },
];

describe('Home component', () => {
  it('render with create trainer cta', async () => {
    const { findByTestId } = render(
      <TrainerProvider>
        <MockedProvider mocks={mocks} addTypename={false}>
          <Home />
        </MockedProvider>
      </TrainerProvider>
    );

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(await findByTestId('create-trainer-cta')).toBeTruthy();
    fireEvent.click(await findByTestId('create-trainer-cta'));
    expect(await findByTestId('trainer-name')).toBeTruthy();
    fireEvent.click(await findByTestId('close-modal'));
  });
});
