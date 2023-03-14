import {createSelector} from 'reselect';
import {State} from '../../index';

const selectPokemon = (state: State) => state.pokemonReducer;

export const selectCount = createSelector(
  [selectPokemon],
  pokemon => pokemon.count,
);

export default {selectCount};
