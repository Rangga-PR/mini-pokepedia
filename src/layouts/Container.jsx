import Flex from '@/common/Flex/Flex';
import React from 'react';

const Container = ({ children }) => {
  return (
    <Flex
      minHeight="100vh"
      flexDirection="column"
      alignItems="center"
      justifyContent="center">
      {children}
    </Flex>
  );
};

export default Container;
