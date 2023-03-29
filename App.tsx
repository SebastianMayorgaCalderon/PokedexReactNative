/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import PokedexApp from './src';
import {Provider} from 'react-redux';
import store from './src/state';

import {RouteProp} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type StackParamList = {
  PokemonListScreen: {prop1: string};
  HelloWorldScreen: {prop2: number};
};

type PokemonScreenProps = {
  route: RouteProp<StackParamList, 'PokemonListScreen'>;
};

type HelloworldScreenProps = {
  route: RouteProp<StackParamList, 'HelloWorldScreen'>;
  navigation: NativeStackNavigationProp<StackParamList, 'HelloWorldScreen'>;
};

const Stack = createNativeStackNavigator<StackParamList>();

const PokemonListScreen: (props: PokemonScreenProps) => Node = ({
  route,
}: PokemonScreenProps) => {
  return (
    <SafeAreaView>
      <PokedexApp />
    </SafeAreaView>
  );
};

const HelloWorldScreen: (props: HelloWorldScreenProps) => Node = ({
  route,
  navigation,
}: PokemonScreenProps) => {
  const handlePress = () => {
    navigation.navigate('PokemonListScreen');
  };

  return (
    <SafeAreaView>
      <View>
        <Text>Hello world</Text>
        <Button title="Go to pokemon list" onPress={handlePress} />
      </View>
    </SafeAreaView>
  );
};

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <SafeAreaView>
          <PokedexApp />
        </SafeAreaView> */}
        <Stack.Navigator>
          <Stack.Screen name="HelloWorldScreen" component={HelloWorldScreen} />
          <Stack.Screen
            name="PokemonListScreen"
            component={PokemonListScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
