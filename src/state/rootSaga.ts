import {all, fork} from 'redux-saga/effects';
import {sagas as gameSagas} from './modules/games';
import {sagas as pokemonSagas} from './modules/pokemon';

const allSagas = [...gameSagas, ...pokemonSagas];

export default function* rootSaga() {
  yield all(allSagas.map(saga => fork(saga)));
}
