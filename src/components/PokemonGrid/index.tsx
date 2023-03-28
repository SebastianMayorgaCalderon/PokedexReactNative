/* eslint-disable react-native/no-inline-styles */
import React, {useMemo} from 'react';
import {FlatList, Dimensions, StyleSheet} from 'react-native';
import {PokemonListItemOverview} from 'src/models/pokemonModel';
import PokemonGridItem from 'src/components/PokemonGrid/PokemonGridItem';
import {FlatListItem} from 'src/utils/FlatListUtils';

interface PokemonGridProps {
  pokemonOverViewList: PokemonListItemOverview[];
  loadingList: boolean;
  error: boolean;
  loadMore: () => void;
  spacingBetweenItems: number;
}

const PokemonGrid = (props: PokemonGridProps) => {
  const {pokemonOverViewList, loadMore, spacingBetweenItems} = props;
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
  }: FlatListItem<PokemonListItemOverview>) => {
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
      index + 1 < pokemonOverViewList.length // check if it is not the last item in the list
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
      />
    );
  };

  return (
    <FlatList
      data={pokemonOverViewList}
      renderItem={renderGridItem}
      keyExtractor={(item: PokemonListItemOverview) => item.name}
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
