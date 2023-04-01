import {FETCH_POKEMON_LIST, FETCH_POKEMON_DETAILS} from './types';

export const fetchPokemonList = () => ({
  type: FETCH_POKEMON_LIST,
});

export const fetchPokemonDetails = (id: string) => ({
  type:FETCH_POKEMON_DETAILS,
  payload: id
})
