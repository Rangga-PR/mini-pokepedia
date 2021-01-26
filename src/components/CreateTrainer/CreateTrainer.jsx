import React, { useState } from 'react';

import Button from '@/common/Button/Button';
import Flex from '@/common/Flex/Flex';
import Input from '@/common/Input/Input';
import Picture from '@/common/Picture/Picture';
import Type from '@/common/Typography/TypoGraphy';
import { setLocalItem } from '@/helpers/index';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';

const Character = styled(Picture)`
  cursor: pointer;
  filter: ${({ active }) => (active ? 'brightness(1)' : 'brightness(0)')};
  transition: filter 200ms;
`;

const CreateTrainer = () => {
  const [boy, setBoy] = useState(false);
  const [name, setName] = useState('');
  const history = useHistory();

  const handleCreate = () => {
    if (!name) return;
    setLocalItem('trainer', {
      name,
      gender: boy ? 'Male' : 'Female',
      pokemons: [],
    });
    history.go(0);
  };

  return (
    <Flex
      width="100%"
      height="100%"
      justifyContent="center"
      alignItems="center"
      flexDirection="column">
      <Type
        fontSize={['12px', 'caption']}
        fontFamily="twop"
        mb="24px"
        color="black">
        Are you a boy or a girl ?
      </Type>
      <Flex width="100%" p="0 48px" justifyContent="space-around">
        <Character
          active={!boy}
          src="/image/girl.png"
          alt="girl"
          source={[{ srcset: '/image/girl.webp', type: 'image/webp' }]}
          onClick={() => setBoy(false)}
        />

        <Character
          active={boy}
          src="/image/boy.png"
          alt="boy"
          source={[{ srcset: '/image/boy.webp', type: 'image/webp' }]}
          onClick={() => setBoy(true)}
        />
      </Flex>
      <Flex mt="32px">
        <Input
          data-testid="trainer-name"
          mr="16px"
          placeholder="What is your name?"
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          data-testid="create-button"
          opacity={name ? 1 : 0.5}
          onClick={handleCreate}>
          Create
        </Button>
      </Flex>
    </Flex>
  );
};

export default CreateTrainer;
