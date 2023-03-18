/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pokemonSelectors, pokemonOperations} from './state/modules/pokemon';
import {gameSelectors, gameOperations} from './state/modules/games';
import {PokemonListItemOverview} from './models/pokemonModel';
import {State} from './state';
import PokemonGrid from 'src/components/PokemonGrid';

interface FlatListItem<T> {
  item: T;
  index: number;
  separators: {
    highlight: () => void;
    unhighlight: () => void;
    updateProps: (select: 'leading' | 'trailing', newProps: any) => void;
  };
}

const PokedexApp = ({
  fetchPokemonList,
  pokemonList,
  isPokemonListLoading,
  pokemonListError,
}: Props) => {
  useEffect(() => {
    fetchPokemonList();
  }, [fetchPokemonList]);
  return (
    <SafeAreaView>
      {!pokemonListError && (
        <PokemonGrid
          pokemonOverViewList={pokemonList ?? []}
          loadingList={isPokemonListLoading}
          error={pokemonListError}
          loadMore={fetchPokemonList}
          spacingBetweenItems={4}
        />
      )}
      {!isPokemonListLoading && pokemonListError && (
        <Text>Error Brochacho</Text>
      )}
      {isPokemonListLoading && <Text>... cargando</Text>}
    </SafeAreaView>
  );
};

interface Props {
  pokemonList: PokemonListItemOverview[] | null;
  isPokemonListLoading: boolean;
  pokemonListError: boolean;
  username: string;
  pokemonListCounter: number;
  setUsername: (name: string) => void;
  fetchPokemonList: () => void;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});
const mapStateToProps = (state: State) => ({
  pokemonList: pokemonSelectors.selectPokemonList(state),
  isPokemonListLoading: pokemonSelectors.selectIsPokemonListLoading(state),
  pokemonListError: pokemonSelectors.selectPokemonListError(state),
  pokemonListCounter: pokemonSelectors.selectPokemonListCount(state),
  username: gameSelectors.selectUserName(state),
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...pokemonOperations,
      ...gameOperations,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PokedexApp);
