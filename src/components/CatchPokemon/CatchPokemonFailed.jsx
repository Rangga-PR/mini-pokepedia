import Flex from '@/common/Flex/Flex';
import Image from 'next/image';
import React from 'react';
import Type from '@/common/Typography/TypoGraphy';

const CatchPokemonFailed = () => {
  return (
    <Flex flexDirection="column" p="16px" data-testid="catch-failed">
      <Image
        src="/svg/open-pokeball.svg"
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
        Oh no, it got away......
      </Type>
    </Flex>
  );
};

export default CatchPokemonFailed;
