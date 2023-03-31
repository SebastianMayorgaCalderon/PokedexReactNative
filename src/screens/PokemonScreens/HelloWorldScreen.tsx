import React, {FC} from 'react'
import {View, Text, Button} from 'react-native'
import {HelloWorldScreenProps} from 'src/routes/PokemonRouting/ScreenProps'
import {HELLO_WORLD_SCREEN_NAME} from 'src/routes/PokemonRouting/ScreenNames';
const HelloWorldScreen = ({
    route,
    navigation,
  }: HelloWorldScreenProps) => {
    console.log(route);
    const handlePress = () => {
      navigation.navigate('POKEMON_LIST_SCREEN');
    };
    return (
        <View>
          <Text>Pokemon id {route.params.prop1}</Text>
          <Button title="Go to pokemon list" onPress={handlePress} />
        </View>
    );
  };
export default HelloWorldScreen;