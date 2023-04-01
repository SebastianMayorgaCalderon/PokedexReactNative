import React from 'react';
import {View, Text, Image, StyleSheet, Pressable, GestureResponderEvent} from 'react-native';
import {PokemonListItemOverview} from 'src/models/pokemonModel';

interface PokemonGridItemProps extends PokemonListItemOverview {
  style: any;
  onPress: (id: string) => void
}

const PokemonGridItem = (props: PokemonGridItemProps) => {
  const {name, id, imageUrl, style, onPress} = props;

  return (
    <Pressable style={[styles.gridItem, style]} onPress={()=>{
      console.log('pressed')
      onPress(id)}}>
      {id && (
        <Image
          source={{
            uri: `${imageUrl}`,
          }}
          style={{width: 72, height: 72}}
        />
      )}
      <Text>{name}</Text>
    </Pressable>
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
