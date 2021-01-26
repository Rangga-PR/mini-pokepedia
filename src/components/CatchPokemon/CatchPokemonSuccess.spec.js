import { cleanup, fireEvent, render } from '@testing-library/react';

import CatchPokemonSuccess from './CatchPokemonSuccess';
import React from 'react';
import { Router } from 'react-router-dom';
import { TrainerProvider } from '@/context/trainerContext';
import { createMemoryHistory } from 'history';

beforeEach(cleanup);

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

describe('CatchPokemonSuccess component', () => {
  const history = createMemoryHistory();

  it('able to keep pokemon', () => {
    localStorage.setItem(
      'trainer',
      JSON.stringify({ name: 'red', gender: 'Female', pokemons: [] })
    );

    const { getByTestId } = render(
      <Router history={history}>
        <TrainerProvider>
          <CatchPokemonSuccess pokemon={pokemon} />
        </TrainerProvider>
      </Router>
    );

    fireEvent.change(getByTestId('nickname'), {
      target: { value: 'pikataro' },
    });

    fireEvent.click(getByTestId('keep-button'));

    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
