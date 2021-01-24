import { cleanup, render } from '@testing-library/react';

import React from 'react';
import Tag from './Tag';

beforeEach(cleanup);

describe('Tag component', () => {
  it('render with children', () => {
    const { getByText } = render(<Tag>test</Tag>);
    expect(getByText('test')).toBeTruthy();
  });
});
