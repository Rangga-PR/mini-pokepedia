import { cleanup, render } from '@testing-library/react';

import Img from './Img';
import React from 'react';

beforeEach(cleanup);

describe('Img component', () => {
  it('render', () => {
    const { getByAltText } = render(
      <Img src="/image/pokepedia.webp" alt="test" />
    );
    expect(getByAltText('test')).toBeTruthy();
  });
});
