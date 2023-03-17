export interface Pokemon {
  id: number;
  name: string;
  types: string[];
  height: number;
  weight: number;
  stats: PokemonStat[] | null;
  abilities: PokemonAbility[] | null;
  sprites: PokemonSprites;
  games: string[] | null;
}

export interface PokemonStat {
  name: string;
  value: number;
}

export interface PokemonAbility {
  name: string;
  description: string;
  isHidden: boolean;
}

export interface PokemonSprites {
  frontDefault: string;
  frontShiny: string;
  backDefault: string;
  backShiny: string;
}

export interface PokemonListItem {
  name: string;
  url: string;
}

export interface PokemonListItemOverview extends PokemonListItem {
  id: string;
  imageUrl: string;
}
