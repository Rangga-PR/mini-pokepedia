import React, { useEffect, useState } from 'react';

import Button from '@/common/Button/Button';
import CreateTrainer from '@/components/CreateTrainer/CreateTrainer';
import Flex from '@/common/Flex/Flex';
import { GET_POKEMONS } from '@/graphql/query';
import HeroImage from '@/components/common/HeroImage/HeroImage';
import InfiniteScroll from 'react-infinite-scroll-component';
import Modal from '@/common/Modal/Modal';
import PokemonList from '@/components/PokemonList/PokemonList';
import Type from '@/components/common/Typography/TypoGraphy';
import useGetTrainerData from '@/hooks/useGetTrainerData';
import { useQuery } from '@apollo/client';

const Home = () => {
  const trainer = useGetTrainerData();
  const [createTrainer, setCreateTrainer] = useState(false);
  const [limit, setLimit] = useState(50);
  const [count, setCount] = useState(1000);
  const [pokemons, setPokemons] = useState([]);
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    notifyOnNetworkStatusChange: true,
    variables: {
      offset: 0,
      limit,
    },
  });

  useEffect(() => {
    data && setPokemons(data.pokemons.results);
    data && count !== data.pokemons.count && setCount(data.pokemons.count);
  }, [data]);

  const handleFetchMore = () => {
    fetchMore({
      variables: {
        offset: data.pokemons.results.length,
        limit: 50,
      },
    }).then((result) => {
      setLimit(
        data.pokemons.results.length + result.data.pokemons.results.length
      );
    });
  };

  return (
    <Flex as="section" width="100%" flexDirection="column">
      <HeroImage imgUrl="/image/pokemon.webp" width="100%" height="300px">
        <Flex flexDirection="column" justifyContent="flex-end" p={16}>
          {!trainer && (
            <Button variant="red" onClick={() => setCreateTrainer(true)}>
              Start Collecting
            </Button>
          )}
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
      <Flex m="24px 8px 16px 8px">
        <Type fontWeight="bold" variant="h6" color="black">
          Meet the Pokemons
        </Type>
      </Flex>

      <InfiniteScroll
        dataLength={pokemons.length}
        hasMore={pokemons.length < count}
        next={handleFetchMore}>
        <PokemonList dataSource={pokemons} loading={loading} />
      </InfiniteScroll>

      <Modal
        title="Create Trainer"
        active={createTrainer}
        onClose={() => setCreateTrainer(false)}>
        <CreateTrainer />
      </Modal>
    </Flex>
  );
};

export default Home;
