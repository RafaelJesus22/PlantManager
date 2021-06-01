import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Text,
  TouchableOpacity,
  Alert,
  Platform,
  Image,
  ScrollView
} from 'react-native';
import { SvgFromUri } from 'react-native-svg';

import colors from '../styles/colors';
import fonts from '../styles/fonts';
import waterDrop from '../assets/waterdrop.png';

import { Button } from '../components/Button';

export const PlantSave = () => {
  return (
    <View style={styles.container}>
      <View style={styles.plantInfo}>
        <SvgFromUri 
          uri=''
          height={150}
          width={150}
        />

        <Text style={styles.plantName}>
          Nome da planta
        </Text>
        <Text style={styles.plantAbout}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
          Qui, enim aliquam eveniet impedit officia eligendi amet
        </Text>
      </View>

      <View style={styles.controllers}>
        <View style={styles.tipContainer}>
          <Image 
            source={waterDrop}
            style={styles.tipImage}
          />
          <Text style={styles.tipText}>
            Lorem, ipsum dolor sit amet consectetur adipisicing.
          </Text>
        </View>

        <Text style={styles.alertLabel}>
          Escolha o melhor horário para ser lembrado
        </Text>

        <Button
          title="Cadastrar planta"
          onPress={() => {}}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: colors.shape,
  },
  plantInfo: {
    flex: 1,
    paddingHorizontal: 30,
    paddingVertical: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:colors.shape,
  },
  plantName: {
    fontFamily: fonts.heading,
    fontSize: 24,
    color: colors.heading,
    marginTop: 15,
  },
  plantAbout: {
    textAlign: 'center',
    fontFamily: fonts.text,
    color: colors.heading,
    fontSize: 17,
    marginTop: 10,
  },
  controllers: {
    backgroundColor: colors.white,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20
  },
  tipContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.blue_light,
    padding: 20,
    borderRadius: 20,
    position: 'relative',
    bottom: 60,
  },
  tipImage: {
    width: 56,
    height: 56,
  },
  tipText: {
    flex: 1,
    marginLeft: 20,
    fontFamily: fonts.text,
    color: colors.blue,
    fontSize: 17,
  },
  alertLabel: {
    textAlign: 'center',
    fontFamily: fonts.complement,
    color: colors.heading,
    fontSize: 12,
    marginBottom: 5,
  },
})