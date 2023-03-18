import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {PokemonListItemOverview} from 'src/models/pokemonModel';

interface PokemonGridItemProps extends PokemonListItemOverview {
  style: any;
}

const PokemonGridItem = (props: PokemonGridItemProps) => {
  const {name, id, imageUrl, style} = props;

  return (
    <View style={[styles.gridItem, style]}>
      {id && (
        <Image
          source={{
            uri: `${imageUrl}`,
          }}
          style={{width: 72, height: 72}}
        />
      )}
      <Text>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 0,
    marginBottom: 8,
    borderRadius: 8,
    backgroundColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerRow: {
    marginHorizontal: 8,
  },
  outerRows: {
    marginHorizontal: 0,
  },
});

export default PokemonGridItem;
