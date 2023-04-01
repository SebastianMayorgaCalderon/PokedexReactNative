import React from 'react'
import {View, Text, Image} from 'react-native'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {PokemonDetailsProps} from 'src/routes/PokemonRouting/RouteProps'

import {pokemonSelectors, pokemonOperations} from 'src/state/modules/pokemon';
import {gameSelectors, gameOperations} from 'src/state/modules/games';

import {State} from 'src/state';

import { Pokemon } from 'src/models/pokemonModel';



interface PokemonDetailsScreenProps extends PokemonDetailsProps {
    //add redux functions / props
}



const PokemonDetailsScreen = ({navigation, route}: PokemonDetailsScreenProps) => {
  const {params} = route;
  const {selectedPokemon} = params;
  return (
    <View>
      <Image
          source={{
            uri: `${selectedPokemon.imageUrl}`,
          }}
          style={{width: 72, height: 72}}
        />
        <Text>
          {JSON.stringify(params.selectedPokemon)}
        </Text>
    </View>
  )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetailsScreen);
