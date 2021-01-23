import Button from '@/common/Button/Button';
import Flex from '@/common/Flex/Flex';
import HeroImage from '@/components/common/HeroImage/HeroImage';
import React from 'react';
import Type from '@/components/common/Typography/TypoGraphy';

const Home = () => {
  return (
    <Flex as="section" width="100%" flexDirection="column">
      <HeroImage imgUrl="/image/pokemon.webp" width="100%" height="300px">
        <Flex flexDirection="column" justifyContent="flex-end" p={16}>
          <Button variant="red">Start Collecting</Button>
          <Type
            color="yellow"
            variant={['h6', 'h6', 'h2']}
            fontWeight="bold"
            m="12px 0 2px 0"
            fontFamily="twop">
            Pokepedia
          </Type>
          <Type
            color="white"
            variant={['caption', 'caption', 'h6']}
            m="12px 0 8px 0">
            Pokemon compendium that you can collect
          </Type>
        </Flex>
      </HeroImage>
    </Flex>
  );
};

export default Home;
