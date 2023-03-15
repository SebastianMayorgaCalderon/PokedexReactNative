import {createSelector, Selector} from 'reselect';
import {State} from '../../index';

const selectPokemon = (state: State) => state.pokemonReducer;

export const selectCount: Selector<State, number> = createSelector(
  [selectPokemon],
  pokemon => pokemon.count,
);

export default {selectCount};
