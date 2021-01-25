import { cleanup, render } from '@testing-library/react';

import Badge from './Badge';
import React from 'react';

beforeEach(cleanup);

describe('Badge component', () => {
  it('render with content', () => {
    const { getByText } = render(<Badge>1</Badge>);
    expect(getByText('1')).toBeTruthy();
  });
});
