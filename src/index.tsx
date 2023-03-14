import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {increment, decrement} from './state/modules/pokemon/actions';
import {setUsername} from './state/modules/games/actions';

const PokedexApp = ({count, decrement, increment, username}: Props) => {
  return (
    <SafeAreaView>
      <Text>{count} {username}</Text>
      <Button
        title="+"
        onPress={() => {
          increment();
        }}
      />
      <Button
        title="-"
        onPress={() => {
          decrement();
        }}
      />
    </SafeAreaView>
  );
};

interface Props {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

const mapStateToProps = state => ({
  count: state.pokemonReducer.count,
  username: state.gameReducer.username,
});

const mapDispatchToProps = {
  increment,
  decrement,
  setUsername,
};

export default connect(mapStateToProps, mapDispatchToProps)(PokedexApp);
