/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {FlatList} from 'react-native';
import {PokemonListItemOverview} from 'src/models/pokemonModel';
import PokemonGridItem from 'src/components/PokemonGrid/PokemonGridItem';

interface PokemonGridProps {
  pokemonOverViewList: PokemonListItemOverview[];
  loadingList: boolean;
  error: boolean;
  loadMore: () => void;
}

const PokemonGrid = (props: PokemonGridProps) => {
  const {pokemonOverViewList, loadMore} = props;
  return (
    <FlatList
      data={pokemonOverViewList}
      renderItem={PokemonGridItem}
      keyExtractor={(item: PokemonListItemOverview) => item.id}
      onEndReached={() => {
        loadMore();
      }}
    />
  );
};

export default PokemonGrid;
