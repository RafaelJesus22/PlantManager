import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native';
import { useNavigation } from '@react-navigation/core';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

export const Confirmation = () => {
  
  const navigation = useNavigation();
  
  const handleMoveOn =() => {
    navigation.navigate('PlantSelect')
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.emoji}>
          😁
        </Text>

        <Text style={styles.title}>
          Prontinho
        </Text>

        <Text style={styles.subtitle}>
          Vamos começar a cuidar das suas
          platinhas com muito cuidado 
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title='Começar'
            onPress={handleMoveOn}
          />
        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: 20,
  },
  emoji: {
    fontSize: 78,
  },
  title: {
    fontSize: 22,
    fontFamily: fonts.heading,
    textAlign: 'center',
    color: colors.heading,
    lineHeight: 38,
    marginTop: 15
  },
  subtitle: {
    fontFamily: fonts.text,
    textAlign: 'center',
    fontSize: 17,
    paddingVertical: 10,
    color: colors.heading
  },
  buttonContainer: {
    width: '100%',
    paddingHorizontal: 50,
    marginTop: 20,
  }
})