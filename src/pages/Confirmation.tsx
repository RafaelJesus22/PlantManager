import React from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


interface Params {
  title: string;
  subtitle: string;
  buttonTitle: string;
  icon: 'smile' | 'hug',
  nextScreen: string;
}

const emojis = {
  smile: '😁' as string,
  hug: '😁' as string
}

export const Confirmation = () => {
  
  const navigation = useNavigation();
  const routes = useRoute();

  const {
    title,
    subtitle,
    icon,
    nextScreen,
    buttonTitle
  }  = routes.params as Params

  const handleMoveOn =() => {
    navigation.navigate(nextScreen)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <Text style={styles.emoji}>
          {emojis[icon]}
        </Text>

        <Text style={styles.title}>
          {title}
        </Text>

        <Text style={styles.subtitle}>
          {subtitle}
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title={buttonTitle}
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