import {Pokemon, PokemonListItem} from 'src/models/pokemonModel';
import axios from 'axios';
import pokemonApiClient from 'src/axios/PokemonAxios';
import {LIMIT} from 'src/constants/PokemonApiConstants';
import {ApiResponse} from 'src/axios';

export async function fetchPokemonList(): Promise<
  ApiResponse<PokemonListItem[]>
> {
  const apiResponse = await pokemonApiClient.get<PokemonListItem[]>(
    `/pokemon?limit=${LIMIT}`,
  );
  return apiResponse;
}

export async function fetchPokemonDetails(url: string): Promise<Pokemon> {
  const response = await axios.get(url);
  const data = response.data;
  const pokemon: Pokemon = {
    id: data.id,
    name: data.name,
    types: data.types.map((type: any) => type.type.name),
    height: data.height,
    weight: data.weight,
    stats: data.stats.map((stat: any) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
    abilities: data.abilities.map((ability: any) => ({
      name: ability.ability.name,
      description:
        ability.ability.effect_entries?.find(
          (entry: any) => entry.language.name === 'en',
        )?.effect || '',
      isHidden: ability.is_hidden,
    })),
    sprites: {
      frontDefault: data.sprites.front_default,
      frontShiny: data.sprites.front_shiny,
      backDefault: data.sprites.back_default,
      backShiny: data.sprites.back_shiny,
    },
    games: data.game_indices.map((game: any) => game.version.name),
  };
  return pokemon;
}
