import { cleanup, render } from '@testing-library/react';

import Button from './Button';
import React from 'react';

beforeEach(cleanup);

describe('Button component', () => {
  it('render with children', () => {
    const { getByText } = render(<Button>test</Button>);
    expect(getByText('test')).toBeTruthy();
  });
});
