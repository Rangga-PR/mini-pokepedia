import { cleanup, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import PokemonList from './PokemonList';
import React from 'react';

beforeEach(cleanup);

const pokemons = [
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
];

describe('PokemonCard component', () => {
  it('render', () => {
    const { getByText } = render(<PokemonList dataSource={pokemons} />, {
      wrapper: MemoryRouter,
    });
    expect(getByText('bobasaur')).toBeTruthy();
    expect(getByText('squidward')).toBeTruthy();
  });

  it('render all loading placeholder', () => {
    const { getAllByTestId } = render(
      <PokemonList loading dataSource={pokemons} />,
      { wrapper: MemoryRouter }
    );
    expect(getAllByTestId('card-loading')).toHaveLength(8);
  });
});
