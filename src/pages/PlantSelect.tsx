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
import { Load } from '../components/Load';
import { Primary } from '../components/PlantCard/Primary';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import api from '../services/api';

import { 
  plants_data,
  plants_environments,
} from '../services/mockData';


export interface EnvironmentProps {
  key: string;
  title: string;
}

export interface PlantProps {
  id: number;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments: string[];
  frequency: {
    times: number;
    repeat_every: string;
  }
}

export const PlantSelect = () => {
  const [environments, setEnvironments] = useState<EnvironmentProps[]>([]);
  const [plants, setPlants] = useState<PlantProps[]>();
  const [filterdPlants, setFilterdPlants] = useState<PlantProps[]>();
  const [environmentSelected, setEnvironmentSelected] = useState('all');
  const [loading, setLoading] = useState(true)

  const handleEnvironmentSelected = (environment: string) => {
    setEnvironmentSelected(environment);

    if (environment === 'all') return setFilterdPlants(plants);
    
    const filtered = plants?.filter(plant => 
      plant.environments.includes(environment)
    );

    setFilterdPlants(filtered);
  }

  useEffect(() => {
    async function fecthEviroment() {
      // const { data } = await api.get('plants_environments?_sort=title&order=asc')
      const plantsEnvironments = plants_environments();
      
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
  
  useEffect(() => {
    async function fecthPlants() {
      // const { data } = await api.get('plants?_sort=name&order=asc')
      const plants = plants_data();
      
      setPlants(plants);
      setFilterdPlants(plants);
      setLoading(false);
    }

    fecthPlants()
      .then(res => console.log('ok', res))
      .catch(err => console.log('errp: ', err))

  }, [])

  if (loading) return <Load />

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
                active={item.key === environmentSelected} 
                onPress={() => handleEnvironmentSelected(item.key)}
              />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.enviromentList}
          />
        </View>

        <View style={styles.plants}>
          <FlatList 
            data={filterdPlants}
            showsVerticalScrollIndicator={false}
            numColumns={2}
            contentContainerStyle={styles.contentContainerStyles}
            renderItem={({ item }) => (
              <Primary 
                data={item}
              />
            )}
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
    paddingRight: 40,
  },
  plants: {
    flex: 1,
    paddingHorizontal: 32,
    justifyContent: 'center',
  },
  contentContainerStyles: {
  },
})