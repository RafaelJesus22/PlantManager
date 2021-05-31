import React, { useEffect, useState } from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';


import colors from '../styles/colors';
import fonts from '../styles/fonts';

import userImg from '../assets/rodrigo.png';

export const Header = () => {

  const [userName, setUserName] = useState<string>();

  useEffect(() => {
    const loadStorageUserName = async () => {
      const user = await AsyncStorage.getItem('@plantmanager:user')
      .catch(err => console.log(err));

      setUserName(user || '');
    }

    loadStorageUserName();
  }, [userName]);

  return (
    <View style={styles.container}>
    
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>{userName}</Text>
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
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    color: colors.heading,
    lineHeight: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 40,
  },
})