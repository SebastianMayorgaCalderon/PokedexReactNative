import {Pokemon, PokemonListItem} from 'models/pokemonModel';
import axios from 'axios';

export async function fetchPokemonList(): Promise<PokemonListItem[]> {
  const response = await axios.get(
    'https://pokeapi.co/api/v2/pokemon?limit=151',
  );
  return response.data.results;
}

export async function fetchPokemonDetails(url: string): Promise<Pokemon> {
  const response = await axios.get(url);
  const data = response.data;
  console.log(data.abilities)
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
