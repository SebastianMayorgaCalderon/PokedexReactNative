import {createStore, combineReducers} from 'redux';
import {pokemonReducer} from './modules/pokemon/reducer';
import {gameReducer} from './modules/games/reducer';

const rootReducer = combineReducers({
  pokemonReducer,
  gameReducer,
});

const store = createStore(rootReducer);

export default store;
