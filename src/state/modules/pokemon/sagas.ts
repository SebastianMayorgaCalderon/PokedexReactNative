import {put, takeLatest, call} from 'redux-saga/effects';
import {
  FETCH_POKEMON_LIST,
  FETCH_POKEMON_LIST_ERROR,
  FETCH_POKEMON_LIST_SUCCESS,
} from './types';
import {fetchPokemonList} from './api';
import {PokemonListItemOverview} from 'src/models/pokemonModel';
import {ApiResponse} from 'src/axios';
import {parsePokemonListResponseToPokemonOverViewList} from 'src/utils/PokemonSagasUtils';
import {PokemonApiResponse} from 'src/axios/PokemonAxios';

function* handleFetchPokemonList() {
  const pokemonListResponse: ApiResponse<PokemonApiResponse> = yield call(
    fetchPokemonList,
  );
  if (!pokemonListResponse.data) {
    yield put({type: FETCH_POKEMON_LIST_ERROR, payload: 'error'});
  } else {
    const pokemonOverviewList: PokemonListItemOverview[] =
      parsePokemonListResponseToPokemonOverViewList(
        pokemonListResponse.data.results,
      );
    yield put({type: FETCH_POKEMON_LIST_SUCCESS, payload: pokemonOverviewList});
  }
}

export function* watchFetchPokemonList() {
  yield takeLatest(FETCH_POKEMON_LIST, handleFetchPokemonList);
}

export const sagas = [watchFetchPokemonList];
