import {put, takeLatest, call} from 'redux-saga/effects';
import {FETCH_POKEMON_LIST, FETCH_POKEMON_LIST_SUCCESS} from './types';

import {fetchPokemonList} from './api';
import {PokemonListItemOverview, PokemonListItem} from 'models/pokemonModel';
import {extractPokemonIdFromUrl} from '../../../utils/sagasUtils';

function* handleFetchPokemonList() {
  const pokemonListResponse: PokemonListItem[] = yield call(fetchPokemonList);
  console.log(pokemonListResponse);
  const pokemonOverviewList: PokemonListItemOverview[] =
    pokemonListResponse.map(
      (pokemonListItem: PokemonListItem): PokemonListItemOverview => ({
        ...pokemonListItem,
        id: extractPokemonIdFromUrl(pokemonListItem.url),
      }),
    );
  // const pokemonList: Pokemon[] = yield Promise.all(
  //   response.map(({url}: PokemonRef) => fetchPokemonDetails(url)),
  // );
  yield put({type: FETCH_POKEMON_LIST_SUCCESS, payload: pokemonOverviewList});
}

export function* watchFetchPokemonList() {
  yield takeLatest(FETCH_POKEMON_LIST, handleFetchPokemonList);
}

export const sagas = [watchFetchPokemonList];
