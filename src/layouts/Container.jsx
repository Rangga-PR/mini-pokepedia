import Flex from '@/common/Flex/Flex';
import React from 'react';

const Container = ({ children }) => {
  return (
    <Flex flexDirection="column" alignItems="center" justifyContent="center">
      {children}
    </Flex>
  );
};

export default Container;
