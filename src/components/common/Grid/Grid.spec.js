import { cleanup, render } from '@testing-library/react';

import Grid from './Grid';
import React from 'react';

beforeEach(cleanup);

describe('Grid component', () => {
  it('render with children', () => {
    const { getByText } = render(
      <Grid>
        <p>test</p>
      </Grid>
    );
    expect(getByText('test')).toBeTruthy();
  });
});
