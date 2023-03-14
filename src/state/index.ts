import {createStore, combineReducers} from 'redux';
import pokemonReducer from './modules/pokemon';
import gameReducer from './modules/games';
import {State as PokemonState} from './modules/pokemon/reducer';
import {State as GameState} from './modules/games/reducer';

export interface State {
  pokemonReducer: PokemonState;
  gameReducer: GameState;
}

const rootReducer = combineReducers({
  pokemonReducer,
  gameReducer,
});

const store = createStore(rootReducer);

export default store;
