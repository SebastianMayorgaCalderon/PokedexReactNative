import {Pokemon, PokemonListItemOverview} from 'models/pokemonModel';
import {createSelector, Selector} from 'reselect';
import {State} from '../../index';

const selectPokemonReducer = (state: State) => state.pokemonReducer;

export const selectPokemonList: Selector<
  State,
  PokemonListItemOverview[] | null
> = createSelector(
  [selectPokemonReducer],
  pokemonReducer => pokemonReducer.pokemonList,
);

export const selectIsPokemonListLoading: Selector<State, boolean> =
  createSelector(
    [selectPokemonReducer],
    pokemonReducer => pokemonReducer.isPokemonListLoading,
  );

export const selectPokemonListError: Selector<State, boolean> = createSelector(
  [selectPokemonReducer],
  pokemonReducer => pokemonReducer.pokemonListError,
);

export const selectPokemonListCount: Selector<State, number | null> =
  createSelector(
    [selectPokemonList],
    pokemonList => pokemonList?.length || null,
  );

export default {
  selectPokemonList,
  selectIsPokemonListLoading,
  selectPokemonListError,
  selectPokemonListCount,
};
