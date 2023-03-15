import {put, takeEvery, select} from 'redux-saga/effects';
import {INCREMENT, DECREMENT} from './types';
import {selectCount} from './selectors';
import {gameTypes} from '../games';

function* handleIncrement() {
  yield console.log('Incrementing...');
  const count: number = yield select(selectCount);
  yield put({type: gameTypes.SET_USERNAME, payload: `su maigre${count}`});
}

function* handleDecrement() {
  yield console.log('Decrementing...');
}

export function* watchCountIncrement() {
  yield takeEvery(INCREMENT, handleIncrement);
}

export function* watchCountDecrement() {
  yield takeEvery(DECREMENT, handleDecrement);
}

export const sagas = [watchCountIncrement, watchCountDecrement];
