import { cleanup, fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import TrainerPokemon from './TrainerPokemon';

beforeEach(() => {
  cleanup;
});

const onDelete = jest.fn();

const pokemons = [
  {
    id: 1,
    name: 'bulbasaur',
    nickname: 'pepe',
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
];

describe('Trainer Pokemon component', () => {
  it("render trainer's pokemon", async () => {
    const { findByText, findByTestId } = render(
      <TrainerPokemon pokemons={pokemons} onDelete={onDelete} />,
      { wrapper: MemoryRouter }
    );

    expect(await findByText('pepe')).toBeTruthy();
    expect(await findByText('bulbasaur')).toBeTruthy();
    expect(await findByText('grass')).toBeTruthy();

    fireEvent.click(await findByTestId('delete-pokemon'));
    expect(onDelete).toHaveBeenCalledTimes(1);
  });
});
