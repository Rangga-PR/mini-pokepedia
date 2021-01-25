import React, { useState } from 'react';

import CatchPokemon from '@/components/CatchPokemon/CatchPokemon';
import Flex from '@/common/Flex/Flex';
import Image from 'next/image';
import Modal from '@/common/Modal/Modal';
import PropTypes from 'prop-types';
import Type from '@/common/Typography/TypoGraphy';
import styled from '@emotion/styled';

const Container = styled(Flex)`
  position: fixed;
  margin: 16px;
  padding: 8px;
  background: white;
  border-radius: 80px;
  box-shadow: 0 0 8px 0 rgba(37, 40, 43, 0.12);
  cursor: pointer;
`;

const CatchCTA = ({ pokemon }) => {
  const [catchPokemon, setCatchPokemon] = useState(false);

  return (
    <>
      <Container
        bottom="0"
        right={['0', '0', 'calc((100vw - 1024px)/2)']}
        onClick={() => setCatchPokemon(true)}>
        <Image
          src="/svg/pokeball.svg"
          alt="pokeball"
          width="40px"
          height="40px"
        />
        <Flex
          alignItems="center"
          mx="8px"
          overflow="hidden"
          display={['none', 'flex']}>
          <Type fontFamily="twop" variant="caption">
            Catch!
          </Type>
        </Flex>
      </Container>

      <Modal
        title={`Catch ${pokemon.name}`}
        active={catchPokemon}
        onClose={() => setCatchPokemon(false)}>
        <CatchPokemon active={catchPokemon} pokemon={pokemon} />
      </Modal>
    </>
  );
};

CatchCTA.propTypes = {
  pokemon: PropTypes.object.isRequired,
};

export default CatchCTA;
