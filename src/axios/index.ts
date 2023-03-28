import pokemonApiClient from './PokemonAxios';

export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

export default {pokemonApiClient};
