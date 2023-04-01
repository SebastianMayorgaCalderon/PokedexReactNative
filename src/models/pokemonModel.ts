export interface Pokemon {
  id: string;
  name: string;
  types: string[];
  height: number;
  weight: number;
  stats: PokemonStat[] | null;
  abilities: PokemonAbility[] | null;
  sprites: PokemonSprites;
  games: string[] | null;
  imageUrl: string;
  url: string;
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

export interface PokemonListItemOverview {
  id: string;
  name: string;
  url: string;
  imageUrl: string;
}
