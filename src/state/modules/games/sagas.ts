import {takeEvery} from 'redux-saga/effects';
import {SET_USERNAME} from './types';

function* handleSetUsername() {
  yield console.log('setUsername Saga...');
}

export function* watchUsernameChange() {
  yield takeEvery(SET_USERNAME, handleSetUsername);
}

export const sagas = [watchUsernameChange];
