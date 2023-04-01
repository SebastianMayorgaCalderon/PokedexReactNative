import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {PokemonStackParams} from './RouteProps';
import {PokemonDetailsScreen, PokemonListScreen} from 'src/screens';

import {NavigationContainer} from '@react-navigation/native';


export const PokemonStack = createNativeStackNavigator<PokemonStackParams>();

const pokemonRoutes: Array<React.ComponentProps<typeof PokemonStack.Screen>> = [
  {
    name: 'POKEMON_DETAILS_SCREEN',
    component: PokemonDetailsScreen,
    options: ({ route }) => ({ title: route.params.selectedPokemon?.name })
  },
  {
    name: 'POKEMON_LIST_SCREEN',
    component: PokemonListScreen,
  },
];

export const PokemonStackRouter: FC = () => {
  return (
    <NavigationContainer>
      <PokemonStack.Navigator initialRouteName={'POKEMON_LIST_SCREEN'}>
        {pokemonRoutes.map((routeConfig) => (
          <PokemonStack.Screen key={routeConfig.name} {...routeConfig} />
        ))}
      </PokemonStack.Navigator>
    </NavigationContainer>
  );
};

