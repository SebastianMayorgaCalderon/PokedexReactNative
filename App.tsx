/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import React, { FC } from 'react';
import {Provider} from 'react-redux';
import store from './src/state';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokemonListScreen, PokemonDetailsScreen} from 'src/screens'

import {pokemonScreenRouters}from 'src/routes/PokemonRouting'

const App: FC = () => {
  return (
    <Provider store={store}>
      <pokemonScreenRouters.PokemonStackRouter/>
    </Provider>
  );
};

export default App;
