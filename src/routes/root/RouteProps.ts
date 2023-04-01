
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import { Pokemon } from 'src/models/pokemonModel';

export type PokemonStackParams = {
  POKEMON_: {};
  POKEMON_DETAILS_SCREEN: {}
};

export type POKEMON_DETAILS_SCREEN = keyof PokemonStackParams;
export type POKEMON_LIST_SCREEN =  keyof PokemonStackParams

export type PokemonScreenProps = {
  route: RouteProp<PokemonStackParams, POKEMON_LIST_SCREEN>;
  navigation: NativeStackNavigationProp<PokemonStackParams, POKEMON_LIST_SCREEN>;
};

export type PokemonDetailsProps = {
  route: RouteProp<PokemonStackParams, POKEMON_DETAILS_SCREEN>;
  navigation: NativeStackNavigationProp<PokemonStackParams, POKEMON_DETAILS_SCREEN>;
}

