import Flex from '@/common/Flex/Flex';
import Picture from '@/common/Picture/Picture';
import React from 'react';
import Type from '@/common/Typography/TypoGraphy';

const PageNotFound = () => {
  return (
    <Flex
      width="100vw"
      height="90vh"
      alignItems="center"
      justifyContent="center"
      flexDirection="column">
      <Picture src="/svg/pokeball.svg" width="25vw" />
      <Type
        mt="32px"
        variant={['h4', 'h1']}
        fontWeight="bold"
        color="red"
        textAlign="center">
        404 Page Not Found
      </Type>
    </Flex>
  );
};

export default PageNotFound;
