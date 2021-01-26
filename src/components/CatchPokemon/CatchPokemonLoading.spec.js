import { cleanup, render } from '@testing-library/react';

import CatchPokemonLoading from './CatchPokemonLoading';
import React from 'react';

beforeEach(cleanup);

describe('CatchPokemonLoading component', () => {
  it('render', () => {
    const { getByAltText, getByTestId } = render(<CatchPokemonLoading />);
    expect(getByAltText('pokeball')).toBeTruthy();
    expect(getByTestId('message')).toBeTruthy();
  });
});
