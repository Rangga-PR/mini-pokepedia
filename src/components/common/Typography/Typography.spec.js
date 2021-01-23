import { cleanup, render } from '@testing-library/react';

import React from 'react';
import Typography from './TypoGraphy';

beforeEach(cleanup);

describe('Typography component', () => {
  it('render with children', () => {
    const { getByText } = render(<Typography>test</Typography>);
    expect(getByText('test')).toBeTruthy();
  });
});
