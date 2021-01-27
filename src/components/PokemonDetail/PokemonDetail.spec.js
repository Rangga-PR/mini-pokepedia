import { Route, Router } from 'react-router-dom';
import { cleanup, render } from '@testing-library/react';

import { GET_POKEMON } from '@/graphql/query';
import { MockedProvider } from '@apollo/client/testing';
import PokemonDetail from './PokemonDetail';
import React from 'react';
import { createMemoryHistory } from 'history';

beforeEach(cleanup);

function renderWithRouterMatch(
  ui,
  {
    path = '/',
    route = '/',
    history = createMemoryHistory({ initialEntries: [route] }),
  } = {}
) {
  return {
    ...render(
      <Router history={history}>
        <Route path={path}>{ui}</Route>
      </Router>
    ),
  };
}

const mocks = [
  {
    request: {
      query: GET_POKEMON,
      variables: { name: 'bulbasaur' },
    },
    result: {
      data: {
        pokemon: {
          id: 1,
          name: 'bulbasaur',
          height: 7,
          weight: 69,
          base_experience: 64,
          abilities: [
            {
              ability: {
                name: 'overgrow',
              },
            },
            {
              ability: {
                name: 'chlorophyll',
              },
            },
          ],
          species: { name: 'bulbasaur' },
          stats: [{ base_stat: 45, effort: 0 }],
          sprites: {
            front_default:
              'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
          },
          moves: [{ move: { name: 'razor-wind' } }],
          types: [{ type: { name: 'grass' } }],
        },
      },
    },
  },
];

describe('PokemonDetail component', () => {
  localStorage.setItem(
    'trainer',
    JSON.stringify({
      name: 'ash',
      gender: 'Male',
      pokemons: [{ id: 1, name: 'bulbasaur' }],
    })
  );

  it('render', async () => {
    const { findByText, findByAltText, findByTestId } = renderWithRouterMatch(
      <MockedProvider mocks={mocks} addTypename={false}>
        <PokemonDetail />
      </MockedProvider>,
      {
        route: '/pokemon/bulbasaur',
        path: '/pokemon/:name',
      }
    );

    //render loading state
    expect(findByTestId('image-loading')).toBeTruthy();
    expect(findByTestId('status-loading')).toBeTruthy();
    expect(findByTestId('moves-loading')).toBeTruthy();

    await new Promise((resolve) => setTimeout(resolve, 0));

    //render pokemon status
    expect(await findByAltText('bulbasaur')).toBeTruthy(); // render image
    expect(await findByText('bulbasaur')).toBeTruthy();
    expect(await findByText('Number: #1')).toBeTruthy();
    expect(await findByText('Height: 7')).toBeTruthy();
    expect(await findByText('Weight: 69')).toBeTruthy();
    expect(await findByText('Base Experience: 64')).toBeTruthy();
    expect(await findByText('Owned: 1')).toBeTruthy(); // render owned count

    //render abilities
    expect(await findByText('overgrow')).toBeTruthy();
    expect(await findByText('chlorophyll')).toBeTruthy();

    //render types
    expect(await findByText('grass')).toBeTruthy();

    //render moves
    expect(await findByText('razor-wind')).toBeTruthy();

    //render catch call to action
    expect(await findByTestId('catch-cta')).toBeTruthy();
  });
});
