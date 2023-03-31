/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';

import React, { FC } from 'react';
import {Provider} from 'react-redux';
import store from './src/state';


import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokemonListScreen, HelloWorldScreen} from 'src/screens'


import {pokemonScreenRouters, pokemonScreenNames}from 'src/routes/PokemonRouting'


const App: FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <pokemonScreenRouters.PokemonListStack.Navigator initialRouteName={'POKEMON_LIST_SCREEN'}>
          <pokemonScreenRouters.PokemonListStack.Screen name='HELLO_WORLD_SCREEN' component={HelloWorldScreen} initialParams={{prop1: 'lalala`'}} />
          <pokemonScreenRouters.PokemonListStack.Screen
            name="POKEMON_LIST_SCREEN"
            component={PokemonListScreen}
          />
        </pokemonScreenRouters.PokemonListStack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
