import { cleanup, render } from '@testing-library/react';

import Picture from './Picture';
import React from 'react';

beforeEach(cleanup);

describe('Picture component', () => {
  it('render', () => {
    const { getByAltText } = render(
      <Picture
        src="/image/pokemon.jpg"
        alt="pokemon banner"
        loading="lazy"
        source={[{ srcset: '/image/pokemon.webp', type: 'image/webp' }]}
      />
    );
    expect(getByAltText('pokemon banner')).toBeTruthy();
  });
});
