import {PokemonListItemOverview} from 'src/models/pokemonModel';
import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_LIST_ERROR,
  FETCH_POKEMON_LIST_SUCCESS,
} from './types';

import {LIMIT} from 'src/constants/PokemonApiConstants';

export interface State {
  pokemonList?: PokemonListItemOverview[];
  isPokemonListLoading: boolean;
  pokemonListError: boolean;
  offset: number;
  limit: number;
}

const initialState: State = {
  pokemonList: [],
  isPokemonListLoading: false,
  pokemonListError: false,
  offset: 0,
  limit: LIMIT,
};

export const reducer = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default reducer;
