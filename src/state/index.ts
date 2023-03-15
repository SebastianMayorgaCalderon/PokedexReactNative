import {combineReducers} from 'redux';
import pokemonReducer from './modules/pokemon';
import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import gameReducer from './modules/games';
import {State as PokemonState} from './modules/pokemon/reducer';
import {State as GameState} from './modules/games/reducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './rootSaga';

const sagaMiddleware = createSagaMiddleware();

export interface State {
  pokemonReducer: PokemonState;
  gameReducer: GameState;
}

const rootReducer = combineReducers({
  pokemonReducer,
  gameReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

export default store;
