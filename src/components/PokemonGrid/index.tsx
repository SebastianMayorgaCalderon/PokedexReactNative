import React from 'react';
import {View, Text, FlatList} from 'react-native';
import {PokemonListItemOverview} from 'src/models/pokemonModel';
import {FlatListItem} from 'src/utils/FlatListUtils';

interface PokemonGridProps {
  pokemonOverViewList: PokemonListItemOverview[];
  loadingList: boolean;
  error: boolean;
}

const PokemonGrid = (props: PokemonGridProps) => {
  const {pokemonOverViewList} = props;
  return (
    <FlatList
      data={pokemonOverViewList}
      renderItem={({item}: FlatListItem<PokemonListItemOverview>) => {
        return (
          <View>
            <Text>{item.name}</Text>
            {item.id && (
              <Image
                source={{
                  uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.id}.png`,
                }}
                style={{width: 200, height: 200}}
              />
            )}
          </View>
        );
      }}
      keyExtractor={(item: PokemonListItemOverview) => item.id}
    />
  );
};

export default PokemonGrid;
