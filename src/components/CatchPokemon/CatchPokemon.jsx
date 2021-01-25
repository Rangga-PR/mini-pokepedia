import React, { useEffect, useState } from 'react';

import CatchPokemonFailed from './CatchPokemonFailed';
import CatchPokemonLoading from './CatchPokemonLoading';
import CatchPokemonSuccess from './CatchPokemonSuccess';
import Flex from '@/common/Flex/Flex';
import PropTypes from 'prop-types';

const CatchPokemon = ({ pokemon, active }) => {
  const [loading, setLoading] = useState(true);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (active) {
      setLoading(true);
      setTimeout(() => {
        setSuccess(Math.random() < 0.5);
        setLoading(false);
      }, 6000);
    }
  }, [active]);

  return (
    <Flex
      width="100%"
      height="100%"
      alignItems="center"
      justifyContent="center">
      {loading ? (
        <CatchPokemonLoading />
      ) : success ? (
        <CatchPokemonSuccess pokemon={pokemon} />
      ) : (
        <CatchPokemonFailed />
      )}
    </Flex>
  );
};

CatchPokemon.propTypes = {
  active: PropTypes.bool,
  pokemon: PropTypes.object.isRequired,
};

export default CatchPokemon;
