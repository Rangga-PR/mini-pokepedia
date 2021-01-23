import Card from '@/common/Card/Card';
import Flex from '@/common/Flex/Flex';
import Image from 'next/image';
import PropTypes from 'prop-types';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Type from '@/common/Typography/TypoGraphy';
import { oneLinesEllipsis } from '@/styles/utility';

const PokemonCard = ({ data, loading }) => {
  if (loading)
    return (
      <Card data-testid="card-loading">
        <Flex flexDirection="column">
          <Skeleton
            width="100%"
            height={90}
            style={{ borderRadius: '4px', marginBottom: '10px' }}
          />
          <Skeleton width="100%" height={12} />
        </Flex>
      </Card>
    );

  return (
    <Card>
      <Image src={data.image} alt={data.name} width={100} height={100} />
      <Type fontSize="8px" fontFamily="twop" style={oneLinesEllipsis}>
        {data.name}
      </Type>
    </Card>
  );
};

PokemonCard.propTypes = {
  loading: PropTypes.bool,
  data: PropTypes.shape({
    id: PropTypes.number,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default PokemonCard;
