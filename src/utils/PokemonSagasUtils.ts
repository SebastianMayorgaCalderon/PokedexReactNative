import {POKE_IMG_API_BASE_URL} from 'src/constants/API';
import {
  Pokemon,
  PokemonListItemOverview,
} from 'src/models/pokemonModel';

const extractPokemonIdFromUrl = (url: string): string => {
  return url.split('/')[6];
};

const parsePokemonListResponseToPokemonOverViewList = (
  list: PokemonListItemOverview[],
): Pokemon[] => {
  return list.map(
    (pokemonListItem: PokemonListItemOverview): Pokemon => {
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
