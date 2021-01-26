import { cleanup, fireEvent, render } from '@testing-library/react';

import CreateTrainer from './CreateTrainer';
import React from 'react';

beforeEach(cleanup);

describe('Create Trainer component', () => {
  it('able to create trainer', () => {
    const { getByTestId } = render(<CreateTrainer />);

    fireEvent.change(getByTestId('trainer-name'), { target: { value: 'red' } });
    fireEvent.click(getByTestId('create-button'));
    expect(localStorage.setItem).toHaveBeenLastCalledWith(
      'trainer',
      JSON.stringify({ name: 'red', gender: 'Female', pokemons: [] })
    );
    expect(localStorage.__STORE__['trainer']).toBe(
      JSON.stringify({ name: 'red', gender: 'Female', pokemons: [] })
    );
  });
});
