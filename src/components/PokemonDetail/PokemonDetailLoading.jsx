import Card from '@/common/Card/Card';
import Flex from '@/common/Flex/Flex';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Type from '@/common/Typography/TypoGraphy';

const PokemonDetail = () => {
  return (
    <Flex as="section" width="100%" flexDirection="column">
      <Flex p="16px" flexWrap={['wrap', 'nowrap']}>
        <Card width={['100%', '300px']} m={['0 0 16px 0', '0 16px 0 0']}>
          <Skeleton width="100%" height="280px" />
        </Card>

        <div style={{ width: '100%' }}>
          <Skeleton
            width="100%"
            height="300px"
            style={{ borderRadius: '8px' }}
          />
        </div>
      </Flex>

      <Flex m="8px 16px" flexDirection="column">
        <Type fontWeight="bold" variant="h6" color="black">
          Available Moves
        </Type>

        <Flex mt="16px" flexWrap="wrap" justifyContent="flex-start">
          {[...Array(8).keys()].map((m) => (
            <Skeleton
              key={m}
              height="30px"
              width="100px"
              style={{ borderRadius: '16px', margin: '8px' }}
            />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default PokemonDetail;
