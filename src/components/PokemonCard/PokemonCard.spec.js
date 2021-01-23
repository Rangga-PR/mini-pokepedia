import { cleanup, render } from '@testing-library/react';

import PokemonCard from './PokemonCard';
import React from 'react';

beforeEach(cleanup);

const pokemonData = {
  id: 1,
  image: '/image/pokemon.webp',
  name: 'bobasaur',
};

describe('PokemonCard component', () => {
  it('render', () => {
    const { getByAltText, getByText } = render(
      <PokemonCard data={pokemonData} />
    );
    expect(getByAltText('bobasaur')).toBeTruthy();
    expect(getByText('bobasaur')).toBeTruthy();
  });

  it('render loading placeholder', () => {
    const { getByTestId } = render(<PokemonCard loading />);

    expect(getByTestId('card-loading')).toBeTruthy();
  });
});
