import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import { useNavigation } from "@react-navigation/core";
import { Feather } from '@expo/vector-icons';

import watering from "../assets/watering.png";
import colors from "../styles/colors";
import fonts from '../styles/fonts';

export const Welcome = () => {

  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('UserIdentification')
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Gerencie{"\n"}
        suas plantas de{"\n"}
        forma fácil
      </Text>

      <Image 
        source={watering} 
        style={styles.image} 
        resizeMode="contain"
      />

      <Text style={styles.subTitle}>
        Não esqueça mais de regar suas plantas. Nós cuidamos de lembrar você
        sempre que precisar.
      </Text>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={0.7} 
        onPress={handleStart}
      >
        <Text style={{color: 'white', fontSize: 24}} >
          <Feather 
            name="chevron-right" 
            style={styles.buttonIcon} 
          /> 
        </Text>
      </TouchableOpacity>
  
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    paddingHorizontal: 20
  },
  title: {
    fontSize: 28,
    lineHeight: 34,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.heading,
    marginTop: 38,
    fontFamily: fonts.heading,
  },
  subTitle: {
    textAlign: "center",
    fontSize: 18,
    paddingHorizontal: 20,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  image: {
    height: Dimensions.get('window').width * 0.7,
  },
  button: {
    backgroundColor: colors.green,
    height: 56,
    width: 56,
    borderRadius: 16,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonIcon: {
    fontSize: 24,
    color: colors.white,
  },
});
