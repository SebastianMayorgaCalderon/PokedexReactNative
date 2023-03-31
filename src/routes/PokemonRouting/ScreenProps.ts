
import {RouteProp} from '@react-navigation/native';
import * as pokemonScreenNames from './ScreenNames';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const {POKEMON_LIST_SCREEN_NAME, HELLO_WORLD_SCREEN_NAME} = pokemonScreenNames;

export type PokemonStackParamList = {
  POKEMON_LIST_SCREEN: {prop1: string};
  HELLO_WORLD_SCREEN: {prop1: string};
};

export type PokemonScreenProps = {
  route: RouteProp<PokemonStackParamList, 'POKEMON_LIST_SCREEN'>;
  navigation: NativeStackNavigationProp<PokemonStackParamList, 'POKEMON_LIST_SCREEN'>;
};

export type HelloWorldScreenProps = {
  route: RouteProp<PokemonStackParamList, 'HELLO_WORLD_SCREEN'>;
  navigation: NativeStackNavigationProp<PokemonStackParamList, 'HELLO_WORLD_SCREEN'>;
};

