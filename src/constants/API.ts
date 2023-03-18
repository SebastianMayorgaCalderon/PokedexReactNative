const POKE_API_BASE_URL: string = 'https://pokeapi.co/api/v2';
const POKE_IMG_API_BASE_URL = (key: string): string =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${key}.png`;

export {POKE_API_BASE_URL, POKE_IMG_API_BASE_URL};
