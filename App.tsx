/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {SafeAreaView} from 'react-native';

import PokedexApp from './src';
import {Provider} from 'react-redux';
import store from './src/state';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <PokedexApp />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
