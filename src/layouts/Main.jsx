import Flex from '@/common/Flex/Flex';
import React from 'react';

const Main = ({ children }) => {
  return (
    <Flex
      as="main"
      flex="1"
      width={['100%', '100%', '1024px']}
      flexDirection="column"
      alignItems="center">
      {children}
    </Flex>
  );
};

export default Main;
