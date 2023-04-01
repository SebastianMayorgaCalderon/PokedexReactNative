/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {FlatList, Dimensions, StyleSheet, Pressable} from 'react-native';
import {Pokemon} from 'src/models/pokemonModel';
import PokemonGridItem from 'src/components/PokemonGrid/PokemonGridItem';
import {FlatListItem} from 'src/utils/FlatListUtils';

interface PokemonGridProps {
  pokemonList: Pokemon[];
  loadingList: boolean;
  error: boolean;
  loadMore: () => void;
  onPress: (id: string) => void;
  spacingBetweenItems: number;
}

const PokemonGrid = (props: PokemonGridProps) => {
  const {pokemonList, loadMore, spacingBetweenItems, onPress} = props;

  const numColumns = useMemo(() => {
    const screenWidth = Dimensions.get('window').width;
    const itemWidth = 128; // Change this to adjust the size of the grid items
    const numColumnsData = Math.floor(screenWidth / itemWidth);
    console.log(numColumnsData);
    return numColumnsData;
  }, []);

  const renderGridItem = ({
    item,
    index,
  }: FlatListItem<Pokemon>) => {
    const {name, imageUrl, id, url} = item;

    // calculate item width based on number of columns
    const itemWidth = `${100 / numColumns}%`;

    // calculate horizontal spacing between items
    let spacingStyle: {
      backgroundColor?: string;
      marginLeft?: number;
      marginRight?: number;
      width?: string;
      height?: number;
    } = {
      width: itemWidth,
      height: 104,
    };
    if (
      numColumns === 3 && // check if there are 3 columns
      index % numColumns === 1 && // check if it is the middle column
      index + 1 < pokemonList.length // check if it is not the last item in the list
    ) {
      spacingStyle = {
        ...spacingStyle,
        marginLeft: spacingBetweenItems,
        marginRight: spacingBetweenItems,
        backgroundColor: 'red',
      };
    }

    return (
      <PokemonGridItem
        name={name}
        imageUrl={imageUrl}
        id={id}
        url={url}
        style={spacingStyle}
        onPress={onPress}
      />
    );
  };

  return (
    <FlatList
      data={pokemonList}
      renderItem={renderGridItem}
      keyExtractor={(item: Pokemon) => item.name}
      onEndReached={() => {
        loadMore();
      }}
      numColumns={numColumns}
      contentContainerStyle={styles.gridContainer}
    />
  );
};

const styles = StyleSheet.create({
  gridContainer: {
    padding: 9,
  },
});

export default PokemonGrid;
