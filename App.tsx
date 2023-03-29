/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import {NavigationContainer} from '@react-navigation/native'

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

import PokedexApp from './src';
import {Provider} from 'react-redux';
import store from './src/state';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();


const App: () => Node = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <SafeAreaView>
          <PokedexApp />
        </SafeAreaView> */}
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    
    </Provider>
  );
};

export default App;
