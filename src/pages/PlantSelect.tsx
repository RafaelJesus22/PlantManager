import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native'

import { Header } from '../components/Header';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const PlantSelect = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Header />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    padding: 20,
  },
})