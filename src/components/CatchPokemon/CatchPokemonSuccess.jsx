import { ADD_POKEMON, trainerStore } from '@/context/trainerContext';
import React, { useContext, useState } from 'react';

import Button from '@/common/Button/Button';
import Flex from '@/common/Flex/Flex';
import Image from 'next/image';
import Input from '@/common/Input/Input';
import PropTypes from 'prop-types';
import Type from '@/common/Typography/TypoGraphy';
import { useHistory } from 'react-router-dom';
import { uuid } from 'uuidv4';

const CatchPokemonSuccess = ({ pokemon }) => {
  const { state, dispatch } = useContext(trainerStore);
  const history = useHistory();
  const [nickName, setNickname] = useState(pokemon.name || '');
  const [error, setError] = useState(undefined);

  const keepPokemon = () => {
    setError(undefined);

    if (!nickName) {
      setError({ message: 'Pokemon nickname cannot be empty' });
      return;
    }

    if (state.pokemons.find((p) => p.nickname === nickName)) {
      setError({ message: 'Pokemon nickname already taken' });
      return;
    }

    dispatch({
      type: ADD_POKEMON,
      payload: {
        ...pokemon,
        nickname: nickName,
        catch_date: new Date().toISOString(),
        catch_id: uuid(),
      },
    });

    history.go(0);
  };

  return (
    <Flex
      data-testid="catch-success"
      flexDirection="column"
      p="16px"
      size="100%"
      alignItems="center"
      justifyContent="center">
      <Image src="/svg/gotcha.svg" alt={'gotcha'} width={100} height={100} />
      <Image
        src={pokemon?.sprites?.front_default}
        alt={pokemon.name}
        width={200}
        height={200}
      />

      <Type
        textAlign="center"
        fontFamily="twop"
        color="black"
        fontSize="10px">{`You caught a ${pokemon.name}, give it a name`}</Type>

      <Flex width="100%" mt="24px">
        <Input
          data-testid="nickname"
          width="100%"
          p="12px"
          placeholder={pokemon.name}
          value={nickName}
          onChange={(e) => setNickname(e.target.value)}
        />
        <Button
          data-testid="keep-button"
          ml="16px"
          p="8px 24px"
          onClick={keepPokemon}>
          Keep
        </Button>
      </Flex>

      <Flex width="100%" height="8px">
        <Type color="red" fontFamily="twop" fontSize="8px" mt="8px">
          {error?.message}
        </Type>
      </Flex>
    </Flex>
  );
};

CatchPokemonSuccess.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default CatchPokemonSuccess;
