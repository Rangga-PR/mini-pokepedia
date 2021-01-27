import { cursorPointer, oneLinesEllipsis } from '@/styles/utility';

import Card from '@/common/Card/Card';
import Flex from '@/common/Flex/Flex';
import Image from 'next/image';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';
import Tag from '@/common/Tag/Tag';
import Type from '@/common/Typography/TypoGraphy';

const TrainerPokemon = ({ pokemons, onDelete }) => {
  return (
    <Flex width="100%" flexDirection="column">
      {pokemons.map((val, i) => (
        <Flex
          key={i}
          bg={val.types[0].type.name}
          mb="8px"
          borderRadius="8px"
          alignItems="flex-start">
          <Link to={`/pokemon/${val.name}`}>
            <Card>
              <Image src={val.sprites.front_default} width={100} height={100} />
              <Type fontSize="8px" fontFamily="twop" style={oneLinesEllipsis}>
                {val.nickname}
              </Type>
            </Card>
          </Link>

          <Flex flexDirection="column" m="8px" width="calc(100% - 100px)">
            <Type variant="caption" fontWeight="bold" color="white">
              Species:
            </Type>
            <Type mt="4px" variant="caption" color="white">
              {val.name}
            </Type>

            <Type variant="caption" fontWeight="bold" color="white" mt="16px">
              Types:
            </Type>
            <Flex>
              {val.types.map((t) => (
                <Tag key={t.type.name} mt="4px" mr="4px" bg={t.type.name}>
                  {t.type.name}
                </Tag>
              ))}
            </Flex>
          </Flex>

          <Flex
            data-testid="delete-pokemon"
            onClick={() => onDelete(val)}
            m="8px 8px 0 0"
            p="2px"
            bg="white"
            borderRadius="90px"
            style={cursorPointer}>
            <Image src="/svg/fi-br-cross-small.svg" width={20} height={20} />
          </Flex>
        </Flex>
      ))}
    </Flex>
  );
};

TrainerPokemon.propTypes = {
  pokemons: PropTypes.arrayOf(PropTypes.object),
  onDelete: PropTypes.func,
};

export default TrainerPokemon;
