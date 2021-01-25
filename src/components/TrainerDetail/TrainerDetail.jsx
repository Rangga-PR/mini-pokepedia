import { DELETE_POKEMON, trainerStore } from '@/context/trainerContext';
import React, { useContext } from 'react';

import Card from '@/common/Card/Card';
import Flex from '@/common/Flex/Flex';
import Picture from '@/common/Picture/Picture';
import Tag from '@/common/Tag/Tag';
import TrainerPokemon from './TrainerPokemon';
import Type from '@/components/common/Typography/TypoGraphy';

const trainerImgSource = {
  male: [{ srcset: '/image/boy.webp', type: 'image/webp' }],
  female: [{ srcset: '/image/girl.webp', type: 'image/webp' }],
};

const TrainerDetail = () => {
  const { state, dispatch } = useContext(trainerStore);

  const deletePokemon = (pokemon) => {
    dispatch({ type: DELETE_POKEMON, payload: pokemon });
  };

  return (
    <Flex as="section" width="100%" flexDirection={['column', 'row']}>
      <Flex
        p="8px"
        bg="blue"
        m="8px"
        borderRadius="16px"
        height="fit-content"
        width={['auto', '350px']}>
        <Card height="100%">
          <Picture
            src={`/image/${state.gender === 'Male' ? `boy.png` : 'girl.png'}`}
            source={
              trainerImgSource[state.gender.toLowerCase()] ||
              trainerImgSource['female']
            }
            alt="trainer"
            width="100%"
            height="100%"
          />
        </Card>

        <Flex flexDirection="column" m="8px">
          <Type fontWeight="bold" color="white">
            Name
          </Type>
          <Tag mt="8px">{state.name}</Tag>

          <Type fontWeight="bold" color="white" mt="12px">
            Gender
          </Type>
          <Tag mt="8px" bg={state.gender === 'Male' ? 'green' : 'red'}>
            {state.gender}
          </Tag>

          <Type fontWeight="bold" color="white" mt="12px">
            Owned Pokemons
          </Type>
          <Tag mt="8px" bg="white" color="black">
            {state.pokemons.length}
          </Tag>
        </Flex>
      </Flex>

      <Flex
        my="8px"
        p={['8px', '16px']}
        flexDirection="column"
        width={['auto', 'calc(1024px - 400px)']}>
        <Type fontWeight="bold" variant="h5" mb="24px" px="8px">
          Owned Pokemons
        </Type>
        <TrainerPokemon
          pokemons={state.pokemons || []}
          onDelete={deletePokemon}
        />
      </Flex>
    </Flex>
  );
};

export default TrainerDetail;
