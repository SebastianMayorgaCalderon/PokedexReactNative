import {put, takeLatest, call, select} from 'redux-saga/effects';
import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_LIST_ERROR,
  FETCH_POKEMON_LIST_SUCCESS,
  FETCH_POKEMON_DETAILS
} from './types';
import {fetchPokemonList} from './api';
import {Pokemon, PokemonListItemOverview} from 'src/models/pokemonModel';
import {ApiResponse} from 'src/axios';
import {parsePokemonListResponseToPokemonOverViewList} from 'src/utils/PokemonSagasUtils';
import {PokemonApiResponse} from 'src/axios/PokemonAxios';
import {selectPokemonOffset} from './selectors';

function* handleFetchPokemonList() {
  const offset: number = yield select(selectPokemonOffset);

  const pokemonListResponse: ApiResponse<PokemonApiResponse> = yield call(() =>
    fetchPokemonList(offset),
  );
  if (!pokemonListResponse.data) {
    yield put({type: FETCH_POKEMON_LIST_ERROR, payload: 'error'});
  } else {
    const pokemonOverviewList: Pokemon[] =
      parsePokemonListResponseToPokemonOverViewList(
        pokemonListResponse.data.results,
      );
    yield put({
      type: FETCH_POKEMON_LIST_SUCCESS,
      payload: {...pokemonListResponse.data, results: pokemonOverviewList},
    });
  }
}

function * handleFetchPokemonDetails(action: {type: string, payload: string}) {
  console.log(action.payload);
}

export function* watchFetchPokemonList() {
  yield takeLatest(FETCH_POKEMON_LIST, handleFetchPokemonList);
}

export function* watchFetchPokemonDetails(){
  yield takeLatest(FETCH_POKEMON_DETAILS, handleFetchPokemonDetails);
}

export const sagas = [watchFetchPokemonList];
