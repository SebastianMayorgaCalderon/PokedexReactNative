import reducer from './reducer';
import * as pokemonTypes from './types';
import pokemonOperations from './operations';
import pokemonSelectors from './selectors';
import {sagas} from './sagas';

export {pokemonOperations, pokemonTypes, pokemonSelectors, sagas};

export default reducer;
