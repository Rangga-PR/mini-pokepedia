import React, { createContext, useReducer } from 'react';
import { getLocalItem, setLocalItem } from '@/helpers/index';

const trainerStore = createContext({});
const { Provider } = trainerStore;

const ADD_POKEMON = 'ADD_POKEMON';
const DELETE_POKEMON = 'DELETE_POKEMON';

const TrainerProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case ADD_POKEMON: {
        const newState = {
          ...state,
          pokemon: [...state.pokemon, action.payload],
        };
        setLocalItem('trainer', newState);
        return newState;
      }
      case DELETE_POKEMON: {
        const newState = {
          ...state,
          pokemon: state.pokemon.filter(
            (p) => p.nickname !== action.payload.nickname
          ),
        };
        setLocalItem('trainer', newState);
        return newState;
      }
      default: {
        return state;
      }
    }
  }, getLocalItem('trainer'));

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { trainerStore, ADD_POKEMON, DELETE_POKEMON, TrainerProvider };
