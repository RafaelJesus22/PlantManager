import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import colors from '../styles/colors';
import fonts from '../styles/fonts';

import userImg from '../assets/rodrigo.png';

export const Header = () => {
  return (
    <View style={styles.container}>
    
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Rafael</Text>
      </View>

      <Image 
        source={userImg} 
        style={styles.image}
      />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
  },
  greeting: {
    
  },
  userName: {
    
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
})