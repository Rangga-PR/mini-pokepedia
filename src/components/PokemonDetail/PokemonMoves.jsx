import Flex from '@/common/Flex/Flex';
import PropTypes from 'prop-types';
import React from 'react';
import Tag from '@/common/Tag/Tag';
import { pokemonTypes } from '@/helpers/index';

const PokemonMoves = ({ data }) => {
  return (
    <Flex mt="16px" flexWrap="wrap" justifyContent="flex-start">
      {data.map((m) => (
        <Tag
          p={['6px 12px', '8px 16px']}
          key={m.move.name}
          bg={pokemonTypes[Math.floor(Math.random() * pokemonTypes.length)]}
          m={['4px', '8px']}>
          {m.move.name}
        </Tag>
      ))}
    </Flex>
  );
};

PokemonMoves.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

export default PokemonMoves;
