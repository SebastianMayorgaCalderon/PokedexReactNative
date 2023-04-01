import React, {FC} from 'react'
import {View, Text, Button} from 'react-native'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {HelloWorldScreenProps} from 'src/routes/PokemonRouting/RouteProps'


import {pokemonSelectors, pokemonOperations} from 'src/state/modules/pokemon';
import {gameSelectors, gameOperations} from 'src/state/modules/games';

const HelloWorldScreen = ({
    route,
    navigation,
  }: HelloWorldScreenProps) => {
    console.log(route);
    const handlePress = () => {
      navigation.navigate('POKEMON_LIST_SCREEN');
    };
    return (
        <View>
          <Text>Pokemon id {route.params.prop1}</Text>
          <Button title="Go to pokemon list" onPress={handlePress} />
        </View>
    );
  };

const mapStateToProps = (state: State) => ({
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

export default HelloWorldScreen;