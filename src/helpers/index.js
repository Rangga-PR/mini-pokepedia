export const pokemonTypes = [
  'normal',
  'fire',
  'water',
  'electric',
  'grass',
  'ice',
  'fighting',
  'poison',
  'ground',
  'flying',
  'psychic',
  'bug',
  'rock',
  'ghost',
  'dragon',
  'dark',
  'steel',
  'fairy',
];

export const setLocalItem = (key, value) => {
  window !== 'undefined' &&
    window.localStorage.setItem(key, JSON.stringify(value));
};

export const getLocalItem = (key) => {
  if (window === 'undefined') return;
  return JSON.parse(window.localStorage.getItem(key));
};
