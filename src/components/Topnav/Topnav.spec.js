import { cleanup, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';
import React from 'react';
import Topnav from './Topnav';

beforeEach(cleanup);

describe('PokemonCard component', () => {
  it('render', () => {
    const { getByText, getByAltText, queryByText } = render(<Topnav />, {
      wrapper: MemoryRouter,
    });
    expect(getByText('Home')).toBeTruthy();
    expect(queryByText('Trainer')).toBeNull();
    expect(getByAltText('pokepedia')).toBeTruthy();
  });

  it('render with trainer exist', () => {
    const { getByText } = render(<Topnav trainer={{ name: 'red' }} />, {
      wrapper: MemoryRouter,
    });

    expect(getByText('Trainer')).toBeTruthy();
  });
});
