import {createSelector} from 'reselect';
import {State} from '../../index';

const selectPokemon = (state: State) => state.gameReducer;

export const selectUserName = createSelector(
  [selectPokemon],
  pokemon => pokemon.username,
);

export default {selectUserName};
