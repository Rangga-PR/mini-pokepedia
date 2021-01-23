import Grid from '@/common/Grid/Grid';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import PropTypes from 'prop-types';
import React from 'react';

const PokemonList = ({ dataSource, loading }) => {
  return (
    <Grid
      gridTemplateColumns={[
        'repeat(3, minmax(100px, 33.3%))',
        'repeat(5, minmax(100px, 20%))',
        'repeat(8, minmax(100px, 12.5%))',
      ]}>
      {dataSource.map((val) => (
        <PokemonCard key={val.id} data={val} />
      ))}

      {loading &&
        [...Array(8).keys()].map((val) => <PokemonCard key={val} loading />)}
    </Grid>
  );
};

PokemonList.propTypes = {
  loading: PropTypes.bool,
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default PokemonList;
