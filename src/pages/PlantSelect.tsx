import React, { useEffect, useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  View,
  Text,
  FlatList
} from 'react-native'

import { Header } from '../components/Header';
import { EnvironmentButton } from '../components/EnvironmentButton';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import api from '../services/api';

import { 
  plants_environments,
} from '../services/mockData';


interface EnvironmentProps {
  key: string;
  title: string;
}


export const PlantSelect = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>();

  useEffect(() => {
    async function fecthEviroment() {
      // const { data } = await api.get('plants_environments') //API version
      const plantsEnvironments = plants_environments()
      
      setEnvironments([
        {
          key: 'all',
          title: 'todos'
        },
        ...plantsEnvironments,
      ]);
    }

    fecthEviroment()
      .then(res => console.log('ok', res))
      .catch(err => console.log('errp: ', err))

  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.content}>

        <View style={styles.header}>
          <Header />
          <Text style={styles.title}>
            Em qual ambiente
          </Text>
          <Text style={styles.subtitle}>
            você quer colocar sua planta?
          </Text>
        </View>

        <View>
          <FlatList 
            data={environments}
            renderItem={({ item }) => (
              <EnvironmentButton 
                title={item.title} 
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.enviromentList}
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
    // alignItems: 'center',
    // justifyContent: 'space-around',
    // backgroundColor: colors.background,
  },
  content: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
    width: '100%',
    // padding: 20,
  },
  header: {
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 17,
    color: colors.heading,
    fontFamily: fonts.heading,
    lineHeight: 20,
    marginTop: 15,
  },
  subtitle: {
    fontFamily: fonts.text,
    fontSize: 17,
    lineHeight: 20,
    color: colors.heading,
  },
  enviromentList: {
    height: 40,
    justifyContent: 'center',
    paddingBottom: 5,
    marginLeft: 32,
    marginVertical: 32,
  }
})