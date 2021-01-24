import Button from '@/common/Button/Button';
import Flex from '@/common/Flex/Flex';
import { Link } from 'react-router-dom';
import Picture from '@/common/Picture/Picture';
import React from 'react';
import styled from '@emotion/styled';

const Container = styled(Flex)`
  position: sticky;
  top: 0px;
  z-index: 1;
  padding: 8px;
  width: 100%;
  box-shadow: 0 4px 2px -2px rgba(37, 40, 43, 0.12);
`;

const Topnav = () => {
  return (
    <Container as="nav" bg="white" justifyContent={['flex-start', 'center']}>
      <Flex width="1024px" justifyContent="space-between" alignItems="center">
        <Picture
          src="/image/pokepedia.png"
          source={[{ srcset: '/image/pokepedia.webp', type: 'image/webp' }]}
          alt="pokedia"
          width={['85px', '110px']}
          height={['35px', '45px']}
        />

        <Flex>
          <Link>
            <Button mr={['4px', '16px']}>Trainer</Button>
          </Link>
          <Link to="/">
            <Button variant="green">Home</Button>
          </Link>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Topnav;
