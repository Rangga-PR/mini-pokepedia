import Flex from '@/common/Flex/Flex';
import Img from '@/common/Img/Img';
import React from 'react';
import Type from '@/common/Typography/TypoGraphy';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const shake = keyframes`
  from, 50%, to {
    transform: rotateZ(0deg);
  }

  25% {
    transform: rotateZ(40deg);
  }

  75% {
    transform: rotateZ(-40deg);
  }
`;

const Pokeball = styled(Img)`
  animation: ${shake} 3s infinite ease-out;
`;

const CatchPokemonLoading = () => {
  return (
    <Flex
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      p="16px"
      data-testid="catch-loading">
      <Pokeball
        src="/svg/pokeball.svg"
        alt="pokeball"
        width="100px"
        height="100px"
      />
      <Type
        mt="30px"
        fontFamily="twop"
        variant="caption"
        textAlign="center"
        data-testid="message">
        You Thrown a pokeball, please wait...
      </Type>
    </Flex>
  );
};

export default CatchPokemonLoading;
