import { cleanup, render } from '@testing-library/react';

import PokemonMoves from './PokemonMoves';
import React from 'react';

beforeEach(cleanup);

const pokemonMoves = [
  {
    move: {
      name: 'kamehameha',
    },
  },
  {
    move: {
      name: 'rasengan',
    },
  },
];

describe('PokemonMoves component', () => {
  it('render', () => {
    const { getByText } = render(<PokemonMoves data={pokemonMoves} />);
    expect(getByText('kamehameha')).toBeTruthy();
    expect(getByText('rasengan')).toBeTruthy();
  });
});
