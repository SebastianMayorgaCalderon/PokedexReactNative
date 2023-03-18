import React from 'react';
import {View, Text, Image} from 'react-native';
import {PokemonListItemOverview} from 'src/models/pokemonModel';
import {FlatListItem} from 'src/utils/FlatListUtils';

const PokemonGridItem = (props: FlatListItem<PokemonListItemOverview>) => {
  const {name, id, imageUrl} = props.item;
  return (
    <View>
      <Text>{name}</Text>
      {id && (
        <Image
          source={{
            uri: `${imageUrl}`,
          }}
          style={{width: 200, height: 200}}
        />
      )}
    </View>
  );
};

export default PokemonGridItem;
