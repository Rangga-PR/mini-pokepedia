import CatchPokemon from './CatchPokemon';
import React from 'react';
import { Router } from 'react-router-dom';
import { TrainerProvider } from '@/context/trainerContext';
import { act } from 'react-dom/test-utils';
import { createMemoryHistory } from 'history';
import { render } from '@testing-library/react';

beforeEach(() => {
  jest.useFakeTimers();
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});

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

describe('CatchPokemon component', () => {
  const history = createMemoryHistory();

  it('start catch pokemon', async () => {
    const { findByTestId } = render(
      <Router history={history}>
        <TrainerProvider>
          <CatchPokemon active pokemon={pokemon} />
        </TrainerProvider>
      </Router>
    );
    expect(await findByTestId('catch-loading')).toBeTruthy();
    act(() => {
      jest.advanceTimersByTime(7000);
    });
  });
});
