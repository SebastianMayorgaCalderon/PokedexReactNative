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
  console.log(list);

  return list.map(
    (pokemonListItem: PokemonListItem): PokemonListItemOverview => {
      return {
        ...pokemonListItem,
        id: extractPokemonIdFromUrl(pokemonListItem.url),
        imageUrl: POKE_IMG_API_BASE_URL(
          extractPokemonIdFromUrl(pokemonListItem.url),
        ),
      };
    },
  );
};

export {parsePokemonListResponseToPokemonOverViewList, extractPokemonIdFromUrl};
