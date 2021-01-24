import React, { useEffect } from 'react';

import Card from '@/common/Card/Card';
import Flex from '@/common/Flex/Flex';
import { GET_POKEMON } from '@/graphql/query';
import Picture from '@/common/Picture/Picture';
import PokemonDetailLoading from './PokemonDetailLoading';
import Tag from '@/common/Tag/Tag';
import Type from '@/components/common/Typography/TypoGraphy';
import { pokemonTypes } from '@/helpers/index';
import { useQuery } from '@apollo/client';

const PokemonDetail = () => {
  const { loading, error, data } = useQuery(GET_POKEMON, {
    variables: { name: 'pikachu' },
  });

  if (loading) return <PokemonDetailLoading />;

  return (
    <Flex as="section" width="100%" flexDirection="column">
      {data && (
        <Flex p="16px" flexWrap={['wrap', 'nowrap']}>
          <Card width={['100%', '300px']} m={['0 0 16px 0', '0 16px 0 0']}>
            <Picture
              src={data?.pokemon?.sprites.front_default}
              alt={data?.pokemon.name}
              width="100%"
              height="100%"
            />
          </Card>

          <Flex
            bg={data?.pokemon.types[0].type.name}
            width="100%"
            borderRadius="8px"
            p={['16px', '24px']}
            flexDirection="column">
            <Flex justifyContent="center" width="100%">
              <Type fontFamily="twop" color="white" variant={['caption', 'h6']}>
                {data?.pokemon.name}
              </Type>
            </Flex>

            <Flex mt="30px" flexDirection={['column', 'row']}>
              <Flex flexDirection="column" mr="100px">
                <Type
                  mb="8px"
                  fontWeight="bold"
                  color="white">{`Number: #${data?.pokemon.id}`}</Type>
                <Type
                  fontWeight="bold"
                  mb="8px"
                  color="white">{`Height: ${data?.pokemon.height}`}</Type>
                <Type
                  mb="8px"
                  fontWeight="bold"
                  color="white">{`Weight: ${data?.pokemon.weight}`}</Type>
                <Type
                  mb="8px"
                  fontWeight="bold"
                  color="white">{`Base Experience: ${data?.pokemon.base_experience}`}</Type>
                <Type fontWeight="bold" color="white">{`Owned: ${0}`}</Type>
              </Flex>

              <Flex flexDirection="column" mt={['24px', '0']}>
                <Flex flexDirection="column">
                  <Type mb="8px" fontWeight="bold" color="white">
                    Abilities
                  </Type>
                  <Flex>
                    {data.pokemon.abilities.map((a) => (
                      <Tag
                        key={a.ability.name}
                        bg="white"
                        color="black"
                        mr="8px">
                        {a.ability.name}
                      </Tag>
                    ))}
                  </Flex>
                </Flex>
                <Flex mt="16px" flexDirection="column">
                  <Type mb="8px" fontWeight="bold" color="white">
                    Types
                  </Type>
                  <Flex>
                    {data.pokemon.types.map((t) => (
                      <Tag
                        key={t.type.name}
                        bg={t.type.name || 'white'}
                        color="white"
                        mr="8px">
                        {t.type.name}
                      </Tag>
                    ))}
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      )}

      {data && (
        <Flex m="8px 16px" flexDirection="column">
          <Type fontWeight="bold" variant="h6" color="black">
            Available Moves
          </Type>

          <Flex mt="16px" flexWrap="wrap" justifyContent="flex-start">
            {data.pokemon.moves.map((m) => (
              <Tag
                p={['6px 12px', '8px 16px']}
                key={m.move.name}
                bg={
                  pokemonTypes[Math.floor(Math.random() * pokemonTypes.length)]
                }
                m={['4px', '8px']}>
                {m.move.name}
              </Tag>
            ))}
          </Flex>
        </Flex>
      )}
    </Flex>
  );
};

export default PokemonDetail;
