import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {pokemonScreenTypes} from 'src/routes/PokemonRouting'

export const PokemonListStack = createNativeStackNavigator<pokemonScreenTypes.PokemonStackParamList>();
