import { cleanup, render } from '@testing-library/react';

import Card from './Card';
import React from 'react';

beforeEach(cleanup);

describe('Card component', () => {
  it('render with children', () => {
    const { getByText } = render(
      <Card>
        <p>test</p>
      </Card>
    );
    expect(getByText('test')).toBeTruthy();
  });
});
