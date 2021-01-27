import { cleanup, fireEvent, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import TrainerDetail from './TrainerDetail';
import { TrainerProvider } from '@/context/trainerContext';

beforeEach(() => {
  cleanup;
});

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

describe('Trainer detail component', () => {
  it('render female trainer detail', async () => {
    localStorage.setItem(
      'trainer',
      JSON.stringify({ name: 'red', gender: 'Female', pokemons })
    );

    const { findByText, findByAltText, findByTestId } = render(
      <TrainerProvider>
        <TrainerDetail />
      </TrainerProvider>,
      { wrapper: MemoryRouter }
    );

    //render detail
    expect(await findByText('red')).toBeTruthy();
    expect(await findByText('Female')).toBeTruthy();
    expect(await findByAltText('trainer')).toBeTruthy(); //render trainer image

    //render owned pokemon
    expect(await findByText('pepe')).toBeTruthy();
    expect(await findByText('bulbasaur')).toBeTruthy();
    expect(await findByText('grass')).toBeTruthy();

    fireEvent.click(await findByTestId('delete-pokemon'));
  });

  it('render no male trainer detail', async () => {
    localStorage.setItem(
      'trainer',
      JSON.stringify({ name: 'red', gender: 'Male', pokemons: [] })
    );

    const { findByText, findByAltText } = render(
      <TrainerProvider>
        <TrainerDetail />
      </TrainerProvider>,
      { wrapper: MemoryRouter }
    );

    //render detail
    expect(await findByText('red')).toBeTruthy();
    expect(await findByText('Male')).toBeTruthy();
    expect(await findByAltText('trainer')).toBeTruthy(); //render trainer image
  });

  it('render with undefined gender and no pokemon data', async () => {
    localStorage.setItem(
      'trainer',
      JSON.stringify({ name: 'red', gender: 'Apache' })
    );

    const { findByText, findByAltText } = render(
      <TrainerProvider>
        <TrainerDetail />
      </TrainerProvider>,
      { wrapper: MemoryRouter }
    );

    //render detail
    expect(await findByText('red')).toBeTruthy();
    expect(await findByText('Apache')).toBeTruthy();
    expect(await findByAltText('trainer')).toBeTruthy(); //render trainer image
  });
});
