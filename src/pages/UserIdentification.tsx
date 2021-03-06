import React, { useState } from 'react';
import {
  StyleSheet,
  StatusBar,
  Platform,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert
} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { Button } from '../components/Button';

import colors from '../styles/colors';
import fonts from '../styles/fonts';


export const UserIdentification = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);
  const [name, setName] = useState<string>();

  const navigation = useNavigation();

  const handleConfirmation = async () => {
    
    if (!name) return Alert.alert('Me diz como chamar você 🥺');

    try {
      await AsyncStorage.setItem('@plantmanager:user', name);
      navigation.navigate('Confirmation', {
        title: 'Prontinho',
        subtitle: 'Agora vamos começar a cuidar das suas plantinhas com muito cuidado.',
        buttonTitle: 'Começar',
        icon: 'smile',
        nextScreen: 'PlantSelect',
      });
    } catch {
      Alert.alert('Não foi possivel salvar seu nome 🥺');
    }
  }

  const handleInputBlur = () => {
    setIsFocused(false);
    setIsFilled(!!name)
  }
  
  const handleInputFocus = () => {
    setIsFocused(true);
  }

  const handleInputChange = (value: string) => {
    setIsFilled(!!value);
    setName(value);
  }


  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'android' ? 'height': 'padding'}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.content}>
            <View style={styles.form}>
              
              <View style={styles.header}>
                <Text style={styles.emoji}>
                  { isFilled ? '😄' : '😃' }
                </Text>

                <Text style={styles.title}>
                  Como podemos{'\n'} 
                  chamar você?
                </Text>
              </View>

              <TextInput 
                style={[
                  styles.input,
                  (isFocused || isFilled) && {
                    borderColor: colors.green,
                  }
                ]} 
                placeholder="Digite um nome"
                onBlur={handleInputBlur}
                onFocus={handleInputFocus}
                onChangeText={handleInputChange}
              />
              
              <View style={styles.buttonContainer}>
                <Button 
                  title='Confirmar'
                  onPress={handleConfirmation}
                />
              </View>

            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  content: {
    flex: 1,
    width: '100%',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 56,
    width: '100%',
  },
  header: {
    alignItems: 'center',
  },
  emoji: {
    fontSize: 44,
    marginBottom: 20,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.gray,
    color: colors.heading,
    width: '100%',
    fontSize: 18,
    marginTop: 50,
    padding: 10,
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: colors.heading,
    fontFamily: fonts.heading,
  },
  buttonContainer: {
    marginTop: 40,
    width: '100%',
    paddingHorizontal: 20,
  }
})
