import {Pokemon, PokemonListItemOverview} from 'models/pokemonModel';
import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_LIST_ERROR,
  FETCH_POKEMON_LIST_SUCCESS,
} from './types';

export interface State {
  pokemonList: PokemonListItemOverview[] | null;
  isPokemonListLoading: boolean;
  pokemonListError: boolean;
}

const initialState: State = {
  pokemonList: null,
  isPokemonListLoading: false,
  pokemonListError: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POKEMON_LIST:
      return {...state, isPokemonListLoading: true, pokemonListError: false};
    case FETCH_POKEMON_LIST_SUCCESS:
      return {
        ...state,
        isPokemonListLoading: false,
        pokemonList: action.payload,
      };
    case FETCH_POKEMON_LIST_ERROR:
      return {...state, isPokemonListLoading: false, pokemonListError: true};
    default:
      return state;
  }
};

export default reducer;
