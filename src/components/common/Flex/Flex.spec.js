import { cleanup, render } from '@testing-library/react';

import Flex from './Flex';
import React from 'react';

beforeEach(cleanup);

describe('Flex component', () => {
  it('render with children', () => {
    const { getByText } = render(
      <Flex>
        <p>test</p>
      </Flex>
    );
    expect(getByText('test')).toBeTruthy();
  });
});
