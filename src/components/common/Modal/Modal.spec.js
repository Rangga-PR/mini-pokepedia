import { cleanup, render } from '@testing-library/react';

import Modal from './Modal';
import React from 'react';

beforeEach(cleanup);

const setOpen = jest.fn();

describe('Modal component', () => {
  it('render', () => {
    const { getByText } = render(
      <Modal active={true} onClose={setOpen}>
        <p>test</p>
      </Modal>
    );
    expect(getByText('test')).toBeTruthy();
  });
});
