const extractPokemonIdFromUrl = (url: string): string => {
  return url.split('/')[6];
};

export {extractPokemonIdFromUrl};
