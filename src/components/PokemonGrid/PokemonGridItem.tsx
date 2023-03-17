import React from 'react';
import {View, Text, Image} from 'react-native';
import {PokemonListItemOverview} from 'src/models/pokemonModel';
import {FlatListItem} from 'src/utils/FlatListUtils';

const PokemonGridItem = (props: FlatListItem<PokemonListItemOverview>) => {
  const {name, id} = props.item;
  return (
    <View>
      <Text>{name}</Text>
      {id && (
        <Image
          source={{
            uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonRef.id}.png`,
          }}
          style={{width: 200, height: 200}}
        />
      )}
    </View>
  );
};

export default PokemonGridItem;
