import React, {FC, useEffect} from 'react';
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

import {PokemonScreenProps} from 'src/routes/PokemonRouting/RouteProps';

import {pokemonSelectors, pokemonOperations} from 'src/state/modules/pokemon';
import {gameSelectors, gameOperations} from 'src/state/modules/games';
import {Pokemon} from 'src/models/pokemonModel';
import {State} from 'src/state';
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

interface PokemonListScreenProps extends PokemonScreenProps{
  pokemonList: Pokemon[];
  isPokemonListLoading: boolean;
  pokemonListError: boolean;
  pokemonListCounter: number | null;
  username: string;
  fetchPokemonList: () => void;
  setUsername: (name: string) => void;
}

const PokemonListScreen = ({route, navigation, fetchPokemonList,
  pokemonList,
  isPokemonListLoading,
  pokemonListError, 
}: PokemonListScreenProps) => {  
  const handleNavigate = (id: string) => {
    const selectedPokemon = pokemonList.find((pokemon:Pokemon)=>pokemon.id === id);
    console.log(selectedPokemon);
    if(selectedPokemon)
      navigation.navigate('POKEMON_DETAILS_SCREEN', {selectedPokemon});
  };

  useEffect(() => {
    if (pokemonList?.length === 0) {
      fetchPokemonList();
    }
  },[]);
  return (
    <SafeAreaView>
       {!pokemonListError && (
        <PokemonGrid
          pokemonList={pokemonList ?? []}
          loadingList={isPokemonListLoading}
          error={pokemonListError}
          loadMore={fetchPokemonList}
          spacingBetweenItems={4}
          onPress={handleNavigate}
        />
      )}
      {!isPokemonListLoading && pokemonListError && (
        <Text>Error Brochacho</Text>
      )}
      {isPokemonListLoading && <Text>... cargando</Text>}
    </SafeAreaView>
  );
};

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

export default connect(mapStateToProps, mapDispatchToProps)(PokemonListScreen);


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
