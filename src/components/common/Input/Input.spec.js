import { cleanup, render } from '@testing-library/react';

import Input from './Input';
import React from 'react';

beforeEach(cleanup);

describe('Input component', () => {
  it('render', () => {
    const { getAllByTestId } = render(<Input data-testid="input" />);
    expect(getAllByTestId('input')).toBeTruthy();
  });
});
