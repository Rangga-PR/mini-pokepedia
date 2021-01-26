import { cleanup, render } from '@testing-library/react';

import PokemonDetailLoading from './PokemonDetailLoading';
import React from 'react';

beforeEach(cleanup);

describe('PokemonDetailLoading component', () => {
  it('render', () => {
    const { getByTestId } = render(<PokemonDetailLoading />);
    expect(getByTestId('image-loading')).toBeTruthy();
    expect(getByTestId('status-loading')).toBeTruthy();
    expect(getByTestId('moves-loading')).toBeTruthy();
  });
});
