import { cleanup, render } from '@testing-library/react';

import PageNotFound from './PageNotFound';
import React from 'react';

beforeEach(cleanup);

describe('PageNotFound component', () => {
  it('render', () => {
    const { getByAltText, getByTestId } = render(<PageNotFound />);
    expect(getByAltText('pokeball')).toBeTruthy();
    expect(getByTestId('message')).toBeTruthy();
  });
});
