import {Pokemon, PokemonListItemOverview} from 'src/models/pokemonModel';
import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_LIST_ERROR,
  FETCH_POKEMON_LIST_SUCCESS,
  FETCH_POKEMON_DETAILS,
  FETCH_POKEMON_DETAILS_ERROR,
  FETCH_POKEMON_DETAILS_SUCCESS
} from './types';

import {LIMIT} from 'src/constants/PokemonApiConstants';

export interface State {
  pokemonList?: Pokemon[];
  pokemonDetailList?: Pokemon[];
  isPokemonListLoading: boolean;
  isPokemonDetailsLoading: boolean;
  pokemonListError: boolean;
  pokemonDetailError: boolean;
  offset: number;
  limit: number;
}

const initialState: State = {
  pokemonList: [],
  pokemonDetailList: [],
  isPokemonListLoading: false,
  isPokemonDetailsLoading: false,
  pokemonListError: false,
  pokemonDetailError: false,
  offset: 0,
  limit: LIMIT,
};

export const reducer = (state = initialState, action: {type: string, payload: any}) => {
  switch (action.type) {
    case FETCH_POKEMON_LIST:
      return {...state, isPokemonListLoading: true, pokemonListError: false};
    case FETCH_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        isPokemonListLoading: false,
        pokemonList: [...(state.pokemonList ?? []), ...action.payload.results],
        pokemonListError: false,
        offset: state.limit,
        limit: state.limit + state.limit
      };
    case FETCH_POKEMON_LIST_ERROR:
      return {...state, isPokemonListLoading: false, pokemonListError: true};
    case FETCH_POKEMON_DETAILS: 
      return {...state, isPokemonDetailsLoading: true, pokemonDetailError: false};
    default:
      return state;
  }
};

export default reducer;
