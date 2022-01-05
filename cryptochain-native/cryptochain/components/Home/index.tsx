import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import {
  Colors,
  DebugInstructions,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import {Wallet} from '../Wallet';
import {Blocks} from '../Blocks';

export const Home = () => {
  return (
    <View style={styles.HomeContainer}>
      <ScrollView>
        <Wallet />
        <Blocks />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    display: 'flex',
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
    backgroundColor: Colors.lighter
  },
});