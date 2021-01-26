import { cleanup, fireEvent, render } from '@testing-library/react';

import CatchCTA from './CatchCTA';
import React from 'react';

beforeEach(cleanup);

window.scrollTo = jest.fn;

const pokemon = {
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
};

describe('CatchCTA component', () => {
  it('render', () => {
    const { getAllByAltText, getByTestId, getByText } = render(
      <CatchCTA pokemon={pokemon} />
    );
    fireEvent.click(getByTestId('catch-cta'));
    expect(getAllByAltText('pokeball')).toBeTruthy();
    expect(getByTestId('catch-pokemon-modal')).toBeTruthy();
    expect(getByText('Catch!')).toBeTruthy();
  });
});
