import { cleanup, fireEvent, render } from '@testing-library/react';

import CreateTrainer from './CreateTrainer';
import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

beforeEach(cleanup);

describe('Create Trainer component', () => {
  it('able to create trainer', () => {
    const history = createMemoryHistory();
    const { getByTestId } = render(
      <Router history={history}>
        <CreateTrainer />
      </Router>
    );

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
