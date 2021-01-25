import Grid from '@/common/Grid/Grid';
import { Link } from 'react-router-dom';
import PokemonCard from '@/components/PokemonCard/PokemonCard';
import PropTypes from 'prop-types';
import React from 'react';

const PokemonList = ({ dataSource, loading, trainer }) => {
  const getTotalOwnedPokemonById = (id) => {
    return trainer?.pokemons?.filter((p) => p.id === id).length;
  };

  return (
    <Grid
      gridTemplateColumns={[
        'repeat(3, minmax(100px, 33.3%))',
        'repeat(5, minmax(100px, 20%))',
        'repeat(8, minmax(100px, 12.5%))',
      ]}>
      {dataSource.map((val) => (
        <Link key={val.id} to={`/pokemon/${val.name}`}>
          <PokemonCard data={val} owned={getTotalOwnedPokemonById(val.id)} />
        </Link>
      ))}

      {loading &&
        [...Array(8).keys()].map((val) => <PokemonCard key={val} loading />)}
    </Grid>
  );
};

PokemonList.propTypes = {
  loading: PropTypes.bool,
  trainer: PropTypes.shape({
    name: PropTypes.string,
    gender: PropTypes.string,
    pokemons: PropTypes.arrayOf(PropTypes.object),
  }),
  dataSource: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      name: PropTypes.string,
    })
  ),
};

export default PokemonList;
