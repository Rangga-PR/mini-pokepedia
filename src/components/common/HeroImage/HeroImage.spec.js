import { cleanup, render } from '@testing-library/react';

import HeroImage from './HeroImage';
import React from 'react';

beforeEach(cleanup);

describe('HeroImage component', () => {
  it('render with children', () => {
    const { getByText } = render(
      <>
        <HeroImage
          imgUrl="/static/image/pokemon.jpg"
          width="100px"
          height="100px">
          <p>test</p>
        </HeroImage>

        <HeroImage imgUrl="/static/image/pokemon.jpg">
          <p>unspecified size test</p>
        </HeroImage>
      </>
    );
    expect(getByText('test')).toBeTruthy();
    expect(getByText('unspecified size test')).toBeTruthy();
  });
});
