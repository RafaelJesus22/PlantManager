import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  StatusBar
} from 'react-native';
import { Header } from '../components/Header';

import colors from '../styles/colors';

export const MyPlants = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 50,
    backgroundColor: colors.background
  },
})