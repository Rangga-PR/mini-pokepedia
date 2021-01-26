import { cleanup, render } from '@testing-library/react';

import CatchPokemonFailed from './CatchPokemonFailed';
import React from 'react';

beforeEach(cleanup);

describe('CatchPokemonFailed component', () => {
  it('render', () => {
    const { getByAltText, getByTestId } = render(<CatchPokemonFailed />);
    expect(getByAltText('pokeball')).toBeTruthy();
    expect(getByTestId('message')).toBeTruthy();
  });
});
