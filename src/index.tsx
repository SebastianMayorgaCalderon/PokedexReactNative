import React from 'react';
import {SafeAreaView, StyleSheet, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {pokemonSelectors, pokemonOperations} from './state/modules/pokemon';
import {gameSelectors, gameOperations} from './state/modules/games';

const PokedexApp = ({
  count,
  decrement,
  increment,
  username,
  setUsername,
}: Props) => {
  return (
    <SafeAreaView>
      <Text>
        {count} {username}
      </Text>
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
  username: string;
  setUsername: (name: string) => void;
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
  count: pokemonSelectors.selectCount(state),
  username: gameSelectors.selectUserName(state),
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      ...pokemonOperations,
      ...gameOperations,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(PokedexApp);
