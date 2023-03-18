import {POKE_IMG_API_BASE_URL} from 'src/constants/API';
import {
  PokemonListItem,
  PokemonListItemOverview,
} from 'src/models/pokemonModel';

const extractPokemonIdFromUrl = (url: string): string => {
  return url.split('/')[6];
};

const parsePokemonListResponseToPokemonOverViewList = (
  list: PokemonListItem[],
): PokemonListItemOverview[] => {
  return list.map(
    (pokemonListItem: PokemonListItem): PokemonListItemOverview => {
      const id = extractPokemonIdFromUrl(pokemonListItem.url);
      return {
        ...pokemonListItem,
        id,
        imageUrl: POKE_IMG_API_BASE_URL(id),
      };
    },
  );
};

export {parsePokemonListResponseToPokemonOverViewList, extractPokemonIdFromUrl};
