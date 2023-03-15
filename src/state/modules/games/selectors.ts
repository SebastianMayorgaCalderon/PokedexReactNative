import {createSelector, Selector} from 'reselect';
import {State} from '../../index';

const selectPokemon = (state: State) => state.gameReducer;

export const selectUserName: Selector<State, string> = createSelector(
  [selectPokemon],
  pokemon => pokemon.username,
);

export default {selectUserName};
